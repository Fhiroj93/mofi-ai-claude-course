import { Reveal, BrandBadge, Kicker } from "./primitives";
import {
  Layers,
  PenLine,
  Workflow,
  MousePointerClick,
  Network,
  ShieldCheck,
  Edit3,
  Mic,
  Image as ImageIcon,
  Brain,
  Gauge,
  Zap,
  type LucideIcon,
} from "lucide-react";

const CLAUDE_WINS: { icon: LucideIcon; label: string }[] = [
  { icon: Layers, label: "Depth of reasoning" },
  { icon: PenLine, label: "On-brand writing on first try" },
  { icon: Edit3, label: "Respectful, surgical edits" },
  { icon: Workflow, label: "Persistent Projects & Skills" },
  { icon: MousePointerClick, label: "Agentic browser work that ships" },
  { icon: Network, label: "MCP ecosystem & tool handoffs" },
  { icon: ShieldCheck, label: "Reliable day-to-day output" },
  { icon: Layers, label: "Design + code in one pass" },
];

const CHATGPT_WINS: { icon: LucideIcon; label: string }[] = [
  { icon: Zap, label: "Fastest quick Q&A" },
  { icon: Mic, label: "Native realtime voice" },
  { icon: ImageIcon, label: "Image, canvas & Sora video" },
  { icon: Brain, label: "Cross-chat memory built-in" },
  { icon: Gauge, label: "Roomier limits for casual use" },
  { icon: MousePointerClick, label: "Broader everyday reach" },
];

export function TrophyWall() {
  return (
    <section
      id="trophy"
      className="relative w-full overflow-hidden px-6 py-24 md:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 flex flex-col gap-4">
          <Kicker>07 · Trophy Wall</Kicker>
          <Reveal>
            <h2 className="text-display max-w-3xl text-4xl md:text-6xl">
              Everything each one takes home.
            </h2>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <Reveal>
            <TrophyColumn
              brand="claude"
              wins={CLAUDE_WINS}
              headline="Claude's shelf"
            />
          </Reveal>
          <Reveal delay={0.15}>
            <TrophyColumn
              brand="chatgpt"
              wins={CHATGPT_WINS}
              headline="ChatGPT's shelf"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function TrophyColumn({
  brand,
  wins,
  headline,
}: {
  brand: "claude" | "chatgpt";
  wins: { icon: LucideIcon; label: string }[];
  headline: string;
}) {
  const isClaude = brand === "claude";
  return (
    <div
      className={`card-surface card-surface-hover p-8 md:p-10 ${
        isClaude ? "glow-claude" : "glow-chatgpt"
      }`}
    >
      <div className="mb-8 flex items-center justify-between">
        <BrandBadge brand={brand} />
        <div className={`text-display text-4xl ${isClaude ? "text-claude" : "text-chatgpt"}`}>
          {wins.length}
        </div>
      </div>
      <div className="mb-8">
        <div className="text-kicker">Wins</div>
        <div className="mt-2 text-display text-3xl">{headline}</div>
      </div>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        {wins.map((w) => {
          const Icon = w.icon;
          return (
            <div
              key={w.label}
              className={`flex items-center gap-3 rounded-2xl border p-4 transition-all hover:-translate-y-0.5 ${
                isClaude
                  ? "border-claude/20 bg-claude/[0.05] hover:border-claude/40"
                  : "border-chatgpt/20 bg-chatgpt/[0.05] hover:border-chatgpt/40"
              }`}
            >
              <div
                className={`grid h-9 w-9 shrink-0 place-items-center rounded-xl ${
                  isClaude ? "bg-claude/15 text-claude" : "bg-chatgpt/15 text-chatgpt"
                }`}
              >
                <Icon className="h-4 w-4" />
              </div>
              <div className="min-w-0 text-sm font-medium">{w.label}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
