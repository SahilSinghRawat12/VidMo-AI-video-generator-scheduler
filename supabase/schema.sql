-- ==============================================================================
-- VidMo AI Video Generator & Scheduler - Supabase Database Schema
-- Run this script in the Supabase SQL Editor (Dashboard -> SQL Editor -> New query)
-- ==============================================================================

-- 1. Enable Required Extensions
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

-- ==============================================================================
-- 2. Utility Functions
-- ==============================================================================

-- Auto-update updated_at timestamp function
CREATE OR REPLACE FUNCTION public.handle_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- ==============================================================================
-- 3. Tables & Schema Design
-- ==============================================================================

-- PROFILES (Linked directly to Supabase Auth auth.users)
CREATE TABLE IF NOT EXISTS public.profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  email TEXT,
  full_name TEXT,
  avatar_url TEXT,
  tier TEXT NOT NULL DEFAULT 'free' CHECK (tier IN ('free', 'creator', 'agency')),
  video_credits INTEGER NOT NULL DEFAULT 5 CHECK (video_credits >= 0),
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- NICHES / PRESETS (Dark Psychology, Wealth, AI Tech, etc.)
CREATE TABLE IF NOT EXISTS public.niches (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  emoji TEXT,
  description TEXT,
  sample_hooks TEXT[] NOT NULL DEFAULT '{}'::TEXT[],
  suggested_tags TEXT[] NOT NULL DEFAULT '{}'::TEXT[],
  is_system BOOLEAN NOT NULL DEFAULT true,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- CHANNELS (Connected social accounts: YouTube Shorts, TikTok, IG Reels, X, Email)
CREATE TABLE IF NOT EXISTS public.channels (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
  platform TEXT NOT NULL CHECK (platform IN ('youtube', 'tiktok', 'instagram', 'email', 'x')),
  account_name TEXT NOT NULL,
  account_handle TEXT,
  avatar_url TEXT,
  is_connected BOOLEAN NOT NULL DEFAULT false,
  metadata JSONB DEFAULT '{}'::JSONB,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- VIDEOS (Generated scripts, prompts, rendered media)
CREATE TABLE IF NOT EXISTS public.videos (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
  niche_id TEXT REFERENCES public.niches(id) ON DELETE SET NULL,
  title TEXT NOT NULL,
  topic TEXT,
  hook TEXT,
  full_script TEXT,
  hook_score INTEGER DEFAULT 90 CHECK (hook_score BETWEEN 0 AND 100),
  voice_id TEXT,
  cadence TEXT DEFAULT '2x',
  duration_seconds INTEGER DEFAULT 30,
  aspect_ratio TEXT NOT NULL DEFAULT '9:16' CHECK (aspect_ratio IN ('9:16', '16:9', '1:1', '4:5')),
  tags TEXT[] NOT NULL DEFAULT '{}'::TEXT[],
  status TEXT NOT NULL DEFAULT 'draft' CHECK (status IN ('draft', 'generating', 'completed', 'failed')),
  video_url TEXT,
  thumbnail_url TEXT,
  error_message TEXT,
  metadata JSONB DEFAULT '{}'::JSONB,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- SCHEDULED POSTS (Multi-platform publishing queue & analytics)
CREATE TABLE IF NOT EXISTS public.scheduled_posts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES public.profiles(id) ON DELETE CASCADE,
  video_id UUID NOT NULL REFERENCES public.videos(id) ON DELETE CASCADE,
  channel_id UUID REFERENCES public.channels(id) ON DELETE SET NULL,
  platform TEXT NOT NULL CHECK (platform IN ('youtube', 'tiktok', 'instagram', 'email', 'x')),
  scheduled_at TIMESTAMPTZ NOT NULL,
  published_at TIMESTAMPTZ,
  status TEXT NOT NULL DEFAULT 'scheduled' CHECK (status IN ('scheduled', 'publishing', 'published', 'failed', 'cancelled')),
  post_url TEXT,
  metrics JSONB DEFAULT '{"views": 0, "likes": 0, "shares": 0, "comments": 0}'::JSONB,
  error_message TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- ==============================================================================
-- 4. Indexes for High Performance
-- ==============================================================================

CREATE INDEX IF NOT EXISTS idx_channels_user_id ON public.channels(user_id);
CREATE INDEX IF NOT EXISTS idx_videos_user_id ON public.videos(user_id);
CREATE INDEX IF NOT EXISTS idx_videos_status ON public.videos(status);
CREATE INDEX IF NOT EXISTS idx_videos_niche_id ON public.videos(niche_id);
CREATE INDEX IF NOT EXISTS idx_scheduled_posts_user_id ON public.scheduled_posts(user_id);
CREATE INDEX IF NOT EXISTS idx_scheduled_posts_scheduled_at ON public.scheduled_posts(scheduled_at);
CREATE INDEX IF NOT EXISTS idx_scheduled_posts_status ON public.scheduled_posts(status);

-- ==============================================================================
-- 5. Automatic Triggers
-- ==============================================================================

-- Triggers to automatically bump updated_at
DROP TRIGGER IF EXISTS set_profiles_updated_at ON public.profiles;
CREATE TRIGGER set_profiles_updated_at
  BEFORE UPDATE ON public.profiles
  FOR EACH ROW
  EXECUTE FUNCTION public.handle_updated_at();

DROP TRIGGER IF EXISTS set_channels_updated_at ON public.channels;
CREATE TRIGGER set_channels_updated_at
  BEFORE UPDATE ON public.channels
  FOR EACH ROW
  EXECUTE FUNCTION public.handle_updated_at();

DROP TRIGGER IF EXISTS set_videos_updated_at ON public.videos;
CREATE TRIGGER set_videos_updated_at
  BEFORE UPDATE ON public.videos
  FOR EACH ROW
  EXECUTE FUNCTION public.handle_updated_at();

DROP TRIGGER IF EXISTS set_scheduled_posts_updated_at ON public.scheduled_posts;
CREATE TRIGGER set_scheduled_posts_updated_at
  BEFORE UPDATE ON public.scheduled_posts
  FOR EACH ROW
  EXECUTE FUNCTION public.handle_updated_at();

-- Trigger to auto-create user profile row on auth.users sign-up
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.profiles (id, email, full_name, avatar_url, tier, video_credits)
  VALUES (
    NEW.id,
    NEW.email,
    COALESCE(NEW.raw_user_meta_data->>'full_name', NEW.raw_user_meta_data->>'name', ''),
    COALESCE(NEW.raw_user_meta_data->>'avatar_url', NEW.raw_user_meta_data->>'picture', ''),
    'free',
    5
  )
  ON CONFLICT (id) DO NOTHING;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW
  EXECUTE FUNCTION public.handle_new_user();

-- ==============================================================================
-- 6. Row Level Security (RLS) Policies
-- ==============================================================================

ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.niches ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.channels ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.videos ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.scheduled_posts ENABLE ROW LEVEL SECURITY;

-- Profiles Policies
DROP POLICY IF EXISTS "Users can view their own profile" ON public.profiles;
CREATE POLICY "Users can view their own profile"
  ON public.profiles FOR SELECT
  USING (auth.uid() = id);

DROP POLICY IF EXISTS "Users can update their own profile" ON public.profiles;
CREATE POLICY "Users can update their own profile"
  ON public.profiles FOR UPDATE
  USING (auth.uid() = id);

-- Niches Policies (Publicly readable for system presets, authenticated can read all)
DROP POLICY IF EXISTS "Public can view system niches" ON public.niches;
CREATE POLICY "Public can view system niches"
  ON public.niches FOR SELECT
  USING (is_system = true OR auth.role() = 'authenticated');

-- Channels Policies
DROP POLICY IF EXISTS "Users manage their own channels" ON public.channels;
CREATE POLICY "Users manage their own channels"
  ON public.channels FOR ALL
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

-- Videos Policies
DROP POLICY IF EXISTS "Users manage their own videos" ON public.videos;
CREATE POLICY "Users manage their own videos"
  ON public.videos FOR ALL
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

-- Scheduled Posts Policies
DROP POLICY IF EXISTS "Users manage their scheduled posts" ON public.scheduled_posts;
CREATE POLICY "Users manage their scheduled posts"
  ON public.scheduled_posts FOR ALL
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

-- ==============================================================================
-- 7. Supabase Storage Buckets Setup
-- ==============================================================================

-- Create buckets for generated videos, thumbnails, and avatar uploads
INSERT INTO storage.buckets (id, name, public)
VALUES 
  ('videos', 'videos', true),
  ('thumbnails', 'thumbnails', true),
  ('avatars', 'avatars', true)
ON CONFLICT (id) DO NOTHING;

-- Storage Policies: allow authenticated users to upload and manage their files
DROP POLICY IF EXISTS "Authenticated users can upload videos" ON storage.objects;
CREATE POLICY "Authenticated users can upload videos"
  ON storage.objects FOR INSERT
  TO authenticated
  WITH CHECK (bucket_id IN ('videos', 'thumbnails', 'avatars'));

DROP POLICY IF EXISTS "Public can view media" ON storage.objects;
CREATE POLICY "Public can view media"
  ON storage.objects FOR SELECT
  TO public
  USING (bucket_id IN ('videos', 'thumbnails', 'avatars'));

-- ==============================================================================
-- 8. Starter Seed Data (VidMo Pre-Configured Niches)
-- ==============================================================================

INSERT INTO public.niches (id, name, emoji, description, sample_hooks, suggested_tags, is_system)
VALUES
  (
    'psychology',
    'Dark Psychology',
    '🧠',
    'Viral psychological patterns, persuasion, and body language breakdown.',
    ARRAY[
      'If someone looks at your lips during a conversation, they''re thinking of kissing you. But if they glance at your forehead...',
      '3 subtle signs someone is secretly jealous of your success.',
      'The silent psychological trick that makes anyone agree with you in 10 seconds.'
    ],
    ARRAY['#psychology', '#bodylanguage', '#mindtricks', '#viralshorts'],
    true
  ),
  (
    'wealth',
    'Wealth & Finance',
    '💰',
    'High-leverage wealth creation, side hustles, and finance psychology.',
    ARRAY[
      'Do not start dropshipping in 2026. Instead, do this 1-hour AI workflow that generated $3,400 last week...',
      'How millionaires use the 50/30/20 rule backwards to build generational wealth.',
      '3 assets that make you money while you sleep that cost under $100 to start.'
    ],
    ARRAY['#sidehustle', '#passiveincome', '#financehacks', '#wealth'],
    true
  ),
  (
    'tech',
    'AI & Future Tech',
    '⚡',
    'Breakthrough AI tools, automation workflows, and tech shifts.',
    ARRAY[
      'You don''t need a camera crew, microphone, or video editor anymore. Watch what happens when I give this AI just 1 sentence...',
      '5 free AI tools that feel completely illegal to know in 2026.',
      'This new autonomous agent builds full mobile apps in under 3 minutes.'
    ],
    ARRAY['#aitools', '#futuretech', '#automation', '#creatoreconomy'],
    true
  ),
  (
    'mindset',
    'Stoic Motivation',
    '⚔️',
    'Timeless ancient wisdom, discipline, and mental resilience.',
    ARRAY[
      'When someone insults you, do not defend yourself. Marcus Aurelius taught a secret 3-second pause...',
      'The brutal rule of discipline: Do what you hate like you love it.',
      'Why peaceful men are the most dangerous in any room.'
    ],
    ARRAY['#stoicism', '#mindset', '#marcusaurelius', '#discipline'],
    true
  )
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  emoji = EXCLUDED.emoji,
  description = EXCLUDED.description,
  sample_hooks = EXCLUDED.sample_hooks,
  suggested_tags = EXCLUDED.suggested_tags;
