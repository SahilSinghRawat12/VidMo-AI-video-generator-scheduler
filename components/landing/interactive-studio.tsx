"use client";

import { useState } from "react";
import {
  Wand2,
  Calendar,
  Sparkles,
  Play,
  Volume2,
  Clock,
  CheckCircle2,
  Flame,
  ArrowRight,
  RefreshCw,
  Sliders,
  Check,
  Zap,
} from "lucide-react";

interface NicheData {
  id: string;
  name: string;
  emoji: string;
  title: string;
  hook: string;
  fullScript: string;
  hookScore: number;
  duration: string;
  suggestedTags: string[];
  scheduleTimes: string[];
}

const NICHES: NicheData[] = [
  {
    id: "psychology",
    name: "Dark Psychology",
    emoji: "🧠",
    title: "3 Subtle Tricks to Read Anyone in 5 Seconds",
    hook: "If someone looks at your lips during a conversation, they're thinking of kissing you. But if they glance at your forehead...",
    fullScript:
      "If someone looks at your lips during a conversation, they're thinking of kissing you. But if they glance at your forehead, they feel intimidated. To test if someone is lying, ask them to tell their story backwards. Notice how their eye movement shifts. Save this before the algorithm deletes it.",
    hookScore: 98,
    duration: "28s",
    suggestedTags: ["#psychology", "#bodylanguage", "#mindtricks", "#viralshorts"],
    scheduleTimes: ["Today 6:30 PM (Peak)", "Tomorrow 8:00 AM"],
  },
  {
    id: "wealth",
    name: "Wealth & Finance",
    emoji: "💰",
    title: "The $100/Day AI Side Hustle Nobody Talks About",
    hook: "Do not start dropshipping in 2026. Instead, do this 1-hour AI workflow that generated $3,400 last week without showing your face...",
    fullScript:
      "Do not start dropshipping in 2026. Instead, do this 1-hour AI workflow that generated $3,400 last week without showing your face. Step 1: Find trending Reddit problems. Step 2: Use AI to turn solutions into 30-second automated video digests. Step 3: Monetize with high-ticket affiliate programs.",
    hookScore: 97,
    duration: "34s",
    suggestedTags: ["#sidehustle", "#passiveincome", "#financehacks", "#wealth"],
    scheduleTimes: ["Today 12:15 PM (Lunch Rush)", "Tomorrow 7:45 PM"],
  },
  {
    id: "tech",
    name: "AI & Future Tech",
    emoji: "⚡",
    title: "This New AI Tool Just Replaced a $10,000 Video Agency",
    hook: "You don't need a camera crew, microphone, or video editor anymore. Watch what happens when I give this AI just 1 sentence...",
    fullScript:
      "You don't need a camera crew, microphone, or video editor anymore. Watch what happens when I give this AI just 1 sentence. In 18 seconds, it wrote a viral script, cloned a studio voice, edited kinetic typography, and queued it to 4 social channels. The creator economy has permanently changed.",
    hookScore: 99,
    duration: "31s",
    suggestedTags: ["#aitools", "#futuretech", "#automation", "#creatoreconomy"],
    scheduleTimes: ["Today 5:00 PM (Tech Peak)", "Tomorrow 9:30 AM"],
  },
  {
    id: "mindset",
    name: "Stoic Motivation",
    emoji: "⚔️",
    title: "Marcus Aurelius: The Rule of Not Reacting",
    hook: "When someone insults you, do not defend yourself. Marcus Aurelius taught a secret 3-second pause that makes your enemies fear you...",
    fullScript:
      "When someone insults you, do not defend yourself. Marcus Aurelius taught a secret 3-second pause that makes your enemies fear you. Never let another human's mood dictate your inner peace. If you want power over people, first gain absolute control over your impulses.",
    hookScore: 95,
    duration: "26s",
    suggestedTags: ["#stoicism", "#mindset", "#marcusaurelius", "#discipline"],
    scheduleTimes: ["Tomorrow 6:00 AM (Morning Mindset)", "Tomorrow 8:00 PM"],
  },
];

const VOICES = [
  { id: "marcus", name: "Marcus", tone: "Deep Cinematic", accent: "American", lang: "EN" },
  { id: "elena", name: "Elena", tone: "Energetic Storyteller", accent: "British", lang: "EN" },
  { id: "kai", name: "Kai", tone: "Fast-Paced Tech Explainer", accent: "American", lang: "EN" },
  { id: "sofia", name: "Sofia", tone: "Luxury & Calm Wisdom", accent: "Australian", lang: "EN" },
];

