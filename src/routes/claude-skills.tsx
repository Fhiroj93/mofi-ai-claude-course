import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowLeft,
  ArrowRight,
  FolderOpen,
  Folder,
  FileText,
  Terminal,
  BookOpen,
  Image as ImageIcon,
  Sparkles,
  Layers,
  Search,
  Wand2,
  Building2,
  Users,
  Globe,
  Code2,
  Server,
  Palette,
  Calculator,
  FileSpreadsheet,
  ClipboardList,
  NotebookPen,
  UserCog,
  Quote,
  CheckCircle2,
} from "lucide-react";
import { Reveal, Kicker } from "@/components/presentation/primitives";
import { FeaturesSideNav, type NavSection } from "@/components/presentation/FeaturesSideNav";

export const Route = createFileRoute("/claude-skills")({
  head: () => ({
    meta: [
      { title: "Claude Skills — Package Your Expertise Once, Use It Forever" },
      {
        name: "description",
        content:
          "How Claude Skills work: folders of instructions, scripts and resources Claude loads automatically so your standards, procedures and workflows apply every time.",
      },
      { property: "og:title", content: "Claude Skills — Package Your Expertise Once, Use It Forever" },
      {
        property: "og:description",
        content:
          "Teach Claude your way of working once — brand rules, report formats, team conventions — and it applies them automatically.",
      },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Claude Skills — Package Your Expertise Once, Use It Forever" },
      {
        name: "twitter:description",
        content: "A visual breakdown of Claude Skills: what they are, what's inside one, where they work, and when to use them.",
      },
    ],
  }),
  component: SkillsPage,
});

const NAV: NavSection[] = [
  { id: "hero", label: "Intro" },
  { id: "core-idea", label: "Core Idea" },
  { id: "how", label: "How It Works" },
  { id: "kinds", label: "Two Kinds" },
  { id: "anatomy", label: "Anatomy" },
  { id: "surfaces", label: "Where" },
  { id: "use-cases", label: "Use Cases" },
  { id: "compare", label: "Compare" },
  { id: "impact", label: "Impact" },
  { id: "closing", label: "Closing" },
];

const STEPS = [
  {
    icon: Wand2,
    step: "01",
    title: "You ask for something",
    body: "A normal request in plain language — build the deck, reconcile the sheets, write the brief.",
  },
  {
    icon: Search,
    step: "02",
    title: "Claude scans your skills",
    body: "It reads the names and descriptions of available skills and silently loads only the ones that matter.",
  },
  {
    icon: CheckCircle2,
    step: "03",
    title: "Your instructions apply",
    body: "The output arrives already following your standards — no reminders, no re-pasting the rules.",
  },
];

const NODES = [
  { icon: FileSpreadsheet, label: "Spreadsheets" },
  { icon: FileText, label: "Documents" },
  { icon: Palette, label: "Brand rules" },
  { icon: ClipboardList, label: "Workflows" },
];

const ANATOMY = [
  {
    icon: FileText,
    name: "SKILL.md",
    required: true,
    caption: "The only required file",
    body: "Name, description and instructions — written in plain language. No special syntax to learn.",
  },
  {
    icon: Terminal,
    name: "scripts/",
    required: false,
    caption: "Optional",
    body: "Code Claude can run when a task needs deterministic work rather than judgement.",
  },
  {
    icon: BookOpen,
    name: "references/",
    required: false,
    caption: "Optional",
    body: "Checklists, standards and docs loaded on demand — the detail behind the instructions.",
  },
  {
    icon: ImageIcon,
    name: "assets/",
    required: false,
    caption: "Optional",
    body: "Templates, examples, logos and boilerplate the output should be built from.",
  },
];

const SURFACES = [
  {
    icon: Globe,
    title: "Claude.ai",
    scope: "Personal",
    body: "Toggle skills on in Customize › Skills. They follow your account across every chat.",
  },
  {
    icon: Code2,
    title: "Claude Code",
    scope: "Personal or project",
    body: "Filesystem-based folders. Commit project skills to the repo, or share them through plugins.",
  },
  {
    icon: Server,
    title: "The API",
    scope: "Workspace-wide",
    body: "Upload through the Skills endpoint so every app and teammate in the workspace inherits them.",
  },
];

