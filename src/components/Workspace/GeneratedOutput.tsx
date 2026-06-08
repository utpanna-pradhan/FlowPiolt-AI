import { Copy, Download, Save, Sparkles } from "lucide-react"

export default function GeneratedOutput() {
    const generatedContent = `
    # Product Launch Strategy
    Launching an AI Saas product sucessfully required a structured go-to-market strategy.
    Start by identifying your goal ideal customer profile,defining the core problem your product solves, and building a compelling value proposition.
    Use content marketing , product-lead growth, and community engagement to attract users.
    Measure adoption,retention,and conversion metrixs continuosly to improve performance.`
    return (
        <section className="relative overflow-hidden rounded-4xl p-8 border border-slate-200 bg-white shadow-sm">

            {/*glow*/}
            <div className="absolute -top-20 -right-20 h-60 w-60 rounded-full bg-indigo-100 blur-3xl opacity-60" />
            <div className="absolute -bottom-20 -left-20 h-60 w-60 rounded-full bg-indigo-100 blur-3xl opacity-60" />

            {/*Header*/}
            <div className="relative z-10 mb-6 flex items-center justify-between">
                <div>
                    <div className="mb-2 inline-flex items-center gap-2 rounded-full bg-indigo-50  px-4 py-2 text-sm font-medium text-indigo-600">
                        <Sparkles size={16} /> AI Generated
                    </div>
                    <h2 className="text-2xl font-bold text-slate-900">
                        Generated Output
                    </h2>
                    <p className="mt-1 text-slate-500">
                        Review,save, or export your AI-generated content.
                    </p>
                </div>
            </div>

            {/*Content*/}
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
                <pre className="whitespace-pre-wrap font-sans text-sm leading-7 text-slate-700">
                    {generatedContent}
                </pre>
            </div>

            <div className="mt-6 flex flex-col gap-4 lg:flex-row lg:items-c lg:justify-between">
                <div className="flex items-center gap-4 text-sm text-slate-500">
                    <span>1,450 words</span>
                    <span></span>
                    <span>Generated 2 mins ago</span>
                </div>
                <div className="flex flex-wrap gap-3">
                    <button className="flex items-center gap-2 rounded-2xl border border-slate-200 px-4 py-2 text-sm font-medium text-slate-600 transition-all hover:border-indigo-200
                    hover:text-indigo-600 hover:bg-indigo-50">
                        <Copy size={16} />
                        Copy
                    </button>
                    <button  className="flex items-center gap-2 rounded-2xl border border-slate-200 px-4 py-2 text-sm font-medium text-slate-600 transition-all hover:border-indigo-200 hover:bg-indigo-50 hover:text-indigo-600">
                        <Save  size={16}/> Save
                    </button>
                    <button className="flex items-center gap-2 rounded-2xl bg-indigo-600 px-5 py-2 text-sm font-medium text-white transition-all hover:bg-indigo-700">
                        <Download  size={16}/>Download
                    </button>
                </div>
            </div>

        </section>
    )
}
