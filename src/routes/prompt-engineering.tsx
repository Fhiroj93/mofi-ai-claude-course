import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, AnimatePresence } from "motion/react";
import {
  ArrowDown,
  ArrowLeft,
  ArrowUpRight,
  Sparkles,
  Target,
  MapPin,
  LayoutList,
  Focus,
  UserSquare2,
  Lightbulb,
  Ruler,
  Footprints,
  Tags,
  ShieldCheck,
  Repeat2,
  Brain,
  Zap,
  UserCog,
  Swords,
  MessageSquare,
  Bot,
  Terminal,
  type LucideIcon,
} from "lucide-react";
import { FeaturesSideNav, type NavSection } from "@/components/presentation/FeaturesSideNav";
import { Reveal, Kicker } from "@/components/presentation/primitives";

type Concept = {
  title: string;
  icon: LucideIcon;
  explainer: string;
  before: string;
  after: string;
};

const FOUNDATION: Concept[] = [
  {
    title: "Be Specific",
    icon: Target,
    explainer: "Vague prompts get vague answers. Narrow the ask and the output sharpens.",
    before: "write about dogs",
    after:
      "I'm writing a blog post for new pet owners. Write a 200-word intro section for someone bringing home their first golden retriever puppy. Cover: what temperament to expect in the first 6 months, how much daily exercise a puppy actually needs vs an adult dog, and one mistake almost every first-time owner makes with crate training. Keep the tone warm and reassuring, not clinical.",
  },
  {
    title: "Give Context",
    icon: MapPin,
    explainer: "The model can't read your mind. Situating yourself changes the whole answer.",
    before: "explain recursion",
    after:
      "I'm learning to code and just finished a section on for-loops and while-loops last week. Now I'm stuck on recursion and keep mentally substituting it with iteration. Explain recursion assuming I understand loops but have never seen a function call itself. Start with a real-world analogy (like Russian nesting dolls or a line of people passing a message backward), then show one simple code example, and explicitly point out where my \"loop brain\" is going to trip me up.",
  },
  {
    title: "State the Format",
    icon: LayoutList,
    explainer: "Tell it how you want the output shaped, not just what it should contain.",
    before: "compare React and Vue",
    after:
      "I'm deciding which frontend framework to learn first as a junior developer job-hunting in 2026. Compare React vs Vue as a table with exactly these rows: learning curve for beginners, current job market demand, ecosystem/library maturity, performance for small-to-medium apps, and community support quality. Keep each cell to one short sentence — I'll ask follow-up questions on anything I want expanded.",
  },
  {
    title: "One Task at a Time",
    icon: Focus,
    explainer: "Stacking five asks in one line usually loses two of them.",
    before:
      "summarize this article, translate it to Spanish, rewrite it in a casual tone, turn it into a tweet thread, and draft a follow-up email about it",
    after:
      "I have five things I eventually want done with this article, but let's not do them all at once. Start with just a 3-bullet summary of the core argument. Once I confirm that summary captures it correctly, I'll tell you which of the other four steps to do next — we'll go one at a time so nothing gets garbled in translation.",
  },
];

const INTERMEDIATE: Concept[] = [
  {
    title: "Role / Persona Framing",
    icon: UserSquare2,
    explainer: "Assigning a role instantly changes tone, depth, and vocabulary.",
    before: "give me feedback on this headline",
    after:
      "Act as a senior conversion copywriter who has run A/B tests on hundreds of SaaS landing pages and has a track record of doubling click-through rates. I'm going to paste a headline for our product's landing page hero section. Critique it specifically on: whether it states a concrete benefit vs a vague promise, whether it creates curiosity without being clickbait, and how it would likely perform against a control in an A/B test. Then give me 3 alternative headlines that fix the biggest issue you find.",
  },
  {
    title: "Few-Shot Examples",
    icon: Lightbulb,
    explainer: "Showing 2–3 example outputs teaches the pattern faster than describing it.",
    before: "write product taglines in our voice",
    after:
      "Here are 3 taglines we already use and love: \"Built for speed, not spreadsheets.\" / \"Automation that doesn't feel robotic.\" / \"Less setup, more shipping.\" Study the rhythm — they're short, they contrast two things, and they never stack more than one adjective before a noun. Write 5 more taglines for our new analytics feature that match this exact pattern and tone, not just the general topic.",
  },
  {
    title: "Constraints & Guardrails",
    icon: Ruler,
    explainer: "Word limits, tone bans, and structure rules turn output into something usable.",
    before: "summarize this article",
    after:
      "Summarize this article in exactly 3 sentences: the first sentence states the core problem, the second states the method or approach used, the third states the key finding or outcome. No jargon, no bullet points, no sentence longer than 20 words, and don't use hedging phrases like \"may suggest\" or \"could potentially indicate\" — commit to what the article actually claims.",
  },
  {
    title: "Step-by-Step Reasoning",
    icon: Footprints,
    explainer: "Asking it to think it through before answering measurably improves accuracy.",
    before: "what's the answer?",
    after:
      "A train leaves Station A at 60mph. Thirty minutes later, a second train leaves the same station on the same track at 90mph. I want to know when and where the second train catches up to the first. Before giving me the final answer, walk through your reasoning step by step — define your variables first, set up the equations, then solve. I want to be able to follow your logic, not just see a number.",
  },
];

