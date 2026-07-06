import { Reveal, BrandBadge, Kicker } from "./primitives";
import {
  PenLine,
  Workflow,
  MousePointerClick,
  GraduationCap,
  Network,
  type LucideIcon,
} from "lucide-react";

type Battle = {
  n: string;
  title: string;
  insight: string;
  winner: "claude" | "chatgpt";
  icon: LucideIcon;
};

const BATTLES: Battle[] = [
  {
    n: "01",
    title: "Writing & Tone Matching",
    insight:
      "Claude mirrors voice on the first try. ChatGPT still leaks its house style.",
    winner: "claude",
    icon: PenLine,
  },
  {
    n: "02",
    title: "Automation & Persistent Systems",
    insight:
      "Claude Projects + Skills act like teammates. ChatGPT resets between chats.",
    winner: "claude",
    icon: Workflow,
  },
  {
    n: "03",
    title: "Agentic Browser Tasks",
    insight:
      "Claude in Chrome actually finishes multi-step web work. Codex stalls.",
    winner: "claude",
    icon: MousePointerClick,
  },
  {
    n: "04",
    title: "Visual & Interactive Learning",
    insight:
      "ChatGPT's image, canvas, and voice pairing beats Claude for teaching.",
    winner: "chatgpt",
    icon: GraduationCap,
  },
  {
    n: "05",
    title: "Workflow Ecosystem",
    insight:
      "Claude's MCP web plugs into Apollo, HeyGen, Meta Ads — no glue code.",
    winner: "claude",
    icon: Network,
  },
];

export function Battlegrounds() {
  return (
    <section id="battlegrounds" className="relative w-full px-6 py-24 md:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 flex flex-col gap-4">
          <Kicker>04 · Five Key Battlegrounds</Kicker>
          <Reveal>
            <h2 className="text-display max-w-3xl text-4xl md:text-6xl">
              Where the fight actually gets decided.
            </h2>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {BATTLES.map((b, i) => {
            const Icon = b.icon;
            const glow = b.winner === "claude" ? "hover:glow-claude" : "hover:glow-chatgpt";
            const tint = b.winner === "claude" ? "text-claude" : "text-chatgpt";
            return (
              <Reveal key={b.n} delay={i * 0.08}>
                <div
                  className={`card-surface card-surface-hover ${glow} group flex h-full flex-col justify-between p-7`}
                >
                  <div>
                    <div className="mb-6 flex items-center justify-between">
                      <div className="text-kicker">{b.n}</div>
                      <BrandBadge brand={b.winner} />
                    </div>
                    <div
                      className={`mb-5 grid h-12 w-12 place-items-center rounded-2xl border border-white/10 bg-white/5 ${tint} transition-transform duration-300 group-hover:scale-110`}
                    >
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-display text-2xl">{b.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {b.insight}
                    </p>
                  </div>
                  <div className="mt-8 flex items-center justify-between border-t border-white/5 pt-5">
                    <span className="text-xs uppercase tracking-widest text-muted-foreground">
                      Winner
                    </span>
                    <span className={`text-sm font-medium ${tint}`}>
                      {b.winner === "claude" ? "Claude" : "ChatGPT"}
                    </span>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
