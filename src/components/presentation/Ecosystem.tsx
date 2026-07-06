import { Reveal, BrandBadge, Kicker } from "./primitives";
import {
  Search,
  PenTool,
  Code2,
  Users,
  Plug,
  MessageCircle,
  ClipboardCopy,
  ArrowRight,
} from "lucide-react";

const claudeNodes = [
  { icon: Search, label: "Deep Research" },
  { icon: PenTool, label: "Claude Design" },
  { icon: Code2, label: "Claude Code" },
  { icon: Users, label: "Claude Co-work" },
  { icon: Plug, label: "MCP Integrations" },
];

const claudeApps = ["Apollo", "HeyGen", "Meta Ads"];
const chatgptApps = ["Notion", "Figma", "Buffer", "Zapier"];

export function Ecosystem() {
  return (
    <section
      id="ecosystem"
      className="relative w-full overflow-hidden bg-radial-section px-6 py-24 md:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 flex flex-col gap-4">
          <Kicker>03 · Ecosystem Showdown</Kicker>
          <Reveal>
            <h2 className="text-display max-w-3xl text-4xl md:text-6xl">
              One connected pipeline, or one chat window with a copy button.
            </h2>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {/* CLAUDE - connected pipeline */}
          <Reveal>
            <div className="card-surface card-surface-hover glow-claude relative p-8 md:p-10">
              <div className="mb-8 flex items-center justify-between">
                <BrandBadge brand="claude" />
                <span className="text-kicker text-claude">Connected pipeline</span>
              </div>

              <div className="relative flex flex-col gap-3">
                {claudeNodes.map((n, i) => {
                  const Icon = n.icon;
                  return (
                    <div key={n.label} className="relative">
                      <div className="flex items-center gap-4 rounded-2xl border border-claude/25 bg-claude/[0.06] px-5 py-4 transition-all hover:border-claude/50 hover:bg-claude/[0.1]">
                        <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-claude/15 text-claude">
                          <Icon className="h-5 w-5" />
                        </div>
                        <div className="min-w-0 flex-1">
                          <div className="text-sm text-muted-foreground">
                            Step {i + 1}
                          </div>
                          <div className="truncate font-medium">{n.label}</div>
                        </div>
                        <ArrowRight className="hidden h-4 w-4 text-claude/60 md:block" />
                      </div>
                      {i < claudeNodes.length - 1 && (
                        <div className="ml-9 h-4 w-px bg-gradient-to-b from-claude/60 to-claude/10" />
                      )}
                    </div>
                  );
                })}
              </div>

              <div className="mt-6 rounded-2xl border border-dashed border-claude/30 bg-claude/[0.04] p-5">
                <div className="text-kicker text-claude">Live handoffs to</div>
                <div className="mt-3 flex flex-wrap gap-2">
                  {claudeApps.map((a) => (
                    <span
                      key={a}
                      className="rounded-full border border-claude/30 bg-claude/10 px-3 py-1 text-xs text-claude"
                    >
                      {a}
                    </span>
                  ))}
                </div>
                <p className="mt-4 text-sm text-muted-foreground">
                  Context, memory, and actions travel end-to-end. No re-paste,
                  no re-explain.
                </p>
              </div>
            </div>
          </Reveal>

          {/* CHATGPT - isolated chat */}
          <Reveal delay={0.15}>
            <div className="card-surface card-surface-hover glow-chatgpt relative p-8 md:p-10">
              <div className="mb-8 flex items-center justify-between">
                <BrandBadge brand="chatgpt" />
                <span className="text-kicker text-chatgpt">Isolated chat</span>
              </div>

              <div className="relative flex min-h-[380px] items-center justify-center">
                {/* central bubble */}
                <div className="relative z-10 flex flex-col items-center gap-3 rounded-3xl border border-chatgpt/30 bg-chatgpt/[0.08] px-10 py-8">
                  <div className="grid h-14 w-14 place-items-center rounded-2xl bg-chatgpt/20 text-chatgpt">
                    <MessageCircle className="h-7 w-7" />
                  </div>
                  <div className="font-medium">Chat window</div>
                  <div className="text-xs text-muted-foreground">
                    single surface
                  </div>
                </div>

                {/* orbiting apps with dotted lines */}
                {chatgptApps.map((a, i) => {
                  const angle = (i / chatgptApps.length) * Math.PI * 2 - Math.PI / 2;
                  const x = Math.cos(angle) * 150;
                  const y = Math.sin(angle) * 120;
                  return (
                    <div
                      key={a}
                      className="absolute flex items-center gap-2 rounded-xl border border-white/10 bg-background/60 px-3 py-2 text-xs backdrop-blur"
                      style={{
                        transform: `translate(${x}px, ${y}px)`,
                      }}
                    >
                      <ClipboardCopy className="h-3 w-3 text-chatgpt/70" />
                      {a}
                    </div>
                  );
                })}

                {/* dotted svg lines */}
                <svg
                  className="pointer-events-none absolute inset-0 h-full w-full"
                  viewBox="0 0 400 380"
                >
                  {chatgptApps.map((_, i) => {
                    const angle = (i / chatgptApps.length) * Math.PI * 2 - Math.PI / 2;
                    const x = 200 + Math.cos(angle) * 150;
                    const y = 190 + Math.sin(angle) * 120;
                    return (
                      <line
                        key={i}
                        x1="200"
                        y1="190"
                        x2={x}
                        y2={y}
                        stroke="oklch(0.68 0.13 165 / 0.35)"
                        strokeWidth="1"
                        strokeDasharray="4 4"
                      />
                    );
                  })}
                </svg>
              </div>

              <div className="mt-6 rounded-2xl border border-dashed border-chatgpt/30 bg-chatgpt/[0.04] p-5">
                <div className="text-kicker text-chatgpt">The tax</div>
                <p className="mt-3 text-sm text-muted-foreground">
                  Every jump to another tool is a manual copy-paste. Context
                  breaks at every seam.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
