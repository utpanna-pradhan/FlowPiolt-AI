import AIStudio from "@/components/Workspace/AIStudio";
import GeneratedOutput from "@/components/Workspace/GeneratedOutput";
import PromptTemplates from "@/components/Workspace/PromptTemplates";
import WorkspaceHeader from "@/components/Workspace/WorkspaceHeader";


export default function Workspace() {
  return (
    <div className="space-y-8">
          <WorkspaceHeader />
          <PromptTemplates />
          <AIStudio />
          <GeneratedOutput />
    </div>
  
  )
}
