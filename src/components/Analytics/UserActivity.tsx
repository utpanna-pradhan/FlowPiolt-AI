import { FileText, Workflow, Share2, Users, Sparkles } from "lucide-react"

export default function UserActivity() {
    const activities = [
        {
            title: "Generated Blog Post",
            description: "AI created a 1500-word SEO article.",
            time: "09:12 AM",
            icon: FileText,
            color: "bg-blue-500",
        },
        {
            title: "Workflow Created",
            description: "Marketing automation workflow published.",
            time: "10.45 AM",
            icon: Workflow,
            color: "bg-indigo-500",
        },
        {
            title: "Report Shared",
            description: "Quaterly analytics report shared.",
            time: "12.30 PM",
            icon: Share2,
            color: "bg-violet-500",
        },
        {
            title: "Team Collaboration",
            description: "4 team members joined workflow.",
            time: "02:00 PM",
            icon: Users,
            color: "bg-green-500",
        },
        {
            title: "AI Optimization",
            description: "AI improved workflow efficiency by 18%",
            time: "04:20 PM",
            icon: Sparkles,
            color: "bg-orange-500",
        },
    ];
    return (
        <section className="relative bg-white border border-slate-200 overflow-hidden rounded-4xl p-8">

            {/* Ambient Glow */}
            <div className="absolute -top-20 -right-20 h-60 w-60 rounded-full bg-indigo-100 blur-3xl opacity-60" />
            <div className="absolute -bottom-20 -left-20 h-60 w-60 rounded-full bg-indigo-100 blur-3xl opacity-60" />

            <div className="relative z-10">

                {/*Header*/}
                <div className="mb-12">
                    <h2 className="text-3xl font-bold text-slate-900">User Activity Timeline</h2>
                    <p className="mt-2 text-slate-500">Real-time history of important workspace actions.</p>
                </div>

                {/*Timeline*/}
                <div className="relative">
                    <div className="absolute left-6 top-0 h-full w-px bg-linear-to-b from-indigo-300 to-violet-300 " />
                    <div className="space-y-10">
                        {activities.map((activity)=>{
                            const Icon = activity.icon
                            return(
                                <div key={activity.title} className="relative flex items-start gap-6">
                                    <div className={`relative z-10 flex h-12 w-12 items-center justify-center rounded-2xl ${activity.color} shadow-lg`}>
                                        <Icon className="text-white" size={20} />
                                    </div>

                                    {/*Content*/}
                                    <div className="flex-1">
                                        <div className="rounded-[28px] border border-slate-100 bg-white/80 p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                                            <div className="flex items-center justify-between">
                                                <h3 className="text-lg font-semibold text-slate-900">
                                                    {activity.title}
                                                </h3>
                                                <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">
                                                    {activity.time}
                                                </span>
                                            </div>
                                            <p className="mt-3 text-slate-500">
                                                {activity.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>


        </section>
    )
}