const USE_CASES = [
  {
    icon: Palette,
    title: "Brand Consistency",
    line: "Your voice and style guide, enforced everywhere.",
    example: "Apply your exact brand voice to every document and deck.",
  },
  {
    icon: Calculator,
    title: "Finance & Reporting",
    line: "Your firm's procedures, run end to end.",
    example: "Reconcile multiple spreadsheets, flag anomalies, produce the report.",
  },
  {
    icon: FileSpreadsheet,
    title: "Document Creation",
    line: "Polished files that match org standards.",
    example: "Excel models, Word contracts and PowerPoint decks, formatted correctly.",
  },
  {
    icon: Users,
    title: "Team Tooling",
    line: "Tickets that follow your conventions.",
    example: "Create tasks in Jira, Asana or Linear exactly the way your team writes them.",
  },
  {
    icon: NotebookPen,
    title: "Meeting & Note Structure",
    line: "One house format, automatically.",
    example: "Structure meeting notes in your company's specific template.",
  },
  {
    icon: UserCog,
    title: "Personal Workflow",
    line: "Your own repeatable habits.",
    example: "A weekly report format, a writing style, a research checklist.",
  },
];

const COMPARE = [
  {
    icon: Layers,
    title: "Skills",
    tag: "Procedure",
    line: "Repeatable procedures applied automatically.",
    examples: ["Brand rules", "Report formats", "Review checklists"],
  },
  {
    icon: Folder,
    title: "Projects",
    tag: "Context",
    line: "Accumulated context for one ongoing body of work.",
    examples: ["A product launch", "A research thread", "A client account"],
  },
  {
    icon: UserCog,
    title: "Custom Instructions",
    tag: "Preference",
    line: "How Claude works with you overall, everywhere.",
    examples: ["Tone of voice", "Ask before assuming", "Response length"],
  },
];

