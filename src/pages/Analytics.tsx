import Hero from "@/components/Analytics/Hero";
import PerformanceTend from "@/components/Analytics/PerformanceTend";
import UsageHeatmap from "@/components/Analytics/UsageHeatmap";


export default function Analytics() {
  return (
    <div className="space-y-8">
    <Hero />
    <PerformanceTend />
    <UsageHeatmap />
    </div>
  )
}
