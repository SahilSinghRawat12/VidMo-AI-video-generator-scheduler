import { Navbar } from "@/components/landing/navbar";
import { Hero } from "@/components/landing/hero";
import { PlatformMarquee } from "@/components/landing/platform-marquee";
import { InteractiveStudio } from "@/components/landing/interactive-studio";
import { FeaturesBento } from "@/components/landing/features-bento";
import { ChannelShowcase } from "@/components/landing/channel-showcase";
import { HowItWorks } from "@/components/landing/how-it-works";
import { Testimonials } from "@/components/landing/testimonials";
import { Pricing } from "@/components/landing/pricing";
import { FAQ } from "@/components/landing/faq";
import { CtaBanner } from "@/components/landing/cta-banner";
import { Footer } from "@/components/landing/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white selection:bg-violet-500/30 selection:text-violet-200">
      {/* Navigation Header */}
      <Navbar />

      {/* Main Landing Page Flow */}
      <main>
        {/* 1. Hero Section with Interactive Video Studio & Auto-Scheduler preview */}
        <Hero />

        {/* 2. Platform Integrations Marquee (YouTube, Instagram, TikTok, Email) */}
        <PlatformMarquee />

        {/* 3. Interactive AI Video Generator & Scheduler Simulator */}
        <InteractiveStudio />

        {/* 4. Core Capabilities Bento Grid */}
        <FeaturesBento />

        {/* 5. Deep-Dive Channel Showcase (YouTube Shorts, TikTok, IG Reels, Email) */}
        <ChannelShowcase />

        {/* 6. 3-Step "How It Works" Visual Roadmap */}
        <HowItWorks />

        {/* 7. Creator Wall of Love & Growth Metrics */}
        <Testimonials />

        {/* 8. Pricing Tiers (Monthly vs. Annual with 20% discount) */}
        <Pricing />

        {/* 9. Interactive FAQ Accordion */}
        <FAQ />

        {/* 10. High-Impact Closing CTA Banner */}
        <CtaBanner />
      </main>

      {/* 11. Comprehensive Multi-Column SaaS Footer */}
      <Footer />
    </div>
  );
}
