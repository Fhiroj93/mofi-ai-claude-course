import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowLeft,
  ArrowRight,
  MessageSquare,
  Bot,
  Terminal,
  FolderOpen,
  Files,
  Zap,
  ListChecks,
  Play,
  PackageCheck,
  Search,
  Bug,
  TestTube2,
  RefreshCw,
  Code2,
  Sparkles,
  Lightbulb,
  Mail,
  FileText,
  Braces,
  FolderCog,
  CalendarClock,
  ClipboardList,
  Table2,
  MousePointerClick,
  LogIn,
  Wrench,
  Rocket,
  GitBranch,
  Layers,
  CheckCircle2,
} from "lucide-react";
import { Reveal, Kicker } from "@/components/presentation/primitives";
import { FeaturesSideNav, type NavSection } from "@/components/presentation/FeaturesSideNav";

export const Route = createFileRoute("/three-ways-to-work")({
  head: () => ({
    meta: [
      { title: "Three Ways to Work With Claude — Chat, Cowork, Code" },
      {
        name: "description",
        content:
          "Claude.ai vs Cowork vs Claude Code: same intelligence, three very different jobs — chat, delegate, or build. A visual guide to picking the right one.",
      },
      { property: "og:title", content: "Three Ways to Work With Claude" },
      {
        property: "og:description",
        content: "Same intelligence, three very different jobs — chat, delegate, or build.",
      },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Three Ways to Work With Claude" },
      {
        name: "twitter:description",
        content: "Chat to think. Cowork to delegate. Code to build.",
      },
    ],
  }),
  component: ThreeWaysPage,
});

const NAV: NavSection[] = [
  { id: "hero", label: "Intro" },
  { id: "distinction", label: "One Line" },
  { id: "what", label: "What They Are" },
  { id: "access", label: "Access" },
  { id: "cowork", label: "Cowork" },
  { id: "code", label: "Claude Code" },
  { id: "use-cases", label: "Use Cases" },
  { id: "decide", label: "Decide" },
  { id: "together", label: "Together" },
  { id: "closing", label: "Closing" },
];

type Mode = "chat" | "cowork" | "code";

const TONE: Record<
  Mode,
  {
    label: string;
    word: string;
    text: string;
    bg: string;
    ring: string;
    dot: string;
    glow: string;
    wash: string;
    icon: React.ComponentType<{ className?: string }>;
  }
> = {
  chat: {
    label: "Claude.ai (Chat)",
    word: "Talk",
    text: "text-claude",
    bg: "bg-claude/10",
    ring: "ring-claude/30",
    dot: "bg-claude",
    glow: "glow-claude",
    wash: "radial-gradient(circle, oklch(0.72 0.14 45 / 0.45), transparent 70%)",
    icon: MessageSquare,
  },
  cowork: {
    label: "Claude Cowork",
    word: "Delegate",
    text: "text-chatgpt",
    bg: "bg-chatgpt/10",
    ring: "ring-chatgpt/30",
    dot: "bg-chatgpt",
    glow: "glow-chatgpt",
    wash: "radial-gradient(circle, oklch(0.68 0.13 165 / 0.45), transparent 70%)",
    icon: Bot,
  },
  code: {
    label: "Claude Code",
    word: "Build",
    text: "text-exec",
    bg: "bg-exec/10",
    ring: "ring-exec/30",
    dot: "bg-exec",
    glow: "glow-exec",
    wash: "radial-gradient(circle, oklch(0.68 0.14 265 / 0.45), transparent 70%)",
    icon: Terminal,
  },
};

const MODES: Mode[] = ["chat", "cowork", "code"];

