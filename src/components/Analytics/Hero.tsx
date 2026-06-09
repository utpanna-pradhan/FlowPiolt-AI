import { TrendingUp ,Sparkles } from "lucide-react"

export default function Hero() {
  return (
    <section className="relative p-8 rounded-4xl bg-white border border-slate-200 overflow-hidden lg:p-12 shadow-sm" >

    {/* Top Right Glow */}
      <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-indigo-100 blur-3xl opacity-70" />
    {/* Bottom Left Glow */}
      <div className="absolute -left-24 -bottom-24 h-72 w-72 rounded-full bg-violet-100 blur-3xl opacity-60" />

    <div className="relative z-10 grid gap-10 lg:grid-cols-2">

    {/*LeftSide*/}
        <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-indigo-100 px-4 py-2 text-sm font-medium text-indigo-600 bg-indigo-50">
                <Sparkles size={16}/>
                Analytics Command Center
            </div>
            <h1 className="max-w-lg text-4xl font-bold tracking-tight text-slate-900 lg:text-5xl">
                Turn AI activity into actionable insights.
            </h1>
            <p className="mt-5 max-w-lg text-lg leading-relaxed text-slate-500"> 
                Track performance , discover trends , and optimize your AI workflows with real-time analytics.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
                <button className="rounded-2xl bg-indigo-600 font-medium text-white transition px-6 py-3 hover:bg-indigo-700">Export Report</button>
                <button className="rounded-2xl border border-slate-200 bg-white px-6 py-3 font-medium text-slate-700 transition hover:border-indigo-200 hover:bg-indigo-50">Compare Periods</button>
            </div>
        </div>


        {/*Right side*/}
        <div className="relative flex items-center justify-center">
            <div className="w-full max-w-md rounded-4xl border border-slate-200 bg-white/80 backdrop-blur-xl p-6 shadow-xl transition-all duration-300 hover:-translate-y-2">

                <div className="mb-5 flex items-center justify-between">
                    <span className="text-sm text-slate-500">
                        AI Performance
                    </span>

                    <div className="flex items-center gap-2 text-green-600 font-semibold">
                        <TrendingUp size={16}/>32%
                    </div>
                </div>

                <div className="mb-6 flex h-32 items-end gap-2">
                    <div  className="h-12 w-full rounded-t-xl bg-indigo-200"/>
                    <div  className="h-20 w-full rounded-t-xl bg-indigo-300"/>
                    <div className="h-16 w-full rounded-t-xl bg-indigo-200"/>
                    <div  className="w-full rounded-t-xl h-28 bg-indigo-400"/>
                    <div className="h-28 rounded-t-xl w-full bg-indigo-500"/>
                    <div className="h-24 w-full rounded-t-xl bg-indigo-400"/>
                    <div  className="h-32 w-full rounded-t-xl bg-indigo-600"/>
                </div>

            <div className="grid grid-cols-3 gap-3 mt-8">
                <div>
                    <p className="text-3xl font-bold text-slate-900">
                        12.4k
                    </p>
                    <p className="text-sm text-slate-500"> 
                        Requests
                    </p>

                </div>
                <div>
                    <p className="text-3xl font-bold text-slate-900">89%</p>
                    <p className="text-sm text-slate-500">
                        Efficiency
                    </p>
                </div>
                <div>
                    <p className="text-3xl font-bold text-slate-900">245</p>
                    <p className="text-sm text-slate-500">Workflows</p>
                </div>
            </div>
            </div>
        </div>

    </div>
    

    </section>
  )
}
