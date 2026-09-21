"use client";

import { Wand2, Calendar, Share2, ArrowRight, CheckCircle2, Zap } from "lucide-react";

export function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Seed Your Idea or Niche",
      description:
        "Input a single prompt, paste a blog URL, or select from 50+ high-CPM niches (Psychology, Wealth, AI, Fitness). Vidmo analyzes trending hooks and generates 30 viral video concepts.",
      icon: <Wand2 className="w-6 h-6 text-violet-400" />,
      badge: "Idea to Script in 10s",
    },
    {
      number: "02",
      title: "AI Renders High-Retention Videos",
      description:
        "Our neural engine pairs lifelike human voiceovers with cinematic B-roll, dynamic kinetic subtitles, and auto-ducked trending background beats in crystal clear 1080x1920.",
      icon: <Zap className="w-6 h-6 text-cyan-400" />,
      badge: "Full HD 60 FPS Output",
    },
    {
      number: "03",
      title: "Auto-Schedule & Scale Hands-Free",
      description:
        "Connect your YouTube, TikTok, Instagram, and Email platforms with 1 click. Choose your posting frequency (e.g. 2x/day) and Vidmo auto-publishes at peak audience hours.",
      icon: <Calendar className="w-6 h-6 text-emerald-400" />,
      badge: "100% Autonomous",
    },
  ];

  return (
    <section id="how-it-works" className="relative py-24 bg-zinc-950 border-t border-white/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/30 text-xs font-semibold text-violet-300 mb-4">
            <span>3-Step Frictionless Workflow</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            How Vidmo Puts Your Growth on <span className="text-gradient-purple">Autopilot</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-400">
            Never stress about what to post or spending 4 hours editing a 30-second short video again.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connecting line on desktop */}
          <div className="hidden md:block absolute top-1/2 left-1/6 right-1/6 h-0.5 bg-gradient-to-r from-violet-500/40 via-cyan-500/40 to-emerald-500/40 -translate-y-12 z-0" />

          {steps.map((step, index) => (
            <div
              key={step.number}
              className="relative z-10 p-8 rounded-3xl bg-zinc-900/60 border border-white/10 hover:border-violet-500/40 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-zinc-800 border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                    {step.icon}
                  </div>
                  <span className="text-3xl font-black font-mono text-zinc-700 group-hover:text-violet-400/50 transition-colors">
                    {step.number}
                  </span>
                </div>

                <span className="text-[11px] font-bold uppercase tracking-wider text-cyan-400 block mb-2">
                  {step.badge}
                </span>

                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-violet-200 transition-colors">
                  {step.title}
                </h3>

                <p className="text-sm text-zinc-400 leading-relaxed">
                  {step.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/5 flex items-center text-xs font-semibold text-zinc-400 group-hover:text-white transition-colors">
                <span>Next step</span>
                <ArrowRight className="w-3.5 h-3.5 ml-1.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Callout Banner */}
        <div className="mt-14 p-6 rounded-2xl bg-gradient-to-r from-violet-950/40 via-indigo-950/30 to-zinc-950 border border-violet-500/20 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-violet-600/20 text-violet-400 border border-violet-500/30 flex items-center justify-center shrink-0">
              <Zap className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-bold text-white">Already have existing videos or blog posts?</div>
              <div className="text-xs text-zinc-400">Vidmo can repurpose your long-form YouTube videos and articles into 10+ viral shorts automatically.</div>
            </div>
          </div>
          <a
            href="#pricing"
            className="shrink-0 px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-violet-600 hover:bg-violet-500 transition-colors"
          >
            Explore Repurposing
          </a>
        </div>
      </div>
    </section>
  );
}
