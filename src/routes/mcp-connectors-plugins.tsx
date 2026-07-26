import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import {
  ArrowLeft,
  Usb,
  Plug,
  Package,
  Smartphone,
  Wrench,
  FileText,
  MessageSquareQuote,
  Building2,
  Route as RouteIcon,
  DoorOpen,
  Hotel,
  Stethoscope,
  ArrowRight,
  Check,
  X,
  Layers3,
} from "lucide-react";
import { Reveal, Kicker } from "@/components/presentation/primitives";

export const Route = createFileRoute("/mcp-connectors-plugins")({
  head: () => ({
    meta: [
      { title: "MCP, Connectors & Plugins — Claude's Ecosystem Explained" },
      {
        name: "description",
        content:
          "Think of Claude's ecosystem like a smartphone: MCP is the operating system, connectors are single apps, plugins are the full suite. A visual, beginner-friendly breakdown.",
      },
      { property: "og:title", content: "MCP, Connectors & Plugins — Claude's Ecosystem Explained" },
      {
        property: "og:description",
        content:
          "MCP is USB-C for AI. Connectors are the front door. Plugins are the whole hotel. A deep, visual explainer.",
      },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "MCP, Connectors & Plugins — Claude's Ecosystem Explained" },
      {
        name: "twitter:description",
        content: "The clearest breakdown of MCP, connectors and plugins — with a dental-clinic build example.",
      },
    ],
  }),
  component: McpPage,
});

const LAYERS = [
  {
    icon: Smartphone,
    title: "MCP",
    sub: "The operating system",
    body: "Android / iOS — the shared standard that makes any app work on any device.",
  },
  {
    icon: Plug,
    title: "Connector",
    sub: "One app, logged in",
    body: "Connecting Gmail or Google Drive. A single service, authorised once.",
  },
  {
    icon: Package,
    title: "Plugin",
    sub: "The full suite",
    body: "Installing an entire productivity app that arrives with many features pre-wired.",
  },
];

const EXPOSES = [
  {
    icon: Wrench,
    title: "Tools",
    caption: "Callable functions",
    items: ["Book Appointment", "Cancel Appointment", "Send Email", "Search Patients", "Create Invoice"],
  },
  {
    icon: FileText,
    title: "Resources",
    caption: "Documents & data",
    items: ["Dental SOP.pdf", "Pricing.pdf", "FAQ", "Policies", "Employee Handbook"],
  },
  {
    icon: MessageSquareQuote,
    title: "Prompts",
    caption: "Reusable templates",
    items: ["Follow-up Email", "Patient Summary", "Insurance Claim", "Recall Message", "Daily Report"],
  },
];

const ANALOGY = [
  { icon: RouteIcon, title: "MCP", line: "The roads into the city. No roads, nobody reaches the hotel." },
  { icon: DoorOpen, title: "Connector", line: "The front entrance. How a specific guest actually walks in." },
  { icon: Hotel, title: "Plugin", line: "The whole hotel — rooms, spa, gym, restaurant. One booking, everything." },
];

const LEARN = [
  {
    order: "First",
    title: "Learn MCP",
    body: "It's becoming the standard way AI systems talk to tools. Build once, and your integration works across multiple AI clients.",
  },
  {
    order: "Next",
    title: "Learn Connectors",
    body: "They let users securely link Claude to services they already use — no manual uploads, no re-pasting context.",
  },
  {
    order: "Last",
    title: "Learn Plugins",
    body: "Packaging connectors, MCP servers, prompts, agents and workflows into a polished product someone installs in one click.",
  },
];

function McpPage() {
  return (
    <main className="relative min-h-screen w-full overflow-x-clip bg-radial-hero grain text-foreground">
      <div className="relative z-10">
        <TopBar />
        <Hero />
        <SmartphoneModel />
        <BeforeAfter />
        <UsbC />
        <Exposes />
        <DentalExample />
        <Connectors />
        <Plugins />
        <Analogy />
        <Learn />
        <Closing />
      </div>
    </main>
  );
}

function TopBar() {
  return (
    <div className="mx-auto flex max-w-7xl items-center justify-between px-6 pt-8 md:px-12">
      <Link
        to="/"
        className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:text-foreground"
      >
        <ArrowLeft className="h-3.5 w-3.5" /> Library
      </Link>
      <span className="text-kicker">05 · Ecosystem</span>
    </div>
  );
}

