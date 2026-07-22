import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import {
  ArrowLeft,
  ArrowUpRight,
  Sparkles,
  FileText,
  Code2,
  Globe,
  Shapes,
  LayoutDashboard,
  Terminal,
  FileSpreadsheet,
  Presentation,
  Image as ImageIcon,
  Database,
  Package,
  BarChart3,
  TrendingUp,
  Table2,
  Sigma,
  LineChart,
  BrainCircuit,
  Check,
  X,
  Download,
  Palette,
  MousePointerClick,
  type LucideIcon,
} from "lucide-react";
import { FeaturesSideNav, type NavSection } from "@/components/presentation/FeaturesSideNav";
import { Reveal, Kicker } from "@/components/presentation/primitives";

const SECTIONS: NavSection[] = [
  { id: "hero", label: "Intro" },
  { id: "distinction", label: "Distinction" },
  { id: "artifacts", label: "Artifacts" },
  { id: "artifact-types", label: "Types" },
  { id: "code-execution", label: "Execution" },
  { id: "files", label: "Files" },
  { id: "analysis", label: "Analysis" },
  { id: "compare", label: "Compare" },
  { id: "outputs", label: "Outputs" },
  { id: "closing", label: "Closing" },
];

export const Route = createFileRoute("/artifacts-vs-execution")({
  head: () => ({
    meta: [
      { title: "Artifacts vs. Code Execution — Claude's Two Creation Engines" },
      {
        name: "description",
        content:
          "Two ways Claude turns your ideas into real, usable output — editable artifacts and a sandboxed code execution engine.",
      },
      { property: "og:title", content: "Artifacts vs. Code Execution — Claude's Two Creation Engines" },
      {
        property: "og:description",
        content: "A visual teardown of Claude's two creation surfaces: Artifacts and Code Execution & File Creation.",
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

      <Hero />
      <Distinction />
      <WhatAreArtifacts />
      <ArtifactTypes />
      <WhatIsExecution />
      <FileCategories />
      <AnalysisSuperpowers />
      <ComparisonTable />
      <OutputsShowcase />
      <Closing />
    </main>
  );
}

/* ---------------- HERO ---------------- */

function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen w-full items-center justify-center overflow-hidden grain px-6 py-24"
      style={{
        background:
          "radial-gradient(1000px 500px at 25% 30%, oklch(0.72 0.14 45 / 0.28), transparent 60%), radial-gradient(1000px 500px at 75% 70%, oklch(0.68 0.14 265 / 0.28), transparent 60%), var(--ink-2)",
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

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center text-center">
        <Reveal>
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 backdrop-blur">
            <Sparkles className="h-3.5 w-3.5 text-claude" />
            <span className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
              Claude teardown · Creation engines
            </span>
          </div>
        </Reveal>

        {/* Two orbs converging into a core */}
        <div className="relative mb-14 flex h-[300px] w-full items-center justify-center md:h-[360px]">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.1, ease: [0.2, 0.7, 0.2, 1] }}
            className="absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-[190px] md:-translate-x-[240px]"
          >
            <div className="orb-anim h-40 w-40 rounded-full md:h-48 md:w-48"
              style={{
                background:
                  "radial-gradient(circle at 30% 30%, oklch(0.88 0.15 45), oklch(0.55 0.14 40) 60%, oklch(0.22 0.08 40) 100%)",
                boxShadow: "0 0 140px oklch(0.72 0.14 45 / 0.55), inset -20px -30px 60px oklch(0 0 0 / 0.4)",
              }}
            />
            <div className="mt-4 text-center text-[11px] uppercase tracking-[0.24em] text-claude">
              Artifacts
            </div>
          </motion.div>

          {/* Center core */}
          <motion.div
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.2 }}
            className="relative z-10"
          >
            <div
              className="h-24 w-24 rounded-full md:h-28 md:w-28"
              style={{
                background:
                  "radial-gradient(circle, white, oklch(0.9 0.05 260) 60%, oklch(0.4 0.03 260) 100%)",
                boxShadow:
                  "0 0 100px oklch(1 0 0 / 0.4), 0 0 40px oklch(0.72 0.14 45 / 0.4), 0 0 40px oklch(0.68 0.14 265 / 0.4)",
              }}
            />
            <div className="mt-4 text-center text-[11px] uppercase tracking-[0.24em] text-muted-foreground">
              Claude core
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.1, ease: [0.2, 0.7, 0.2, 1] }}
            className="absolute left-1/2 top-1/2 -translate-y-1/2 translate-x-[190px] md:translate-x-[240px]"
          >
            <div
              className="orb-anim h-40 w-40 rounded-full md:h-48 md:w-48"
              style={{
                background:
                  "radial-gradient(circle at 30% 30%, oklch(0.85 0.14 265), oklch(0.5 0.14 265) 60%, oklch(0.2 0.08 265) 100%)",
                boxShadow: "0 0 140px oklch(0.68 0.14 265 / 0.55), inset -20px -30px 60px oklch(0 0 0 / 0.4)",
              }}
            />
            <div className="mt-4 text-center text-[11px] uppercase tracking-[0.24em] text-exec">
              Code Execution
            </div>
          </motion.div>

          {/* Connecting lines */}
          <svg className="pointer-events-none absolute inset-0 h-full w-full" viewBox="0 0 800 360" fill="none">
            <motion.line
              x1="200" y1="180" x2="380" y2="180"
              stroke="oklch(0.72 0.14 45 / 0.5)" strokeWidth="1.5"
              initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1.2, delay: 0.6 }}
            />
            <motion.line
              x1="420" y1="180" x2="600" y2="180"
              stroke="oklch(0.68 0.14 265 / 0.5)" strokeWidth="1.5"
              initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1.2, delay: 0.6 }}
            />
          </svg>
        </div>

        <Reveal delay={0.4}>
          <h1 className="text-display text-5xl md:text-7xl lg:text-[86px]">
            Artifacts vs. Code Execution:<br />
            <span className="bg-gradient-to-r from-claude via-white to-exec bg-clip-text text-transparent">
              Claude's Two Creation Engines.
            </span>
          </h1>
        </Reveal>
        <Reveal delay={0.55}>
          <p className="mt-8 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-xl">
            Two different ways Claude turns your ideas into real, usable output.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- 02 THE CORE DISTINCTION ---------------- */

