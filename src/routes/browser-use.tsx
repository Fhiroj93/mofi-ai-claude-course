import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowLeft,
  ArrowRight,
  Chrome,
  MousePointerClick,
  Compass,
  ScanText,
  Table2,
  ShieldCheck,
  Sparkles,
  Mail,
  Workflow,
  ShoppingCart,
  CalendarClock,
  FileSpreadsheet,
  Users,
  Search,
  ListChecks,
  Eye,
  PauseCircle,
  Quote,
  CheckCircle2,
  XCircle,
} from "lucide-react";
import { Reveal, Kicker } from "@/components/presentation/primitives";
import { FeaturesSideNav, type NavSection } from "@/components/presentation/FeaturesSideNav";

export const Route = createFileRoute("/browser-use")({
  head: () => ({
    meta: [
      { title: "Claude Cowork Browser Use — Goal, Browse, Extract, Structure" },
      {
        name: "description",
        content:
          "How Claude Cowork drives a real Chrome tab: the planning layer, live page interaction, structured output — plus worked prompt examples for n8n, Gmail drafts and more.",
      },
      { property: "og:title", content: "Claude Cowork Browser Use — Goal, Browse, Extract, Structure" },
      {
        property: "og:description",
        content:
          "A visual teardown of Claude's browser use flow, with copy-ready prompt examples that edit workflows, draft Gmail replies and research live pages.",
      },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Claude Cowork Browser Use" },
      {
        name: "twitter:description",
        content: "The planning layer, the live tab, the structured output — and real prompts to try.",
      },
    ],
  }),
  component: BrowserUsePage,
});

const NAV: NavSection[] = [
  { id: "hero", label: "Intro" },
  { id: "flow", label: "The Flow" },
  { id: "loop", label: "The Loop" },
  { id: "examples", label: "Examples" },
  { id: "more", label: "More Uses" },
  { id: "guardrails", label: "Guardrails" },
  { id: "limits", label: "Limits" },
  { id: "closing", label: "Closing" },
];

const PLAN_STEPS = ["Navigate", "Read page", "Extract content", "Structure findings"];

const OUTPUTS = ["Table", "Summary", "Insights", "Next actions"];

type Example = {
  icon: React.ComponentType<{ className?: string }>;
  tag: string;
  title: string;
  prompt: string;
  steps: string[];
  output: string;
};

const EXAMPLES: Example[] = [
  {
    icon: Workflow,
    tag: "Automation tooling",
    title: "Edit a prompt inside an n8n workflow",
    prompt:
      "Go to n8n.io, open my \"Lead Enrichment\" workflow, find the AI node and change its prompt so it also returns the company's industry and employee count. Show me the diff before saving.",
    steps: [
      "Opens n8n.io and signs into the existing session",
      "Finds the workflow by name, opens the AI node",
      "Rewrites the prompt field in place",
      "Shows the before/after diff and waits for approval",
    ],
    output: "Updated node prompt + a diff you approve before it saves",
  },
  {
    icon: Mail,
    tag: "Inbox",
    title: "Draft a Gmail reply — never send it",
    prompt:
      "Open Gmail, read my latest email, and write a reply draft that answers every question in it. Match my usual tone. Save it as a draft — do not send.",
    steps: [
      "Opens mail.google.com in the live tab",
      "Reads the most recent thread top to bottom",
      "Composes a reply covering each open question",
      "Clicks Save as draft and stops there",
    ],
    output: "A ready-to-review draft sitting in Gmail — zero messages sent",
  },
  {
    icon: Search,
    tag: "Research",
    title: "Competitive pricing sweep",
    prompt:
      "Visit the pricing pages of these four competitors, pull every plan name, monthly price, seat limits and headline features, and give me one comparison table.",
    steps: [
      "Loads each pricing page in turn",
      "Reads plan cards and feature lists",
      "Normalises currencies and billing periods",
      "Builds a single side-by-side table",
    ],
    output: "One clean comparison table, sourced with links",
  },
];

