import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "motion/react";

const SECTIONS = [
  { id: "hero", label: "Intro" },
  { id: "thesis", label: "Thesis" },
  { id: "ecosystem", label: "Ecosystem" },
  { id: "battlegrounds", label: "Battlegrounds" },
  { id: "live-test", label: "Live Test" },
  { id: "scorecard", label: "Scorecard" },
  { id: "trophy", label: "Trophy Wall" },
  { id: "verdict", label: "Verdict" },
];

export function SideNav() {
  const [active, setActive] = useState("hero");
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.4 });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    SECTIONS.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Top progress bar */}
      <motion.div
        style={{ scaleX }}
        className="fixed left-0 top-0 z-50 h-[2px] w-full origin-left bg-gradient-to-r from-claude via-white/40 to-chatgpt"
      />
      {/* Side nav dots */}
      <nav className="fixed right-6 top-1/2 z-40 hidden -translate-y-1/2 flex-col gap-3 md:flex">
        {SECTIONS.map((s) => (
          <a
            key={s.id}
            href={`#${s.id}`}
            className="group relative flex items-center justify-end gap-3"
            aria-label={s.label}
          >
            <span
              className={`pointer-events-none text-[11px] uppercase tracking-widest text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100 ${
                active === s.id ? "opacity-100 text-foreground" : ""
              }`}
            >
              {s.label}
            </span>
            <span
              className={`block h-1.5 w-1.5 rounded-full transition-all ${
                active === s.id
                  ? "scale-150 bg-foreground"
                  : "bg-white/25 group-hover:bg-white/60"
              }`}
            />
          </a>
        ))}
      </nav>
    </>
  );
}
