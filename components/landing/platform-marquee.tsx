"use client";

import { Mail, Sparkles, TrendingUp, CheckCircle2, Zap } from "lucide-react";
import { YoutubeIcon, InstagramIcon, TikTokIcon } from "./icons";

export function PlatformMarquee() {
  const platforms = [
    {
      name: "YouTube Shorts",
      badge: "Official API Partner",
      description: "Auto-tags, HD 60fps, scheduled uploads directly into your creator studio.",
      icon: (
        <div className="w-10 h-10 rounded-xl bg-rose-600/20 text-rose-500 border border-rose-500/30 flex items-center justify-center">
          <YoutubeIcon className="w-5 h-5" />
        </div>
      ),
      stat: "4.8x subscriber velocity",
      color: "border-rose-500/30 hover:border-rose-500/60",
    },
    {
      name: "Instagram Reels",
      badge: "Meta Direct Publish",
      description: "Native Reels posting without phone notifications. High-retention hooks.",
      icon: (
        <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-purple-600/20 to-pink-600/20 text-pink-400 border border-pink-500/30 flex items-center justify-center">
          <InstagramIcon className="w-5 h-5" />
        </div>
      ),
      stat: "3.2x reach multiplier",
      color: "border-pink-500/30 hover:border-pink-500/60",
    },
    {
      name: "TikTok",
      badge: "Direct Schedule API",
      description: "Sound-synced cuts, trending hashtag extraction, algorithmic boost.",
      icon: (
        <div className="w-10 h-10 rounded-xl bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 flex items-center justify-center">
          <TikTokIcon className="w-5 h-5" />
        </div>
      ),
      stat: "85% avg completion rate",
      color: "border-cyan-500/30 hover:border-cyan-500/60",
    },
    {
      name: "Email Video Digests",
      badge: "Klaviyo • Mailchimp • Substack",
      description: "Auto-generates animated video GIF previews & responsive video cards.",
      icon: (
        <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 border border-amber-500/30 flex items-center justify-center">
          <Mail className="w-5 h-5" />
        </div>
      ),
      stat: "42% higher email CTR",
      color: "border-amber-500/30 hover:border-amber-500/60",
    },
  ];

  const stats = [
    { value: "1.2M+", label: "AI Shorts Generated" },
    { value: "85M+", label: "Total Views Delivered" },
    { value: "99.8%", label: "Scheduler Success Rate" },
    { value: "4.6x", label: "Average Creator Growth" },
  ];

  return (
    <section className="relative py-16 border-y border-white/10 bg-zinc-950/70 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title / Heading */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-zinc-300 mb-3">
            <Zap className="w-3.5 h-3.5 text-cyan-400" />
            <span>Multi-Channel Auto-Distribution</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            One AI Engine. Published Everywhere on Schedule.
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 mt-2">
            No more manually downloading, reformatting, and uploading. Vidmo connects directly to your creator channels and publishes at the exact moment your audience is online.
          </p>
        </div>

        {/* 4 Supported Platforms Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {platforms.map((platform) => (
            <div
              key={platform.name}
              className={`p-6 rounded-2xl bg-zinc-900/50 backdrop-blur-xl border ${platform.color} transition-all duration-300 hover:-translate-y-1 group flex flex-col justify-between`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  {platform.icon}
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-white/5 text-zinc-300 border border-white/10">
                    {platform.badge}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white mb-1.5 group-hover:text-cyan-300 transition-colors">
                  {platform.name}
                </h3>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  {platform.description}
                </p>
              </div>

              <div className="mt-5 pt-3.5 border-t border-white/10 flex items-center justify-between text-xs">
                <span className="text-emerald-400 font-semibold flex items-center gap-1">
                  <TrendingUp className="w-3.5 h-3.5" />
                  {platform.stat}
                </span>
                <span className="text-[11px] text-zinc-400 group-hover:text-white transition-colors">
                  Auto-Schedule &rarr;
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Live Metrics Row */}
        <div className="mt-14 pt-10 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center">
              <span className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight bg-gradient-to-r from-violet-400 via-indigo-300 to-cyan-400 bg-clip-text text-transparent">
                {stat.value}
              </span>
              <span className="text-xs sm:text-sm text-zinc-400 mt-1 font-medium">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
