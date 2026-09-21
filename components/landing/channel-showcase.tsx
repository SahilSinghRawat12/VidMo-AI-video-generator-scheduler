"use client";

import { useState } from "react";
import {
  Mail,
  CheckCircle2,
  Clock,
  ArrowRight,
  TrendingUp,
  Share2,
  Calendar,
  Sparkles,
  Play,
  Zap,
} from "lucide-react";
import { YoutubeIcon, InstagramIcon } from "./icons";

export function ChannelShowcase() {
  const [activeTab, setActiveTab] = useState<"youtube" | "tiktok" | "instagram" | "email">("youtube");

  const channelDetails = {
    youtube: {
      name: "YouTube Shorts",
      badge: "YouTube Partner API Verified",
      color: "from-rose-600 to-red-600",
      accentBorder: "border-rose-500/40",
      accentBg: "bg-rose-500/10 text-rose-400",
      headline: "Explode Your Subscriber Count on YouTube Shorts",
      description:
        "Vidmo renders in high bitrate 1080x1920 60FPS, generates SEO-optimized titles, hashtags, chapters, and auto-schedules to your YouTube channel when your viewers are most active.",
      features: [
        "100% Monetization-Safe & Original AI scripts",
        "Automated SEO tags & description generation",
        "Native scheduled release into YouTube Studio",
        "End-screen playlist linking and auto-pinned comments",
      ],
      metrics: {
        growth: "+380%",
        metricLabel: "Subscriber Velocity",
        timeSaved: "14 hrs/week",
      },
      mockupDetails: {
        channelName: "@DailyWisdomHQ",
        subscribers: "148,000 subscribers",
        videoTitle: "Why 99% Of People Fail The 30-Day Focus Challenge #shorts",
        views: "894K views • 2 days ago",
        actionBtn: "Subscribe",
      },
    },
    tiktok: {
      name: "TikTok",
      badge: "Direct TikTok Business API",
      color: "from-cyan-500 to-blue-600",
      accentBorder: "border-cyan-500/40",
      accentBg: "bg-cyan-500/10 text-cyan-400",
      headline: "Ride Trending Algorithms on TikTok Autopilot",
      description:
        "Post seamlessly to TikTok without phone push notifications. Vidmo automatically pairs your AI video with trending sounds and high-velocity retention patterns.",
      features: [
        "Direct API publishing without opening the TikTok app",
        "Algorithmic 3-second hook optimization",
        "Auto-synced background audio from TikTok trending pool",
        "Automated hashtag clustering (#fyp, #viral, #learnontiktok)",
      ],
      metrics: {
        growth: "+510%",
        metricLabel: "For You Page Reach",
        timeSaved: "18 hrs/week",
      },
      mockupDetails: {
        channelName: "@techpulse.daily",
        subscribers: "284K followers",
        videoTitle: "The AI tool that writes, edits and posts videos while you sleep 🤯 #tech #foryou",
        views: "1.4M views • 185K likes",
        actionBtn: "Follow",
      },
    },
    instagram: {
      name: "Instagram Reels",
      badge: "Meta Graph API Partner",
      color: "from-purple-600 to-pink-600",
      accentBorder: "border-pink-500/40",
      accentBg: "bg-pink-500/10 text-pink-400",
      headline: "Turn Followers into Customers with Aesthetic Reels",
      description:
        "Reels demand high visual polish and crisp aesthetics. Vidmo creates cinematic 9:16 reels, selects the best cover frame, and schedules directly to your business or creator account.",
      features: [
        "Direct publishing to Instagram Business & Creator accounts",
        "AI cover-frame selection with custom typography overlays",
        "First-comment auto-posting for CTA links and lead magnets",
        "Seamless cross-sharing to Facebook Reels with 1 click",
      ],
      metrics: {
        growth: "+290%",
        metricLabel: "Profile Visits & Engagement",
        timeSaved: "12 hrs/week",
      },
      mockupDetails: {
        channelName: "@modern_wealth_secrets",
        subscribers: "92.5K followers",
        videoTitle: "5 Micro-habits that make you wealthier than 95% of people in 6 months 📈 #reels #growth",
        views: "460K plays • 42K shares",
        actionBtn: "Follow",
      },
    },
    email: {
      name: "Email Video Campaigns",
      badge: "Klaviyo, Mailchimp & Substack Ready",
      color: "from-amber-500 to-orange-600",
      accentBorder: "border-amber-500/40",
      accentBg: "bg-amber-500/10 text-amber-400",
      headline: "Hyper-Engaging Short Videos Delivered to Inboxes",
      description:
        "Video in email boosts click-through rates by over 40%. Vidmo auto-generates responsive animated GIFs with play button overlays and dedicated instant-playback landing pages.",
      features: [
        "Auto-renders 3-second animated GIF teasers with play button",
        "Compatible with Klaviyo, Mailchimp, Substack, Beehiiv, HubSpot",
        "1-click HTML embed snippet ready to paste into any newsletter",
        "Click-to-play landing page with full video and custom CTA link",
      ],
      metrics: {
        growth: "+42%",
        metricLabel: "Email Click-Through Rate",
        timeSaved: "8 hrs/campaign",
      },
      mockupDetails: {
        channelName: "The 60-Second Founder Weekly",
        subscribers: "34,200 newsletter subscribers",
        videoTitle: "Weekly Breakdown: How AI Video Automation Drives Organic SaaS Leads",
        views: "48.2% Open Rate • 14.8% Click Rate",
        actionBtn: "Read Issue",
      },
    },
  };

  const current = channelDetails[activeTab];

  return (
    <section id="channels" className="relative py-24 bg-zinc-950 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-zinc-300 mb-4">
            <Share2 className="w-3.5 h-3.5 text-violet-400" />
            <span>Multi-Channel Deep Dive</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Tailored for the World&apos;s <span className="text-gradient-purple">Top 4 Platforms</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-400">
            Each platform has different algorithms, video compression standards, and peak hours. Vidmo auto-customizes every render for peak performance.
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          <button
            onClick={() => setActiveTab("youtube")}
            className={`flex items-center gap-2.5 px-5 py-3 rounded-2xl font-bold text-sm transition-all ${
              activeTab === "youtube"
                ? "bg-rose-600 text-white shadow-lg shadow-rose-600/30 scale-105"
                : "bg-zinc-900/80 text-zinc-400 hover:text-white border border-white/10"
            }`}
          >
            <YoutubeIcon className="w-4 h-4" />
            <span>YouTube Shorts</span>
          </button>

          <button
            onClick={() => setActiveTab("tiktok")}
            className={`flex items-center gap-2.5 px-5 py-3 rounded-2xl font-bold text-sm transition-all ${
              activeTab === "tiktok"
                ? "bg-cyan-500 text-black shadow-lg shadow-cyan-500/30 scale-105 font-extrabold"
                : "bg-zinc-900/80 text-zinc-400 hover:text-white border border-white/10"
            }`}
          >
            <Zap className="w-4 h-4" />
            <span>TikTok</span>
          </button>

          <button
            onClick={() => setActiveTab("instagram")}
            className={`flex items-center gap-2.5 px-5 py-3 rounded-2xl font-bold text-sm transition-all ${
              activeTab === "instagram"
                ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg shadow-pink-600/30 scale-105"
                : "bg-zinc-900/80 text-zinc-400 hover:text-white border border-white/10"
            }`}
          >
            <InstagramIcon className="w-4 h-4" />
            <span>Instagram Reels</span>
          </button>

          <button
            onClick={() => setActiveTab("email")}
            className={`flex items-center gap-2.5 px-5 py-3 rounded-2xl font-bold text-sm transition-all ${
              activeTab === "email"
                ? "bg-amber-500 text-black shadow-lg shadow-amber-500/30 scale-105 font-extrabold"
                : "bg-zinc-900/80 text-zinc-400 hover:text-white border border-white/10"
            }`}
          >
            <Mail className="w-4 h-4" />
            <span>Email Video</span>
          </button>
        </div>

        {/* Tab Content Showcase Panel */}
        <div className={`p-8 sm:p-12 rounded-3xl bg-zinc-900/50 border ${current.accentBorder} backdrop-blur-2xl transition-all duration-300`}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Content (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-white/5 border border-white/10 text-white">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span>{current.badge}</span>
              </div>

              <h3 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-snug">
                {current.headline}
              </h3>

              <p className="text-base text-zinc-300 leading-relaxed">
                {current.description}
              </p>

              {/* Feature bullets */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                {current.features.map((feat, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>

              {/* Metrics highlights */}
              <div className="pt-6 border-t border-white/10 flex flex-wrap items-center gap-6">
                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-white">
                    {current.metrics.growth}
                  </div>
                  <div className="text-xs text-zinc-400">{current.metrics.metricLabel}</div>
                </div>
                <div className="h-8 w-px bg-white/10 hidden sm:block" />
                <div>
                  <div className="text-2xl sm:text-3xl font-extrabold text-cyan-400">
                    {current.metrics.timeSaved}
                  </div>
                  <div className="text-xs text-zinc-400">Saved Editing & Scheduling</div>
                </div>
              </div>
            </div>

            {/* Right Interactive Mockup (5 cols) */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="w-full max-w-sm rounded-2xl bg-zinc-950 border border-white/15 p-5 shadow-2xl space-y-4">
                {/* Simulated Channel Top Bar */}
                <div className="flex items-center justify-between pb-3 border-b border-white/10">
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-violet-600 to-cyan-500 flex items-center justify-center text-xs font-bold text-white">
                      HQ
                    </div>
                    <div>
                      <div className="text-xs font-bold text-white leading-tight">
                        {current.mockupDetails.channelName}
                      </div>
                      <div className="text-[10px] text-zinc-400">
                        {current.mockupDetails.subscribers}
                      </div>
                    </div>
                  </div>
                  <button className="px-3 py-1 rounded-full text-xs font-bold bg-white text-black hover:bg-zinc-200 transition-colors">
                    {current.mockupDetails.actionBtn}
                  </button>
                </div>

                {/* Simulated Video Preview Box */}
                <div className="relative aspect-[9/14] rounded-xl bg-gradient-to-b from-zinc-800 to-zinc-950 overflow-hidden flex flex-col justify-between p-4 border border-white/10">
                  <div className="flex items-center justify-between z-10">
                    <span className="text-[10px] bg-black/60 backdrop-blur-md px-2 py-0.5 rounded text-white font-mono">
                      Autopilot: Scheduled 6:00 PM
                    </span>
                    <span className="text-[10px] bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded font-bold">
                      Viral Ready
                    </span>
                  </div>

                  {/* Centered Captions */}
                  <div className="text-center z-10 my-auto">
                    <div className="inline-block bg-black/70 px-3 py-1.5 rounded-lg border border-yellow-400/40 mb-2">
                      <span className="text-yellow-400 font-extrabold text-xs uppercase">
                        &ldquo;THE 1-HOUR RULE&rdquo;
                      </span>
                    </div>
                    <div className="text-white font-extrabold text-sm drop-shadow-lg">
                      HOW 99% OF PEOPLE FAIL THE TEST
                    </div>
                  </div>

                  {/* Bottom Meta */}
                  <div className="z-10 bg-black/70 backdrop-blur-md p-2.5 rounded-lg border border-white/10 text-[11px] text-zinc-200">
                    <p className="line-clamp-2 font-medium">
                      {current.mockupDetails.videoTitle}
                    </p>
                    <div className="mt-1 text-[10px] text-emerald-400 font-mono">
                      {current.mockupDetails.views}
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between text-[11px] text-zinc-400 pt-1">
                  <span>Auto-published via Vidmo API</span>
                  <span className="text-white font-semibold">Zero Manual Work</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
