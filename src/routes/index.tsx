import { createFileRoute } from "@tanstack/react-router";
import { SideNav } from "@/components/presentation/SideNav";
import { Hero } from "@/components/presentation/Hero";
import { Thesis } from "@/components/presentation/Thesis";
import { Ecosystem } from "@/components/presentation/Ecosystem";
import { Battlegrounds } from "@/components/presentation/Battlegrounds";
import { LiveTest } from "@/components/presentation/LiveTest";
import { Scorecard } from "@/components/presentation/Scorecard";
import { TrophyWall } from "@/components/presentation/TrophyWall";
import { Verdict } from "@/components/presentation/Verdict";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <main className="relative min-h-screen w-full overflow-x-clip bg-background text-foreground">
      <SideNav />
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
