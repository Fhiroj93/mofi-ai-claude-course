import { Reveal, BrandBadge, Kicker } from "./primitives";
import { Hammer, MessageSquare, ArrowUpRight } from "lucide-react";

export function Verdict() {
  return (
    <section
      id="verdict"
      className="relative flex min-h-screen w-full items-center overflow-hidden px-6 py-24 md:py-32"
      style={{
        background:
          "radial-gradient(900px 500px at 20% 30%, oklch(0.72 0.14 45 / 0.15), transparent 60%), radial-gradient(900px 500px at 80% 70%, oklch(0.68 0.13 165 / 0.15), transparent 60%), var(--ink-2)",
      }}
    >
      <div className="mx-auto grid w-full max-w-7xl grid-cols-12 gap-6">
        <div className="col-span-12 mb-10">
          <Kicker>08 · Verdict</Kicker>
        </div>

        <div className="col-span-12 lg:col-span-7">
          <Reveal>
            <h2 className="text-display text-5xl md:text-7xl lg:text-[92px]">
              Different tools.<br />
              <span className="text-muted-foreground/80">Different jobs.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mt-8 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
              This isn't a knockout. It's a division of labor. Pick the one whose
              strengths match the work in front of you — and stop trying to make
              one model do everything.
            </p>
          </Reveal>
        </div>

        <div className="col-span-12 flex flex-col gap-4 lg:col-span-5">
          <Reveal delay={0.2}>
            <DecisionCard
              brand="claude"
              icon={Hammer}
              when="Building a full product workflow"
              then="Reach for Claude."
              detail="Design → code → automation → integrations, all in one context."
            />
          </Reveal>
          <Reveal delay={0.3}>
            <DecisionCard
              brand="chatgpt"
              icon={MessageSquare}
              when="Fast daily Q&A, voice, or media"
              then="Reach for ChatGPT."
              detail="Speed, modality, and reach when you just need an answer now."
            />
          </Reveal>
        </div>

        <div className="col-span-12 mt-16">
          <Reveal>
            <div className="flex flex-col items-start justify-between gap-6 rounded-3xl border border-white/10 bg-white/[0.02] p-8 md:flex-row md:items-center md:p-10">
              <div>
                <div className="text-kicker">Closing line</div>
                <div className="mt-2 text-display text-2xl md:text-3xl">
                  The best AI stack in 2025 has both — pointed at what each does best.
                </div>
              </div>
              <a
                href="#hero"
                className="inline-flex shrink-0 items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium transition-all hover:border-white/30 hover:bg-white/10"
              >
                Restart the breakdown
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </Reveal>
        </div>

        <div className="col-span-12 mt-16 flex items-center justify-between border-t border-white/5 pt-6 text-xs text-muted-foreground">
          <div>© 2025 · A visual teardown</div>
          <div className="flex items-center gap-3">
            <BrandBadge brand="claude" />
            <BrandBadge brand="chatgpt" />
          </div>
        </div>
      </div>
    </section>
  );
}

function DecisionCard({
  brand,
  icon: Icon,
  when,
  then,
  detail,
}: {
  brand: "claude" | "chatgpt";
  icon: React.ComponentType<{ className?: string }>;
  when: string;
  then: string;
  detail: string;
}) {
  const isClaude = brand === "claude";
  return (
    <div
      className={`card-surface card-surface-hover p-6 md:p-7 ${
        isClaude ? "hover:glow-claude" : "hover:glow-chatgpt"
      }`}
    >
      <div className="mb-5 flex items-center justify-between">
        <BrandBadge brand={brand} />
        <div
          className={`grid h-10 w-10 place-items-center rounded-xl ${
            isClaude ? "bg-claude/15 text-claude" : "bg-chatgpt/15 text-chatgpt"
          }`}
        >
          <Icon className="h-5 w-5" />
        </div>
      </div>
      <div className="text-sm text-muted-foreground">{when}</div>
      <div className={`mt-1 text-display text-2xl ${isClaude ? "text-claude" : "text-chatgpt"}`}>
        {then}
      </div>
      <div className="mt-3 text-sm text-muted-foreground">{detail}</div>
    </div>
  );
}