function Distinction() {
  return (
    <section id="distinction" className="relative w-full px-6 py-24 md:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 flex items-center justify-between">
          <Kicker tone="claude">02 · The core distinction</Kicker>
          <span className="text-kicker">Two engines, one assistant</span>
        </div>

        <div className="grid grid-cols-12 gap-6">
          <Reveal className="col-span-12 md:col-span-6">
            <div className="card-surface relative h-full overflow-hidden p-8 md:p-10 hover:glow-claude">
              <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full opacity-50 blur-3xl"
                style={{ background: "radial-gradient(circle, oklch(0.72 0.14 45 / 0.5), transparent 70%)" }}
              />
              <div className="relative">
                <PillTag tone="claude" label="Artifacts" />
                <h3 className="mt-6 text-display text-3xl md:text-4xl leading-tight">
                  Content that <span className="text-claude">lives and can be edited</span> inside Claude.
                </h3>
                <p className="mt-6 text-sm leading-relaxed text-muted-foreground md:text-base">
                  A dedicated workspace next to the chat — open it, iterate, share the link. It stays inside Claude.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="col-span-12 md:col-span-6">
            <div className="card-surface relative h-full overflow-hidden p-8 md:p-10 hover:glow-exec">
              <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full opacity-50 blur-3xl"
                style={{ background: "radial-gradient(circle, oklch(0.68 0.14 265 / 0.5), transparent 70%)" }}
              />
              <div className="relative">
                <PillTag tone="exec" label="Code Execution & File Creation" />
                <h3 className="mt-6 text-display text-3xl md:text-4xl leading-tight">
                  A sandbox where Claude <span className="text-exec">runs real code</span> to produce downloadable files.
                </h3>
                <p className="mt-6 text-sm leading-relaxed text-muted-foreground md:text-base">
                  Python, JS, Bash. Package installs. Real computation. Files you download and use.
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.2} className="col-span-12 mt-4">
            <div className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.03] px-6 py-5 backdrop-blur">
              <div className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-white/5 text-muted-foreground">
                <Sparkles className="h-4 w-4" />
              </div>
              <div>
                <div className="text-[10px] uppercase tracking-[0.24em] text-muted-foreground">Callout</div>
                <p className="mt-1 text-sm text-foreground md:text-base">
                  As of 2026, <span className="text-claude font-medium">Artifacts</span> run on top of{" "}
                  <span className="text-exec font-medium">Code Execution</span> being enabled.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ---------------- 03 WHAT ARE ARTIFACTS ---------------- */

