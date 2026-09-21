"use client";

import { useState } from "react";
import { Check, Sparkles, ArrowRight, ShieldCheck, Zap } from "lucide-react";

export function Pricing() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("monthly");

  const plans = [
    {
      name: "Starter",
      badge: "For Solo Creators",
      priceMonthly: 19,
      priceYearly: 15,
      description: "Everything you need to launch a single faceless channel and test automated video creation.",
      features: [
        "30 AI short videos per month",
        "Auto-schedule to 1 platform (YouTube or TikTok)",
        "30 standard neural voices",
        "1080x1920 HD rendering",
        "Basic kinetic animated captions",
        "Community support & prompt guides",
      ],
      cta: "Start 7-Day Trial",
      highlighted: false,
    },
    {
      name: "Pro Autopilot",
      badge: "Most Popular • 10x Growth",
      priceMonthly: 49,
      priceYearly: 39,
      description: "Our complete autonomous video engine. Auto-posts daily across all social channels & email.",
      features: [
        "120 AI short videos per month (4 daily)",
        "Auto-schedule to all 4 channels (YouTube, TikTok, IG, Email)",
        "120+ lifelike neural voices + 2 voice clones",
        "Hormozi, MrBeast & Cyberpunk caption styles",
        "Autonomous 30-day recurring scheduler",
        "Email Video GIF & HTML embedder for newsletters",
        "Priority GPU fast render queue (< 15 seconds)",
        "Commercial monetization & copyright license",
      ],
      cta: "Start 7-Day Free Trial",
      highlighted: true,
    },
    {
      name: "Agency & Scale",
      badge: "For Agencies & Networks",
      priceMonthly: 129,
      priceYearly: 99,
      description: "Manage multiple channels, client accounts, unlimited voice clones, and automated publishing.",
      features: [
        "Unlimited AI short video generation",
        "Manage up to 10 channel networks & brands",
        "Unlimited custom voice cloning",
        "Full Email campaign automation (Klaviyo / Mailchimp API)",
        "Dedicated API access & custom webhooks",
        "White-label exports & team collaboration (5 seats)",
        "Dedicated account strategist & 24/7 VIP chat",
      ],
      cta: "Scale Your Agency",
      highlighted: false,
    },
  ];

  return (
    <section id="pricing" className="relative py-24 bg-zinc-950 border-t border-white/10 overflow-hidden">
      {/* Background glow accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-violet-600/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-xs font-semibold text-emerald-400 mb-4">
            <Zap className="w-3.5 h-3.5" />
            <span>Simple, Transparent Pricing</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Invest in Growth. <span className="text-gradient-purple">Save 20+ Hours Every Week.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-400">
            Start with our 7-day free trial. No contracts, upgrade or cancel anytime with one click.
          </p>

          {/* Billing Cycle Toggle */}
          <div className="mt-8 inline-flex items-center p-1.5 rounded-2xl bg-zinc-900 border border-white/10">
            <button
              onClick={() => setBillingCycle("monthly")}
              className={`px-5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                billingCycle === "monthly"
                  ? "bg-violet-600 text-white shadow-md"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              Monthly Billing
            </button>
            <button
              onClick={() => setBillingCycle("yearly")}
              className={`px-5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 ${
                billingCycle === "yearly"
                  ? "bg-violet-600 text-white shadow-md"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              <span>Yearly Billing</span>
              <span className="text-[10px] uppercase font-extrabold bg-emerald-400 text-black px-2 py-0.5 rounded-full">
                Save 20%
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan) => {
            const price = billingCycle === "monthly" ? plan.priceMonthly : plan.priceYearly;

            return (
              <div
                key={plan.name}
                className={`relative rounded-3xl p-8 transition-all duration-300 flex flex-col justify-between ${
                  plan.highlighted
                    ? "bg-gradient-to-b from-zinc-900 via-zinc-950 to-zinc-950 border-2 border-violet-500 shadow-2xl shadow-violet-500/20 lg:-translate-y-2"
                    : "bg-zinc-900/50 border border-white/10 hover:border-white/20"
                }`}
              >
                {plan.highlighted && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-violet-600 to-cyan-500 text-white text-xs font-extrabold tracking-wide uppercase shadow-md shadow-violet-600/30 flex items-center gap-1.5">
                    <Sparkles className="w-3 h-3" />
                    <span>Recommended for Creators</span>
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-white">{plan.name}</h3>
                    <span className="text-[11px] font-semibold text-zinc-400 bg-white/5 px-2.5 py-1 rounded-full border border-white/5">
                      {plan.badge}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-zinc-400 mb-6 leading-relaxed">
                    {plan.description}
                  </p>

                  <div className="mb-6 flex items-baseline gap-1">
                    <span className="text-4xl sm:text-5xl font-black text-white tracking-tight">
                      ${price}
                    </span>
                    <span className="text-xs text-zinc-400 font-medium">
                      / month {billingCycle === "yearly" && "(billed annually)"}
                    </span>
                  </div>

                  <div className="h-px bg-white/10 mb-6" />

                  {/* Features List */}
                  <div className="space-y-3 mb-8">
                    {plan.features.map((feature, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-200">
                        <div
                          className={`w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                            plan.highlighted
                              ? "bg-violet-500/20 text-violet-400"
                              : "bg-emerald-500/20 text-emerald-400"
                          }`}
                        >
                          <Check className="w-3 h-3" />
                        </div>
                        <span className="leading-snug">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <button
                    className={`w-full py-3.5 rounded-xl font-bold text-sm transition-all flex items-center justify-center gap-2 ${
                      plan.highlighted
                        ? "bg-gradient-to-r from-violet-600 via-indigo-600 to-cyan-500 text-white shadow-lg shadow-violet-600/30 hover:opacity-95 hover:scale-[1.02] active:scale-[0.98]"
                        : "bg-zinc-800 text-white hover:bg-zinc-700 border border-white/10"
                    }`}
                  >
                    <span>{plan.cta}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <div className="mt-3 text-center text-[11px] text-zinc-500 flex items-center justify-center gap-1">
                    <ShieldCheck className="w-3 h-3 text-emerald-400" />
                    <span>7-day risk-free guarantee</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
