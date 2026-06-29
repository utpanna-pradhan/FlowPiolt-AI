import AppearanceStudio from "@/components/Settings/AppearanceStudio";
import BillingPreferences from "@/components/Settings/BillingPreference";
import Hero from "@/components/Settings/Hero";
import NotificationCenter from "@/components/Settings/NotificationCenter";
import SecurityHub from "@/components/Settings/SecurityHub";
import TeamsPermissionCenter from "@/components/Settings/TeamsPermission";

import WorkspaceStatus from "@/components/Settings/WorkspaceStatus";


export default function Settings() {
  return (
   <div className="space-y-8">
      <Hero />
      <WorkspaceStatus />
      <AppearanceStudio />
      <NotificationCenter />
  <TeamsPermissionCenter />
  <SecurityHub />
  <BillingPreferences />
   </div>
  )
}
