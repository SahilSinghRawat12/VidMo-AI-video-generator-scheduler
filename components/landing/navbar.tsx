"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Sparkles, Video, Menu, X, ArrowRight } from "lucide-react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Features", href: "#features" },
    { name: "Auto-Scheduler", href: "#scheduler" },
    { name: "Interactive Studio", href: "#studio" },
    { name: "Channels", href: "#channels" },
    { name: "How It Works", href: "#how-it-works" },
    { name: "Pricing", href: "#pricing" },
    { name: "FAQ", href: "#faq" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-zinc-950/80 backdrop-blur-xl border-b border-white/10 shadow-2xl shadow-black/50 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-tr from-violet-600 via-indigo-500 to-cyan-400 p-[1px] shadow-lg shadow-violet-500/25 group-hover:shadow-violet-500/40 transition-all">
              <div className="w-full h-full bg-zinc-950 rounded-xl flex items-center justify-center">
                <Video className="w-5 h-5 text-violet-400 group-hover:scale-110 transition-transform duration-300" />
              </div>
              <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-400"></span>
              </span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="text-xl font-extrabold tracking-tight text-white group-hover:text-violet-200 transition-colors">
                Vidmo
              </span>
              <span className="text-[10px] uppercase font-bold tracking-wider px-1.5 py-0.5 rounded bg-violet-500/20 text-violet-300 border border-violet-500/30">
                AI
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 bg-zinc-900/60 border border-white/10 px-4 py-1.5 rounded-full backdrop-blur-md">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3 py-1.5 text-xs lg:text-sm font-medium text-zinc-300 hover:text-white rounded-full hover:bg-white/5 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action CTAs */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="#pricing"
              className="text-xs lg:text-sm font-medium text-zinc-300 hover:text-white px-3 py-2 transition-colors"
            >
              Sign In
            </a>
            <a
              href="#pricing"
              className="relative inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs lg:text-sm font-semibold text-white bg-gradient-to-r from-violet-600 via-indigo-600 to-cyan-500 hover:opacity-95 shadow-md shadow-violet-600/30 hover:shadow-violet-600/50 hover:scale-[1.02] active:scale-[0.98] transition-all"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Start Free</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-800/60 transition-colors"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-3 pt-3 pb-5 border-t border-white/10 bg-zinc-950/95 backdrop-blur-2xl rounded-2xl p-4 shadow-2xl">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 text-sm font-medium text-zinc-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <div className="h-px bg-white/10 my-2" />
              <div className="flex flex-col gap-2 pt-1">
                <a
                  href="#pricing"
                  className="w-full text-center py-2 text-sm font-medium text-zinc-300 hover:text-white rounded-lg bg-zinc-900 border border-white/10"
                >
                  Sign In
                </a>
                <a
                  href="#pricing"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-violet-600 to-cyan-500 shadow-md shadow-violet-600/30"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Start Free Trial</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
