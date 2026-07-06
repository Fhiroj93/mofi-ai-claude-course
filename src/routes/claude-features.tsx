import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import {
  ArrowDown,
  ArrowLeft,
  ArrowUpRight,
  Sparkles,
  MessageSquareCode,
  Wand2,
  Plug,
  Puzzle,
  Network,
  Bot,
  Terminal,
  Chrome,
  FolderKanban,
  Dumbbell,
  Brain,
  Calculator,
  ListChecks,
  LayoutTemplate,
  Palette,
  BookOpen,
  FileSpreadsheet,
  Presentation,
  PenLine,
  Slack,
  FolderSearch,
  Ticket,
  Calendar,
  Search,
  Scale,
  Landmark,
  Megaphone,
  LifeBuoy,
  FlaskConical,
  Kanban,
  CreditCard,
  Database,
  Figma,
  Headphones,
  FolderCog,
  ClipboardList,
  FileText,
  Mail,
  Table,
  KeyRound,
  Bug,
  Recycle,
  Rocket,
  Wrench,
  Linkedin,
  FormInput,
  LayoutDashboard,
  ShoppingCart,
  BarChart3,
  BookText,
  Users,
  Repeat,
  GraduationCap,
  PiggyBank,
  type LucideIcon,
} from "lucide-react";
import { FeaturesSideNav, type NavSection } from "@/components/presentation/FeaturesSideNav";
import { Reveal, Kicker } from "@/components/presentation/primitives";

type Feature = {
  id: string;
  index: string;
  title: string;
  icon: LucideIcon;
  explainer: string;
  useCase: string;
  examples: { label: string; icon: LucideIcon }[];
};

