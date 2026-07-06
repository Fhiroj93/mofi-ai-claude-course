import { motion, useInView, useMotionValue, useTransform, animate } from "motion/react";
import { useEffect, useRef, type ReactNode } from "react";

export function Reveal({
  children,
  delay = 0,
  y = 24,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y }}
      transition={{ duration: 0.75, delay, ease: [0.2, 0.7, 0.2, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function Counter({
  to,
  suffix = "",
  duration = 1.6,
  className = "",
}: {
  to: number;
  suffix?: string;
  duration?: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const mv = useMotionValue(0);
  const rounded = useTransform(mv, (v) => Math.round(v).toLocaleString());

  useEffect(() => {
    if (!inView) return;
    const controls = animate(mv, to, { duration, ease: [0.2, 0.7, 0.2, 1] });
    return controls.stop;
  }, [inView, to, duration, mv]);

  return (
    <span ref={ref} className={className}>
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  );
}

export function Kicker({ children, tone = "neutral" }: { children: ReactNode; tone?: "neutral" | "claude" | "chatgpt" }) {
  const color =
    tone === "claude" ? "text-claude" : tone === "chatgpt" ? "text-chatgpt" : "text-muted-foreground";
  return (
    <div className={`text-kicker ${color} flex items-center gap-2`}>
      <span className={`h-px w-8 ${tone === "claude" ? "bg-claude" : tone === "chatgpt" ? "bg-chatgpt" : "bg-white/20"}`} />
      {children}
    </div>
  );
}

export function BrandBadge({ brand }: { brand: "claude" | "chatgpt" }) {
  const label = brand === "claude" ? "Claude" : "ChatGPT";
  const cls =
    brand === "claude"
      ? "bg-claude/15 text-claude ring-1 ring-inset ring-claude/30"
      : "bg-chatgpt/15 text-chatgpt ring-1 ring-inset ring-chatgpt/30";
  return (
    <span className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-medium uppercase tracking-wider ${cls}`}>
      <span className={`h-1.5 w-1.5 rounded-full ${brand === "claude" ? "bg-claude" : "bg-chatgpt"}`} />
      {label}
    </span>
  );
}

export function SectionShell({
  id,
  kicker,
  kickerTone = "neutral",
  eyebrow,
  children,
  className = "",
}: {
  id: string;
  kicker?: string;
  kickerTone?: "neutral" | "claude" | "chatgpt";
  eyebrow?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`relative min-h-screen w-full px-6 py-24 md:px-12 md:py-32 ${className}`}>
      <div className="mx-auto grid max-w-7xl grid-cols-12 gap-6">
        {(kicker || eyebrow) && (
          <div className="col-span-12 mb-10 flex items-center justify-between">
            {kicker && <Kicker tone={kickerTone}>{kicker}</Kicker>}
            {eyebrow && <span className="text-kicker">{eyebrow}</span>}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