function Tag({ mode }: { mode: Mode }) {
  const t = TONE[mode];
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-medium uppercase tracking-wider ring-1 ring-inset ${t.bg} ${t.text} ${t.ring}`}
    >
      <span className={`h-1.5 w-1.5 rounded-full ${t.dot}`} />
      {t.label}
    </span>
  );
}

function ThreeWaysPage() {
  return (
    <main className="relative min-h-screen w-full overflow-x-clip bg-radial-hero grain text-foreground">
      <FeaturesSideNav sections={NAV} />
      <div className="relative z-10">
        <TopBar />
        <Hero />
        <Distinction />
        <WhatEachIs />
        <Access />
        <CoworkDetail />
        <CodeDetail />
        <UseCases />
        <Decide />
        <Together />
        <Closing />
      </div>
    </main>
  );
}

function TopBar() {
  return (
    <div className="mx-auto flex max-w-7xl items-center justify-between px-6 pt-8 md:px-12">
      <Link
        to="/"
        className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:text-foreground"
      >
        <ArrowLeft className="h-3.5 w-3.5" /> Library
      </Link>
      <span className="text-kicker">07 · Three Ways</span>
    </div>
  );
}

function SectionHead({ kicker, title, lead }: { kicker: string; title: string; lead?: string }) {
  return (
    <div className="mb-14 flex flex-col gap-4">
      <Kicker tone="claude">{kicker}</Kicker>
      <Reveal>
        <h2 className="text-display max-w-3xl text-4xl md:text-6xl">{title}</h2>
      </Reveal>
      {lead && (
        <Reveal delay={0.1}>
          <p className="max-w-2xl text-base leading-relaxed text-muted-foreground">{lead}</p>
        </Reveal>
      )}
    </div>
  );
}

function Shell({ children, id, alt }: { children: React.ReactNode; id: string; alt?: boolean }) {
  return (
    <section
      id={id}
      className={`relative w-full px-6 py-24 md:px-12 md:py-32 ${alt ? "bg-radial-section" : ""}`}
    >
      <div className="mx-auto max-w-7xl">{children}</div>
    </section>
  );
}

function Hero() {
  return (
    <section id="hero" className="mx-auto max-w-7xl px-6 pb-24 pt-16 md:px-12 md:pb-32 md:pt-24">
      <div className="grid grid-cols-12 gap-10">
        <div className="col-span-12 lg:col-span-7">
          <Reveal>
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-claude/25 bg-claude/10 px-3 py-1.5">
              <Sparkles className="h-3.5 w-3.5 text-claude" />
              <span className="text-[11px] uppercase tracking-[0.22em] text-claude">
                Chat · Cowork · Code
              </span>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="text-display max-w-4xl text-5xl md:text-7xl lg:text-[84px]">
              Three ways to work with Claude.
            </h1>
          </Reveal>
          <Reveal delay={0.22}>
            <p className="mt-8 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
              Same intelligence, three very different jobs — chat, delegate, or build.
            </p>
          </Reveal>
        </div>
        <div className="col-span-12 lg:col-span-5">
          <Reveal delay={0.3}>
            <OrbVisual />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function OrbVisual() {
  return (
    <div className="card-surface relative overflow-hidden p-8 md:p-10">
      <div
        className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full opacity-50 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, oklch(0.72 0.14 45 / 0.35), oklch(0.68 0.13 165 / 0.25) 55%, oklch(0.68 0.14 265 / 0.2) 80%, transparent)",
        }}
      />
      <div className="relative flex flex-col items-center gap-8">
        <div className="relative grid h-20 w-20 place-items-center rounded-full border border-hairline bg-white/5">
          <span className="text-display text-xl">C</span>
          <span className="absolute inset-0 animate-pulse rounded-full ring-1 ring-inset ring-claude/30" />
        </div>
        <div className="text-kicker">The Claude core</div>
        <div className="grid w-full grid-cols-3 gap-3">
          {MODES.map((m, i) => {
            const t = TONE[m];
            const Icon = t.icon;
            return (
              <Reveal key={m} delay={0.15 + i * 0.12}>
                <div
                  className={`flex flex-col items-center gap-3 rounded-2xl border border-hairline p-4 text-center ${t.bg}`}
                >
                  <span
                    className={`grid h-11 w-11 place-items-center rounded-full ring-1 ring-inset ${t.bg} ${t.text} ${t.ring}`}
                  >
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className={`text-display text-lg ${t.text}`}>{t.word}</span>
                  <span className="text-[10px] uppercase tracking-widest text-muted-foreground">
                    {t.label}
                  </span>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </div>
  );
}

const ONE_LINERS: { mode: Mode; line: string }[] = [
  { mode: "chat", line: "You ask, Claude answers — right here in the conversation." },
  {
    mode: "cowork",
    line: "You hand off a real task, Claude works independently across your files and apps, then brings back finished results.",
  },
  {
    mode: "code",
    line: "You give Claude a coding project, it writes, runs, and ships real software end-to-end.",
  },
];

function Distinction() {
  return (
    <Shell id="distinction" alt>
      <SectionHead kicker="01 · The one-line distinction" title="One sentence each." />
      <div className="grid grid-cols-12 gap-6">
        {ONE_LINERS.map((o, i) => {
          const t = TONE[o.mode];
          return (
            <Reveal key={o.mode} delay={i * 0.1} className="col-span-12 md:col-span-4">
              <div className={`card-surface h-full p-7 ${t.glow}`}>
                <Tag mode={o.mode} />
                <p className="mt-6 text-display text-2xl leading-snug md:text-[26px]">{o.line}</p>
                <div className={`mt-8 h-px w-full ${t.dot} opacity-40`} />
              </div>
            </Reveal>
          );
        })}
      </div>
    </Shell>
  );
}

const EXPLAINERS: { mode: Mode; title: string; body: string; points: string[] }[] = [
  {
    mode: "chat",
    title: "The conversational core",
    body: "Responds to messages, generates Artifacts and runs Code Execution — but it doesn't reach into your files or apps unless you attach or connect them in that conversation.",
    points: ["Answers in the thread", "Artifacts + Code Execution", "Access only what you attach"],
  },
  {
    mode: "cowork",
    title: "The agentic teammate",
    body: "Claude gets real permission to read, edit and create files in folders you choose, browse the web, run code and use your apps — planning and completing multi-step work while you step away.",
    points: ["Runs in the cloud", "Desktop, web beta, mobile beta", "Follows your account across devices"],
  },
  {
    mode: "code",
    title: "The software engineer",
    body: "A developer-focused agentic tool purpose-built for real software projects — writing, debugging, testing and shipping across an entire codebase, not single snippets.",
    points: ["Terminal, VS Code, JetBrains, desktop", "Whole-codebase awareness", "Runs tests and commands"],
  },
];

function WhatEachIs() {
  return (
    <Shell id="what">
      <SectionHead
        kicker="02 · What each one actually is"
        title="Three tools, three jobs."
        lead="Same model underneath. What changes is how much rope you give it."
      />
      <div className="grid grid-cols-12 gap-6">
        {EXPLAINERS.map((e, i) => {
          const t = TONE[e.mode];
          const Icon = t.icon;
          return (
            <Reveal key={e.mode} delay={i * 0.1} className="col-span-12 md:col-span-4">
              <div className={`card-surface card-surface-hover relative h-full overflow-hidden p-7 ${t.glow}`}>
                <div
                  className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full opacity-40 blur-3xl"
                  style={{ background: t.wash }}
                />
                <div className="relative">
                  <div
                    className={`grid h-12 w-12 place-items-center rounded-xl ring-1 ring-inset ${t.bg} ${t.text} ${t.ring}`}
                  >
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="mt-6">
                    <Tag mode={e.mode} />
                  </div>
                  <h3 className="mt-4 text-display text-2xl">{e.title}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{e.body}</p>
                  <div className="mt-6 flex flex-col gap-2">
                    {e.points.map((p) => (
                      <div
                        key={p}
                        className="flex items-center gap-2.5 rounded-lg border border-hairline bg-white/5 px-3 py-2 text-xs text-muted-foreground"
                      >
                        <CheckCircle2 className={`h-3.5 w-3.5 ${t.text}`} />
                        {p}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </Shell>
  );
}

const ACCESS_ROWS: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  values: Record<Mode, string>;
}[] = [
  {
    icon: Files,
    label: "File access",
    values: {
      chat: "None by default",
      cowork: "Full read-write in connected folders",
      code: "Full repository access",
    },
  },
  {
    icon: Zap,
    label: "Runs independently",
    values: { chat: "No", cowork: "Yes — multi-step", code: "Yes — multi-step" },
  },
  {
    icon: Layers,
    label: "Best for",
    values: {
      chat: "Quick answers & content",
      cowork: "Non-coding real-world tasks",
      code: "Software engineering",
    },
  },
];

function Access() {
  return (
    <Shell id="access" alt>
      <SectionHead kicker="03 · How they handle access" title="Who gets the keys?" />
      <div className="flex flex-col gap-5">
        {ACCESS_ROWS.map((row, i) => {
          const Icon = row.icon;
          return (
            <Reveal key={row.label} delay={i * 0.1}>
              <div className="card-surface grid grid-cols-12 gap-5 p-6 md:p-7">
                <div className="col-span-12 flex items-center gap-3 md:col-span-3">
                  <span className="grid h-10 w-10 place-items-center rounded-xl border border-hairline bg-white/5">
                    <Icon className="h-4.5 w-4.5 text-muted-foreground" />
                  </span>
                  <span className="text-display text-lg">{row.label}</span>
                </div>
                {MODES.map((m) => {
                  const t = TONE[m];
                  return (
                    <div
                      key={m}
                      className={`col-span-12 rounded-xl border border-hairline p-4 md:col-span-3 ${t.bg}`}
                    >
                      <div className="flex items-center gap-2">
                        <span className={`h-1.5 w-1.5 rounded-full ${t.dot}`} />
                        <span className={`text-[10px] uppercase tracking-widest ${t.text}`}>
                          {t.label}
                        </span>
                      </div>
                      <div className="mt-2 text-sm text-foreground">{row.values[m]}</div>
                    </div>
                  );
                })}
              </div>
            </Reveal>
          );
        })}
      </div>
    </Shell>
  );
}

const COWORK_STEPS = [
  { icon: Search, title: "Analyzes your request", body: "Reads the goal and the context you gave it." },
  { icon: ListChecks, title: "Creates a plan", body: "Lays out the steps before touching anything." },
  { icon: Layers, title: "Breaks it into subtasks", body: "Complex work becomes ordered, checkable pieces." },
  { icon: Play, title: "Runs code & commands", body: "In an isolated cloud environment, safely." },
  { icon: PackageCheck, title: "Delivers finished work", body: "Comes back with results for your review." },
];

const CODE_STEPS = [
  { icon: FolderOpen, title: "Reads your whole codebase", body: "Structure, conventions, dependencies." },
  { icon: Code2, title: "Writes and edits code", body: "Across as many files as the task needs." },
  { icon: TestTube2, title: "Runs tests and commands", body: "Real execution, not guesses." },
  { icon: Bug, title: "Debugs failures", body: "Reads the error, forms a theory, fixes it." },
  { icon: RefreshCw, title: "Iterates until done", body: "Loops until the task actually passes." },
];

function StepRow({
  steps,
  mode,
}: {
  steps: { icon: React.ComponentType<{ className?: string }>; title: string; body: string }[];
  mode: Mode;
}) {
  const t = TONE[mode];
  return (
    <div className="grid grid-cols-12 gap-4">
      {steps.map((s, i) => {
        const Icon = s.icon;
        return (
          <Reveal key={s.title} delay={i * 0.08} className="col-span-12 sm:col-span-6 lg:col-span-2">
            <div className="card-surface relative h-full p-5">
              <div
                className={`grid h-10 w-10 place-items-center rounded-xl ring-1 ring-inset ${t.bg} ${t.text} ${t.ring}`}
              >
                <Icon className="h-4.5 w-4.5" />
              </div>
              <div className="mt-4 text-[10px] uppercase tracking-widest text-muted-foreground">
                Step {String(i + 1).padStart(2, "0")}
              </div>
              <h4 className="mt-1 text-base font-semibold">{s.title}</h4>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{s.body}</p>
            </div>
          </Reveal>
        );
      })}
    </div>
  );
}

function Callout({ mode, text }: { mode: Mode; text: string }) {
  const t = TONE[mode];
  return (
    <div
      className={`mt-8 inline-flex items-center gap-3 rounded-full border border-hairline px-5 py-3 ${t.bg}`}
    >
      <span className={`h-2 w-2 rounded-full ${t.dot}`} />
      <span className={`text-sm ${t.text}`}>{text}</span>
    </div>
  );
}

function CoworkDetail() {
  return (
    <Shell id="cowork">
      <SectionHead
        kicker="04 · Cowork in detail"
        title="Hand off the task, walk away."
        lead="Cowork plans, executes and reports back — you review the finished work instead of steering every step."
      />
      <StepRow steps={COWORK_STEPS} mode="cowork" />
      <Reveal delay={0.2}>
        <Callout
          mode="cowork"
          text="Built for non-coding work — reports, research, spreadsheets, organizing files, scheduling."
        />
      </Reveal>
    </Shell>
  );
}

function CodeDetail() {
  return (
    <Shell id="code" alt>
      <SectionHead
        kicker="05 · Claude Code in detail"
        title="Ship real software, not snippets."
        lead="Claude Code lives where developers work and treats the whole repository as its workspace."
      />
      <StepRow steps={CODE_STEPS} mode="code" />
      <Reveal delay={0.2}>
        <Callout mode="code" text="Built for developers — real projects, not just code snippets." />
      </Reveal>
    </Shell>
  );
}

const USE_CASES: Record<
  Mode,
  { icon: React.ComponentType<{ className?: string }>; label: string }[]
> = {
  chat: [
    { icon: Lightbulb, label: "Explain a concept" },
    { icon: Mail, label: "Draft an email" },
    { icon: Sparkles, label: "Brainstorm ideas" },
    { icon: FileText, label: "Analyze a pasted document" },
    { icon: Braces, label: "Get quick code help" },
  ],
  cowork: [
    { icon: FolderCog, label: "Organize a messy Downloads folder" },
    { icon: CalendarClock, label: "Compile a weekly report every Friday" },
    { icon: ClipboardList, label: "Research and prep a meeting brief" },
    { icon: Table2, label: "Fill a spreadsheet from multiple sources" },
    { icon: MousePointerClick, label: "Navigate a dashboard with no connector" },
  ],
  code: [
    { icon: LogIn, label: "Build a full login feature" },
    { icon: TestTube2, label: "Fix a failing test suite" },
    { icon: Wrench, label: "Refactor a legacy codebase" },
    { icon: Rocket, label: "Set up a new project from scratch" },
    { icon: GitBranch, label: "Ship a bug fix across multiple files" },
  ],
};

function UseCases() {
  return (
    <Shell id="use-cases">
      <SectionHead kicker="06 · Real use cases" title="What people actually ask for." />
      <div className="grid grid-cols-12 gap-6">
        {MODES.map((m, i) => {
          const t = TONE[m];
          return (
            <Reveal key={m} delay={i * 0.1} className="col-span-12 md:col-span-4">
              <div className="card-surface h-full p-7">
                <Tag mode={m} />
                <div className="mt-6 flex flex-col gap-2.5">
                  {USE_CASES[m].map((u) => {
                    const Icon = u.icon;
                    return (
                      <div
                        key={u.label}
                        className="flex items-center gap-3 rounded-xl border border-hairline bg-white/5 px-4 py-3"
                      >
                        <Icon className={`h-4 w-4 shrink-0 ${t.text}`} />
                        <span className="text-sm">{u.label}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </Shell>
  );
}

const BRANCHES: { mode: Mode; q: string; a: string }[] = [
  { mode: "chat", q: "Need a quick answer or content right now?", a: "Chat" },
  {
    mode: "cowork",
    q: "Need Claude to actually do something across your files and apps, and bring back a result?",
    a: "Cowork",
  },
  { mode: "code", q: "Need real code written, tested and shipped?", a: "Claude Code" },
];

function Decide() {
  return (
    <Shell id="decide" alt>
      <SectionHead kicker="07 · When to use which" title="A three-branch decision." />
      <div className="grid grid-cols-12 gap-6">
        {BRANCHES.map((b, i) => {
          const t = TONE[b.mode];
          const Icon = TONE[b.mode].icon;
          return (
            <Reveal key={b.mode} delay={i * 0.1} className="col-span-12 md:col-span-4">
              <div className={`card-surface flex h-full flex-col justify-between p-7 ${t.glow}`}>
                <p className="text-display text-xl leading-snug md:text-2xl">{b.q}</p>
                <div className="mt-10 flex items-center gap-3">
                  <ArrowRight className={`h-5 w-5 ${t.text}`} />
                  <span
                    className={`inline-flex items-center gap-2 rounded-full px-4 py-2 ring-1 ring-inset ${t.bg} ${t.text} ${t.ring}`}
                  >
                    <Icon className="h-4 w-4" />
                    <span className="text-sm font-semibold">{b.a}</span>
                  </span>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </Shell>
  );
}

function Together() {
  return (
    <Shell id="together">
      <SectionHead kicker="08 · They work together" title="One home, shared context." />
      <div className="grid grid-cols-12 gap-6">
        <Reveal className="col-span-12 lg:col-span-7">
          <div className="card-surface h-full p-8 md:p-10">
            <div className="flex flex-wrap items-center gap-2">
              <Tag mode="chat" />
              <span className="text-muted-foreground">+</span>
              <Tag mode="cowork" />
            </div>
            <p className="mt-6 text-display text-2xl leading-snug md:text-3xl">
              Cowork and Chat now share one home — starting a task and having a
              conversation begin from the same message box.
            </p>
          </div>
        </Reveal>
        <Reveal delay={0.12} className="col-span-12 lg:col-span-5">
          <div className="card-surface h-full p-8 md:p-10">
            <div className="grid h-12 w-12 place-items-center rounded-xl bg-claude/15 text-claude ring-1 ring-inset ring-claude/30">
              <FolderOpen className="h-5 w-5" />
            </div>
            <h3 className="mt-6 text-display text-2xl">Projects tie all three together</h3>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Persistent context, files and instructions in one place — usable
              from Chat, Cowork and Claude Code alike.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {MODES.map((m) => (
                <Tag key={m} mode={m} />
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </Shell>
  );
}

function Closing() {
  return (
    <Shell id="closing" alt>
      <div className="flex flex-col items-center text-center">
        <Reveal>
          <h2 className="text-display max-w-4xl text-4xl md:text-6xl lg:text-7xl">
            <span className="text-claude">Chat to think.</span>{" "}
            <span className="text-chatgpt">Cowork to delegate.</span>{" "}
            <span className="text-exec">Code to build.</span>
          </h2>
        </Reveal>
        <Reveal delay={0.15}>
          <p className="mt-8 max-w-xl text-base leading-relaxed text-muted-foreground">
            Pick the one that matches the job — not the one you're used to.
          </p>
        </Reveal>
        <Reveal delay={0.25}>
          <Link
            to="/"
            className="mt-12 inline-flex items-center gap-2 rounded-full border border-hairline bg-white/5 px-5 py-3 text-xs uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-3.5 w-3.5" /> Back to all topics
          </Link>
        </Reveal>
      </div>
    </Shell>
  );
}