const FEATURES: Feature[] = [
  {
    id: "chat-artifacts",
    index: "02",
    title: "Chat & Artifacts",
    icon: MessageSquareCode,
    explainer:
      "Claude can generate live, interactive content — code, documents, diagrams, apps — right alongside the conversation, not just text.",
    useCase: "Turning any idea into something visual and usable, instantly.",
    examples: [
      { label: "Build a workout tracker app", icon: Dumbbell },
      { label: "Turn notes into a mind map", icon: Brain },
      { label: "Generate a working calculator", icon: Calculator },
      { label: "Create an interactive quiz", icon: ListChecks },
      { label: "Draft and preview a landing page", icon: LayoutTemplate },
    ],
  },
  {
    id: "skills",
    index: "03",
    title: "Skills",
    icon: Wand2,
    explainer:
      "Reusable folders of instructions that teach Claude how you like tasks done — so it repeats your standards automatically.",
    useCase: "Packaging your workflow once, using it forever.",
    examples: [
      { label: "Auto-format reports in your brand colors", icon: Palette },
      { label: "Apply your company's writing style guide", icon: BookOpen },
      { label: "Generate Excel models your way every time", icon: FileSpreadsheet },
      { label: "Create PowerPoints matching your template", icon: Presentation },
      { label: "Follow your personal essay structure automatically", icon: PenLine },
    ],
  },
  {
    id: "connectors",
    index: "04",
    title: "Connectors",
    icon: Plug,
    explainer:
      "Lets Claude securely link to your other apps and data — Google Drive, Slack, Notion — so it can pull real information into a conversation.",
    useCase: "Answers grounded in your actual files and tools, not just general knowledge.",
    examples: [
      { label: "Summarize this week's Slack threads", icon: Slack },
      { label: "Find last quarter's sales deck in Drive", icon: FolderSearch },
      { label: "Pull open tickets from Jira", icon: Ticket },
      { label: "Check today's calendar", icon: Calendar },
      { label: "Search your Notion workspace for a doc", icon: Search },
    ],
  },
  {
    id: "plugins",
    index: "05",
    title: "Plugins",
    icon: Puzzle,
    explainer:
      "Bundles of skills, connectors, and expertise packaged together so Claude instantly becomes a specialist for a role or team from day one.",
    useCase: "Giving a whole team consistent, pre-configured superpowers with one install.",
    examples: [
      { label: "Install a legal-review plugin for contract triage", icon: Scale },
      { label: "Add a finance plugin for reconciliation", icon: Landmark },
      { label: "Turn on a brand-voice plugin for marketing", icon: Megaphone },
      { label: "Use a support plugin for ticket handling", icon: LifeBuoy },
      { label: "Enable a research plugin for market analysis", icon: FlaskConical },
    ],
  },
  {
    id: "mcp",
    index: "06",
    title: "MCP (Model Context Protocol)",
    icon: Network,
    explainer:
      "An open standard that lets Claude connect to external tools and services in a structured, secure way — the underlying wiring that powers many connectors and plugins.",
    useCase: "Extending Claude to any tool that supports the standard, without one-off integrations.",
    examples: [
      { label: "Connect Claude to a project management tool", icon: Kanban },
      { label: "Link a payments dashboard", icon: CreditCard },
      { label: "Hook into a company database", icon: Database },
      { label: "Attach a design tool like Figma", icon: Figma },
      { label: "Integrate a customer support platform", icon: Headphones },
    ],
  },
  {
    id: "cowork",
    index: "07",
    title: "Cowork",
    icon: Bot,
    explainer:
      "Claude works independently on your desktop — reading local files, using your apps, completing multi-step tasks on its own — then messages you the finished result.",
    useCase: "Handing off real work (not just chatting) and getting a polished deliverable back.",
    examples: [
      { label: "Organize a messy Downloads folder", icon: FolderCog },
      { label: "Compile a weekly report every Friday automatically", icon: ClipboardList },
      { label: "Draft and format a full proposal document", icon: FileText },
      { label: "Check email every morning and summarize it", icon: Mail },
      { label: "Build a spreadsheet with working formulas from raw data", icon: Table },
    ],
  },
  {
    id: "claude-code",
    index: "08",
    title: "Claude Code",
    icon: Terminal,
    explainer:
      "A command-line agentic tool built for developers that can write, debug, and ship real code across a whole project — not just single snippets.",
    useCase: "Delegating actual software development tasks end-to-end.",
    examples: [
      { label: "Build a full login feature", icon: KeyRound },
      { label: "Fix a failing test suite", icon: Bug },
      { label: "Refactor a legacy codebase", icon: Recycle },
      { label: "Set up a new project from scratch", icon: Rocket },
      { label: "Write and run a bug fix across multiple files", icon: Wrench },
    ],
  },
  {
    id: "chrome-computer",
    index: "09",
    title: "Claude in Chrome / Computer Use",
    icon: Chrome,
    explainer:
      "Claude can see and interact with your screen and browser directly — clicking, typing, and navigating apps like a person would.",
    useCase: "Automating web-based tasks that don't have a direct connector.",
    examples: [
      { label: "Schedule a LinkedIn post for tomorrow", icon: Linkedin },
      { label: "Fill out a web form automatically", icon: FormInput },
      { label: "Navigate an internal company dashboard", icon: LayoutDashboard },
      { label: "Book something through a website", icon: ShoppingCart },
      { label: "Compare prices across multiple tabs", icon: BarChart3 },
    ],
  },
  {
    id: "projects-memory",
    index: "10",
    title: "Projects & Memory",
    icon: FolderKanban,
    explainer:
      "Persistent workspaces where Claude retains context, files, and instructions across sessions so you never have to re-explain yourself.",
    useCase: "Long-running work where consistency and context matter.",
    examples: [
      { label: "A running project for a book you're writing", icon: BookText },
      { label: "A client folder that remembers past feedback", icon: Users },
      { label: "A recurring content-creation workspace", icon: Repeat },
      { label: "A study project that remembers your syllabus", icon: GraduationCap },
      { label: "A personal finance tracker Claude updates over time", icon: PiggyBank },
    ],
  },
];

const SECTIONS: NavSection[] = [
  { id: "hero", label: "Intro" },
  ...FEATURES.map((f) => ({ id: f.id, label: f.title.split(" ")[0] })),
  { id: "closing", label: "Closing" },
];

