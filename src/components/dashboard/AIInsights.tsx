import { Sparkles, ArrowRight } from "lucide-react"

export default function AIInsights() {
    const insights = {
        title: "Workflow Efficiency Improved",
        description: "Your workflow completion rate increased by 24% compared to last week.",
        recommendation: "Increased automation usage for repetitive tasks to save additional time.",
        confidence: 94,
    };
    return (
        <section className="rounded-4xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="mb-6 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-100">
                    <Sparkles className="h-6 w-6 text-indigo-600" />
                </div>

                <div>
                    <h2 className="text-xl font-semibold text-slate-900">AI Insights</h2>
                    <p className="text-sm text-slate-500">
                        Generated from your workspace activity
                    </p>
                </div>
            </div>

            <div className="rounded-3xl bg-slate-50 p-5">
                <h3 className="font-semibold text-slate-900">
                    {insights.title}
                </h3>
                <p className="mt-3 text-sm text-slate-600">{insights.description}</p>

                <div className="mt-5 rounded-2xl border border-indigo-100 bg-indigo-50 p-4">
                    <p className="text-sm font-medium text-indigo-700">Recommendation</p>
                    <p className="mt-2 text-sm text-indigo-500">{insights. recommendation}</p>
                </div>

                <div className="mt-5 flex items-center justify-between">
                    <span className="text-sm text-slate-500">
                        Confidence Score
                    </span>
                    <span className="font-semibold text-green-600">{insights.confidence}%</span>
                </div>
            </div>

            <button className="mt-6 flex items-center gap-2 text-sm font-semibold text-indigo-600 hover:text-indigo-700">
                View Full Report
                <ArrowRight size={16} />
            </button>
        </section>
    )
}