const PATTERNS: Concept[] = [
  {
    title: "Chain-of-Thought",
    icon: Brain,
    explainer: "Force the model to reason in sequence before committing to a final answer.",
    before: "what's 15% tip on $86.40?",
    after:
      "My restaurant bill came to $86.40 and I want to leave an 18% tip because the service was genuinely great. Show me the math step by step so I can mentally follow along and double-check it myself, then give me the final total including the tip, rounded to the nearest dollar since I'm paying cash.",
  },
  {
    title: "Zero-Shot with Constraints",
    icon: Zap,
    explainer: "No examples, but tight rules — leans on precision instead of demonstration.",
    before: "summarize this",
    after:
      "Summarize this 12-page research paper in exactly 3 sentences: one sentence stating the research problem, one stating the methodology, one stating the key finding. No jargon, no bullet points, and no hedging language like \"may suggest\" — I need to know what they actually concluded, not a hedge-everything academic summary.",
  },
  {
    title: "Persona for the Reader",
    icon: UserCog,
    explainer: "End the prompt with who it's for — vocabulary and analogies shift automatically.",
    before: "explain crypto",
    after:
      "Explain what a blockchain is to my nephew, who is 12 years old and spends most of his free time playing Minecraft and Roblox. Use a game-world analogy he'd actually recognize — like server rules everyone has to follow, or item trading logs that can't be faked. Don't mention investing, trading, or \"getting rich\" at all in this explanation — I just want him to understand the concept, not get excited about speculation.",
  },
  {
    title: "Devil's Advocate",
    icon: Swords,
    explainer: "Ask it to argue against your idea — surfaces weaknesses before your audience does.",
    before: "review my pitch",
    after:
      "Here's my pitch for a subscription coffee-bean delivery app targeting home baristas. Don't tell me what's good about it — I've heard that from friends already. Instead, argue the strongest possible case for why a VC would pass on this in a pitch meeting. Be as skeptical and specific as a real investor would be about market size, differentiation, and unit economics — don't pull punches to spare my feelings.",
  },
];

const ADVANCED: Concept[] = [
  {
    title: "Structured Tags",
    icon: Tags,
    explainer:
      "Labelled sections like <context>, <task>, <output> keep parts of a complex prompt from bleeding together.",
    before:
      "We're a B2B SaaS onboarding tool for IT admins and I need an email that goes out after signup, keep it short with one button and don't make it sound salesy, plain text is fine",
    after:
      "<context>We're a B2B SaaS onboarding tool. Our audience is IT admins, not end users — they're busy, skeptical of marketing fluff, and evaluate tools on capability, not excitement.</context>\n<task>Write the \"Getting Started\" email sent immediately after signup.</task>\n<constraints>Under 120 words. Exactly one call-to-action button, no more. No exclamation points. No phrases like \"we're thrilled\" or \"excited to have you.\"</constraints>\n<output>Plain text, ready to paste directly into our email tool — no markdown formatting, no placeholder brackets.</output>",
  },
  {
    title: "Negative Prompting",
    icon: ShieldCheck,
    explainer: "Naming what to avoid is often more powerful than describing what you want.",
    before: "write a product description for our noise-canceling headphones",
    after:
      "Write a product description for our noise-canceling headphones. Do NOT use the words \"premium,\" \"revolutionary,\" \"game-changing,\" or \"seamless\" — they show up in every competitor's copy and I'm tired of them. Do NOT open with a rhetorical question. Do NOT mention battery life in the first paragraph — save that for the specs section. Focus the opening on the actual in-ear silence you get on a loud commute.",
  },
];