export function InteractiveStudio() {
  const [selectedNiche, setSelectedNiche] = useState<NicheData>(NICHES[0]);
  const [selectedVoice, setSelectedVoice] = useState(VOICES[0]);
  const [cadence, setCadence] = useState<"1x" | "2x" | "3x">("2x");
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedSuccess, setGeneratedSuccess] = useState(false);

  const handleSimulateGeneration = () => {
    setIsGenerating(true);
    setGeneratedSuccess(false);
    setTimeout(() => {
      setIsGenerating(false);
      setGeneratedSuccess(true);
    }, 900);
  };

  return (
    <section id="studio" className="relative py-24 bg-zinc-950 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-violet-600/15 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-cyan-600/15 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/30 text-xs font-semibold text-violet-300 mb-4">
            <Sparkles className="w-3.5 h-3.5 text-violet-400" />
            <span>Interactive Live Simulator</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Experience the <span className="text-gradient-purple">Autopilot Generator</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-zinc-400">
            Pick a niche, voice actor, and posting frequency. Watch how Vidmo crafts viral hooks, renders captions, and builds an auto-schedule queue in seconds.
          </p>
        </div>

        {/* Interactive Workspace Card */}
        <div className="rounded-3xl bg-zinc-900/70 border border-white/10 backdrop-blur-2xl p-6 sm:p-8 lg:p-10 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            {/* Left Controls Configuration (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              {/* Step 1: Select Niche */}
              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-zinc-400 flex items-center justify-between mb-3">
                  <span>1. Choose Video Niche</span>
                  <span className="text-[11px] text-violet-400 font-semibold lowercase">click to preview</span>
                </label>
                <div className="grid grid-cols-2 gap-2.5">
                  {NICHES.map((niche) => (
                    <button
                      key={niche.id}
                      onClick={() => {
                        setSelectedNiche(niche);
                        setGeneratedSuccess(false);
                      }}
                      className={`p-3 rounded-xl border text-left transition-all flex items-center gap-2.5 ${
                        selectedNiche.id === niche.id
                          ? "bg-violet-600/20 border-violet-500 text-white shadow-lg shadow-violet-500/15"
                          : "bg-zinc-950/60 border-white/10 text-zinc-400 hover:border-white/25 hover:text-zinc-200"
                      }`}
                    >
                      <span className="text-lg">{niche.emoji}</span>
                      <span className="text-xs sm:text-sm font-semibold truncate">{niche.name}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 2: Choose AI Voice */}
              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-zinc-400 flex items-center justify-between mb-3">
                  <span>2. Select AI Voice Profile</span>
                  <span className="text-[11px] text-cyan-400 font-semibold">120+ lifelike voices</span>
                </label>
                <div className="space-y-2">
                  {VOICES.map((voice) => (
                    <div
                      key={voice.id}
                      onClick={() => {
                        setSelectedVoice(voice);
                        setGeneratedSuccess(false);
                      }}
                      className={`p-3 rounded-xl border cursor-pointer transition-all flex items-center justify-between ${
                        selectedVoice.id === voice.id
                          ? "bg-cyan-950/40 border-cyan-500/60 text-white shadow-md shadow-cyan-500/10"
                          : "bg-zinc-950/40 border-white/10 text-zinc-400 hover:border-white/20 hover:text-zinc-300"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                            selectedVoice.id === voice.id
                              ? "bg-cyan-500 text-black font-bold"
                              : "bg-zinc-800 text-zinc-400"
                          }`}
                        >
                          <Volume2 className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-xs font-bold text-white flex items-center gap-1.5">
                            {voice.name}
                            <span className="text-[10px] px-1.5 py-0.2 rounded bg-white/10 text-zinc-300 font-normal">
                              {voice.accent}
                            </span>
                          </div>
                          <div className="text-[11px] text-zinc-400">{voice.tone}</div>
                        </div>
                      </div>
                      {selectedVoice.id === voice.id && (
                        <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Step 3: Cadence */}
              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-zinc-400 block mb-2.5">
                  3. Auto-Schedule Cadence
                </label>
                <div className="grid grid-cols-3 gap-2 p-1.5 bg-zinc-950 rounded-xl border border-white/10">
                  <button
                    onClick={() => setCadence("1x")}
                    className={`py-2 rounded-lg text-xs font-semibold transition-all ${
                      cadence === "1x"
                        ? "bg-violet-600 text-white shadow"
                        : "text-zinc-400 hover:text-white"
                    }`}
                  >
                    1 Video / Day
                  </button>
                  <button
                    onClick={() => setCadence("2x")}
                    className={`py-2 rounded-lg text-xs font-semibold transition-all ${
                      cadence === "2x"
                        ? "bg-violet-600 text-white shadow"
                        : "text-zinc-400 hover:text-white"
                    }`}
                  >
                    2 Videos / Day
                  </button>
                  <button
                    onClick={() => setCadence("3x")}
                    className={`py-2 rounded-lg text-xs font-semibold transition-all ${
                      cadence === "3x"
                        ? "bg-violet-600 text-white shadow"
                        : "text-zinc-400 hover:text-white"
                    }`}
                  >
                    3 Videos / Day
                  </button>
                </div>
              </div>

              {/* Action Button */}
              <button
                onClick={handleSimulateGeneration}
                disabled={isGenerating}
                className="w-full py-4 rounded-xl font-bold text-white bg-gradient-to-r from-violet-600 via-indigo-600 to-cyan-500 hover:opacity-95 shadow-lg shadow-violet-600/30 flex items-center justify-center gap-2.5 transition-all disabled:opacity-50"
              >
                {isGenerating ? (
                  <>
                    <RefreshCw className="w-4 h-4 animate-spin text-white" />
                    <span>Rendering AI Script & Voice...</span>
                  </>
                ) : (
                  <>
                    <Wand2 className="w-4 h-4" />
                    <span>Simulate AI Generation</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </div>

            {/* Right Interactive Preview Display (7 cols) */}
            <div className="lg:col-span-7 bg-zinc-950/80 rounded-2xl border border-white/10 p-6 flex flex-col justify-between">
              <div>
                {/* Preview Top Header */}
                <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-white/10">
                  <div>
                    <span className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider block">
                      AI Generated Output
                    </span>
                    <h4 className="text-base sm:text-lg font-bold text-white flex items-center gap-2 mt-0.5">
                      <span>{selectedNiche.emoji}</span>
                      <span>{selectedNiche.title}</span>
                    </h4>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold flex items-center gap-1.5">
                      <Flame className="w-3.5 h-3.5" />
                      <span>{selectedNiche.hookScore}% Hook Score</span>
                    </div>
                    <span className="text-xs font-mono text-zinc-400 bg-zinc-900 px-2 py-1 rounded border border-white/10">
                      {selectedNiche.duration}
                    </span>
                  </div>
                </div>

                {/* Viral Hook Spotlight */}
                <div className="my-5 p-4 rounded-xl bg-violet-950/30 border border-violet-500/30 relative">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-violet-400 block mb-1">
                    ⚡ 3-Second Viral Hook (Retention Master)
                  </span>
                  <p className="text-sm font-semibold text-white leading-relaxed italic">
                    &ldquo;{selectedNiche.hook}&rdquo;
                  </p>
                </div>

                {/* Script snippet with auto-highlighted captions */}
                <div className="mb-5">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-zinc-400 block mb-2">
                    Kinetic Caption Preview
                  </span>
                  <div className="p-4 rounded-xl bg-zinc-900/80 border border-white/10 text-xs sm:text-sm text-zinc-300 leading-relaxed font-sans">
                    {selectedNiche.fullScript.split(". ").map((sentence, idx) => (
                      <span key={idx} className="mr-1">
                        {idx === 0 ? (
                          <strong className="text-yellow-400 bg-yellow-400/10 px-1 py-0.5 rounded">
                            {sentence}.
                          </strong>
                        ) : idx === 1 ? (
                          <strong className="text-cyan-300">
                            {sentence}.
                          </strong>
                        ) : (
                          <span>{sentence}. </span>
                        )}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Multi-Channel Auto-Schedule Matrix Preview */}
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-zinc-400 block mb-2.5">
                    Automated Multi-Platform Distribution Queue ({cadence})
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {/* Slot 1: YouTube Shorts */}
                    <div className="p-2.5 rounded-xl bg-zinc-900/60 border border-white/10 flex items-center justify-between text-xs">
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-rose-500" />
                        <div>
                          <div className="font-semibold text-white">YouTube Shorts</div>
                          <div className="text-[10px] text-zinc-400">{selectedNiche.scheduleTimes[0]}</div>
                        </div>
                      </div>
                      <span className="text-[10px] text-emerald-400 font-medium">Auto-Queued</span>
                    </div>

                    {/* Slot 2: TikTok */}
                    <div className="p-2.5 rounded-xl bg-zinc-900/60 border border-white/10 flex items-center justify-between text-xs">
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-cyan-400" />
                        <div>
                          <div className="font-semibold text-white">TikTok Video</div>
                          <div className="text-[10px] text-zinc-400">{selectedNiche.scheduleTimes[0]}</div>
                        </div>
                      </div>
                      <span className="text-[10px] text-cyan-400 font-medium">Direct Sync</span>
                    </div>

                    {/* Slot 3: Instagram */}
                    <div className="p-2.5 rounded-xl bg-zinc-900/60 border border-white/10 flex items-center justify-between text-xs">
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-pink-500" />
                        <div>
                          <div className="font-semibold text-white">Instagram Reels</div>
                          <div className="text-[10px] text-zinc-400">{selectedNiche.scheduleTimes[1]}</div>
                        </div>
                      </div>
                      <span className="text-[10px] text-purple-400 font-medium">Scheduled</span>
                    </div>

                    {/* Slot 4: Email */}
                    <div className="p-2.5 rounded-xl bg-zinc-900/60 border border-white/10 flex items-center justify-between text-xs">
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-amber-400" />
                        <div>
                          <div className="font-semibold text-white">Email Video Card</div>
                          <div className="text-[10px] text-zinc-400">Newsletter Drop</div>
                        </div>
                      </div>
                      <span className="text-[10px] text-amber-400 font-medium">GIF Rendered</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Tags and CTA footer */}
              <div className="mt-6 pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-1.5 flex-wrap">
                  {selectedNiche.suggestedTags.map((tag) => (
                    <span key={tag} className="text-[11px] font-mono text-zinc-400 bg-white/5 px-2 py-0.5 rounded">
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href="#pricing"
                  className="inline-flex items-center gap-2 text-xs font-bold text-violet-400 hover:text-violet-300 transition-colors"
                >
                  <span>Auto-Schedule Your Channel Free</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
