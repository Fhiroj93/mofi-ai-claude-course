import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { SideNav } from "@/components/presentation/SideNav";
import { Hero } from "@/components/presentation/Hero";
import { Thesis } from "@/components/presentation/Thesis";
import { Ecosystem } from "@/components/presentation/Ecosystem";
import { Battlegrounds } from "@/components/presentation/Battlegrounds";
import { LiveTest } from "@/components/presentation/LiveTest";
import { Scorecard } from "@/components/presentation/Scorecard";
import { TrophyWall } from "@/components/presentation/TrophyWall";
import { Verdict } from "@/components/presentation/Verdict";

export const Route = createFileRoute("/claude-vs-chatgpt")({
  head: () => ({
    meta: [
      { title: "Claude vs ChatGPT: The Definitive Breakdown" },
      { name: "description", content: "A visual, editorial teardown of Claude vs ChatGPT — depth, workflow, speed, reach." },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <main className="relative min-h-screen w-full overflow-x-clip bg-background text-foreground">
      <SideNav />
      <Link
        to="/"
        className="fixed left-6 top-6 z-50 inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/40 px-3.5 py-2 text-xs uppercase tracking-widest text-muted-foreground backdrop-blur transition-all hover:border-white/30 hover:text-foreground"
      >
        <ArrowLeft className="h-3.5 w-3.5" />
        All topics
      </Link>
      <Hero />
      <Thesis />
      <Ecosystem />
      <Battlegrounds />
      <LiveTest />
      <Scorecard />
      <TrophyWall />
      <Verdict />
    </main>
  );
}
