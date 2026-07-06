import { Reveal, Counter, Kicker, BrandBadge } from "./primitives";
import {
  Palette,
  Edit3,
  Type,
  Brain,
  Mic,
  Image as ImageIcon,
  ShieldCheck,
  Gauge,
  Zap,
  type LucideIcon,
} from "lucide-react";

type Row = {
  icon: LucideIcon;
  label: string;
  claude: string;
  chatgpt: string;
  winner: "claude" | "chatgpt" | "tie";
};

const ROWS: Row[] = [
  { icon: Palette, label: "Visual / Code Output", claude: "Design + code in one pass", chatgpt: "Solid, less integrated", winner: "claude" },
  { icon: Edit3, label: "Editing Style", claude: "Surgical, respects intent", chatgpt: "Rewrites eagerly", winner: "claude" },
  { icon: Type, label: "Writing Style", claude: "Voice-matched, editorial", chatgpt: "Cleaner default polish", winner: "claude" },
  { icon: Brain, label: "Long-Term Memory", claude: "Projects + Skills persist", chatgpt: "Cross-chat memory built-in", winner: "chatgpt" },
  { icon: Mic, label: "Voice & Audio", claude: "Text-first", chatgpt: "Native realtime voice", winner: "chatgpt" },
  { icon: ImageIcon, label: "Image / Video", claude: "Basic", chatgpt: "Sora + native image", winner: "chatgpt" },
  { icon: ShieldCheck, label: "Daily Reliability", claude: "Consistent, less rate-drift", chatgpt: "Faster, occasionally throttled", winner: "claude" },
  { icon: Gauge, label: "Usage Limits", claude: "Tighter caps on Pro", chatgpt: "Roomier for casual use", winner: "chatgpt" },
  { icon: Zap, label: "Quick Q&A", claude: "Thoughtful, slower", chatgpt: "Instant, snappy", winner: "chatgpt" },
];

export function Scorecard() {
  return (
    <section id="scorecard" className="relative w-full px-6 py-24 md:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 flex flex-col gap-4">
          <Kicker>06 · Full Scorecard</Kicker>
          <Reveal>
            <h2 className="text-display max-w-3xl text-4xl md:text-6xl">
              Nine categories. One honest tally.
            </h2>
          </Reveal>
        </div>

        {/* Context window bar */}
        <Reveal>
          <div className="card-surface mb-10 p-6 md:p-8">
            <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
              <div>
                <div className="text-kicker">Context window</div>
                <div className="mt-1 text-display text-2xl md:text-3xl">
                  How much can they hold in mind?
                </div>
              </div>
              <div className="text-xs text-muted-foreground">tokens</div>
            </div>

            <div className="flex flex-col gap-4">
              <BarRow brand="claude" value={200} max={200} />
              <BarRow brand="chatgpt" value={128} max={200} />
            </div>
          </div>
        </Reveal>

        {/* Table */}
        <Reveal>
          <div className="card-surface overflow-hidden">
            {/* Header row */}
            <div className="grid grid-cols-[1fr_1fr_1fr] gap-0 border-b border-white/10 bg-white/[0.02] px-6 py-4 text-[11px] uppercase tracking-widest text-muted-foreground md:grid-cols-[1.4fr_1fr_1fr]">
              <div>Category</div>
              <div className="flex justify-center"><BrandBadge brand="claude" /></div>
              <div className="flex justify-center"><BrandBadge brand="chatgpt" /></div>
            </div>

            {ROWS.map((r, i) => {
              const Icon = r.icon;
              const claudeWin = r.winner === "claude";
              const chatgptWin = r.winner === "chatgpt";
              return (
                <Reveal key={r.label} delay={i * 0.04}>
                  <div className="grid grid-cols-[1fr_1fr_1fr] items-stretch gap-0 border-b border-white/5 last:border-b-0 md:grid-cols-[1.4fr_1fr_1fr]">
                    <div className="flex items-center gap-4 px-6 py-5">
                      <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-white/10 bg-white/[0.03] text-foreground/80">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div className="min-w-0">
                        <div className="truncate font-medium">{r.label}</div>
                      </div>
                    </div>

                    <Cell winner={claudeWin} brand="claude" text={r.claude} />
                    <Cell winner={chatgptWin} brand="chatgpt" text={r.chatgpt} />
                  </div>
                </Reveal>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Cell({
  winner,
  brand,
  text,
}: {
  winner: boolean;
  brand: "claude" | "chatgpt";
  text: string;
}) {
  const isClaude = brand === "claude";
  const winCls = winner
    ? isClaude
      ? "bg-claude/[0.08] shadow-[inset_0_0_40px_oklch(0.72_0.14_45/0.15)]"
      : "bg-chatgpt/[0.08] shadow-[inset_0_0_40px_oklch(0.68_0.13_165/0.15)]"
    : "";
  const dotCls = winner
    ? isClaude
      ? "bg-claude"
      : "bg-chatgpt"
    : "bg-white/20";
  return (
    <div className={`flex items-center justify-center gap-3 px-4 py-5 text-center text-sm text-muted-foreground transition-colors ${winCls}`}>
      <span className={`h-1.5 w-1.5 shrink-0 rounded-full ${dotCls}`} />
      <span className={winner ? "text-foreground" : ""}>{text}</span>
    </div>
  );
}

function BarRow({
  brand,
  value,
  max,
}: {
  brand: "claude" | "chatgpt";
  value: number;
  max: number;
}) {
  const isClaude = brand === "claude";
  const pct = (value / max) * 100;
  return (
    <div>
      <div className="mb-2 flex items-center justify-between">
        <BrandBadge brand={brand} />
        <div className={`text-display text-xl md:text-2xl ${isClaude ? "text-claude" : "text-chatgpt"}`}>
          <Counter to={value} />k
          <span className="ml-2 text-xs font-normal text-muted-foreground">tokens</span>
        </div>
      </div>
      <div className="h-3 w-full overflow-hidden rounded-full bg-white/[0.04]">
        <div
          className={`bar-grow h-full rounded-full ${
            isClaude
              ? "bg-gradient-to-r from-claude/60 to-claude"
              : "bg-gradient-to-r from-chatgpt/60 to-chatgpt"
          }`}
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  );
}