type RefItem = { cmd: string; desc: string };

const REFERENCE: Record<"chat" | "cowork" | "code", { label: string; icon: LucideIcon; items: RefItem[] }> = {
  chat: {
    label: "Claude.ai",
    icon: MessageSquare,
    items: [
      { cmd: "/deepthink", desc: "Reason more carefully before answering complex questions." },
      { cmd: "/overthink", desc: "Explore edge cases and assumptions before concluding." },
      { cmd: "/eli5", desc: "Explain as if teaching a five-year-old." },
      { cmd: "/layered", desc: "Answer at beginner, intermediate, and expert levels." },
      { cmd: "/unpack", desc: "Break a complex topic into simple, ordered parts." },
      { cmd: "/mirror", desc: "Rewrite content in your writing style (paste a sample)." },
      { cmd: "/rephrase", desc: "Reword the same idea in a different voice or angle." },
      { cmd: "/polish", desc: "Tighten grammar, clarity, and professionalism." },
      { cmd: "/trim", desc: "Cut unnecessary words while preserving meaning." },
      { cmd: "/flow", desc: "Improve readability and sentence transitions." },
      { cmd: "/punch", desc: "Make writing sharper, stronger, more direct." },
      { cmd: "/hook", desc: "Generate a strong opening line." },
      { cmd: "/ghost", desc: "Natural human tone — sounds less like AI." },
      { cmd: "/silent", desc: "Skip the preamble, jump straight to the answer." },
      { cmd: "/godmode", desc: "Max detail, nothing held back." },
      { cmd: "/devil", desc: "Argue the opposite stance to stress-test the idea." },
      { cmd: "/system", desc: "Define an AI behavior or role upfront." },
      { cmd: "/autoprompt", desc: "Turn a rough idea into a better prompt." },
      { cmd: "/digest", desc: "Summarize a long piece of content into essentials." },
      { cmd: "/chain", desc: "Split a request into sequential, dependent steps." },
    ],
  },
  cowork: {
    label: "Cowork",
    icon: Bot,
    items: [
      { cmd: "/masterclass", desc: "Teach a topic like an expert instructor, with examples." },
      { cmd: "/teachme", desc: "Build a structured lesson with exercises." },
      { cmd: "/crashcourse", desc: "Quick but complete overview of a topic." },
      { cmd: "/bootcamp", desc: "Step-by-step roadmap from zero to advanced." },
      { cmd: "/drill", desc: "Generate practice questions or exercises." },
      { cmd: "/speedrun", desc: "The fastest practical way to learn something." },
      { cmd: "/levelup", desc: "Suggest the next skill or concept to master." },
      { cmd: "/pareto", desc: "Focus on the 20% of work that drives 80% of results." },
      { cmd: "/swot", desc: "Strengths, weaknesses, opportunities, threats." },
      { cmd: "/wargame", desc: "Simulate competition and strategic responses." },
      { cmd: "/premortem", desc: "Assume it failed — identify the likely reasons." },
      { cmd: "/leverage", desc: "Find the highest-impact action available." },
      { cmd: "/audit", desc: "Review and critique existing work with improvements." },
      { cmd: "/bottleneck", desc: "Identify the main constraint limiting progress." },
      { cmd: "/scenario", desc: "Explore multiple future scenarios and outcomes." },
      { cmd: "/gapfinder", desc: "Surface missing info, skills, or weak points." },
      { cmd: "/blindspots", desc: "Reveal overlooked risks, assumptions, opportunities." },
      { cmd: "/invert", desc: "Work backward from the desired outcome." },
      { cmd: "/xray", desc: "Find hidden causes, patterns, root problems." },
      { cmd: "/chainlogic", desc: "Show the full logical chain behind the solution." },
    ],
  },
  code: {
    label: "Claude Code",
    icon: Terminal,
    items: [
      { cmd: "/clear", desc: "Reset the current conversation context." },
      { cmd: "/compact", desc: "Summarize context to free up space." },
      { cmd: "/review", desc: "Review the current changes or diff." },
      { cmd: "/init", desc: "Initialize a new project or setup." },
      { cmd: "/model", desc: "Switch the active model." },
      { cmd: "/permissions", desc: "Manage tool and file access permissions." },
      { cmd: "/mcp", desc: "Manage connected MCP servers." },
      { cmd: "/agents", desc: "Configure or launch sub-agents." },
      { cmd: "/debug", desc: "Find and fix bugs or errors." },
      { cmd: "/refactor", desc: "Restructure code without changing behavior." },
      { cmd: "/optimize", desc: "Improve speed, efficiency, or performance." },
      { cmd: "/convert", desc: "Translate between languages, formats, or frameworks." },
      { cmd: "/shipit", desc: "Prepare production-ready code." },
      { cmd: "/architect", desc: "Design scalable system architecture." },
      { cmd: "/apibuild", desc: "Create APIs with endpoints and docs." },
      { cmd: "/testit", desc: "Generate unit, integration, or E2E tests." },
      { cmd: "/buildme", desc: "Build a complete app, tool, or project." },
      { cmd: "/prototype", desc: "Ship a working proof-of-concept." },
      { cmd: "/blueprint", desc: "Design the overall project structure." },
      { cmd: "/wireframe", desc: "Sketch a UI/UX layout before development." },
    ],
  },
};

