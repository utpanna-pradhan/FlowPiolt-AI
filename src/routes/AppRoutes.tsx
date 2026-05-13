import DashboardLayout from "@/layouts/DashboardLayout";
import Analytics from "@/pages/Analytics";
import Billing from "@/pages/Billing";
import Dashboard from "@/pages/Dashboard";
import Settings from "@/pages/Settings";
import Workspace from "@/pages/Workspace";
import { Routes , Route ,Navigate } from "react-router-dom";


export default function AppRoutes() {
  return (
    <Routes>
        <Route path="/" element={<Navigate to ="/dashboard" />}/>
        <Route element={<DashboardLayout />}>
            <Route path="/dashboard" element={<Dashboard/>}/>
            <Route path="/workspace" element={<Workspace/>}/>
            <Route path="/analytics" element={<Analytics />}/>
            <Route path="/billing" element={<Billing />}/>
            <Route path="/settings" element={<Settings />}/>
        </Route>
    </Routes>
  )
}
