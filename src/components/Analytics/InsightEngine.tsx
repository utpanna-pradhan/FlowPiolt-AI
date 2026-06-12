import { Sparkles, TrendingUp, AlertTriangle, Rocket, ArrowRight } from "lucide-react"

export default function InsightEngine() {
    const insights = [
        {
            type: "Opportunity",
            icon: Rocket,
            title: "Marketing workflows are outperforming",
            description: "Content and marketing pipelines generated 38% higher completion rates this month",
            action: "Scale Workflow",
            color: "from-green-500 to-emerald-500",
        },
        {
            type: "Risk",
            icon: AlertTriangle,
            title: "Credit usage increasing rapidly",
            description: "Current growth trend predicts reaching usage threshold within 12 days .",
            action: "Optimize Usage",
            color: "from-orange-500 to-red-500",
        },
        {
            type: "Growth",
            icon: TrendingUp,
            title: "AI requests projected to grow",
            description: "Forecast engine predicts 34% increase in activity next month",
            action: "View Forecast",
            color: "bg-indigo-500 to-violet-500",
        },
    ];
    return (
        <section className="rounded-4xl bg-white border border-slate-200 p-8 shadow-sm relative overflow-hidden">
            {/* Top Right Glow */}
            <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-indigo-100 blur-3xl opacity-70" />
            {/* Bottom Left Glow */}
            <div className="absolute -left-24 -bottom-24 h-72 w-72 rounded-full bg-violet-100 blur-3xl opacity-60" />

            <div className="z-10 relative">
                {/*Header*/}
                <div className="mb-12">
                    <div className="inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-indigo-50 px-4 py-2 text-sm font-semibold text-indigo-600">
                        <Sparkles />AI Insight Engine
                    </div>
                    <h2 className="mt-5 text-4xl font-bold text-slate-900">
                        Your Workspace Intelligence Layer
                    </h2>
                    <p className="mt-4 max-w-2xl. text-lg text-slate-500">AI continuously analyzes performance and surfaces Opportunities , risks ,and growth recommendations.</p>

                </div>

                {/*Center*/}
                <div className="mb-14 flex justify-center">
                    <div className="relative">
                        <div className="absolute inset-0 rounded-full bg-indigo-300 blur-[100px] opacity-50" />
                        <div className="relative flex h-52 w-52 items-center justify-center rounded-full border border-indigo-100 bg-linear-to-br from-indigo-50 to-violet-50 ">
                            <div className="text-center">
                                <Sparkles size={42} className="mx-auto text-indigo-600" />
                                <h3 className="mt-4 text-4xl font-bold text-slate-900">92%</h3>
                                <p className="mt-2 text-sm text-slate-500">AI Confidence</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/*Insights*/}
                <div className="space-y-5">
                    {insights.map((item) => {
                        const Icon = item.icon;
                        return (
                            <div key={item.title} className="group relative overflow-hidden rounded-4xl border border-slate-200 bg-white/80 p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                                <div className={`absolute left-0 top-0 h-full w-2 bg-linear-to-br ${item.color}`} />
                                <div className="flex items-start justify-between">
                                    <div className="flex gap-5">
                                        <div className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-linear-to-br ${item.color}`}>
                                            <Icon size={22} className="text-white"/>
                                        </div>
                                        <div>
                                            <p className="text-sm font-semibold text-slate-400">
                                                {item.type}
                                            </p>
                                            <h3 className="mt-1 text-xl font-semibold text-slate-900">
                                                {item.title}
                                            </h3>
                                            <p className="mt-3 max-w-2xl leading-relaxed text-slate-500">
                                                {item.description}
                                            </p>
                                        </div>
                                    </div>
                                    <button className="flex items-center gap-2 rounded-2xl bg-slate-100 px-5 py-3 font-medium text-slate-700 transition hover:bg-indigo-50 hover:text-indigo-600">
                                        {item.action}
                                        <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                                    </button>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>


        </section>
    )
}