export const Route = createFileRoute("/claude-features")({
  head: () => ({
    meta: [
      { title: "Claude: The Complete Features Overview" },
      { name: "description", content: "A beginner's map to everything Claude can do — chat, skills, connectors, agents, and more." },
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

      <FeaturesHero />

      {FEATURES.map((f) => (
        <FeatureSection key={f.id} feature={f} />
      ))}

      <ClosingSection />
    </main>
  );
}

function FeaturesHero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-radial-hero grain px-6 py-24"
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
              A beginner's primer · 2025
            </span>
          </div>
        </Reveal>

        {/* Single Claude orb */}
        <div className="relative mb-14 flex h-[280px] w-full items-center justify-center md:h-[340px]">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: [0.2, 0.7, 0.2, 1] }}
          >
            <div className="relative orb-anim">
              <div
                className="h-52 w-52 rounded-full md:h-64 md:w-64"
                style={{
                  background:
                    "radial-gradient(circle at 30% 30%, oklch(0.88 0.15 45), oklch(0.55 0.14 40) 60%, oklch(0.22 0.08 40) 100%)",
                  boxShadow:
                    "0 0 160px oklch(0.72 0.14 45 / 0.55), inset -20px -30px 60px oklch(0 0 0 / 0.4)",
                }}
              />
            </div>
          </motion.div>
        </div>

        <Reveal delay={0.3}>
          <h1 className="text-display text-5xl md:text-7xl lg:text-[92px]">
            Claude: The Complete<br />
            <span className="text-claude">Features Overview.</span>
          </h1>
        </Reveal>

        <Reveal delay={0.5}>
          <p className="mt-8 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
            A beginner's map to everything Claude can do — chat, create,
            connect, and delegate.
          </p>
        </Reveal>

        <Reveal delay={0.7}>
          <a
            href="#chat-artifacts"
            className="mt-14 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-sm text-foreground/90 backdrop-blur transition-all hover:border-claude/40 hover:bg-claude/10"
          >
            Start the tour
            <ArrowDown className="h-4 w-4 animate-bounce" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}

function FeatureSection({ feature }: { feature: Feature }) {
  const Icon = feature.icon;
  return (
    <section
      id={feature.id}
      className="relative min-h-screen w-full px-6 py-24 md:px-12 md:py-32"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-12 gap-6">
        <div className="col-span-12 mb-10 flex items-center justify-between">
          <Kicker tone="claude">
            {feature.index} · {feature.title}
          </Kicker>
          <span className="text-kicker">Feature</span>
        </div>

        <div className="col-span-12 lg:col-span-5">
          <Reveal>
            <div className="mb-8 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-claude/15 text-claude ring-1 ring-inset ring-claude/25">
              <Icon className="h-6 w-6" />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="text-display text-4xl md:text-5xl lg:text-6xl">
              {feature.title}
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-8 max-w-md text-base leading-relaxed text-muted-foreground md:text-lg">
              {feature.explainer}
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="mt-8 inline-flex flex-col gap-2 rounded-2xl border border-claude/25 bg-claude/[0.06] px-5 py-4">
              <span className="text-[10px] uppercase tracking-[0.24em] text-claude">
                Use case
              </span>
              <span className="text-sm text-foreground/90 md:text-base">
                {feature.useCase}
              </span>
            </div>
          </Reveal>
        </div>

        <div className="col-span-12 lg:col-span-7">
          <Reveal delay={0.15}>
            <div className="mb-5 flex items-center justify-between">
              <span className="text-kicker">Real-life examples</span>
              <span className="text-[11px] text-muted-foreground">
                05 scenarios
              </span>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {feature.examples.map((ex, i) => (
              <Reveal key={ex.label} delay={0.2 + i * 0.06}>
                <ExampleCard label={ex.label} icon={ex.icon} index={i + 1} />
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ExampleCard({
  label,
  icon: Icon,
  index,
}: {
  label: string;
  icon: LucideIcon;
  index: number;
}) {
  return (
    <motion.div
      whileHover={{ y: -3 }}
      transition={{ duration: 0.25 }}
      className="card-surface card-surface-hover group relative flex items-start gap-4 p-5 hover:glow-claude"
    >
      <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-claude/12 text-claude ring-1 ring-inset ring-claude/20 transition-colors group-hover:bg-claude/20">
        <Icon className="h-[18px] w-[18px]" />
      </div>
      <div className="flex-1">
        <div className="text-[10px] uppercase tracking-[0.24em] text-muted-foreground">
          Example · {String(index).padStart(2, "0")}
        </div>
        <div className="mt-1.5 text-sm font-semibold text-foreground md:text-[15px]">
          {label}
        </div>
      </div>
    </motion.div>
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
          <Kicker tone="claude">11 · Closing</Kicker>
        </div>

        <div className="col-span-12">
          <Reveal>
            <h2 className="text-display text-5xl md:text-7xl lg:text-[88px]">
              One assistant,<br />
              <span className="text-claude">many ways to work.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-8 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-xl">
              Chat, create, connect, and delegate — Claude meets you wherever the
              work happens.
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

        <div className="col-span-12 mt-16 flex items-center justify-between border-t border-white/5 pt-6 text-xs text-muted-foreground">
          <div>© 2025 · A visual teardown</div>
          <div className="uppercase tracking-widest text-claude">Claude · Primer</div>
        </div>
      </div>
    </section>
  );
}
