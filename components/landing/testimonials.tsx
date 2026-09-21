"use client";

import { Star, CheckCircle, TrendingUp, Quote } from "lucide-react";

export function Testimonials() {
  const reviews = [
    {
      name: "Alex Rivera",
      role: "Founder, ScaleAgency (Faceless Channel Network)",
      channel: "YouTube: 380K Subs across 4 Channels",
      content:
        "Vidmo replaced our 3 video editors. We set our prompts on Monday, and 14 shorts are generated, voiceovered, and scheduled to YouTube and TikTok for the entire week. Our views quadrupled in 60 days.",
      metric: "4.8M views/mo",
      metricLabel: "Monthly View Count",
      avatar: "AR",
      color: "from-purple-500 to-indigo-600",
    },
    {
      name: "Sarah Chen",
      role: "E-commerce Brand Owner & Creator",
      channel: "Instagram & TikTok: @lumina_lifestyle",
      content:
        "The email video integration is pure gold. Being able to auto-generate video clips for our Klaviyo weekly drops increased our email click rate from 2.8% to 14.2%. Vidmo pays for itself 20x over.",
      metric: "+320% CTR",
      metricLabel: "Email Click Rate",
      avatar: "SC",
      color: "from-pink-500 to-rose-600",
    },
    {
      name: "Marcus Vance",
      role: "Tech Educator & Newsletter Writer",
      channel: "TikTok: 620K Followers",
      content:
        "The Hormozi caption styles and the 3-second viral hook score are shockingly accurate. The videos retain viewers until the end, and the auto-scheduler never misses peak posting times.",
      metric: "94.2% Avg",
      metricLabel: "Viewer Retention",
      avatar: "MV",
      color: "from-cyan-500 to-blue-600",
    },
  ];

  return (
    <section className="relative py-24 bg-zinc-950/90 border-t border-white/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-xs font-semibold text-amber-300 mb-4">
            <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
            <span>Wall of Creator Success</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Loved by <span className="text-gradient-purple">45,000+ Creators</span> & SaaS Teams
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-400">
            See how solo creators and digital agencies are scaling short video output by 10x with zero extra editing time.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((rev) => (
            <div
              key={rev.name}
              className="p-8 rounded-3xl bg-zinc-900/60 border border-white/10 hover:border-violet-500/40 backdrop-blur-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="flex text-amber-400 gap-1 text-sm">
                    {"★★★★★"}
                  </div>
                  <Quote className="w-6 h-6 text-zinc-600 group-hover:text-violet-400/50 transition-colors" />
                </div>

                <p className="text-sm text-zinc-300 leading-relaxed italic mb-6">
                  &ldquo;{rev.content}&rdquo;
                </p>
              </div>

              <div>
                {/* Metric Badge */}
                <div className="p-3 rounded-xl bg-zinc-950/80 border border-white/10 mb-5 flex items-center justify-between">
                  <div className="text-xs text-zinc-400">{rev.metricLabel}</div>
                  <div className="text-sm font-black text-emerald-400 flex items-center gap-1">
                    <TrendingUp className="w-3.5 h-3.5" />
                    <span>{rev.metric}</span>
                  </div>
                </div>

                {/* Author Details */}
                <div className="flex items-center gap-3 pt-3 border-t border-white/5">
                  <div
                    className={`w-10 h-10 rounded-full bg-gradient-to-tr ${rev.color} flex items-center justify-center font-bold text-xs text-white shadow-md`}
                  >
                    {rev.avatar}
                  </div>
                  <div>
                    <div className="text-sm font-bold text-white leading-tight">
                      {rev.name}
                    </div>
                    <div className="text-[11px] text-zinc-400">{rev.role}</div>
                    <div className="text-[10px] text-violet-400 mt-0.5">{rev.channel}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
