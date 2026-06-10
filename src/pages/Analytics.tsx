import AIModel from "@/components/Analytics/AIModel";
import FunnelData from "@/components/Analytics/FunnelData";
import Hero from "@/components/Analytics/Hero";
import PerformanceTend from "@/components/Analytics/PerformanceTend";
import TopPerformingPrompts from "@/components/Analytics/TopPerformingPrompts";
import UsageHeatmap from "@/components/Analytics/UsageHeatmap";


export default function Analytics() {
  return (
    <div className="space-y-8">
    <Hero />
    <PerformanceTend />
    <UsageHeatmap />
    <FunnelData />
    <TopPerformingPrompts />
    <AIModel />
    </div>
  )
}