const SECTIONS: NavSection[] = [
  { id: "hero", label: "Intro" },
  { id: "foundation", label: "Foundation" },
  { id: "intermediate", label: "Leveling up" },
  { id: "patterns", label: "Patterns" },
  { id: "advanced", label: "Advanced" },
  { id: "loop", label: "Loop" },
  { id: "reference", label: "Reference" },
  { id: "closing", label: "Closing" },
];

export const Route = createFileRoute("/prompt-engineering")({
  head: () => ({
    meta: [
      { title: "Prompt Engineering: From Basics to Mastery" },
      {
        name: "description",
        content:
          "How to actually talk to an AI so it gives you what you meant — a progression from foundations to loop engineering, with a quick-reference command library.",
      },
      { property: "og:title", content: "Prompt Engineering: From Basics to Mastery" },
      {
        property: "og:description",
        content:
          "A visual, editorial primer on prompting — foundations, patterns, advanced techniques, and a full command reference.",
      },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <main className="relative min-h-screen w-full overflow-x-clip bg-background text-foreground">
      <FeaturesSideNav sections={SECTIONS} />

      <Link
        to="/"
        className="fixed left-6 top-6 z-50 inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/40 px-3.5 py-2 text-xs uppercase tracking-widest text-muted-foreground backdrop-blur transition-all hover:border-white/30 hover:text-foreground"
      >
        <ArrowLeft className="h-3.5 w-3.5" />
        All topics
      </Link>

      <PromptHero />

      <TierSection
        id="foundation"
        tier="01"
        label="The Foundation"
        level="Beginner"
        heading={<>Start here. <span className="text-claude">Say what you mean.</span></>}
        blurb="The four habits that separate a usable answer from a guess. Get these right before anything else — everything more advanced builds on top of them."
        concepts={FOUNDATION}
      />

      <TierSection
        id="intermediate"
        tier="02"
        label="Leveling Up"
        level="Intermediate"
        heading={<>Shape the response <span className="text-claude">before it starts.</span></>}
        blurb="Once the basics are solid, the next lever is shaping the response before Claude even starts writing — through role, examples, and explicit boundaries."
        concepts={INTERMEDIATE}
      />

      <TierSection
        id="patterns"
        tier="03"
        label="Prompting Patterns"
        level="Intermediate+"
        heading={<>Reusable moves <span className="text-claude">that just work.</span></>}
        blurb="These are named, reusable moves — you don't invent them each time, you just reach for the right one for the situation in front of you."
        concepts={PATTERNS}
      />

      <TierSection
        id="advanced"
        tier="04"
        label="Advanced Techniques"
        level="Advanced"
        heading={<>Compose prompts <span className="text-claude">like software.</span></>}
        blurb="Structure, iteration, decomposition, and self-review — how power users actually work."
        concepts={ADVANCED}
      />

      <LoopSection />
      <ReferenceSection />
      <ClosingSection />
    </main>
  );
}

function PromptHero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen w-full items-center justify-center overflow-hidden grain px-6 py-24"
      style={{
        background:
          "radial-gradient(1200px 600px at 30% 20%, oklch(0.72 0.14 45 / 0.28), transparent 60%), radial-gradient(900px 500px at 80% 80%, oklch(0.72 0.14 45 / 0.14), transparent 60%), var(--ink-2)",
      }}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />
      <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center text-center">
        <Reveal>
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 backdrop-blur">
            <Sparkles className="h-3.5 w-3.5 text-claude" />
            <span className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
              A prompting primer · 2025
            </span>
          </div>
        </Reveal>

        <div className="relative mb-14 flex h-[240px] w-full items-center justify-center md:h-[300px]">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: [0.2, 0.7, 0.2, 1] }}
            className="relative orb-anim"
          >
            <div
              className="grid h-48 w-48 place-items-center rounded-[2rem] md:h-56 md:w-56"
              style={{
                background:
                  "radial-gradient(circle at 30% 30%, oklch(0.88 0.15 45), oklch(0.55 0.14 40) 60%, oklch(0.22 0.08 40) 100%)",
                boxShadow:
                  "0 0 160px oklch(0.72 0.14 45 / 0.5), inset -20px -30px 60px oklch(0 0 0 / 0.4)",
              }}
            >
              <span className="text-display text-6xl text-white/90 md:text-7xl">/</span>
            </div>
          </motion.div>
        </div>

        <Reveal delay={0.3}>
          <h1 className="text-display text-5xl md:text-7xl lg:text-[92px]">
            Prompt Engineering:<br />
            <span className="text-claude">From Basics to Mastery.</span>
          </h1>
        </Reveal>

        <Reveal delay={0.5}>
          <p className="mt-8 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
            How to actually talk to an AI so it gives you what you meant — not
            what your prompt literally said.
          </p>
        </Reveal>

        <Reveal delay={0.7}>
          <a
            href="#foundation"
            className="mt-14 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-sm text-foreground/90 backdrop-blur transition-all hover:border-claude/40 hover:bg-claude/10"
          >
            Start with the foundation
            <ArrowDown className="h-4 w-4 animate-bounce" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}