function SkillsPage() {
  return (
    <main className="relative min-h-screen w-full overflow-x-clip bg-radial-hero grain text-foreground">
      <FeaturesSideNav sections={NAV} />
      <div className="relative z-10">
        <TopBar />
        <Hero />
        <CoreIdea />
        <HowItWorks />
        <TwoKinds />
        <Anatomy />
        <Surfaces />
        <UseCases />
        <Compare />
        <Impact />
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
      <span className="text-kicker">06 · Skills</span>
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
                Claude Skills
              </span>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="text-display max-w-4xl text-5xl md:text-7xl lg:text-[84px]">
              Package your expertise once, use it forever.
            </h1>
          </Reveal>
          <Reveal delay={0.22}>
            <p className="mt-8 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
              How Claude learns your standards, procedures and workflows — and
              applies them automatically, every time.
            </p>
          </Reveal>
        </div>
        <div className="col-span-12 lg:col-span-5">
          <Reveal delay={0.3}>
            <UnfoldVisual />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function UnfoldVisual() {
  return (
    <div className="card-surface glow-claude relative overflow-hidden p-8 md:p-10">
      <div
        className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full opacity-50 blur-3xl"
        style={{ background: "radial-gradient(circle, oklch(0.72 0.14 45 / 0.45), transparent 70%)" }}
      />
      <div className="relative flex flex-col items-center">
        <div className="grid h-16 w-16 place-items-center rounded-2xl bg-claude/15 text-claude ring-1 ring-inset ring-claude/30">
          <FolderOpen className="h-7 w-7" />
        </div>
        <div className="mt-3 text-kicker text-claude">One skill</div>
        <div className="mt-6 h-10 w-px bg-gradient-to-b from-claude/60 to-transparent" />
        <div className="grid w-full grid-cols-2 gap-3">
          {NODES.map((n, i) => {
            const Icon = n.icon;
            return (
              <Reveal key={n.label} delay={0.15 + i * 0.09}>
                <div className="flex items-center gap-3 rounded-xl border border-hairline bg-white/5 px-4 py-3">
                  <Icon className="h-4 w-4 shrink-0 text-claude" />
                  <span className="text-xs text-muted-foreground">{n.label}</span>
                </div>
              </Reveal>
            );
          })}
        </div>
        <div className="mt-5 text-center text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
          Many tasks, one source of truth
        </div>
      </div>
    </div>
  );
}

function CoreIdea() {
  return (
    <Shell id="core-idea" alt>
      <Kicker tone="claude">01 · The core idea</Kicker>
      <Reveal>
        <h2 className="text-display mt-6 max-w-5xl text-4xl leading-[1.05] md:text-6xl">
          Skills are folders of instructions, scripts and resources that Claude
          loads automatically — <span className="text-claude">only when relevant</span> to
          what you're doing.
        </h2>
      </Reveal>
      <Reveal delay={0.15}>
        <p className="mt-10 max-w-2xl border-l-2 border-claude/40 pl-6 text-base leading-relaxed text-muted-foreground md:text-lg">
          Think of it as teaching a sharp new analyst your exact way of working,
          once — then never explaining it again.
        </p>
      </Reveal>
    </Shell>
  );
}

function HowItWorks() {
  return (
    <Shell id="how">
      <SectionHead
        kicker="02 · How skills work"
        title="Three steps, none of them yours."
        lead="You never pick a skill from a menu. Claude decides what's relevant and loads it in the background."
      />
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {STEPS.map((s, i) => {
          const Icon = s.icon;
          return (
            <Reveal key={s.step} delay={i * 0.1}>
              <div className="card-surface card-surface-hover relative h-full p-8">
                <div className="flex items-start justify-between">
                  <div className="grid h-12 w-12 place-items-center rounded-xl bg-claude/15 text-claude">
                    <Icon className="h-5 w-5" />
                  </div>
                  <span className="text-kicker">{s.step}</span>
                </div>
                <h3 className="mt-8 text-display text-2xl">{s.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
                {i < STEPS.length - 1 && (
                  <ArrowRight className="absolute -right-5 top-1/2 hidden h-5 w-5 -translate-y-1/2 text-claude/50 md:block" />
                )}
              </div>
            </Reveal>
          );
        })}
      </div>
      <Reveal delay={0.3}>
        <div className="mt-10 inline-flex items-start gap-3 rounded-2xl border border-claude/30 bg-claude/10 px-5 py-4">
          <Layers className="mt-0.5 h-4 w-4 shrink-0 text-claude" />
          <p className="text-sm text-claude">
            Composable — multiple skills can stack together for one task, with no
            manual selection needed.
          </p>
        </div>
      </Reveal>
    </Shell>
  );
}

function TwoKinds() {
  return (
    <Shell id="kinds" alt>
      <SectionHead
        kicker="03 · Two kinds of skills"
        title="Some arrive with Claude. Some arrive with you."
      />
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <Reveal>
          <div className="card-surface h-full p-8 md:p-10">
            <div className="grid h-12 w-12 place-items-center rounded-xl bg-white/5 text-foreground ring-1 ring-inset ring-hairline">
              <Sparkles className="h-5 w-5" />
            </div>
            <div className="mt-8 text-kicker">By Anthropic</div>
            <h3 className="mt-3 text-display text-3xl">Built-in Skills</h3>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Ship ready to use and invoke themselves when the task calls for it.
              Nothing to install, nothing to configure.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {["Excel", "Word", "PowerPoint", "PDF"].map((c) => (
                <span
                  key={c}
                  className="rounded-full border border-hairline bg-white/5 px-3 py-1 text-xs text-muted-foreground"
                >
                  {c}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="card-surface glow-claude h-full p-8 md:p-10">
            <div className="grid h-12 w-12 place-items-center rounded-xl bg-claude/15 text-claude">
              <Building2 className="h-5 w-5" />
            </div>
            <div className="mt-8 text-kicker text-claude">By you or your team</div>
            <h3 className="mt-3 text-display text-3xl">Custom Skills</h3>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Built for your specific brand, workflow or domain, and stored in
              your account or organisation so the whole team inherits them.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {["Brand voice", "Close process", "QA checklist", "House deck"].map((c) => (
                <span
                  key={c}
                  className="rounded-full border border-claude/30 bg-claude/10 px-3 py-1 text-xs text-claude"
                >
                  {c}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </Shell>
  );
}

function Anatomy() {
  return (
    <Shell id="anatomy">
      <SectionHead
        kicker="04 · What's inside a skill"
        title="A folder. That's genuinely it."
        lead="One markdown file is enough to start. Everything else is optional depth you add when a task needs it."
      />
      <div className="grid grid-cols-12 gap-6">
        <Reveal className="col-span-12 lg:col-span-4">
          <div className="card-surface h-full p-8 font-mono text-sm">
            <div className="flex items-center gap-2 text-claude">
              <FolderOpen className="h-4 w-4" /> my-skill/
            </div>
            <div className="mt-4 space-y-2 pl-4 text-muted-foreground">
              <div className="flex items-center gap-2 text-foreground">
                <FileText className="h-3.5 w-3.5 text-claude" /> SKILL.md
              </div>
              <div className="flex items-center gap-2">
                <Terminal className="h-3.5 w-3.5" /> scripts/
              </div>
              <div className="flex items-center gap-2">
                <BookOpen className="h-3.5 w-3.5" /> references/
              </div>
              <div className="flex items-center gap-2">
                <ImageIcon className="h-3.5 w-3.5" /> assets/
              </div>
            </div>
          </div>
        </Reveal>
        <div className="col-span-12 grid grid-cols-1 gap-4 lg:col-span-8 md:grid-cols-2">
          {ANATOMY.map((a, i) => {
            const Icon = a.icon;
            return (
              <Reveal key={a.name} delay={i * 0.08}>
                <div className="card-surface card-surface-hover h-full p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div
                        className={`grid h-10 w-10 place-items-center rounded-lg ${
                          a.required ? "bg-claude/15 text-claude" : "bg-white/5 text-muted-foreground"
                        }`}
                      >
                        <Icon className="h-4 w-4" />
                      </div>
                      <span className="font-mono text-sm">{a.name}</span>
                    </div>
                    <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                      {a.caption}
                    </span>
                  </div>
                  <p className="mt-5 text-sm leading-relaxed text-muted-foreground">{a.body}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </Shell>
  );
}

function Surfaces() {
  return (
    <Shell id="surfaces" alt>
      <SectionHead
        kicker="05 · Where skills work"
        title="Three surfaces, three scopes."
      />
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {SURFACES.map((s, i) => {
          const Icon = s.icon;
          return (
            <Reveal key={s.title} delay={i * 0.1}>
              <div className="card-surface card-surface-hover h-full p-8">
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-claude/15 text-claude">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-8 text-display text-2xl">{s.title}</h3>
                <div className="mt-2 text-kicker text-claude">{s.scope}</div>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
              </div>
            </Reveal>
          );
        })}
      </div>
    </Shell>
  );
}

function UseCases() {
  return (
    <Shell id="use-cases">
      <SectionHead
        kicker="06 · Real use cases"
        title="Where teams actually feel it."
      />
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {USE_CASES.map((u, i) => {
          const Icon = u.icon;
          return (
            <Reveal key={u.title} delay={i * 0.07}>
              <div className="card-surface card-surface-hover h-full p-7">
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-claude/15 text-claude">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-7 text-display text-xl">{u.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{u.line}</p>
                <p className="mt-5 border-t border-hairline pt-4 text-sm text-foreground/80">
                  {u.example}
                </p>
              </div>
            </Reveal>
          );
        })}
      </div>
    </Shell>
  );
}

function Compare() {
  return (
    <Shell id="compare" alt>
      <SectionHead
        kicker="07 · Skills vs Projects vs Instructions"
        title="Three tools, three jobs."
        lead="They're often confused. The dividing line is procedure, context, or preference."
      />
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {COMPARE.map((c, i) => {
          const Icon = c.icon;
          return (
            <Reveal key={c.title} delay={i * 0.1}>
              <div className="card-surface card-surface-hover h-full p-8">
                <div className="flex items-start justify-between">
                  <div className="grid h-12 w-12 place-items-center rounded-xl bg-claude/15 text-claude">
                    <Icon className="h-5 w-5" />
                  </div>
                  <span className="rounded-full border border-hairline bg-white/5 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                    {c.tag}
                  </span>
                </div>
                <h3 className="mt-8 text-display text-2xl">{c.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{c.line}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {c.examples.map((e) => (
                    <span
                      key={e}
                      className="rounded-full border border-claude/25 bg-claude/10 px-3 py-1 text-xs text-claude"
                    >
                      {e}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
      <Reveal delay={0.3}>
        <div className="mt-10 inline-flex items-start gap-3 rounded-2xl border border-hairline bg-white/5 px-5 py-4">
          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-claude" />
          <p className="text-sm text-muted-foreground">
            Use Skills and Projects together when work needs both persistent
            context and standardised procedure.
          </p>
        </div>
      </Reveal>
    </Shell>
  );
}

function Impact() {
  return (
    <Shell id="impact">
      <Reveal>
        <div className="card-surface glow-claude relative overflow-hidden p-10 md:p-16">
          <div
            className="pointer-events-none absolute -right-24 -bottom-24 h-72 w-72 rounded-full opacity-50 blur-3xl"
            style={{ background: "radial-gradient(circle, oklch(0.72 0.14 45 / 0.45), transparent 70%)" }}
          />
          <div className="relative">
            <Quote className="h-8 w-8 text-claude" />
            <blockquote className="text-display mt-8 max-w-4xl text-4xl leading-[1.08] md:text-6xl">
              "What once took a full day now takes an hour."
            </blockquote>
            <p className="mt-8 text-sm uppercase tracking-[0.2em] text-muted-foreground">
              Reported from real finance & accounting workflows
            </p>
          </div>
        </div>
      </Reveal>
    </Shell>
  );
}

function Closing() {
  return (
    <Shell id="closing" alt>
      <Reveal>
        <div className="flex flex-col items-start">
          <Kicker tone="claude">08 · The takeaway</Kicker>
          <h2 className="text-display mt-6 max-w-4xl text-4xl md:text-6xl">
            Teach it once. Claude remembers your standards from then on.
          </h2>
          <Link
            to="/"
            className="mt-12 inline-flex items-center gap-2 rounded-full border border-claude/40 bg-claude/10 px-5 py-3 text-sm text-claude transition-colors hover:bg-claude/20"
          >
            Back to all topics <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </Reveal>
    </Shell>
  );
}
