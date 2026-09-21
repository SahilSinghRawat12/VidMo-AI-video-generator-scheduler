"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Video,
  Mail,
  ArrowRight,
  CheckCircle2,
  Globe,
  ShieldCheck,
  Heart,
  Sparkles,
  Send,
} from "lucide-react";
import { YoutubeIcon, InstagramIcon, TikTokIcon, XTwitterIcon } from "./icons";

export function Footer() {
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail.trim()) {
      setSubscribed(true);
    }
  };

  const productLinks = [
    { name: "AI Video Generator", href: "#features" },
    { name: "Autonomous Schedular", href: "#scheduler" },
    { name: "YouTube Shorts Creator", href: "#channels" },
    { name: "TikTok Video Studio", href: "#channels" },
    { name: "Instagram Reels Engine", href: "#channels" },
    { name: "Email Video Digests", href: "#channels" },
    { name: "Voice Cloning & Audio", href: "#features" },
    { name: "Kinetic Captions (Hormozi)", href: "#features" },
    { name: "Pricing Plans", href: "#pricing" },
  ];

  const integrationLinks = [
    { name: "YouTube Partner API", href: "#channels" },
    { name: "Meta Graph API (Reels)", href: "#channels" },
    { name: "TikTok Business Content API", href: "#channels" },
    { name: "Klaviyo Email Automation", href: "#channels" },
    { name: "Mailchimp Video Embedder", href: "#channels" },
    { name: "Substack & Beehiiv", href: "#channels" },
    { name: "Zapier & Webhooks", href: "#pricing" },
  ];

  const resourceLinks = [
    { name: "100 Viral Hooks Formula", href: "#features" },
    { name: "Creator Monetization Guide", href: "#faq" },
    { name: "AI Video Prompt Library", href: "#studio" },
    { name: "Case Studies & Analytics", href: "#features" },
    { name: "Vidmo Creator Academy", href: "#how-it-works" },
    { name: "API Documentation", href: "#pricing" },
    { name: "Community Discord (15K+)", href: "#" },
  ];

  const companyLinks = [
    { name: "About Vidmo", href: "#" },
    { name: "Careers", href: "#", badge: "Hiring" },
    { name: "Affiliate Program (30% Recurring)", href: "#" },
    { name: "Press & Media Kit", href: "#" },
    { name: "Contact & Support", href: "#faq" },
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Service", href: "#" },
    { name: "Security & DMCA", href: "#" },
  ];

  return (
    <footer id="footer" className="relative bg-zinc-950 border-t border-white/10 text-zinc-400 overflow-hidden">
      {/* Background subtle gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-24 bg-violet-600/5 blur-3xl pointer-events-none" />

      {/* Top Newsletter Bar inside Footer */}
      <div className="border-b border-white/10 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 rounded-2xl bg-zinc-900/60 border border-white/10 flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="max-w-xl">
              <div className="flex items-center gap-2 text-violet-400 text-xs font-bold uppercase tracking-wider mb-1">
                <Sparkles className="w-3.5 h-3.5" />
                <span>The Viral Short Digest</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                Get Weekly Viral Video Hooks & AI Growth Tactics
              </h3>
              <p className="text-xs sm:text-sm text-zinc-400 mt-1">
                Join 38,000+ creators getting our weekly breakdown of trending audio, viral video structures, and high-CPM niches.
              </p>
            </div>

            <div className="w-full lg:w-auto">
              {subscribed ? (
                <div className="p-3 px-5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-semibold flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>You&apos;re subscribed! First playbook on its way.</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex gap-2 w-full sm:w-96">
                  <input
                    type="email"
                    required
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    placeholder="Enter your email..."
                    className="flex-1 px-4 py-2.5 rounded-xl bg-zinc-950 border border-white/10 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-violet-500 transition-all"
                  />
                  <button
                    type="submit"
                    className="px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-violet-600 hover:bg-violet-500 shadow-md shadow-violet-600/30 transition-all shrink-0 flex items-center gap-1.5"
                  >
                    <span>Subscribe</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links Columns */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-10">
          {/* Brand Col (Spans 2 cols on lg) */}
          <div className="col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-2.5 group">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-violet-600 via-indigo-500 to-cyan-400 p-[1px] shadow-lg shadow-violet-500/25">
                <div className="w-full h-full bg-zinc-950 rounded-xl flex items-center justify-center">
                  <Video className="w-4 h-4 text-violet-400" />
                </div>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="text-xl font-black text-white tracking-tight">Vidmo</span>
                <span className="text-[10px] uppercase font-bold tracking-wider px-1.5 py-0.5 rounded bg-violet-500/20 text-violet-300 border border-violet-500/30">
                  AI
                </span>
              </div>
            </Link>

            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed max-w-sm">
              The all-in-one AI short video generator and autonomous scheduler. Create, voiceover, caption, and automatically post viral shorts to YouTube, TikTok, Instagram, and Email on complete autopilot.
            </p>

            {/* System Status Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-white/10 text-[11px] text-zinc-300">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>All AI Rendering Engines Operational</span>
            </div>

            {/* Social Icons */}
            <div className="pt-2 flex items-center gap-2.5">
              <a
                href="#channels"
                className="w-8 h-8 rounded-lg bg-zinc-900 hover:bg-rose-600/20 border border-white/10 hover:border-rose-500/40 text-zinc-400 hover:text-rose-400 flex items-center justify-center transition-all"
                title="YouTube Shorts"
              >
                <YoutubeIcon className="w-4 h-4" />
              </a>
              <a
                href="#channels"
                className="w-8 h-8 rounded-lg bg-zinc-900 hover:bg-pink-600/20 border border-white/10 hover:border-pink-500/40 text-zinc-400 hover:text-pink-400 flex items-center justify-center transition-all"
                title="Instagram Reels"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href="#channels"
                className="w-8 h-8 rounded-lg bg-zinc-900 hover:bg-cyan-600/20 border border-white/10 hover:border-cyan-500/40 text-zinc-400 hover:text-cyan-400 flex items-center justify-center transition-all"
                title="TikTok"
              >
                <TikTokIcon className="w-4 h-4" />
              </a>
              <a
                href="#channels"
                className="w-8 h-8 rounded-lg bg-zinc-900 hover:bg-amber-600/20 border border-white/10 hover:border-amber-500/40 text-zinc-400 hover:text-amber-400 flex items-center justify-center transition-all"
                title="Email Video Campaigns"
              >
                <Mail className="w-4 h-4" />
              </a>
              <a
                href="#footer"
                className="w-8 h-8 rounded-lg bg-zinc-900 hover:bg-violet-600/20 border border-white/10 hover:border-violet-500/40 text-zinc-400 hover:text-violet-400 flex items-center justify-center transition-all"
                title="Twitter / X"
              >
                <XTwitterIcon className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              Product
            </h4>
            <ul className="space-y-2.5 text-xs">
              {productLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="hover:text-white transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Channels & Integrations */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              Integrations
            </h4>
            <ul className="space-y-2.5 text-xs">
              {integrationLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="hover:text-white transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              Resources
            </h4>
            <ul className="space-y-2.5 text-xs">
              {resourceLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="hover:text-white transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company & Legal */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              Company
            </h4>
            <ul className="space-y-2.5 text-xs">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="hover:text-white transition-colors flex items-center gap-1.5">
                    <span>{link.name}</span>
                    {link.badge && (
                      <span className="text-[9px] bg-emerald-500/20 text-emerald-300 px-1 py-0.2 rounded font-semibold">
                        {link.badge}
                      </span>
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Copyright & Compliance Bar */}
      <div className="border-t border-white/10 py-8 bg-black/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-2 text-zinc-500">
            <span>&copy; {new Date().getFullYear()} Vidmo Inc. All rights reserved.</span>
            <span>•</span>
            <span className="flex items-center gap-1 text-zinc-400">
              Built with <Heart className="w-3 h-3 text-rose-500 fill-rose-500" /> for video creators
            </span>
          </div>

          <div className="flex items-center gap-5 text-zinc-400">
            <div className="flex items-center gap-1.5 text-zinc-400">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>SOC-2 Compliant & 256-Bit SSL</span>
            </div>
            <span>•</span>
            <div className="flex items-center gap-1">
              <Globe className="w-3.5 h-3.5" />
              <span>English (US) • USD ($)</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