function Hero() {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-24 pt-16 md:px-12 md:pb-32 md:pt-24">
      <Reveal>
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-claude/25 bg-claude/10 px-3 py-1.5">
          <Layers3 className="h-3.5 w-3.5 text-claude" />
          <span className="text-[11px] uppercase tracking-[0.22em] text-claude">
            Connectors · MCP · Plugins
          </span>
        </div>
      </Reveal>
      <Reveal delay={0.1}>
        <h1 className="text-display max-w-4xl text-5xl md:text-7xl lg:text-[92px]">
          Claude's ecosystem, explained like a smartphone.
        </h1>
      </Reveal>
      <Reveal delay={0.22}>
        <p className="mt-8 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
          One is the operating system. One is a single app you log into. One is
          the whole suite you install in a click. Get these three straight and
          the rest of the ecosystem stops feeling like alphabet soup.
        </p>
      </Reveal>
    </section>
  );
}

function SectionHead({ kicker, title, lead }: { kicker: string; title: string; lead?: string }) {
  return (
    <div className="mb-14 flex flex-col gap-4">
      <Kicker>{kicker}</Kicker>
      <Reveal>
        <h2 className="text-display max-w-3xl text-4xl md:text-6xl">{title}</h2>
      </Reveal>
      {lead && (
        <Reveal delay={0.1}>
          <p className="max-w-2xl text-base leading-relaxed text-muted-foreground">{lead}</p>
        </Reveal>
      )}
    </div>
  );
}

function Shell({ children, id, alt }: { children: React.ReactNode; id: string; alt?: boolean }) {
  return (
    <section
      id={id}
      className={`relative w-full px-6 py-24 md:px-12 md:py-32 ${alt ? "bg-radial-section" : ""}`}
    >
      <div className="mx-auto max-w-7xl">{children}</div>
    </section>
  );
}