const MORE_USES = [
  {
    icon: ShoppingCart,
    title: "Fill a cart, stop at checkout",
    body: "Add a shopping list to the basket, apply a promo code, then hand back before payment.",
  },
  {
    icon: CalendarClock,
    title: "Schedule from a live calendar",
    body: "Find a mutual free slot in the real booking UI and hold it as a tentative event.",
  },
  {
    icon: FileSpreadsheet,
    title: "Move web data into a sheet",
    body: "Scrape a dashboard that has no export button and paste it into Google Sheets, formatted.",
  },
  {
    icon: Users,
    title: "Fill a long web form",
    body: "Carry answers from a document into a multi-page application form, field by field.",
  },
  {
    icon: ListChecks,
    title: "Triage a ticket queue",
    body: "Open each new ticket, tag it, and write a suggested first response as a saved draft.",
  },
  {
    icon: ScanText,
    title: "Audit your own site",
    body: "Walk every nav link, flag broken pages, thin copy and missing meta descriptions.",
  },
];

const GUARDRAILS = [
  {
    icon: PauseCircle,
    title: "Ask before acting",
    body: "The planning layer surfaces its intended steps first. Irreversible actions wait for your yes.",
  },
  {
    icon: Eye,
    title: "You watch it work",
    body: "Everything happens in a visible tab. No hidden headless session, no invisible clicks.",
  },
  {
    icon: ShieldCheck,
    title: "Draft, don't send",
    body: "Say \"draft only\" and it stops one click short — the standard pattern for mail and posts.",
  },
];