function TierSection({
  id,
  tier,
  label,
  level,
  heading,
  blurb,
  concepts,
}: {
  id: string;
  tier: string;
  label: string;
  level: string;
  heading: React.ReactNode;
  blurb: string;
  concepts: Concept[];
}) {
  return (
    <section id={id} className="relative min-h-screen w-full px-6 py-24 md:px-12 md:py-32">
      <div className="mx-auto grid max-w-7xl grid-cols-12 gap-6">
        <div className="col-span-12 mb-10 flex items-center justify-between">
          <Kicker tone="claude">
            {tier} · {label}
          </Kicker>
          <span className="text-kicker">{level}</span>
        </div>

        <div className="col-span-12 lg:col-span-5">
          <Reveal>
            <h2 className="text-display text-4xl md:text-5xl lg:text-6xl">{heading}</h2>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mt-8 max-w-md text-base leading-relaxed text-muted-foreground md:text-lg">
              {blurb}
            </p>
          </Reveal>
        </div>

        <div className="col-span-12 lg:col-span-7">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {concepts.map((c, i) => (
              <Reveal key={c.title} delay={0.1 + i * 0.06}>
                <ConceptCard concept={c} index={i + 1} />
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ConceptCard({ concept, index }: { concept: Concept; index: number }) {
  const Icon = concept.icon;
  return (
    <motion.div
      whileHover={{ y: -3 }}
      transition={{ duration: 0.25 }}
      className="card-surface card-surface-hover group relative flex h-full flex-col gap-5 p-6 hover:glow-claude"
    >
      <div className="flex items-start justify-between">
        <div className="grid h-11 w-11 place-items-center rounded-xl bg-claude/12 text-claude ring-1 ring-inset ring-claude/25">
          <Icon className="h-[18px] w-[18px]" />
        </div>
        <span className="text-[10px] uppercase tracking-[0.24em] text-muted-foreground">
          {String(index).padStart(2, "0")}
        </span>
      </div>

      <div>
        <div className="text-display text-xl md:text-[22px]">{concept.title}</div>
        <p className="mt-2 text-[13px] leading-relaxed text-muted-foreground md:text-sm">
          {concept.explainer}
        </p>
      </div>

      <div className="mt-auto flex flex-col gap-2">
        <div className="rounded-lg border border-white/5 bg-white/[0.02] px-3 py-2">
          <div className="text-[9px] uppercase tracking-[0.24em] text-muted-foreground/70">Before</div>
          <div className="mt-1 font-mono text-[12px] text-foreground/70">{concept.before}</div>
        </div>
        <div className="rounded-lg border border-claude/25 bg-claude/[0.06] px-3 py-2">
          <div className="text-[9px] uppercase tracking-[0.24em] text-claude">After</div>
          <div className="mt-1 font-mono text-[12px] text-foreground/90">{concept.after}</div>
        </div>
      </div>
    </motion.div>
  );
}

function LoopSection() {
  const nodes = [
    { label: "Goal", desc: "Define what 'done' looks like" },
    { label: "Generate", desc: "Produce a candidate output" },
    { label: "Evaluate", desc: "Score against the goal" },
    { label: "Refine", desc: "Adjust based on gaps" },
    { label: "Final", desc: "Ship when criteria pass" },
  ];
  return (
    <section
      id="loop"
      className="relative flex min-h-screen w-full items-center overflow-hidden px-6 py-24 md:py-32"
      style={{
        background:
          "radial-gradient(1000px 500px at 20% 30%, oklch(0.72 0.14 45 / 0.18), transparent 60%), radial-gradient(900px 500px at 90% 70%, oklch(0.3 0.05 280 / 0.5), transparent 60%), var(--ink-2)",
      }}
    >
      <div className="mx-auto grid w-full max-w-7xl grid-cols-12 gap-6">
        <div className="col-span-12 mb-10 flex items-center justify-between">
          <Kicker tone="claude">05 · Loop Engineering</Kicker>
          <span className="text-kicker">Emerging</span>
        </div>

        <div className="col-span-12 lg:col-span-5">
          <Reveal>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-claude/30 bg-claude/10 px-3 py-1.5">
              <Repeat2 className="h-3.5 w-3.5 text-claude" />
              <span className="text-[11px] uppercase tracking-[0.22em] text-claude">
                Where prompting is heading
              </span>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="text-display text-4xl md:text-5xl lg:text-6xl">
              From one prompt<br />
              <span className="text-claude">to a closed loop.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-8 max-w-md text-base leading-relaxed text-muted-foreground md:text-lg">
              Instead of a single prompt-and-response, the model (or an agent)
              runs a feedback loop — checking its own output against a defined
              goal and iterating until it passes, without you re-prompting each
              round.
            </p>
          </Reveal>
        </div>

        <div className="col-span-12 lg:col-span-7">
          <Reveal delay={0.15}>
            <div className="card-surface relative p-8 md:p-10">
              <div className="grid grid-cols-1 gap-4 md:grid-cols-5">
                {nodes.map((n, i) => (
                  <div key={n.label} className="relative">
                    <div className="rounded-2xl border border-claude/25 bg-claude/[0.06] p-4 text-center">
                      <div className="text-[10px] uppercase tracking-[0.24em] text-claude">
                        Step {String(i + 1).padStart(2, "0")}
                      </div>
                      <div className="mt-2 text-display text-lg text-foreground">{n.label}</div>
                      <div className="mt-1 text-[11px] leading-snug text-muted-foreground">
                        {n.desc}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex items-center justify-center gap-3 rounded-2xl border border-white/10 bg-white/[0.02] px-5 py-4">
                <Repeat2 className="h-4 w-4 text-claude" />
                <span className="text-[12px] uppercase tracking-[0.22em] text-muted-foreground">
                  Loop until <span className="text-foreground">goal criteria met</span> → then output
                </span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function ReferenceSection() {
  const [tab, setTab] = useState<keyof typeof REFERENCE>("chat");
  const active = REFERENCE[tab];
  return (
    <section id="reference" className="relative min-h-screen w-full px-6 py-24 md:px-12 md:py-32">
      <div className="mx-auto grid max-w-7xl grid-cols-12 gap-6">
        <div className="col-span-12 mb-8 flex items-center justify-between">
          <Kicker tone="claude">06 · Quick Reference</Kicker>
          <span className="text-kicker">Command library</span>
        </div>

        <div className="col-span-12 lg:col-span-8">
          <Reveal>
            <h2 className="text-display text-4xl md:text-5xl lg:text-6xl">
              A pocket library<br />
              <span className="text-claude">of prompting triggers.</span>
            </h2>
          </Reveal>
        </div>
        <div className="col-span-12 lg:col-span-4 lg:pt-4">
          <Reveal delay={0.1}>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Slash-style triggers you can drop into a prompt. Real slash
              commands in Claude Code; conventions and shortcuts in chat and
              Cowork — spot-check the docs before treating any as official.
            </p>
          </Reveal>
        </div>

        <div className="col-span-12 mt-10">
          <Reveal>
            <div className="inline-flex items-center gap-1 rounded-full border border-white/10 bg-white/[0.03] p-1 backdrop-blur">
              {(Object.keys(REFERENCE) as (keyof typeof REFERENCE)[]).map((k) => {
                const t = REFERENCE[k];
                const Icon = t.icon;
                const isActive = tab === k;
                return (
                  <button
                    key={k}
                    onClick={() => setTab(k)}
                    className={`relative inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                      isActive ? "text-claude" : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="ref-tab-active"
                        transition={{ type: "spring", stiffness: 380, damping: 32 }}
                        className="absolute inset-0 rounded-full bg-claude/12 ring-1 ring-inset ring-claude/30"
                      />
                    )}
                    <Icon className="relative h-3.5 w-3.5" />
                    <span className="relative">{t.label}</span>
                  </button>
                );
              })}
            </div>
          </Reveal>
        </div>

        <div className="col-span-12 mt-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={tab}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.35, ease: [0.2, 0.7, 0.2, 1] }}
              className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4"
            >
              {active.items.map((item, i) => (
                <div
                  key={item.cmd}
                  className="card-surface card-surface-hover group flex flex-col gap-2 p-4 hover:glow-claude"
                >
                  <div className="flex items-center justify-between">
                    <code className="font-mono text-[13px] font-semibold text-claude">
                      {item.cmd}
                    </code>
                    <span className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <p className="text-[12px] leading-relaxed text-muted-foreground">
                    {item.desc}
                  </p>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="col-span-12 mt-8">
          <div className="rounded-2xl border border-white/10 bg-white/[0.02] px-5 py-4 text-[12px] leading-relaxed text-muted-foreground">
            <span className="mr-2 rounded-full bg-claude/15 px-2 py-0.5 text-[10px] font-medium uppercase tracking-[0.2em] text-claude">
              Note
            </span>
            Claude Code ships real, documented slash commands. In Claude.ai chat
            and Cowork these behave as prompting conventions — write them as the
            first line of your message and the model will follow the pattern.
          </div>
        </div>
      </div>
    </section>
  );
}

function ClosingSection() {
  return (
    <section
      id="closing"
      className="relative flex min-h-screen w-full items-center overflow-hidden px-6 py-24 md:py-32"
      style={{
        background:
          "radial-gradient(900px 500px at 50% 30%, oklch(0.72 0.14 45 / 0.22), transparent 60%), var(--ink-2)",
      }}
    >
      <div className="mx-auto grid w-full max-w-6xl grid-cols-12 gap-6">
        <div className="col-span-12 mb-10">
          <Kicker tone="claude">07 · Closing</Kicker>
        </div>

        <div className="col-span-12">
          <Reveal>
            <h2 className="text-display text-5xl md:text-7xl lg:text-[88px]">
              Better prompts,<br />
              <span className="text-claude">better everything.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-8 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-xl">
              Prompting is a craft. Get the foundation right, layer on patterns,
              and let the loop close itself.
            </p>
          </Reveal>
        </div>

        <div className="col-span-12 mt-16">
          <Reveal>
            <div className="flex flex-col items-start justify-between gap-6 rounded-3xl border border-white/10 bg-white/[0.02] p-8 md:flex-row md:items-center md:p-10">
              <div>
                <div className="text-kicker">Keep exploring</div>
                <div className="mt-2 text-display text-2xl md:text-3xl">
                  Browse every teardown in the library.
                </div>
              </div>
              <Link
                to="/"
                className="inline-flex shrink-0 items-center gap-2 rounded-full border border-claude/30 bg-claude/10 px-5 py-3 text-sm font-medium text-claude transition-all hover:border-claude/60 hover:bg-claude/15"
              >
                Back to all topics
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
