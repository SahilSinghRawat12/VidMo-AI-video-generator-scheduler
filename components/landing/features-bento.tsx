"use client";

import {
  Calendar,
  Sparkles,
  Zap,
  Flame,
  Volume2,
  Share2,
  Clock,
  Layers,
  CheckCircle2,
  Mail,
  Video,
  BarChart3,
  Bot,
  Sliders,
} from "lucide-react";

export function FeaturesBento() {
  return (
    <section id="features" className="relative py-24 bg-zinc-950/80 border-t border-white/10 overflow-hidden">
      {/* Background glow accents */}
      <div className="absolute top-1/3 -right-20 w-80 h-80 bg-violet-600/10 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 -left-20 w-80 h-80 bg-cyan-600/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-xs font-semibold text-cyan-300 mb-4">
            <Zap className="w-3.5 h-3.5 text-cyan-400" />
            <span>Built for Modern Content Creators & SaaS Growth</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Everything You Need to <span className="text-gradient-cyan">Dominate Short-Form Video</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-400">
            From algorithmic hook generation to scheduled multi-platform publishing. Vidmo replaces 5 different tools and a full-time video editing team.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1: 30-Day Autonomous Auto-Scheduler (Spans 2 cols on lg) */}
          <div id="scheduler" className="lg:col-span-2 p-8 rounded-3xl bg-zinc-900/60 border border-white/10 hover:border-violet-500/40 transition-all duration-300 relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
              <Calendar className="w-36 h-36 text-violet-400" />
            </div>
            <div className="relative z-10 flex flex-col justify-between h-full">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-violet-500/20 text-violet-300 text-xs font-bold border border-violet-500/30 mb-4">
                  <Clock className="w-3.5 h-3.5" />
                  <span>Autonomous Scheduling</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-violet-200 transition-colors">
                  Set Your Schedule Once. Vidmo Generates & Posts Daily.
                </h3>
                <p className="text-sm text-zinc-400 max-w-lg leading-relaxed mb-6">
                  Define your niche, preferred posting cadence (e.g. 2x a day at 9 AM & 6 PM), and connected accounts. Vidmo autonomously writes, renders, voiceovers, and publishes fresh videos without you lifting a finger.
                </p>
              </div>

              {/* Visual mini-calendar queue preview */}
              <div className="p-4 rounded-2xl bg-zinc-950/80 border border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="p-3 rounded-xl bg-zinc-900/70 border border-white/5">
                  <div className="flex items-center justify-between text-[11px] text-zinc-400 mb-1">
                    <span className="font-bold text-white">Monday</span>
                    <span className="text-emerald-400">Published</span>
                  </div>
                  <div className="text-xs font-semibold text-zinc-200 truncate">Morning Mindset Hack</div>
                  <div className="text-[10px] text-zinc-500 mt-1">🔴 YT • 🎵 TikTok • 📸 IG</div>
                </div>

                <div className="p-3 rounded-xl bg-zinc-900/70 border border-violet-500/30">
                  <div className="flex items-center justify-between text-[11px] text-zinc-400 mb-1">
                    <span className="font-bold text-violet-300">Today (Autopilot)</span>
                    <span className="text-cyan-400 font-bold animate-pulse">Queued</span>
                  </div>
                  <div className="text-xs font-semibold text-zinc-200 truncate">Dark Psychology Secret</div>
                  <div className="text-[10px] text-zinc-400 mt-1">Drops at 6:30 PM EST</div>
                </div>

                <div className="p-3 rounded-xl bg-zinc-900/70 border border-white/5">
                  <div className="flex items-center justify-between text-[11px] text-zinc-400 mb-1">
                    <span className="font-bold text-white">Tomorrow</span>
                    <span className="text-zinc-500">Scheduled</span>
                  </div>
                  <div className="text-xs font-semibold text-zinc-200 truncate">Weekly Video Newsletter</div>
                  <div className="text-[10px] text-zinc-500 mt-1">✉️ Email Campaign Blast</div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: Viral Hook & Script Algorithm */}
          <div className="p-8 rounded-3xl bg-zinc-900/60 border border-white/10 hover:border-cyan-500/40 transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-cyan-500/20 text-cyan-300 text-xs font-bold border border-cyan-500/30 mb-4">
                <Flame className="w-3.5 h-3.5 text-cyan-400" />
                <span>Retention AI</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-200 transition-colors">
                Trained on 100K+ Viral Shorts
              </h3>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                Vidmo understands 3-second hook retention dynamics, dopamine pattern interrupts, and curiosity loops that keep viewers glued until the final second.
              </p>
            </div>

            <div className="mt-6 p-4 rounded-xl bg-zinc-950/80 border border-white/10">
              <div className="flex items-center justify-between text-xs mb-2">
                <span className="text-zinc-400 font-medium">Predicted Retention</span>
                <span className="text-emerald-400 font-bold">96.8%</span>
              </div>
              <div className="w-full bg-zinc-800 h-2 rounded-full overflow-hidden">
                <div className="bg-gradient-to-r from-cyan-500 to-emerald-400 h-full w-[96%]" />
              </div>
              <div className="mt-2 text-[10px] text-zinc-500 flex items-center justify-between">
                <span>0s Hook: A+</span>
                <span>Mid-Drop: 4.2%</span>
                <span>Loop Score: High</span>
              </div>
            </div>
          </div>

          {/* Card 3: Dynamic Kinetic Subtitles & B-Roll */}
          <div className="p-8 rounded-3xl bg-zinc-900/60 border border-white/10 hover:border-amber-500/40 transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-amber-500/20 text-amber-300 text-xs font-bold border border-amber-500/30 mb-4">
                <Layers className="w-3.5 h-3.5 text-amber-400" />
                <span>Visuals & Captions</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-amber-200 transition-colors">
                Hormozi & Beast Style Captions
              </h3>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                Word-by-word karaoke highlighting, vibrant emoji pops, cinematic stock B-roll auto-matched to your script keywords, and dynamic sound effects.
              </p>
            </div>

            <div className="mt-6 p-3.5 rounded-xl bg-zinc-950/80 border border-white/10 text-center">
              <span className="text-[11px] uppercase tracking-wider text-zinc-500 block mb-1">
                Real-time preview
              </span>
              <span className="text-sm font-black text-white bg-black/60 px-2.5 py-1 rounded border border-yellow-400/40">
                ⚡ DO NOT <span className="text-yellow-400 underline">WASTE</span> YOUR TIME! 🚀
              </span>
            </div>
          </div>

          {/* Card 4: Ultra-Realistic AI Voiceovers & Audio Ducking */}
          <div className="p-8 rounded-3xl bg-zinc-900/60 border border-white/10 hover:border-pink-500/40 transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-pink-500/20 text-pink-300 text-xs font-bold border border-pink-500/30 mb-4">
                <Volume2 className="w-3.5 h-3.5 text-pink-400" />
                <span>Studio Audio</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-pink-200 transition-colors">
                120+ Lifelike Voices & Cloning
              </h3>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                Zero robotic monotone. Choose deep documentary narrators, energetic influencers, or clone your own voice. Music automatically ducks when speech starts.
              </p>
            </div>

            <div className="mt-6 p-3.5 rounded-xl bg-zinc-950/80 border border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-2.5 text-xs font-semibold text-white">
                <div className="w-7 h-7 rounded-full bg-pink-500/20 text-pink-400 flex items-center justify-center">
                  <Volume2 className="w-3.5 h-3.5" />
                </div>
                <span>Neural Voice Clone</span>
              </div>
              <span className="text-[10px] text-emerald-400 font-mono bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                Lossless 48kHz
              </span>
            </div>
          </div>

          {/* Card 5: Email Video Marketing Engine */}
          <div className="p-8 rounded-3xl bg-zinc-900/60 border border-white/10 hover:border-emerald-500/40 transition-all duration-300 flex flex-col justify-between group">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-emerald-500/20 text-emerald-300 text-xs font-bold border border-emerald-500/30 mb-4">
                <Mail className="w-3.5 h-3.5 text-emerald-400" />
                <span>Email Video Campaigns</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-emerald-200 transition-colors">
                Deliver Videos Right to Inboxes
              </h3>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                Automatically render responsive animated video GIFs and player landing pages compatible with Klaviyo, Mailchimp, Substack, and Beehiiv for 42%+ CTR.
              </p>
            </div>

            <div className="mt-6 p-3.5 rounded-xl bg-zinc-950/80 border border-white/10 flex items-center justify-between text-xs">
              <span className="text-zinc-400">Integration:</span>
              <div className="flex items-center gap-2 font-mono text-[11px] text-white">
                <span className="px-1.5 py-0.5 bg-zinc-800 rounded">Klaviyo</span>
                <span className="px-1.5 py-0.5 bg-zinc-800 rounded">Substack</span>
                <span className="px-1.5 py-0.5 bg-zinc-800 rounded">Beehiiv</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
