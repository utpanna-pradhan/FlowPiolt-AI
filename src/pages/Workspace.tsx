import AIStudio from "@/components/Workspace/AIStudio";
import ConversationHistory from "@/components/Workspace/ConversationHistory";
import GeneratedOutput from "@/components/Workspace/GeneratedOutput";
import PromptTemplates from "@/components/Workspace/PromptTemplates";
import RecentGeneration from "@/components/Workspace/RecentGeneration";
import SavedDocs from "@/components/Workspace/SavedDocs";
import UsageTracker from "@/components/Workspace/UsageTracker";
import WorkspaceHeader from "@/components/Workspace/WorkspaceHeader";


export default function Workspace() {
  return (
    <div className="space-y-8">
          <WorkspaceHeader />
          <PromptTemplates />
          <AIStudio />
          <GeneratedOutput />
          <RecentGeneration />
          <ConversationHistory />
          <SavedDocs />
          <UsageTracker />
          
    </div>
  
  )
}
