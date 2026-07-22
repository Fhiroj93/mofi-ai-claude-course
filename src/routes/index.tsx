import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { ArrowUpRight, Sparkles, Swords, Layers, Wand2, FileCode2 } from "lucide-react";
import { Reveal, Kicker } from "@/components/presentation/primitives";

type Topic = {
  slug: "/claude-vs-chatgpt" | "/claude-features" | "/prompt-engineering" | "/artifacts-vs-execution";
  index: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  accent: "claude" | "chatgpt" | "dual" | "exec-dual";
  tag: string;
};

const TOPICS: Topic[] = [
  {
    slug: "/claude-vs-chatgpt",
    index: "01",
    title: "Claude vs ChatGPT",
    description: "The definitive head-to-head teardown — depth, workflow, speed, reach.",
    icon: Swords,
    accent: "dual",
    tag: "Comparison · 8 acts",
  },
  {
    slug: "/claude-features",
    index: "02",
    title: "Claude: The Complete Features Overview",
    description: "A beginner's map to everything Claude can do — chat, skills, connectors, agents.",
    icon: Layers,
    accent: "claude",
    tag: "Primer · 10 chapters",
  },
  {
    slug: "/prompt-engineering",
    index: "03",
    title: "Prompt Engineering & Working With Claude",
    description: "From foundations to loop engineering — plus a full slash-command reference library.",
    icon: Wand2,
    accent: "claude",
    tag: "Playbook · 7 chapters",
  },
  {
    slug: "/artifacts-vs-execution",
    index: "04",
    title: "Artifacts vs. Code Execution",
    description: "Claude's two creation engines — editable in-chat outputs vs. real, downloadable files.",
    icon: FileCode2,
    accent: "exec-dual",
    tag: "Teardown · 10 sections",
  },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Explore — AI Teardowns & Primers" },
      { name: "description", content: "A curated index of premium, visual teardowns of the AI tools that matter." },
    ],
  }),
  component: Hub,
});

function Hub() {
  return (
    <main className="relative min-h-screen w-full overflow-x-clip bg-radial-hero grain text-foreground">
      {/* Faint grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-24 md:px-12 md:py-32">
        <Reveal>
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 backdrop-blur">
            <Sparkles className="h-3.5 w-3.5 text-claude" />
            <span className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
              The AI Teardown Library · 2025
            </span>
          </div>
        </Reveal>

        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 lg:col-span-8">
            <Reveal delay={0.1}>
              <h1 className="text-display text-6xl md:text-8xl lg:text-[112px]">
                Explore.
              </h1>
            </Reveal>
            <Reveal delay={0.25}>
              <p className="mt-8 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
                A curated library of visual teardowns and primers on the AI tools
                reshaping how we work. No hedging, no marketing gloss — just
                editorial clarity.
              </p>
            </Reveal>
          </div>
          <div className="col-span-12 flex items-end lg:col-span-4 lg:justify-end">
            <Reveal delay={0.35}>
              <Kicker>Index · {TOPICS.length} topics</Kicker>
            </Reveal>
          </div>
        </div>

        <div className="mt-20 grid grid-cols-12 gap-6">
          {TOPICS.map((t, i) => (
            <Reveal key={t.slug} delay={0.15 + i * 0.08} className="col-span-12 md:col-span-6">
              <TopicCard topic={t} />
            </Reveal>
          ))}
        </div>

        <div className="mt-24 flex items-center justify-between border-t border-white/5 pt-6 text-xs text-muted-foreground">
          <div>© 2025 · A visual teardown library</div>
          <div className="uppercase tracking-widest">More topics coming</div>
        </div>
      </div>
    </main>
  );
}

function TopicCard({ topic }: { topic: Topic }) {
  const Icon = topic.icon;
  const glow =
    topic.accent === "chatgpt"
      ? "hover:glow-chatgpt"
      : topic.accent === "exec-dual"
      ? "hover:glow-exec"
      : "hover:glow-claude";
  const wash =
    topic.accent === "chatgpt"
      ? "radial-gradient(circle, oklch(0.68 0.13 165 / 0.5), transparent 70%)"
      : topic.accent === "dual"
      ? "radial-gradient(circle, oklch(0.72 0.14 45 / 0.35), oklch(0.68 0.13 165 / 0.25) 60%, transparent 80%)"
      : topic.accent === "exec-dual"
      ? "radial-gradient(circle, oklch(0.72 0.14 45 / 0.35), oklch(0.68 0.14 265 / 0.3) 60%, transparent 80%)"
      : "radial-gradient(circle, oklch(0.72 0.14 45 / 0.5), transparent 70%)";
  const iconCls =
    topic.accent === "chatgpt"
      ? "bg-chatgpt/15 text-chatgpt"
      : topic.accent === "exec-dual"
      ? "bg-exec/15 text-exec"
      : "bg-claude/15 text-claude";
  return (
    <Link to={topic.slug} className="group block">
      <motion.div
        whileHover={{ y: -4 }}
        transition={{ duration: 0.3, ease: [0.2, 0.7, 0.2, 1] }}
        className={`card-surface card-surface-hover relative overflow-hidden p-7 md:p-9 ${glow}`}
      >
        {/* Accent wash */}
        <div
          className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full opacity-40 blur-3xl transition-opacity group-hover:opacity-70"
          style={{ background: wash }}
        />

        <div className="relative flex items-start justify-between">
          <div className={`grid h-12 w-12 place-items-center rounded-xl ${iconCls}`}>
            <Icon className="h-5 w-5" />
          </div>
          <span className="text-kicker">{topic.index}</span>
        </div>


        <div className="relative mt-8">
          <div className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
            {topic.tag}
          </div>
          <h3 className="mt-3 text-display text-3xl md:text-4xl">{topic.title}</h3>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground md:text-base">
            {topic.description}
          </p>
        </div>

        <div className="relative mt-10 flex items-center justify-between">
          <span className="text-xs uppercase tracking-widest text-muted-foreground transition-colors group-hover:text-foreground">
            Open teardown
          </span>
          <div className="grid h-9 w-9 place-items-center rounded-full border border-white/10 bg-white/5 transition-all group-hover:border-white/30 group-hover:bg-white/10">
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </div>
        </div>
      </motion.div>
    </Link>
  );
}