function BrowserUsePage() {
  return (
    <main className="relative min-h-screen w-full overflow-x-clip bg-radial-hero grain text-foreground">
      <FeaturesSideNav sections={NAV} />
      <div className="relative z-10">
        <TopBar />
        <Hero />
        <Flow />
        <Loop />
        <Examples />
        <MoreUses />
        <Guardrails />
        <Limits />
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
      <span className="text-kicker">08 · Browser Use</span>
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
                Claude Cowork · Browser Use
              </span>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="text-display max-w-4xl text-5xl md:text-7xl lg:text-[84px]">
              It doesn't describe the web. It uses it.
            </h1>
          </Reveal>
          <Reveal delay={0.22}>
            <p className="mt-8 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
              Claude takes over a real Chrome tab — navigating, reading, clicking
              and typing on live pages, then handing back structured output
              instead of a wall of text.
            </p>
          </Reveal>
          <Reveal delay={0.32}>
            <div className="mt-10 flex flex-wrap items-center gap-3 text-sm">
              {["Goal", "Browse", "Extract", "Structure"].map((s, i) => (
                <span key={s} className="inline-flex items-center gap-3">
                  <span className="rounded-full border border-claude/30 bg-claude/10 px-4 py-2 text-claude">
                    {s}
                  </span>
                  {i < 3 && <ArrowRight className="h-3.5 w-3.5 text-muted-foreground" />}
                </span>
              ))}
            </div>
          </Reveal>
        </div>

        <div className="col-span-12 lg:col-span-5">
          <Reveal delay={0.2}>
            <div className="card-surface glow-claude relative overflow-hidden p-6">
              <div className="flex items-center gap-2 border-b border-hairline pb-4">
                <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                <div className="ml-3 flex flex-1 items-center gap-2 rounded-full border border-hairline bg-white/5 px-3 py-1.5 text-xs text-muted-foreground">
                  <Search className="h-3 w-3" /> mail.google.com
                </div>
                <Chrome className="h-4 w-4 text-claude" />
              </div>
              <div className="mt-5 space-y-3">
                <div className="h-2.5 w-3/4 rounded-full bg-white/10" />
                <div className="h-2.5 w-full rounded-full bg-white/10" />
                <div className="h-2.5 w-2/3 rounded-full bg-white/10" />
                <div className="mt-6 flex items-center justify-between rounded-2xl border border-claude/30 bg-claude/10 px-4 py-3">
                  <span className="text-sm text-claude">Reply draft saved</span>
                  <MousePointerClick className="h-4 w-4 text-claude" />
                </div>
                <p className="pt-2 text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  Live interaction with real web content
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Flow() {
  return (
    <Shell id="flow" alt>
      <SectionHead
        kicker="01 · The flow"
        title="Instruction in, planning layer, live tab, structured output."
        lead="Four stages. The middle one is what separates browsing from guessing."
      />
      <div className="grid grid-cols-12 gap-5">
        <Reveal className="col-span-12 md:col-span-3">
          <div className="card-surface h-full p-6">
            <div className="text-kicker">Stage 01</div>
            <div className="mt-3 text-lg font-medium">User instruction</div>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li>Analyse a homepage</li>
              <li>Extract specific data</li>
              <li>Research a topic</li>
            </ul>
          </div>
        </Reveal>
        <Reveal delay={0.1} className="col-span-12 md:col-span-3">
          <div className="card-surface glow-claude h-full border border-claude/25 p-6">
            <div className="text-kicker text-claude">Stage 02</div>
            <div className="mt-3 flex items-center gap-2 text-lg font-medium">
              <Compass className="h-4 w-4 text-claude" /> Planning layer
            </div>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              {PLAN_STEPS.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
            <div className="mt-5 rounded-xl border border-dashed border-claude/30 px-3 py-2 text-xs text-claude">
              Asks before acting
            </div>
          </div>
        </Reveal>
        <Reveal delay={0.2} className="col-span-12 md:col-span-3">
          <div className="card-surface h-full p-6">
            <div className="text-kicker">Stage 03</div>
            <div className="mt-3 flex items-center gap-2 text-lg font-medium">
              <Chrome className="h-4 w-4 text-claude" /> The real tab
            </div>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li>Types into search fields</li>
              <li>Clicks real buttons</li>
              <li>Scrolls and reads</li>
            </ul>
          </div>
        </Reveal>
        <Reveal delay={0.3} className="col-span-12 md:col-span-3">
          <div className="card-surface h-full p-6">
            <div className="text-kicker">Stage 04</div>
            <div className="mt-3 flex items-center gap-2 text-lg font-medium">
              <Table2 className="h-4 w-4 text-claude" /> Structured output
            </div>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              {OUTPUTS.map((o) => (
                <li key={o}>{o}</li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </Shell>
  );
}

function Loop() {
  return (
    <Shell id="loop">
      <SectionHead
        kicker="02 · The loop"
        title="Goal → Browse → Extract → Structure."
        lead="The same four beats run on every task, whether it's one page or forty."
      />
      <div className="grid grid-cols-12 gap-5">
        {[
          { icon: Compass, t: "Goal", b: "You state the outcome, not the clicks." },
          { icon: Chrome, t: "Browse", b: "It drives the page like a person would." },
          { icon: ScanText, t: "Extract", b: "It reads what's rendered, not the raw HTML soup." },
          { icon: Table2, t: "Structure", b: "It returns a table, a summary, a decision." },
        ].map((s, i) => {
          const Icon = s.icon;
          return (
            <Reveal key={s.t} delay={i * 0.08} className="col-span-12 md:col-span-3">
              <div className="card-surface card-surface-hover h-full p-7">
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-claude/15 text-claude">
                  <Icon className="h-5 w-5" />
                </div>
                <div className="mt-6 text-2xl text-display">{s.t}</div>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.b}</p>
              </div>
            </Reveal>
          );
        })}
      </div>
    </Shell>
  );
}

function Examples() {
  return (
    <Shell id="examples" alt>
      <SectionHead
        kicker="03 · Worked examples"
        title="Real prompts, and what happens after you hit enter."
        lead="Copy these as-is. Each one ends in a reviewable result, not an irreversible action."
      />
      <div className="flex flex-col gap-6">
        {EXAMPLES.map((ex, i) => {
          const Icon = ex.icon;
          return (
            <Reveal key={ex.title} delay={i * 0.08}>
              <div className="card-surface card-surface-hover overflow-hidden">
                <div className="grid grid-cols-12">
                  <div className="col-span-12 border-b border-hairline p-8 md:col-span-7 md:border-b-0 md:border-r">
                    <div className="flex items-center gap-3">
                      <div className="grid h-10 w-10 place-items-center rounded-xl bg-claude/15 text-claude">
                        <Icon className="h-5 w-5" />
                      </div>
                      <span className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                        {ex.tag}
                      </span>
                    </div>
                    <h3 className="text-display mt-6 text-2xl md:text-3xl">{ex.title}</h3>
                    <div className="mt-6 rounded-2xl border border-claude/25 bg-claude/[0.06] p-5">
                      <div className="text-kicker text-claude">The prompt</div>
                      <p className="mt-3 whitespace-pre-wrap text-sm leading-relaxed text-foreground">
                        {ex.prompt}
                      </p>
                    </div>
                  </div>
                  <div className="col-span-12 p-8 md:col-span-5">
                    <div className="text-kicker">What Claude does</div>
                    <ol className="mt-4 space-y-3">
                      {ex.steps.map((s, n) => (
                        <li key={s} className="flex gap-3 text-sm text-muted-foreground">
                          <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full border border-claude/30 text-[10px] text-claude">
                            {n + 1}
                          </span>
                          {s}
                        </li>
                      ))}
                    </ol>
                    <div className="mt-6 flex items-start gap-3 rounded-2xl border border-hairline bg-white/5 px-4 py-3">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-claude" />
                      <p className="text-sm text-muted-foreground">{ex.output}</p>
                    </div>
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

function MoreUses() {
  return (
    <Shell id="more">
      <SectionHead
        kicker="04 · More browser use"
        title="Anything that lives behind a login and has no API."
      />
      <div className="grid grid-cols-12 gap-5">
        {MORE_USES.map((u, i) => {
          const Icon = u.icon;
          return (
            <Reveal key={u.title} delay={i * 0.06} className="col-span-12 md:col-span-6 lg:col-span-4">
              <div className="card-surface card-surface-hover h-full p-7">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-claude/15 text-claude">
                  <Icon className="h-5 w-5" />
                </div>
                <div className="mt-6 text-lg font-medium">{u.title}</div>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{u.body}</p>
              </div>
            </Reveal>
          );
        })}
      </div>
    </Shell>
  );
}

function Guardrails() {
  return (
    <Shell id="guardrails" alt>
      <SectionHead
        kicker="05 · Guardrails"
        title="Agentic, but never unsupervised."
      />
      <div className="grid grid-cols-12 gap-5">
        {GUARDRAILS.map((g, i) => {
          const Icon = g.icon;
          return (
            <Reveal key={g.title} delay={i * 0.08} className="col-span-12 md:col-span-4">
              <div className="card-surface h-full p-7">
                <Icon className="h-5 w-5 text-claude" />
                <div className="mt-6 text-lg font-medium">{g.title}</div>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{g.body}</p>
              </div>
            </Reveal>
          );
        })}
      </div>
    </Shell>
  );
}

function Limits() {
  return (
    <Shell id="limits">
      <SectionHead kicker="06 · Honest limits" title="Where it slows down." />
      <div className="grid grid-cols-12 gap-5">
        {[
          "Heavy CAPTCHAs and bot walls stop the run.",
          "Very long pages take multiple passes to read.",
          "Payments, deletions and sends need your explicit approval.",
          "It's slower than an API when an API exists — use the API.",
        ].map((l, i) => (
          <Reveal key={l} delay={i * 0.06} className="col-span-12 md:col-span-6">
            <div className="flex items-start gap-3 rounded-2xl border border-hairline bg-white/5 px-5 py-4">
              <XCircle className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground" />
              <p className="text-sm text-muted-foreground">{l}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Shell>
  );
}

function Closing() {
  return (
    <Shell id="closing" alt>
      <Reveal>
        <div className="card-surface glow-claude relative overflow-hidden p-10 md:p-16">
          <div
            className="pointer-events-none absolute -right-24 -bottom-24 h-72 w-72 rounded-full opacity-50 blur-3xl"
            style={{ background: "radial-gradient(circle, oklch(0.72 0.14 45 / 0.45), transparent 70%)" }}
          />
          <div className="relative">
            <Quote className="h-8 w-8 text-claude" />
            <blockquote className="text-display mt-8 max-w-4xl text-4xl leading-[1.08] md:text-6xl">
              "Give it the goal. It handles the tab."
            </blockquote>
            <Link
              to="/"
              className="mt-12 inline-flex items-center gap-2 rounded-full border border-claude/40 bg-claude/10 px-5 py-3 text-sm text-claude transition-colors hover:bg-claude/20"
            >
              Back to all topics <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </Reveal>
    </Shell>
  );
}
