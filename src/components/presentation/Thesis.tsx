import { Reveal, BrandBadge } from "./primitives";
import { Layers, Zap } from "lucide-react";

export function Thesis() {
  return (
    <section
      id="thesis"
      className="relative flex min-h-screen w-full items-center overflow-hidden bg-radial-section px-6 py-24"
    >
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-0 overflow-hidden rounded-3xl border border-white/10 md:grid-cols-2">
        {/* Claude side */}
        <Reveal>
          <div
            className="relative flex min-h-[520px] flex-col justify-between p-10 md:p-14"
            style={{
              background:
                "radial-gradient(600px 400px at 20% 20%, oklch(0.72 0.14 45 / 0.22), transparent 60%), oklch(0.16 0.02 40)",
            }}
          >
            <div className="flex items-center justify-between">
              <BrandBadge brand="claude" />
              <Layers className="h-5 w-5 text-claude/70" />
            </div>
            <div>
              <div className="text-kicker text-claude">Wins on</div>
              <h2 className="mt-4 text-display text-5xl md:text-6xl lg:text-7xl">
                Depth<span className="text-claude">.</span>
                <br />
                <span className="text-muted-foreground/80">& workflow.</span>
              </h2>
              <p className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground">
                A connected pipeline that thinks, designs, ships, and remembers —
                inside one continuous ecosystem.
              </p>
            </div>
          </div>
        </Reveal>

        {/* Divider */}
        <div className="pointer-events-none absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 md:block">
          <div className="grid h-14 w-14 place-items-center rounded-full border border-white/15 bg-background text-xs uppercase tracking-widest text-muted-foreground">
            vs
          </div>
        </div>

        {/* ChatGPT side */}
        <Reveal delay={0.15}>
          <div
            className="relative flex min-h-[520px] flex-col justify-between p-10 md:p-14"
            style={{
              background:
                "radial-gradient(600px 400px at 80% 20%, oklch(0.68 0.13 165 / 0.22), transparent 60%), oklch(0.14 0.02 165)",
            }}
          >
            <div className="flex items-center justify-between">
              <BrandBadge brand="chatgpt" />
              <Zap className="h-5 w-5 text-chatgpt/70" />
            </div>
            <div>
              <div className="text-kicker text-chatgpt">Wins on</div>
              <h2 className="mt-4 text-display text-5xl md:text-6xl lg:text-7xl">
                Speed<span className="text-chatgpt">.</span>
                <br />
                <span className="text-muted-foreground/80">& reach.</span>
              </h2>
              <p className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground">
                Faster answers, broader modality — voice, image, video — in the
                pocket of nearly everyone online.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
