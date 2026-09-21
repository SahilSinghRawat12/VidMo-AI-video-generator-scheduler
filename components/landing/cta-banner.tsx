"use client";

import { useState } from "react";
import { Sparkles, ArrowRight, CheckCircle2, Wand2 } from "lucide-react";

export function CtaBanner() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
    }
  };

  return (
    <section className="relative py-20 bg-zinc-950 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl p-8 sm:p-14 lg:p-16 bg-gradient-to-tr from-violet-950/80 via-indigo-950/60 to-zinc-900 border border-violet-500/30 backdrop-blur-2xl shadow-2xl overflow-hidden text-center">
          {/* Ambient Glows */}
          <div className="absolute -top-24 -left-24 w-72 h-72 bg-violet-500/30 blur-3xl rounded-full pointer-events-none" />
          <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-cyan-500/30 blur-3xl rounded-full pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-violet-500/20 border border-violet-500/40 text-xs font-semibold text-violet-300 mb-6">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Get Started in Under 60 Seconds</span>
            </div>

            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.15]">
              Ready to Put Your Short Video Growth on{" "}
              <span className="text-gradient-purple">Autopilot</span>?
            </h2>

            <p className="mt-5 text-base sm:text-lg text-zinc-300 max-w-2xl mx-auto leading-relaxed">
              Generate faceless videos, auto-schedule across YouTube Shorts, Instagram Reels, TikTok, and Email with zero manual work.
            </p>

            {/* Quick Signup Form */}
            <div className="mt-8 max-w-md mx-auto">
              {submitted ? (
                <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-sm font-semibold flex items-center justify-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                  <span>Welcome aboard! Check your inbox for your 5 free credits.</span>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2.5">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your creator email..."
                    className="flex-1 px-5 py-3.5 rounded-xl bg-zinc-950/80 border border-white/15 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-violet-500 transition-all"
                  />
                  <button
                    type="submit"
                    className="px-6 py-3.5 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-violet-600 via-indigo-600 to-cyan-500 hover:opacity-95 shadow-lg shadow-violet-600/30 flex items-center justify-center gap-2 transition-all shrink-0"
                  >
                    <span>Claim 5 Free Videos</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>

            {/* Micro assurances */}
            <div className="mt-6 flex flex-wrap items-center justify-center gap-6 text-xs text-zinc-400">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>5 Free video generations</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>No credit card required</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>Instant multi-channel connection</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