function WhatAreArtifacts() {
  return (
    <section id="artifacts" className="relative w-full px-6 py-24 md:py-32"
      style={{
        background:
          "radial-gradient(900px 500px at 20% 30%, oklch(0.72 0.14 45 / 0.15), transparent 60%), var(--background)",
      }}
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 flex items-center justify-between">
          <Kicker tone="claude">03 · What are Artifacts</Kicker>
          <PillTag tone="claude" label="In-chat workspace" />
        </div>

        <div className="grid grid-cols-12 gap-6">
          <Reveal className="col-span-12 md:col-span-7">
            <h2 className="text-display text-4xl md:text-6xl leading-[1.05]">
              Outputs that open in their <span className="text-claude">own workspace</span> — not a plain chat bubble.
            </h2>
            <p className="mt-8 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
              Self-contained, editable, reusable. Anything you'll likely tweak, iterate, or share — typically
              15+ lines that stand on their own — becomes an Artifact.
            </p>
          </Reveal>

          <Reveal delay={0.15} className="col-span-12 md:col-span-5">
            <div className="grid grid-cols-1 gap-4">
              {[
                { icon: LayoutDashboard, label: "Opens in its own panel" },
                { icon: MousePointerClick, label: "Editable & re-runnable" },
                { icon: Download, label: "Shareable & reusable" },
              ].map((f) => (
                <div key={f.label} className="card-surface flex items-center gap-4 p-5">
                  <div className="grid h-10 w-10 place-items-center rounded-xl bg-claude/12 text-claude ring-1 ring-inset ring-claude/25">
                    <f.icon className="h-[18px] w-[18px]" />
                  </div>
                  <div className="text-sm font-medium md:text-[15px]">{f.label}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ---------------- 04 ARTIFACT TYPES ---------------- */

const ARTIFACT_TYPES: {
  id: string;
  index: string;
  title: string;
  format: string;
  icon: LucideIcon;
  examples: string[];
}[] = [
  {
    id: "type-md", index: "01", title: "Markdown Documents", format: ".md",
    icon: FileText,
    examples: ["Docs", "Reports", "Research papers", "Manuals", "README files", "Blog posts", "Business plans"],
  },
  {
    id: "type-code", index: "02", title: "Code", format: "PY · JS · TS · Go · Rust · SQL",
    icon: Code2,
    examples: ["Full apps", "APIs", "Automation scripts", "React components", "MCP servers", "HTML/CSS"],
  },
  {
    id: "type-html", index: "03", title: "HTML", format: ".html",
    icon: Globe,
    examples: ["Landing pages", "Dashboards", "Interactive forms", "Games", "Calculators", "Data viz", "SaaS mockups"],
  },
  {
    id: "type-svg", index: "04", title: "SVG", format: ".svg",
    icon: Shapes,
    examples: ["Logos", "Icons", "Flowcharts", "Architecture diagrams", "Infographics", "Process diagrams"],
  },
  {
    id: "type-react", index: "05", title: "React Interactive Apps", format: "React · TSX",
    icon: LayoutDashboard,
    examples: ["CRM UI", "Kanban boards", "Analytics dashboards", "Habit trackers", "Quiz apps", "Admin dashboards"],
  },
];

function ArtifactTypes() {
  return (
    <section id="artifact-types" className="relative w-full px-6 py-24 md:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 flex items-center justify-between">
          <Kicker tone="claude">04 · Artifact types</Kicker>
          <span className="text-kicker">Five formats</span>
        </div>

        <div className="grid grid-cols-12 gap-6">
          {ARTIFACT_TYPES.map((t, i) => (
            <Reveal key={t.id} delay={i * 0.06} className={`col-span-12 ${i < 2 ? "md:col-span-6" : "md:col-span-4"}`}>
              <div className="card-surface card-surface-hover group h-full p-6 md:p-7 hover:glow-claude">
                <div className="flex items-start justify-between">
                  <div className="grid h-11 w-11 place-items-center rounded-xl bg-claude/12 text-claude ring-1 ring-inset ring-claude/25">
                    <t.icon className="h-[18px] w-[18px]" />
                  </div>
                  <span className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground">{t.index}</span>
                </div>
                <h3 className="mt-6 text-display text-2xl md:text-[26px]">{t.title}</h3>
                <div className="mt-2">
                  <FormatBadge tone="claude" label={t.format} />
                </div>
                <div className="mt-5 flex flex-wrap gap-2">
                  {t.examples.map((ex) => (
                    <span
                      key={ex}
                      className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-muted-foreground transition-colors group-hover:border-claude/30 group-hover:text-foreground"
                    >
                      {ex}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- 05 WHAT IS CODE EXECUTION ---------------- */

function WhatIsExecution() {
  return (
    <section id="code-execution" className="relative w-full px-6 py-24 md:py-32"
      style={{
        background:
          "radial-gradient(900px 500px at 80% 30%, oklch(0.68 0.14 265 / 0.18), transparent 60%), var(--background)",
      }}
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 flex items-center justify-between">
          <Kicker tone="chatgpt">05 · What is Code Execution</Kicker>
          <PillTag tone="exec" label="Sandbox runtime" />
        </div>

        <div className="grid grid-cols-12 gap-6">
          <Reveal className="col-span-12 md:col-span-7">
            <h2 className="text-display text-4xl md:text-6xl leading-[1.05]">
              A sandbox where Claude <span className="text-exec">actually runs code</span> — and hands you the files.
            </h2>
            <p className="mt-8 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
              Python, JavaScript, Bash. Installs packages. Analyzes uploaded files. Performs real calculations.
              Produces downloadable output instead of in-chat text.
            </p>
          </Reveal>

          <Reveal delay={0.15} className="col-span-12 md:col-span-5">
            <div className="grid grid-cols-1 gap-4">
              {[
                { icon: Terminal, label: "Runs Python / JS / Bash" },
                { icon: Package, label: "Installs packages on the fly" },
                { icon: Download, label: "Produces real downloadable files" },
              ].map((f) => (
                <div key={f.label} className="card-surface flex items-center gap-4 p-5">
                  <div className="grid h-10 w-10 place-items-center rounded-xl bg-exec/15 text-exec ring-1 ring-inset ring-exec/25">
                    <f.icon className="h-[18px] w-[18px]" />
                  </div>
                  <div className="text-sm font-medium md:text-[15px]">{f.label}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ---------------- 06 FILE CATEGORIES ---------------- */

const FILE_CATEGORIES: {
  id: string;
  icon: LucideIcon;
  title: string;
  formats: string[];
  examples: string[];
}[] = [
  {
    id: "fc-docs", icon: FileText, title: "Documents",
    formats: [".docx", ".pdf", ".md", ".txt"],
    examples: ["Contracts", "Reports", "Manuals", "Proposals"],
  },
  {
    id: "fc-sheets", icon: FileSpreadsheet, title: "Spreadsheets",
    formats: [".xlsx", ".csv", ".tsv"],
    examples: ["Financial models", "Budgets", "KPI tracking", "Data cleanups"],
  },
  {
    id: "fc-slides", icon: Presentation, title: "Presentations",
    formats: [".pptx"],
    examples: ["Pitch decks", "Training materials", "Board reviews", "Client readouts"],
  },
  {
    id: "fc-images", icon: ImageIcon, title: "Images",
    formats: [".png", ".jpg", ".svg", ".gif"],
    examples: ["Charts", "Graphs", "Diagrams", "Report visuals"],
  },
  {
    id: "fc-data", icon: Database, title: "Data Formats",
    formats: [".json", ".xml", ".yaml", ".sql"],
    examples: ["APIs", "Configs", "DB exports", "Schemas"],
  },
  {
    id: "fc-code", icon: Package, title: "Code Files & Archives",
    formats: [".py", ".js", ".ts", ".zip"],
    examples: ["Full projects", "Multi-file bundles", "Scripts", "Starter kits"],
  },
];

function FileCategories() {
  return (
    <section id="files" className="relative w-full px-6 py-24 md:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 flex items-center justify-between">
          <Kicker tone="chatgpt">06 · Downloadable file categories</Kicker>
          <span className="text-kicker">Six categories</span>
        </div>

        <div className="grid grid-cols-12 gap-6">
          {FILE_CATEGORIES.map((c, i) => (
            <Reveal key={c.id} delay={i * 0.05} className="col-span-12 sm:col-span-6 lg:col-span-4">
              <div className="card-surface card-surface-hover h-full p-6 md:p-7 hover:glow-exec">
                <div className="flex items-start justify-between">
                  <div className="grid h-11 w-11 place-items-center rounded-xl bg-exec/15 text-exec ring-1 ring-inset ring-exec/25">
                    <c.icon className="h-[18px] w-[18px]" />
                  </div>
                  <span className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="mt-6 text-display text-2xl">{c.title}</h3>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {c.formats.map((f) => (
                    <FormatBadge key={f} tone="exec" label={f} />
                  ))}
                </div>
                <div className="mt-5 flex flex-wrap gap-2">
                  {c.examples.map((ex) => (
                    <span
                      key={ex}
                      className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-muted-foreground"
                    >
                      {ex}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- 07 DATA ANALYSIS SUPERPOWERS ---------------- */

const SUPERPOWERS: { icon: LucideIcon; label: string }[] = [
  { icon: Sigma, label: "Clean datasets" },
  { icon: Table2, label: "Merge & transform data" },
  { icon: LayoutDashboard, label: "Pivot tables" },
  { icon: BarChart3, label: "Statistical analysis" },
  { icon: TrendingUp, label: "Trend forecasting" },
  { icon: BrainCircuit, label: "ML models" },
  { icon: LineChart, label: "Dashboards" },
];

function AnalysisSuperpowers() {
  return (
    <section id="analysis" className="relative w-full px-6 py-24 md:py-32"
      style={{
        background:
          "radial-gradient(900px 500px at 50% 0%, oklch(0.68 0.14 265 / 0.18), transparent 60%), var(--background)",
      }}
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 flex items-center justify-between">
          <Kicker tone="chatgpt">07 · Data analysis superpowers</Kicker>
          <PillTag tone="exec" label="Powered by Code Execution" />
        </div>

        <Reveal>
          <h2 className="text-display text-4xl md:text-6xl leading-[1.05] max-w-4xl">
            From raw file to <span className="text-exec">shipped deliverable</span> — in one turn.
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-7">
          {SUPERPOWERS.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.05}>
              <div className="card-surface flex h-full flex-col items-center justify-center gap-3 p-5 text-center hover:glow-exec">
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-exec/15 text-exec ring-1 ring-inset ring-exec/25">
                  <s.icon className="h-[18px] w-[18px]" />
                </div>
                <div className="text-xs font-medium leading-tight md:text-sm">{s.label}</div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.4} className="mt-10">
          <div className="flex flex-wrap items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] px-6 py-5">
            <span className="text-xs uppercase tracking-[0.22em] text-muted-foreground">Export straight to</span>
            <FormatBadge tone="exec" label=".xlsx" />
            <FormatBadge tone="exec" label=".pdf" />
            <FormatBadge tone="exec" label=".pptx" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- 08 COMPARISON ---------------- */

type Cell = boolean | "partial" | string;
const COMPARISON: { row: string; artifacts: Cell; exec: Cell }[] = [
  { row: "Editable inside Claude", artifacts: true, exec: false },
  { row: "Interactive UI", artifacts: true, exec: false },
  { row: "Runs code", artifacts: "partial", exec: true },
  { row: "Downloadable DOCX / PDF / PPTX / XLSX", artifacts: false, exec: true },
  { row: "Interactive React apps", artifacts: true, exec: false },
  { row: "Data analysis depth", artifacts: "Light", exec: "Heavy" },
  { row: "Charts / graphs output", artifacts: "In-view SVG", exec: "Files + images" },
];

function ComparisonTable() {
  return (
    <section id="compare" className="relative w-full px-6 py-24 md:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 flex items-center justify-between">
          <Kicker>08 · Side-by-side</Kicker>
          <span className="text-kicker">Feature parity</span>
        </div>

        <Reveal>
          <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02] backdrop-blur">
            {/* Header */}
            <div className="grid grid-cols-12 border-b border-white/10">
              <div className="col-span-6 px-6 py-5 text-[11px] uppercase tracking-[0.22em] text-muted-foreground md:col-span-6">
                Capability
              </div>
              <div className="col-span-3 flex items-center gap-2 border-l border-white/10 bg-claude/[0.06] px-6 py-5">
                <span className="h-1.5 w-1.5 rounded-full bg-claude" />
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-claude">Artifacts</span>
              </div>
              <div className="col-span-3 flex items-center gap-2 border-l border-white/10 bg-exec/[0.06] px-6 py-5">
                <span className="h-1.5 w-1.5 rounded-full bg-exec" />
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-exec">Code Execution</span>
              </div>
            </div>

            {COMPARISON.map((r, i) => (
              <div
                key={r.row}
                className={`grid grid-cols-12 items-center ${
                  i !== COMPARISON.length - 1 ? "border-b border-white/5" : ""
                }`}
              >
                <div className="col-span-6 px-6 py-5 text-sm text-foreground md:text-[15px]">{r.row}</div>
                <div className="col-span-3 border-l border-white/5 bg-claude/[0.03] px-6 py-5">
                  <CellDisplay tone="claude" value={r.artifacts} />
                </div>
                <div className="col-span-3 border-l border-white/5 bg-exec/[0.03] px-6 py-5">
                  <CellDisplay tone="exec" value={r.exec} />
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function CellDisplay({ tone, value }: { tone: "claude" | "exec"; value: Cell }) {
  const toneCls = tone === "claude" ? "text-claude bg-claude/15 ring-claude/30" : "text-exec bg-exec/15 ring-exec/30";
  if (value === true) {
    return (
      <span className={`inline-flex h-8 w-8 items-center justify-center rounded-full ring-1 ring-inset ${toneCls}`}>
        <Check className="h-4 w-4" />
      </span>
    );
  }
  if (value === false) {
    return (
      <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white/[0.03] text-muted-foreground ring-1 ring-inset ring-white/10">
        <X className="h-4 w-4" />
      </span>
    );
  }
  if (value === "partial") {
    return (
      <span className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs ring-1 ring-inset ${toneCls}`}>
        <span className="h-1.5 w-1.5 rounded-full bg-current" /> Partial
      </span>
    );
  }
  return (
    <span className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium ring-1 ring-inset ${toneCls}`}>
      {value}
    </span>
  );
}

/* ---------------- 09 OUTPUTS SHOWCASE ---------------- */

const ARTIFACT_OUTPUTS = [
  { icon: LayoutDashboard, label: "React app" },
  { icon: BarChart3, label: "Dashboard" },
  { icon: Globe, label: "Website" },
  { icon: FileText, label: "Markdown doc" },
  { icon: Shapes, label: "SVG diagram" },
];
const EXEC_OUTPUTS = [
  { icon: FileText, label: "Word report" },
  { icon: FileSpreadsheet, label: "Excel workbook" },
  { icon: Presentation, label: "PowerPoint deck" },
  { icon: Package, label: "ZIP project" },
  { icon: LineChart, label: "Generated charts" },
];

function OutputsShowcase() {
  return (
    <section id="outputs" className="relative w-full px-6 py-24 md:py-32"
      style={{
        background:
          "radial-gradient(700px 400px at 20% 40%, oklch(0.72 0.14 45 / 0.15), transparent 60%), radial-gradient(700px 400px at 80% 60%, oklch(0.68 0.14 265 / 0.15), transparent 60%), var(--background)",
      }}
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 flex items-center justify-between">
          <Kicker>09 · Typical outputs</Kicker>
          <span className="text-kicker">Recap</span>
        </div>

        <div className="grid grid-cols-12 gap-6">
          <Reveal className="col-span-12 md:col-span-6">
            <OutputColumn tone="claude" title="Artifacts" tag="Editable · In-Claude" items={ARTIFACT_OUTPUTS} />
          </Reveal>
          <Reveal delay={0.1} className="col-span-12 md:col-span-6">
            <OutputColumn tone="exec" title="Code Execution" tag="Downloadable · Real files" items={EXEC_OUTPUTS} />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function OutputColumn({
  tone,
  title,
  tag,
  items,
}: {
  tone: "claude" | "exec";
  title: string;
  tag: string;
  items: { icon: LucideIcon; label: string }[];
}) {
  const glow = tone === "claude" ? "hover:glow-claude" : "hover:glow-exec";
  const chip = tone === "claude"
    ? "bg-claude/12 text-claude ring-claude/25"
    : "bg-exec/15 text-exec ring-exec/25";
  return (
    <div className={`card-surface h-full p-7 md:p-8 ${glow}`}>
      <PillTag tone={tone} label={tag} />
      <h3 className={`mt-5 text-display text-3xl md:text-4xl ${tone === "claude" ? "text-claude" : "text-exec"}`}>
        {title}
      </h3>
      <div className="mt-8 space-y-3">
        {items.map((it, i) => (
          <motion.div
            key={it.label}
            initial={{ opacity: 0, x: tone === "claude" ? -12 : 12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.06 }}
            className="flex items-center gap-4 rounded-xl border border-white/10 bg-white/[0.02] px-4 py-3.5"
          >
            <div className={`grid h-9 w-9 place-items-center rounded-lg ring-1 ring-inset ${chip}`}>
              <it.icon className="h-[16px] w-[16px]" />
            </div>
            <div className="text-sm font-medium md:text-[15px]">{it.label}</div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

/* ---------------- 10 CLOSING ---------------- */

function Closing() {
  return (
    <section
      id="closing"
      className="relative flex min-h-screen w-full items-center overflow-hidden px-6 py-24 md:py-32"
      style={{
        background:
          "radial-gradient(700px 400px at 25% 50%, oklch(0.72 0.14 45 / 0.22), transparent 60%), radial-gradient(700px 400px at 75% 50%, oklch(0.68 0.14 265 / 0.22), transparent 60%), var(--ink-2)",
      }}
    >
      <div className="mx-auto grid w-full max-w-6xl grid-cols-12 gap-6">
        <div className="col-span-12 mb-10">
          <Kicker>10 · Closing</Kicker>
        </div>

        <div className="col-span-12">
          <Reveal>
            <h2 className="text-display text-4xl md:text-6xl lg:text-[80px] leading-[1.05]">
              <span className="text-claude">Artifacts</span> for what you want to see and edit.<br />
              <span className="text-exec">Code Execution</span> for what you want to download and use.
            </h2>
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
                className="inline-flex shrink-0 items-center gap-2 rounded-full border border-white/20 bg-white/5 px-5 py-3 text-sm font-medium text-foreground transition-all hover:border-white/40 hover:bg-white/10"
              >
                Back to all topics
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
        </div>

        <div className="col-span-12 mt-16 flex items-center justify-between border-t border-white/5 pt-6 text-xs text-muted-foreground">
          <div>© 2025 · A visual teardown</div>
          <div className="uppercase tracking-widest">
            <span className="text-claude">Artifacts</span> <span className="opacity-40">·</span>{" "}
            <span className="text-exec">Code Execution</span>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Shared bits ---------------- */

function PillTag({ tone, label }: { tone: "claude" | "exec"; label: string }) {
  const cls =
    tone === "claude"
      ? "bg-claude/15 text-claude ring-claude/30"
      : "bg-exec/15 text-exec ring-exec/30";
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-medium uppercase tracking-wider ring-1 ring-inset ${cls}`}
    >
      <span className={`h-1.5 w-1.5 rounded-full ${tone === "claude" ? "bg-claude" : "bg-exec"}`} />
      {label}
    </span>
  );
}

function FormatBadge({ tone, label }: { tone: "claude" | "exec"; label: string }) {
  const cls =
    tone === "claude"
      ? "border-claude/30 bg-claude/10 text-claude"
      : "border-exec/30 bg-exec/10 text-exec";
  return (
    <span className={`inline-flex items-center rounded-md border px-2 py-0.5 font-mono text-[10.5px] tracking-wide ${cls}`}>
      {label}
    </span>
  );
}

// Ensure imports used only in showcase avoid warnings
void Palette;
