# Supabase Setup Guide for VidMo

This guide walks you through connecting your VidMo AI Video Generator & Scheduler application to a Supabase project.

---

## 1. Create a Supabase Project

1. Go to [database.new](https://database.new) or [Supabase Dashboard](https://supabase.com/dashboard).
2. Click **"New Project"**.
3. Name your project (e.g. `vidmo-ai`), choose a strong database password, and pick a region close to your users.
4. Wait 1–2 minutes for the database to provision.

---

## 2. Configure Environment Variables

1. In your Supabase Dashboard, go to **Project Settings** (gear icon) -> **API**.
2. Find the following values:
   - **Project URL**
   - **Project API Keys** -> `anon` / `public`
   - **Project API Keys** -> `service_role` (Click reveal - keep this secret!)
3. Copy or edit your `.env.local` file in the project root:

```env
# Public Supabase credentials (accessible client-side and server-side)
NEXT_PUBLIC_SUPABASE_URL=https://your-project-id.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key-here

# Secret Service Role Key (server-side only: background jobs, queues, webhooks)
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key-here
```

---

## 3. Run the Database Schema Migration

1. In your Supabase Dashboard, open the **SQL Editor** tab on the left sidebar.
2. Click **"New query"**.
3. Copy the entire contents of [`supabase/schema.sql`](./supabase/schema.sql) and paste it into the editor.
4. Click **"Run"** (or press `Ctrl+Enter`).
5. You should see `Success. No rows returned`.

### What was created:
- **`profiles` table**: Extends Supabase auth users with credits (`video_credits`), subscription tier (`free`, `creator`, `agency`), avatar, and display name.
- **`niches` table**: Pre-seeded with 4 viral content niches (Dark Psychology, Wealth & Finance, AI Tech, Stoic Motivation) with sample hooks and tags.
- **`channels` table**: Creator connected social accounts (YouTube, TikTok, Instagram, X, Email).
- **`videos` table**: Generated AI video scripts, prompt metadata, hook scores, audio voice IDs, and media URLs.
- **`scheduled_posts` table**: Publishing queue with scheduled timestamps, multi-platform targets, status tracking, and engagement metrics.
- **Automated Triggers**: Automatically provisions a profile row with 5 free video credits when a user signs up.
- **Row Level Security (RLS)**: Protects all user data so users can only access their own records.
- **Storage Buckets**: Sets up `videos`, `thumbnails`, and `avatars` storage buckets with upload permissions.

---

## 4. Usage in the Codebase

### In Client Components
Use the custom `useSupabase` hook:
```tsx
"use client";

import { useSupabase } from "@/hooks/use-supabase";

export function UserProfile() {
  const { user, session, isLoading, signOut } = useSupabase();

  if (isLoading) return <div>Loading...</div>;
  if (!user) return <div>Not logged in</div>;

  return (
    <div>
      <p>Hello, {user.email}</p>
      <button onClick={() => signOut()}>Sign Out</button>
    </div>
  );
}
```

Or access the strongly typed client directly:
```tsx
"use client";

import { useSupabase } from "@/hooks/use-supabase";

export function VideoList() {
  const { supabase } = useSupabase();

  const loadVideos = async () => {
    const { data, error } = await supabase
      .from("videos")
      .select("*")
      .order("created_at", { ascending: false });
    return data;
  };
  // ...
}
```

### In Server Components & Route Handlers
```tsx
import { createClient } from "@/lib/supabase/server";

export async function MyServerComponent() {
  const supabase = await createClient();
  const { data: niches } = await supabase.from("niches").select("*");

  return (
    <ul>
      {niches?.map((niche) => (
        <li key={niche.id}>{niche.emoji} {niche.name}</li>
      ))}
    </ul>
  );
}
```

### In Background Workers & Webhooks (Bypassing RLS)
```tsx
import { createAdminClient } from "@/lib/supabase/admin";

export async function processVideoQueue(videoId: string) {
  const adminSupabase = createAdminClient();
  
  await adminSupabase
    .from("videos")
    .update({ status: "completed" })
    .eq("id", videoId);
}
```

---

## 5. Authentication Configuration (Optional)

In your Supabase Dashboard:
- **Email Auth**: Enabled by default in **Authentication -> Providers -> Email**. You can toggle "Confirm email" off for easy local development.
- **OAuth (Google / GitHub)**: Configure client IDs and secrets under **Authentication -> Providers**. Add `http://localhost:3000/auth/callback` to the redirect URLs.
