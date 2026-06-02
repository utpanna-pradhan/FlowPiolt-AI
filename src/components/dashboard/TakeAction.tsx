import { FileText, Wand2, Workflow, BarChart3 ,ArrowRight} from "lucide-react";

export default function TakeAction() {
    const quickAction = [
        {
            title: "Generate Content",
            description: "Create AI-powered content instantly",
            icon: Wand2,
        },
        {
            title: "Build Workdlow",
            description: "Automate repetitive tasks",
            icon: Workflow,
        },
        {
            title: "Analyze Data",
            description: "Get AI insights from datasets",
            icon: BarChart3,
        },
        {
            title: "Generate Report",
            description: "Create professional reports",
            icon: FileText,
        }
    ]
    return (
        <div className="space-y-5">
            <div>
                <h2 className="text-xl font-semibold text-slate-900">
                    Quick Action
                </h2>
                <p className="text-sm text-slate-500">Start working with AI tools instantly.</p>
            </div>
            <div className=" grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
                {quickAction.map((action) => (
                    <button key={action.title} className="group relative overflow-hidden flex flex-col items-start rounded-[28px] border border-slate-200/70 bg-white p-6 text-left shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                        
                            <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-indigo-100 blur-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                            
                            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-50 transition-all duration-300 group-hover:scale-110" >
                                <action.icon size={26} />
                        </div>
                        <div className="relative z-10">
                            <h3 className="font-semibold text-slate-900">
                                {action.title}
                            </h3>
                            <p className=" mt-2 text-sm text-slate-500">
                                {action.description}
                            </p>
                            <div className="mt-5 flex items-center gap-2 text-sm font-medium text-indigo-600">
                                <ArrowRight size={16}  className="transition-transform duration-399 group-hover:translate-x-1"/>
                            </div>
                        </div>

                    </button>
                ))}
            </div>
        </div>
    )
}
