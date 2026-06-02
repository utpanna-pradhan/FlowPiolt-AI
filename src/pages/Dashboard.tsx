import Cards from "@/components/dashboard/Cards";
import RecentActivity from "@/components/dashboard/RecentActivity";
import RecentProjects from "@/components/dashboard/RecentProjects";
import TakeAction from "@/components/dashboard/TakeAction";
import UsageChart from "@/components/dashboard/UsageChart";
import Welcome from "@/components/dashboard/Welcome";


export default function Dashboard() {
  return (
    <div className="space-y-8">
        <Welcome />
        <Cards />
        <TakeAction />
        <RecentProjects />
        <UsageChart />
        <RecentActivity />
    </div>
  )
}
