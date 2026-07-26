import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export const THEME_INIT_SCRIPT = `(function(){try{var t=localStorage.getItem('theme');if(!t){t=window.matchMedia('(prefers-color-scheme: light)').matches?'light':'dark';}document.documentElement.classList.toggle('light',t==='light');}catch(e){}})();`;

export function ThemeToggle() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    const initial =
      stored === "light" || stored === "dark"
        ? stored
        : document.documentElement.classList.contains("light")
          ? "light"
          : "dark";
    setTheme(initial as "dark" | "light");
  }, []);

  const toggle = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.classList.toggle("light", next === "light");
    try {
      localStorage.setItem("theme", next);
    } catch {
      /* ignore */
    }
  };

  return (
    <button
      onClick={toggle}
      aria-label="Toggle color theme"
      className="fixed right-5 top-5 z-[60] inline-flex items-center gap-2 rounded-full border border-hairline bg-card/70 px-3 py-2 text-[11px] uppercase tracking-[0.18em] text-muted-foreground shadow-lg backdrop-blur transition-all hover:border-claude/50 hover:text-foreground"
    >
      {theme === "dark" ? (
        <Sun className="h-3.5 w-3.5 text-claude" />
      ) : (
        <Moon className="h-3.5 w-3.5 text-claude" />
      )}
      <span className="hidden sm:inline">{theme === "dark" ? "Light" : "Dark"}</span>
    </button>
  );
}
