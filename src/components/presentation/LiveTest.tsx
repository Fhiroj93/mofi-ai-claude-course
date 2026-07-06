import { Reveal, BrandBadge, Kicker } from "./primitives";
import { Check, X, Clock } from "lucide-react";

type Step = {
  t: string;
  claude: "done" | "fail";
  chatgpt: "done" | "fail";
  title: string;
  detail: string;
};

const STEPS: Step[] = [
  {
    t: "00:00",
    title: "Open LinkedIn in browser",
    detail: "Agent takes over the tab.",
    claude: "done",
    chatgpt: "done",
  },
  {
    t: "00:20",
    title: "Draft the post",
    detail: "Voice-matched, on-brand copy.",
    claude: "done",
    chatgpt: "done",
  },
  {
    t: "00:45",
    title: "Open the scheduler",
    detail: "Navigate to the native LinkedIn scheduling UI.",
    claude: "done",
    chatgpt: "done",
  },
  {
    t: "01:10",
    title: "Set date to tomorrow, 5:00 PM",
    detail: "Interact with a real date/time picker.",
    claude: "done",
    chatgpt: "fail",
  },
  {
    t: "01:30",
    title: "Confirm & schedule",
    detail: "Click through the final confirmation.",
    claude: "done",
    chatgpt: "fail",
  },
];

export function LiveTest() {
  return (
    <section
      id="live-test"
      className="relative w-full overflow-hidden px-6 py-24 md:py-32"
      style={{
        background:
          "radial-gradient(700px 500px at 10% 20%, oklch(0.72 0.14 45 / 0.10), transparent 60%), radial-gradient(700px 500px at 90% 80%, oklch(0.68 0.13 165 / 0.10), transparent 60%), var(--background)",
      }}
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 flex flex-col gap-4">
          <Kicker>05 · Live Test</Kicker>
          <Reveal>
            <h2 className="text-display max-w-3xl text-4xl md:text-6xl">
              The LinkedIn Challenge.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
              Same prompt, both agents:{" "}
              <span className="text-foreground">
                "Schedule a LinkedIn post for 5PM tomorrow."
              </span>{" "}
              Timeline below is real.
            </p>
          </Reveal>
        </div>

        {/* Legend */}
        <div className="mb-8 flex flex-wrap items-center gap-3">
          <BrandBadge brand="claude" />
          <span className="text-xs text-muted-foreground">Claude in Chrome</span>
          <span className="mx-2 text-muted-foreground/40">·</span>
          <BrandBadge brand="chatgpt" />
          <span className="text-xs text-muted-foreground">ChatGPT / Codex</span>
        </div>

        <div className="relative">
          {/* vertical spine */}
          <div className="absolute left-6 top-2 bottom-2 w-px bg-gradient-to-b from-claude/40 via-white/10 to-chatgpt/40 md:left-8" />

          <div className="flex flex-col gap-5">
            {STEPS.map((s, i) => (
              <Reveal key={s.t} delay={i * 0.08}>
                <div className="relative pl-16 md:pl-20">
                  {/* time dot */}
                  <div className="absolute left-0 top-3 flex items-center gap-2">
                    <div className="grid h-12 w-12 place-items-center rounded-full border border-white/10 bg-background/80 backdrop-blur md:h-16 md:w-16">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                    </div>
                  </div>

                  <div className="card-surface card-surface-hover overflow-hidden">
                    <div className="grid grid-cols-1 gap-0 md:grid-cols-[1fr_auto_auto]">
                      <div className="p-6">
                        <div className="text-kicker">{s.t}</div>
                        <div className="mt-2 text-lg font-medium">{s.title}</div>
                        <div className="mt-1 text-sm text-muted-foreground">
                          {s.detail}
                        </div>
                      </div>

                      <StatusCell brand="claude" status={s.claude} />
                      <StatusCell brand="chatgpt" status={s.chatgpt} />
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={0.4}>
          <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="card-surface glow-claude p-6">
              <BrandBadge brand="claude" />
              <div className="mt-4 text-display text-2xl">
                Scheduled. 5 of 5 steps.
              </div>
              <p className="mt-2 text-sm text-muted-foreground">
                Full agentic loop, no handholding. Post lives in the queue.
              </p>
            </div>
            <div className="card-surface p-6 opacity-90">
              <BrandBadge brand="chatgpt" />
              <div className="mt-4 text-display text-2xl">
                Stalled at the scheduler.
              </div>
              <p className="mt-2 text-sm text-muted-foreground">
                Couldn't operate the date/time picker. Post never went live.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function StatusCell({
  brand,
  status,
}: {
  brand: "claude" | "chatgpt";
  status: "done" | "fail";
}) {
  const isClaude = brand === "claude";
  const bg = isClaude ? "bg-claude/[0.05]" : "bg-chatgpt/[0.05]";
  const border = isClaude ? "border-claude/20" : "border-chatgpt/20";
  return (
    <div
      className={`flex min-w-[120px] items-center justify-center border-t p-6 md:border-l md:border-t-0 ${border} ${bg}`}
    >
      {status === "done" ? (
        <div
          className={`grid h-10 w-10 place-items-center rounded-full ${
            isClaude ? "bg-claude text-black" : "bg-chatgpt text-black"
          }`}
        >
          <Check className="h-5 w-5" strokeWidth={3} />
        </div>
      ) : (
        <div className="grid h-10 w-10 place-items-center rounded-full bg-white/5 text-destructive ring-1 ring-destructive/50">
          <X className="h-5 w-5" strokeWidth={3} />
        </div>
      )}
    </div>
  );
}