function SmartphoneModel() {
  return (
    <Shell id="model" alt>
      <SectionHead
        kicker="01 · The mental model"
        title="Three layers, one stack."
        lead="Every confusing conversation about Claude integrations collapses into these three words."
      />
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {LAYERS.map((l, i) => {
          const Icon = l.icon;
          return (
            <Reveal key={l.title} delay={i * 0.1}>
              <div className="card-surface card-surface-hover h-full p-8">
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-claude/15 text-claude">
                  <Icon className="h-5 w-5" />
                </div>
                <div className="mt-8 text-kicker text-claude">{l.sub}</div>
                <h3 className="mt-3 text-display text-3xl">{l.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{l.body}</p>
              </div>
            </Reveal>
          );
        })}
      </div>
    </Shell>
  );
}

function ChipRow({ items, tone = "claude" }: { items: string[]; tone?: "claude" | "muted" }) {
  return (
    <div className="mt-4 flex flex-wrap gap-2">
      {items.map((i) => (
        <span
          key={i}
          className={`rounded-full px-3 py-1 text-xs ${
            tone === "claude"
              ? "border border-claude/30 bg-claude/10 text-claude"
              : "border border-hairline bg-muted/40 text-muted-foreground"
          }`}
        >
          {i}
        </span>
      ))}
    </div>
  );
}

function BeforeAfter() {
  const before = ["Salesforce · custom API", "Gmail · different API", "Slack · another API", "PostgreSQL · yet another API"];
  const after = ["CRM", "Database", "Gmail", "Slack", "PostgreSQL"];
  return (
    <Shell id="before-after">
      <SectionHead
        kicker="02 · Why MCP exists"
        title="Every integration used to be a bespoke project."
        lead="MCP is the communication standard Anthropic created so models can talk to external tools the same way, every time."
      />
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <Reveal>
          <div className="card-surface h-full p-8 md:p-10">
            <div className="flex items-center gap-2 text-kicker">
              <X className="h-3.5 w-3.5" /> Before MCP
            </div>
            <div className="mt-8 space-y-3">
              {before.map((b) => (
                <div
                  key={b}
                  className="flex items-center gap-3 rounded-xl border border-dashed border-hairline px-4 py-3 text-sm text-muted-foreground"
                >
                  <span className="font-medium text-foreground">Claude</span>
                  <span className="h-px flex-1 bg-gradient-to-r from-muted-foreground/50 to-transparent" />
                  {b}
                </div>
              ))}
            </div>
            <p className="mt-6 text-sm text-muted-foreground">
              Developers had to learn every company's API. Nothing was reusable.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.12}>
          <div className="card-surface glow-claude h-full p-8 md:p-10">
            <div className="flex items-center gap-2 text-kicker text-claude">
              <Check className="h-3.5 w-3.5" /> With MCP
            </div>
            <div className="mt-8 flex flex-col items-center">
              <div className="rounded-2xl border border-claude/40 bg-claude/10 px-6 py-3 font-medium text-claude">
                Claude
              </div>
              <div className="h-8 w-px bg-gradient-to-b from-claude/70 to-claude/20" />
              <div className="rounded-2xl border border-claude/30 bg-claude/[0.06] px-6 py-3 text-sm">
                MCP Server
              </div>
              <div className="h-6 w-px bg-gradient-to-b from-claude/50 to-transparent" />
              <div className="flex flex-wrap justify-center gap-2">
                {after.map((a) => (
                  <span
                    key={a}
                    className="rounded-xl border border-hairline bg-muted/40 px-3 py-2 text-xs text-muted-foreground"
                  >
                    {a}
                  </span>
                ))}
              </div>
            </div>
            <p className="mt-8 text-sm text-muted-foreground">
              Claude only has to understand MCP. Every tool only has to expose an
              MCP interface. One protocol, unlimited tools.
            </p>
          </div>
        </Reveal>
      </div>
    </Shell>
  );
}

function UsbC() {
  return (
    <Shell id="usbc" alt>
      <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
        <div>
          <SectionHead
            kicker="03 · The one-liner"
            title="MCP is USB-C for AI."
            lead="Your laptop doesn't care whether you plug in a mouse, a keyboard, an SSD or a camera. One port, one standard, everything fits."
          />
        </div>
        <Reveal delay={0.1}>
          <div className="card-surface relative overflow-hidden p-10 text-center">
            <div
              className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full opacity-50 blur-3xl"
              style={{ background: "radial-gradient(circle, oklch(0.72 0.14 45 / 0.5), transparent 70%)" }}
            />
            <Usb className="relative mx-auto h-12 w-12 text-claude" />
            <div className="relative mt-6 text-display text-3xl md:text-4xl">
              One port. Every device.
            </div>
            <ChipRow items={["Mouse", "Keyboard", "SSD", "Camera", "Display"]} />
            <div className="mt-8 border-t border-hairline pt-6 text-sm text-muted-foreground">
              Swap the peripherals for Salesforce, Postgres, Gmail and Slack —
              that's MCP.
            </div>
          </div>
        </Reveal>
      </div>
    </Shell>
  );
}

function Exposes() {
  return (
    <Shell id="exposes">
      <SectionHead
        kicker="04 · Anatomy"
        title="What an MCP server actually exposes."
        lead="Three primitives. That's the whole surface area."
      />
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {EXPOSES.map((e, i) => {
          const Icon = e.icon;
          return (
            <Reveal key={e.title} delay={i * 0.1}>
              <div className="card-surface card-surface-hover h-full p-8">
                <div className="flex items-center justify-between">
                  <div className="grid h-11 w-11 place-items-center rounded-xl bg-claude/15 text-claude">
                    <Icon className="h-5 w-5" />
                  </div>
                  <span className="text-kicker">{`0${i + 1}`}</span>
                </div>
                <h3 className="mt-8 text-display text-2xl">{e.title}</h3>
                <div className="mt-1 text-sm text-muted-foreground">{e.caption}</div>
                <div className="mt-6 space-y-2">
                  {e.items.map((it) => (
                    <div
                      key={it}
                      className="flex items-center gap-2 rounded-lg border border-hairline bg-muted/30 px-3 py-2 text-sm"
                    >
                      <Check className="h-3.5 w-3.5 shrink-0 text-claude" />
                      {it}
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </Shell>
  );
}

function DentalExample() {
  const steps = [
    {
      n: "Step 1",
      title: "Build the MCP server",
      body: "Dental MCP exposes: Search Patient · Book Appointment · Cancel Appointment · Send Reminder · Create Invoice · Check Insurance.",
    },
    {
      n: "Step 2",
      title: "The clinic connects Claude",
      body: "Claude → Dental Connector → Dental MCP. Every tool above becomes callable, with zero API code inside Claude.",
    },
    {
      n: "Step 3",
      title: "Package it as a plugin",
      body: "Dental Connector + Appointment Agent + Recall Agent + Insurance Agent + FAQ Agent + Email Templates + Daily Reports + Follow-up Workflow.",
    },
  ];
  return (
    <Shell id="dental" alt>
      <SectionHead
        kicker="05 · Worked example"
        title="An AI receptionist for dental clinics."
        lead="Same build, three layers deep — and the third layer is the one that scales into a business."
      />
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {steps.map((s, i) => (
          <Reveal key={s.n} delay={i * 0.1}>
            <div className="card-surface card-surface-hover relative h-full p-8">
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-claude/15 text-claude">
                <Stethoscope className="h-5 w-5" />
              </div>
              <div className="mt-8 text-kicker text-claude">{s.n}</div>
              <h3 className="mt-3 text-display text-2xl">{s.title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
            </div>
          </Reveal>
        ))}
      </div>
      <Reveal delay={0.3}>
        <div className="card-surface glow-claude mt-8 p-8 md:p-10">
          <div className="text-kicker text-claude">In the chat window</div>
          <p className="mt-4 text-display text-2xl md:text-3xl">
            “Book John tomorrow at 4 PM.”
          </p>
          <div className="mt-6 flex items-center gap-3 text-sm text-muted-foreground">
            Claude calls
            <code className="rounded-lg border border-claude/30 bg-claude/10 px-3 py-1.5 font-mono text-xs text-claude">
              bookAppointment()
            </code>
            <ArrowRight className="h-4 w-4" />
            done.
          </div>
        </div>
      </Reveal>
    </Shell>
  );
}

function Connectors() {
  return (
    <Shell id="connectors">
      <SectionHead
        kicker="06 · Connectors"
        title="A connector is just logging in."
        lead="Google Drive, Slack, Notion, GitHub, Jira, Dropbox. You click connect, Claude asks permission, and from then on the data is simply there."
      />
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <Reveal>
          <div className="card-surface h-full p-8 md:p-10">
            <div className="text-kicker">Without a connector</div>
            <div className="mt-6 space-y-3">
              {["Find the file", "Upload the PDF", "Wait for processing", "Then ask your question"].map((s, i) => (
                <div key={s} className="flex items-center gap-3 rounded-xl border border-dashed border-hairline px-4 py-3 text-sm text-muted-foreground">
                  <span className="text-xs">{i + 1}</span>
                  {s}
                </div>
              ))}
            </div>
          </div>
        </Reveal>
        <Reveal delay={0.12}>
          <div className="card-surface glow-claude h-full p-8 md:p-10">
            <div className="text-kicker text-claude">With a connector</div>
            <div className="mt-6 flex flex-col items-center gap-2 text-sm">
              <div className="rounded-xl border border-claude/40 bg-claude/10 px-5 py-2.5 text-claude">Claude</div>
              <div className="h-6 w-px bg-claude/50" />
              <div className="rounded-xl border border-hairline bg-muted/40 px-5 py-2.5">Google Drive</div>
              <div className="h-6 w-px bg-claude/50" />
              <div className="rounded-xl border border-hairline bg-muted/40 px-5 py-2.5">meeting_notes.docx</div>
              <div className="h-6 w-px bg-claude/50" />
              <div className="rounded-xl border border-claude/40 bg-claude/10 px-5 py-2.5 text-claude">Summary</div>
            </div>
            <p className="mt-8 text-sm text-muted-foreground">
              “Summarize yesterday's meeting notes.” No upload. No hunting.
            </p>
          </div>
        </Reveal>
      </div>
      <Reveal delay={0.2}>
        <div className="card-surface mt-8 flex flex-col items-center gap-4 p-8 text-center md:flex-row md:justify-center">
          <span className="text-kicker">Important</span>
          <div className="flex flex-wrap items-center justify-center gap-3 text-sm">
            <span className="rounded-full border border-claude/30 bg-claude/10 px-4 py-2 text-claude">MCP</span>
            <ArrowRight className="h-4 w-4 text-muted-foreground" />
            <span className="rounded-full border border-claude/30 bg-claude/10 px-4 py-2 text-claude">Connector</span>
            <ArrowRight className="h-4 w-4 text-muted-foreground" />
            <span className="rounded-full border border-claude/30 bg-claude/10 px-4 py-2 text-claude">Claude</span>
          </div>
          <span className="text-sm text-muted-foreground">
            A connector is usually just MCP with a friendly face.
          </span>
        </div>
      </Reveal>
    </Shell>
  );
}

function Plugins() {
  const contents = [
    "Salesforce Connector",
    "Gmail Connector",
    "Calendar Connector",
    "Email Templates",
    "Meeting Agent",
    "CRM Agent",
    "Sales Coach",
    "Report Generator",
  ];
  return (
    <Shell id="plugins" alt>
      <SectionHead
        kicker="07 · Plugins"
        title="A plugin is the whole app, installed."
        lead="Connectors, MCP tools, skills, instructions, workflows and agents — packaged together so one install replaces a day of configuration."
      />
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-5">
        <Reveal className="lg:col-span-3">
          <div className="card-surface glow-claude h-full p-8 md:p-10">
            <div className="flex items-center gap-3">
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-claude/15 text-claude">
                <Package className="h-5 w-5" />
              </div>
              <div>
                <div className="text-kicker text-claude">Example</div>
                <h3 className="text-display text-2xl">Sales Plugin</h3>
              </div>
            </div>
            <div className="mt-8 grid grid-cols-1 gap-2 sm:grid-cols-2">
              {contents.map((c) => (
                <div
                  key={c}
                  className="flex items-center gap-2 rounded-xl border border-claude/20 bg-claude/[0.05] px-4 py-3 text-sm"
                >
                  <Check className="h-3.5 w-3.5 shrink-0 text-claude" />
                  {c}
                </div>
              ))}
            </div>
          </div>
        </Reveal>
        <Reveal delay={0.12} className="lg:col-span-2">
          <div className="card-surface h-full p-8 md:p-10">
            <div className="text-kicker">The relationship</div>
            <div className="mt-8 space-y-3">
              {[
                { t: "Plugin", d: "contains" },
                { t: "Connector", d: "uses" },
                { t: "MCP", d: "the standard underneath" },
              ].map((r) => (
                <div key={r.t}>
                  <div className="rounded-xl border border-claude/30 bg-claude/10 px-4 py-3 text-sm text-claude">
                    {r.t}
                  </div>
                  <div className="ml-5 py-1 text-xs uppercase tracking-widest text-muted-foreground">
                    {r.d}
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-6 text-sm text-muted-foreground">
              Install one plugin and everything inside it becomes available at once.
            </p>
          </div>
        </Reveal>
      </div>
    </Shell>
  );
}

function Analogy() {
  return (
    <Shell id="analogy">
      <SectionHead
        kicker="08 · Analogy"
        title="Or picture a hotel."
        lead="Roads, entrance, resort. Same three layers, zero jargon."
      />
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {ANALOGY.map((a, i) => {
          const Icon = a.icon;
          return (
            <Reveal key={a.title} delay={i * 0.1}>
              <motion.div whileHover={{ y: -4 }} className="card-surface h-full p-8">
                <Icon className="h-6 w-6 text-claude" />
                <h3 className="mt-6 text-display text-2xl">{a.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{a.line}</p>
              </motion.div>
            </Reveal>
          );
        })}
      </div>
    </Shell>
  );
}

function Learn() {
  return (
    <Shell id="learn" alt>
      <SectionHead
        kicker="09 · Learning order"
        title="Which one should you learn first?"
        lead="If you're building AI products, automations or an agency offer — go in this order."
      />
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {LEARN.map((l, i) => (
          <Reveal key={l.title} delay={i * 0.1}>
            <div className="card-surface card-surface-hover h-full p-8">
              <span className="rounded-full border border-claude/30 bg-claude/10 px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-claude">
                {l.order}
              </span>
              <h3 className="mt-6 text-display text-2xl">{l.title}</h3>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{l.body}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Shell>
  );
}

function Closing() {
  return (
    <Shell id="closing">
      <Reveal>
        <div className="card-surface glow-claude relative overflow-hidden p-10 md:p-16">
          <div
            className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full opacity-50 blur-3xl"
            style={{ background: "radial-gradient(circle, oklch(0.72 0.14 45 / 0.45), transparent 70%)" }}
          />
          <div className="relative">
            <Building2 className="h-7 w-7 text-claude" />
            <h2 className="mt-8 text-display max-w-3xl text-4xl md:text-6xl">
              Build one MCP server. Sell it a hundred times.
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground">
              Expose booking, patient lookup, reminders and reporting as tools.
              Connect it to Claude through a connector. Ship it as a reusable
              plugin for every clinic after that. Far more scalable than hand-building
              a custom integration for each client.
            </p>
            <Link
              to="/"
              className="mt-10 inline-flex items-center gap-2 rounded-full border border-claude/40 bg-claude/10 px-5 py-3 text-sm text-claude transition-colors hover:bg-claude/20"
            >
              Back to the library <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </Reveal>
    </Shell>
  );
}
