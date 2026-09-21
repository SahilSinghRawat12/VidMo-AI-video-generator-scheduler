"use client";

import { useState } from "react";
import {
  Sparkles,
  Play,
  Pause,
  ArrowRight,
  CheckCircle2,
  Calendar,
  Clock,
  Volume2,
  Share2,
  Flame,
  Check,
  Layers,
  Wand2,
  Send,
  Sliders,
  TrendingUp,
} from "lucide-react";

export function Hero() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [activePlatform, setActivePlatform] = useState<"yt" | "tt" | "ig" | "email">("yt");

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[900px] h-[400px] bg-gradient-to-tr from-violet-600/20 via-indigo-500/20 to-cyan-500/15 blur-[120px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-1/3 -left-32 w-80 h-80 bg-fuchsia-600/15 blur-[100px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-1/2 -right-32 w-80 h-80 bg-cyan-600/15 blur-[100px] rounded-full pointer-events-none -z-10" />

      {/* Background subtle grid pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 -z-20 pointer-events-none [mask-image:radial-gradient(ellipse_60%_50%_at_50%_35%,#000_70%,transparent_100%)]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Announcement Pill */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-violet-950/60 border border-violet-500/30 text-violet-300 text-xs sm:text-sm font-medium backdrop-blur-md shadow-lg shadow-violet-900/20 hover:border-violet-400/50 transition-all cursor-default">
            <span className="flex h-2 w-2 rounded-full bg-violet-400 animate-pulse" />
            <span className="font-semibold text-white">Vidmo 2.0:</span>
            <span>Autonomous AI Video Generation & Scheduler</span>
            <ArrowRight className="w-3.5 h-3.5 text-violet-400" />
          </div>
        </div>

        {/* Hero Headline & Subtitle */}
        <div className="text-center max-w-4xl mx-auto mb-10">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.1] mb-6">
            Create & Auto-Schedule{" "}
            <span className="text-gradient-purple">Viral Short Videos</span>{" "}
            with AI
          </h1>
          <p className="text-lg sm:text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            Turn simple prompts into high-converting 9:16 videos with voiceovers, dynamic captions & B-roll. Vidmo automatically generates and schedules directly to{" "}
            <span className="text-zinc-200 font-semibold">YouTube Shorts</span>,{" "}
            <span className="text-zinc-200 font-semibold">Instagram Reels</span>,{" "}
            <span className="text-zinc-200 font-semibold">TikTok</span>, and{" "}
            <span className="text-zinc-200 font-semibold">Email Newsletters</span> on autopilot.
          </p>

          {/* CTA Group */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#studio"
              className="w-full sm:w-auto relative group overflow-hidden px-8 py-4 rounded-2xl font-bold text-white bg-gradient-to-r from-violet-600 via-indigo-600 to-cyan-500 shadow-xl shadow-violet-600/30 hover:shadow-violet-600/50 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-3"
            >
              <Wand2 className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              <span>Generate First 5 Videos Free</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="#how-it-works"
              className="w-full sm:w-auto px-6 py-4 rounded-2xl font-semibold text-zinc-300 hover:text-white bg-zinc-900/80 border border-white/10 hover:border-white/20 hover:bg-zinc-800/80 backdrop-blur-md transition-all flex items-center justify-center gap-2.5"
            >
              <Play className="w-4 h-4 text-cyan-400 fill-cyan-400/20" />
              <span>See How Autopilot Works</span>
            </a>
          </div>

          {/* Trust proof & user badges */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm text-zinc-400">
            <div className="flex items-center -space-x-2">
              <div className="w-8 h-8 rounded-full border-2 border-zinc-950 bg-gradient-to-tr from-pink-500 to-rose-500 flex items-center justify-center text-[11px] font-bold text-white">
                JD
              </div>
              <div className="w-8 h-8 rounded-full border-2 border-zinc-950 bg-gradient-to-tr from-cyan-500 to-blue-500 flex items-center justify-center text-[11px] font-bold text-white">
                AL
              </div>
              <div className="w-8 h-8 rounded-full border-2 border-zinc-950 bg-gradient-to-tr from-amber-500 to-orange-500 flex items-center justify-center text-[11px] font-bold text-white">
                MK
              </div>
              <div className="w-8 h-8 rounded-full border-2 border-zinc-950 bg-gradient-to-tr from-violet-500 to-purple-600 flex items-center justify-center text-[11px] font-bold text-white">
                SR
              </div>
              <div className="w-8 h-8 rounded-full border-2 border-zinc-950 bg-zinc-800 flex items-center justify-center text-[10px] font-bold text-zinc-300">
                +45k
              </div>
            </div>
            <div className="flex items-center gap-1.5">
              <div className="flex text-amber-400">
                {"★★★★★"}
              </div>
              <span className="font-semibold text-white">4.9/5</span>
              <span>by creators & growth agencies</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>No credit card needed</span>
            </div>
          </div>
        </div>

        {/* Hero Interactive App Mockup (SaaS Studio + Video Player + Multi-Scheduler) */}
        <div className="relative mt-8 max-w-6xl mx-auto">
          {/* Decorative glowing backplate */}
          <div className="absolute -inset-1.5 bg-gradient-to-r from-violet-600 via-indigo-600 to-cyan-500 rounded-3xl blur-xl opacity-35 -z-10" />

          {/* Main App Window */}
          <div className="rounded-2xl sm:rounded-3xl bg-zinc-950/90 border border-white/15 backdrop-blur-2xl shadow-2xl overflow-hidden">
            {/* Window Topbar */}
            <div className="flex items-center justify-between px-4 sm:px-6 py-3.5 border-b border-white/10 bg-zinc-900/60">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                <span className="ml-2 text-xs font-mono text-zinc-400 hidden sm:inline">
                  vidmo-studio.app/workspace/autopilot-pipeline
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Autopilot Engine Active
                </span>
              </div>
            </div>

            {/* 3-Column Studio Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 divide-y lg:divide-y-0 lg:divide-x divide-white/10">
              {/* Left Column: AI Prompt & Generation Config (4 cols) */}
              <div className="lg:col-span-4 p-5 sm:p-6 flex flex-col justify-between bg-zinc-950/40">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <div className="p-1.5 rounded-lg bg-violet-500/20 text-violet-400 border border-violet-500/30">
                        <Wand2 className="w-4 h-4" />
                      </div>
                      <span className="text-sm font-bold text-white">AI Video Engine</span>
                    </div>
                    <span className="text-[11px] font-mono text-cyan-400 bg-cyan-950/50 border border-cyan-500/30 px-2 py-0.5 rounded-full">
                      v2.4 Neural
                    </span>
                  </div>

                  {/* Niche selector pill */}
                  <div className="mb-4">
                    <label className="text-[11px] uppercase tracking-wider text-zinc-400 font-semibold block mb-1.5">
                      Niche / Channel Theme
                    </label>
                    <div className="p-2.5 rounded-xl bg-zinc-900/80 border border-white/10 text-xs text-zinc-200 flex items-center justify-between">
                      <span className="font-medium flex items-center gap-2">
                        <span>🧠</span> Dark Psychology & Wealth Habits
                      </span>
                      <span className="text-[10px] bg-violet-500/20 text-violet-300 px-1.5 py-0.5 rounded">
                        High CPM
                      </span>
                    </div>
                  </div>

                  {/* Script Hook Prompt */}
                  <div className="mb-4">
                    <label className="text-[11px] uppercase tracking-wider text-zinc-400 font-semibold block mb-1.5">
                      Viral Script Hook
                    </label>
                    <div className="p-3 rounded-xl bg-zinc-900/80 border border-white/10 text-xs text-zinc-300 leading-relaxed font-mono">
                      <span className="text-violet-400 font-semibold">&ldquo;Stop scrolling.</span> The richest 1% use a 15-minute morning psychology trick that rewires dopamine forever...&rdquo;
                    </div>
                  </div>

                  {/* Voice & Sound Sync */}
                  <div className="space-y-2.5">
                    <div className="p-2.5 rounded-xl bg-zinc-900/60 border border-white/10 flex items-center justify-between text-xs">
                      <div className="flex items-center gap-2">
                        <Volume2 className="w-3.5 h-3.5 text-cyan-400" />
                        <span className="text-zinc-300 font-medium">Marcus (Deep Cinematic)</span>
                      </div>
                      {/* Animated audio wave bars */}
                      <div className="flex items-center gap-0.5 h-4">
                        <span className="w-1 bg-cyan-400 rounded-full animate-bounce [animation-delay:-0.3s] h-3" />
                        <span className="w-1 bg-cyan-400 rounded-full animate-bounce [animation-delay:-0.1s] h-4" />
                        <span className="w-1 bg-cyan-400 rounded-full animate-bounce [animation-delay:-0.4s] h-2" />
                        <span className="w-1 bg-cyan-400 rounded-full animate-bounce h-3.5" />
                      </div>
                    </div>

                    <div className="p-2.5 rounded-xl bg-zinc-900/60 border border-white/10 flex items-center justify-between text-xs">
                      <div className="flex items-center gap-2">
                        <Layers className="w-3.5 h-3.5 text-violet-400" />
                        <span className="text-zinc-300 font-medium">Captions: Alex Hormozi Glow</span>
                      </div>
                      <span className="text-[10px] text-emerald-400 font-bold">Auto-Synced</span>
                    </div>
                  </div>
                </div>

                {/* Render status */}
                <div className="mt-5 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-zinc-400">
                  <div className="flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Rendered in 13.8s</span>
                  </div>
                  <span className="font-mono text-zinc-300">1080x1920 • 60 FPS</span>
                </div>
              </div>

              {/* Center Column: 9:16 Short Video Mockup (4 cols) */}
              <div className="lg:col-span-4 p-5 sm:p-6 flex flex-col items-center justify-center bg-zinc-900/30">
                {/* Platform Switcher Pills */}
                <div className="flex items-center gap-1.5 p-1 bg-zinc-950 rounded-xl border border-white/10 mb-4">
                  <button
                    onClick={() => setActivePlatform("yt")}
                    className={`px-2.5 py-1 rounded-lg text-[11px] font-medium transition-all ${
                      activePlatform === "yt"
                        ? "bg-rose-600 text-white shadow-sm"
                        : "text-zinc-400 hover:text-white"
                    }`}
                  >
                    YouTube
                  </button>
                  <button
                    onClick={() => setActivePlatform("tt")}
                    className={`px-2.5 py-1 rounded-lg text-[11px] font-medium transition-all ${
                      activePlatform === "tt"
                        ? "bg-cyan-500 text-black font-bold shadow-sm"
                        : "text-zinc-400 hover:text-white"
                    }`}
                  >
                    TikTok
                  </button>
                  <button
                    onClick={() => setActivePlatform("ig")}
                    className={`px-2.5 py-1 rounded-lg text-[11px] font-medium transition-all ${
                      activePlatform === "ig"
                        ? "bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-sm"
                        : "text-zinc-400 hover:text-white"
                    }`}
                  >
                    Instagram
                  </button>
                  <button
                    onClick={() => setActivePlatform("email")}
                    className={`px-2.5 py-1 rounded-lg text-[11px] font-medium transition-all ${
                      activePlatform === "email"
                        ? "bg-amber-500 text-black font-bold shadow-sm"
                        : "text-zinc-400 hover:text-white"
                    }`}
                  >
                    Email
                  </button>
                </div>

                {/* Smartphone 9:16 Video Frame */}
                <div className="relative w-60 sm:w-64 aspect-[9/16] rounded-2xl bg-zinc-900 border-2 border-zinc-700/60 shadow-2xl overflow-hidden flex flex-col justify-between p-3.5 group">
                  {/* Video Dynamic Animated Background Simulation */}
                  <div className="absolute inset-0 bg-gradient-to-b from-indigo-950/80 via-zinc-900 to-black z-0" />
                  <div className="absolute inset-0 opacity-25 bg-[radial-gradient(#8b5cf6_1px,transparent_1px)] [background-size:16px_16px] z-0" />
                  
                  {/* Subtle animated moving spotlight */}
                  <div className="absolute -top-10 -right-10 w-44 h-44 bg-violet-500/25 rounded-full blur-2xl animate-pulse z-0" />
                  <div className="absolute -bottom-10 -left-10 w-44 h-44 bg-cyan-500/20 rounded-full blur-2xl animate-pulse z-0" />

                  {/* Top Bar inside Video */}
                  <div className="relative z-10 flex items-center justify-between text-white/90">
                    <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-black/50 backdrop-blur-md border border-white/15">
                      {activePlatform === "yt" && "🔴 YouTube Shorts"}
                      {activePlatform === "tt" && "⚡ TikTok Live Sync"}
                      {activePlatform === "ig" && "📸 Reels Autopilot"}
                      {activePlatform === "email" && "✉️ Email Newsletter"}
                    </span>
                    <button
                      onClick={() => setIsPlaying(!isPlaying)}
                      className="p-1.5 rounded-full bg-black/60 hover:bg-black/90 text-white backdrop-blur-md transition-colors"
                      title={isPlaying ? "Pause Video" : "Play Video"}
                    >
                      {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5 fill-white" />}
                    </button>
                  </div>

                  {/* Kinetic Dynamic Captions (Center) */}
                  <div className="relative z-10 my-auto text-center px-2">
                    <div className="inline-block bg-black/80 backdrop-blur-md px-3 py-1.5 rounded-xl border border-yellow-400/40 shadow-xl">
                      <span className="text-yellow-400 font-black text-sm uppercase tracking-wide animate-pulse">
                        &ldquo;STOP SCROLLING!&rdquo;
                      </span>
                    </div>
                    <div className="mt-2 text-white font-black text-base tracking-tight drop-shadow-md leading-tight">
                      THE 15-MINUTE <span className="text-cyan-400 underline decoration-cyan-400 decoration-2">DOPAMINE</span> HACK
                    </div>
                    <div className="mt-1 flex justify-center gap-1">
                      <span className="text-[10px] bg-violet-600 text-white font-bold px-1.5 py-0.5 rounded">
                        REWIRE BRAIN
                      </span>
                    </div>
                  </div>

                  {/* Bottom Video Metadata & Stats */}
                  <div className="relative z-10 space-y-2">
                    <div className="flex items-center justify-between text-[11px] text-zinc-300">
                      <div className="flex items-center gap-1.5">
                        <div className="w-4 h-4 rounded-full bg-gradient-to-tr from-violet-500 to-cyan-400" />
                        <span className="font-semibold text-white">@mindset_hacks</span>
                      </div>
                      <span className="text-emerald-400 font-mono font-bold">98.4% Hook</span>
                    </div>

                    {/* Engagement bar */}
                    <div className="flex items-center justify-between text-[10px] text-zinc-400 pt-1 border-t border-white/10">
                      <span>❤️ 142.8K</span>
                      <span>💬 1.2K</span>
                      <span>🔄 38.5K</span>
                      <span>🚀 4.2x Avg</span>
                    </div>

                    {/* Progress scrubber bar */}
                    <div className="w-full bg-white/20 h-1 rounded-full overflow-hidden">
                      <div className="bg-gradient-to-r from-violet-500 to-cyan-400 h-full w-2/3 animate-pulse" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Multi-Platform Auto-Scheduler (4 cols) */}
              <div className="lg:col-span-4 p-5 sm:p-6 flex flex-col justify-between bg-zinc-950/40">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <div className="p-1.5 rounded-lg bg-cyan-500/20 text-cyan-400 border border-cyan-500/30">
                        <Calendar className="w-4 h-4" />
                      </div>
                      <span className="text-sm font-bold text-white">Auto-Scheduler Queue</span>
                    </div>
                    <span className="text-[10px] font-bold text-emerald-400 bg-emerald-950/60 border border-emerald-500/30 px-2 py-0.5 rounded-full flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      Autopilot ON
                    </span>
                  </div>

                  <p className="text-xs text-zinc-400 mb-3">
                    Vidmo auto-renders and posts natively to your connected channels based on peak audience engagement times.
                  </p>

                  {/* Scheduled Items List */}
                  <div className="space-y-2.5">
                    {/* YouTube Shorts */}
                    <div className="p-3 rounded-xl bg-zinc-900/80 border border-white/10 hover:border-rose-500/40 transition-colors">
                      <div className="flex items-center justify-between mb-1">
                        <div className="flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-rose-500" />
                          <span className="text-xs font-semibold text-white">YouTube Shorts</span>
                        </div>
                        <span className="text-[10px] font-mono text-zinc-400 flex items-center gap-1">
                          <Clock className="w-3 h-3 text-zinc-400" />
                          Today, 6:00 PM
                        </span>
                      </div>
                      <div className="text-[11px] text-zinc-300 truncate">
                        &ldquo;The 1% Dopamine Trick&rdquo; • #shorts #viral
                      </div>
                      <div className="mt-1.5 flex items-center justify-between text-[10px]">
                        <span className="text-emerald-400 font-medium">Ready & Auto-Queued</span>
                        <span className="text-zinc-500">Channel: TechWealth</span>
                      </div>
                    </div>

                    {/* TikTok Drop */}
                    <div className="p-3 rounded-xl bg-zinc-900/80 border border-white/10 hover:border-cyan-500/40 transition-colors">
                      <div className="flex items-center justify-between mb-1">
                        <div className="flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-cyan-400" />
                          <span className="text-xs font-semibold text-white">TikTok Direct</span>
                        </div>
                        <span className="text-[10px] font-mono text-zinc-400 flex items-center gap-1">
                          <Clock className="w-3 h-3 text-zinc-400" />
                          Today, 7:30 PM
                        </span>
                      </div>
                      <div className="text-[11px] text-zinc-300 truncate">
                        &ldquo;Why 99% Fail Early&rdquo; • Trending audio synced
                      </div>
                      <div className="mt-1.5 flex items-center justify-between text-[10px]">
                        <span className="text-cyan-400 font-medium">Scheduled (Peak 7 PM)</span>
                        <span className="text-zinc-500">Direct API</span>
                      </div>
                    </div>

                    {/* Instagram Reels */}
                    <div className="p-3 rounded-xl bg-zinc-900/80 border border-white/10 hover:border-pink-500/40 transition-colors">
                      <div className="flex items-center justify-between mb-1">
                        <div className="flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-pink-500" />
                          <span className="text-xs font-semibold text-white">Instagram Reels</span>
                        </div>
                        <span className="text-[10px] font-mono text-zinc-400 flex items-center gap-1">
                          <Clock className="w-3 h-3 text-zinc-400" />
                          Tomorrow, 9:15 AM
                        </span>
                      </div>
                      <div className="text-[11px] text-zinc-300 truncate">
                        &ldquo;Morning Habits of Billionaires&rdquo;
                      </div>
                      <div className="mt-1.5 flex items-center justify-between text-[10px]">
                        <span className="text-purple-400 font-medium">Auto-Render Queued</span>
                        <span className="text-zinc-500">Auto-hashtagged</span>
                      </div>
                    </div>

                    {/* Email Newsletter */}
                    <div className="p-3 rounded-xl bg-zinc-900/80 border border-white/10 hover:border-amber-500/40 transition-colors">
                      <div className="flex items-center justify-between mb-1">
                        <div className="flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-amber-400" />
                          <span className="text-xs font-semibold text-white">Email Video Digest</span>
                        </div>
                        <span className="text-[10px] font-mono text-zinc-400 flex items-center gap-1">
                          <Send className="w-3 h-3 text-zinc-400" />
                          Thursday, 10:00 AM
                        </span>
                      </div>
                      <div className="text-[11px] text-zinc-300 truncate">
                        Animated Video GIF + Play Button Link (24k subs)
                      </div>
                      <div className="mt-1.5 flex items-center justify-between text-[10px]">
                        <span className="text-amber-400 font-medium">Klaviyo / Substack Synced</span>
                        <span className="text-zinc-500">42% Expected CTR</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Schedular Cadence Footer */}
                <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-xs">
                  <span className="text-zinc-400">Cadence: <strong className="text-white">2x Daily</strong></span>
                  <a href="#scheduler" className="text-violet-400 hover:text-violet-300 font-medium flex items-center gap-1">
                    <span>Manage Schedule</span>
                    <ArrowRight className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
