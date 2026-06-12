import AIModel from "@/components/Analytics/AIModel";
import FunnelData from "@/components/Analytics/FunnelData";
import GrowthForecast from "@/components/Analytics/GrowthForecast";
import Hero from "@/components/Analytics/Hero";
import InsightEngine from "@/components/Analytics/InsightEngine";
import PerformanceTend from "@/components/Analytics/PerformanceTend";
import TopPerformingPrompts from "@/components/Analytics/TopPerformingPrompts";
import UsageHeatmap from "@/components/Analytics/UsageHeatmap";
import UserActivity from "@/components/Analytics/UserActivity";


export default function Analytics() {
  return (
    <div className="space-y-8 overflow-hidden">
    <Hero />
    <PerformanceTend />
    <UsageHeatmap />
    <FunnelData />
    <TopPerformingPrompts />
    <AIModel />
    <UserActivity />
    <GrowthForecast />
    <InsightEngine />
    </div>
  )
}
