import AIInsights from "@/components/dashboard/AIInsights";
import AIRecommendation from "@/components/dashboard/AIRecommendation";
import AssistantWidget from "@/components/dashboard/AssistantWidget";
import Cards from "@/components/dashboard/Cards";
import NotificationCenter from "@/components/dashboard/NotificationCenter";
import ProjectsTable from "@/components/dashboard/ProjectsTable";
import RecentActivity from "@/components/dashboard/RecentActivity";
import RecentProjects from "@/components/dashboard/RecentProjects";
import SubscriptionUsage from "@/components/dashboard/SubscriptionUsage";
import TakeAction from "@/components/dashboard/TakeAction";
import TeamMember from "@/components/dashboard/TeamMember";
import UpcommingTask from "@/components/dashboard/UpcommingTask";
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
        <ProjectsTable />
        <AIInsights />
        <AssistantWidget />
        <UpcommingTask />
        <TeamMember />
        <SubscriptionUsage />
        <NotificationCenter />
        <AIRecommendation />
    </div>
  )
}
