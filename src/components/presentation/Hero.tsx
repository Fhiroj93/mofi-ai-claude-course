import { motion } from "motion/react";
import { ArrowDown, Sparkles } from "lucide-react";
import { Reveal, Kicker } from "./primitives";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-radial-hero grain px-6 py-24"
    >
      {/* Faint grid */}
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
              A visual teardown · 2025
            </span>
          </div>
        </Reveal>

        {/* Dueling orbs */}
        <div className="relative mb-14 flex h-[280px] w-full max-w-2xl items-center justify-center md:h-[360px]">
          <motion.div
            initial={{ opacity: 0, x: -60, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 1.2, ease: [0.2, 0.7, 0.2, 1] }}
            className="absolute left-[12%] top-1/2 -translate-y-1/2"
          >
            <div className="relative orb-anim">
              <div
                className="h-44 w-44 rounded-full md:h-56 md:w-56"
                style={{
                  background:
                    "radial-gradient(circle at 30% 30%, oklch(0.85 0.15 45), oklch(0.55 0.14 40) 60%, oklch(0.25 0.08 40) 100%)",
                  boxShadow:
                    "0 0 120px oklch(0.72 0.14 45 / 0.6), inset -20px -30px 60px oklch(0 0 0 / 0.4)",
                }}
              />
              <div className="mt-4 text-center text-kicker text-claude">Claude</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 60, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.15, ease: [0.2, 0.7, 0.2, 1] }}
            className="absolute right-[12%] top-1/2 -translate-y-1/2"
          >
            <div className="relative orb-anim" style={{ animationDelay: "-3s" }}>
              <div
                className="h-44 w-44 rounded-full md:h-56 md:w-56"
                style={{
                  background:
                    "radial-gradient(circle at 30% 30%, oklch(0.85 0.14 165), oklch(0.5 0.13 165) 60%, oklch(0.22 0.06 165) 100%)",
                  boxShadow:
                    "0 0 120px oklch(0.68 0.13 165 / 0.55), inset -20px -30px 60px oklch(0 0 0 / 0.4)",
                }}
              />
              <div className="mt-4 text-center text-kicker text-chatgpt">ChatGPT</div>
            </div>
          </motion.div>

          {/* Central vs */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full border border-white/15 bg-black/60 backdrop-blur"
          >
            <span className="text-sm font-medium uppercase tracking-widest text-muted-foreground">
              vs
            </span>
          </motion.div>
        </div>

        <Reveal delay={0.3}>
          <h1 className="text-display text-5xl md:text-7xl lg:text-[88px]">
            Claude <span className="text-muted-foreground">vs</span> ChatGPT
          </h1>
          <div className="mt-4 text-display text-3xl text-muted-foreground md:text-4xl">
            The Definitive Breakdown.
          </div>
        </Reveal>

        <Reveal delay={0.5}>
          <p className="mt-10 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
            Two AI giants. One head-to-head test. Seven acts of side-by-side
            evidence — no hedging, no marketing gloss.
          </p>
        </Reveal>

        <Reveal delay={0.7}>
          <a
            href="#thesis"
            className="mt-14 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-sm text-foreground/90 backdrop-blur transition-all hover:border-white/30 hover:bg-white/10"
          >
            Begin the breakdown
            <ArrowDown className="h-4 w-4 animate-bounce" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
