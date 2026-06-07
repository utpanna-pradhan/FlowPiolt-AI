import { Plus, Sparkles, LayoutTemplate } from "lucide-react"

export default function WorkspaceHeader() {
    const stats = [
        {
            value: "23,451",
            label: "AI Generations",
        },
        {
            value: "98%",
            label: "Sucess Rate",
        },
        {
            value: "12",
            label: "Active Workflow",

        },

    ];
    return (
        <section className="relative overflow-hidden rounded-4xl border border-slate-200 bg-white p-6 shadow-sm lg:p-10">

            { /*Background Glow */}
            {/* <div  className="absolute -top-20 -right-20 h-60 w-60 rounded-full bg-indigo-100 blur-3xl opacity-70"/> */}
             <div className="absolute -top-20 -right-20 h-60 w-60 rounded-full bg-indigo-100 blur-3xl opacity-60" />
            <div className="absolute -bottom-20 -left-20 h-60 w-60 rounded-full bg-indigo-100 blur-3xl opacity-60" />


            <div className="relative z-10">

                <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-indigo-50 px-4 py-2 text-sm font-medium text-indigo-600">
                    <Sparkles size={16} />
                    AI Powered Workspace
                </div>

                <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-slate-900 lg:text-5xl">
                    Create smarter with your AI copilot.
                </h1>

                <p className="mt-4 max-w-2xl text-lg leading-relaxed text-slate-500">
                    Generate content , automate workflows, build reports, and manage projects from one intelligent workspace.
                </p>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                    <button className="flex items-center justify-center gap-2 rounded-2xl bg-indigo-600 px-6 py-3 font-medium text-white transition-all duration-300 hover:bg-indigo-700 hover:shadow-lg">
                        <Plus size={18} />
                        New Chat
                    </button>

                    <button className="flex items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white px-6 py-3 font-medium text-slate-700 transition-all duration-300 hover:bg-indigo-50 hover:border-indigo-200">
                        <LayoutTemplate size={18} />
                        Explore Templates
                    </button>
                </div>

                <div className="mt-10 grid grid-cols-1 gap-4 border-t border-slate-200 pt-8 sm:grid-cols-3">
                    {stats.map((item) => (
                        <div key={item.label} >
                            <h3 className="text-3xl font-bold text-slate-900">{item.value}</h3>
                            <p className="mt-1 text-sm text-slate-500">{item.label}</p>
                        </div>
                    ))}
                </div>
            </div>

        </section>
    )
}
