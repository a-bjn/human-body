import HeroSection from "./components/HeroSection";
import OverviewSection from "./components/OverviewSection";
import ChaptersSection from "./components/ChaptersSection";

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <OverviewSection />
      <ChaptersSection />
    </div>
  );
}
