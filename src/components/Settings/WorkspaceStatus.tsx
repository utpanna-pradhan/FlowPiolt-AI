import { Sparkles , Shield , Database , Bell , Activity , ArrowUpRight  } from "lucide-react"

export default function WorkspaceStatus() {
    const modules=[
        {
            title:"Security",
            value:"Protected",
            icon:Shield,
            color:"from-emerald-500 to-teal-500"
        },
        {
            title:"API Health",
            value:"99.8%",
            icon:Activity,
            color:"from-indigo-600 to-violet-600",
        },
        {
            title:"Notification",
            value:"Enabled",
            icon:Bell,
            color:"from-amber-500 to-orange-500",
        },
        {
            title:"Storage",
            value:"68%",
            icon:Database,
            color:"from-cyan-500 to-blue-500",
        },
    ];
  return (
 <section className=" relative overflow-hidden bg-white border border-slate-200 shadow-sm p-8 mt-14 rounded-4xl">
    <div className="absolute w-72 h-72 bg-indigo-100 -top-24 -right-24 opacity-70 blur-3xl"/>
    <div className="absolute w-72 h-72 bg-violet-100 -bottom-24 -left-24  blur-3xl opacity-70" />
    <div className="relative z-10">

        {/*Header*/}
        <div className="mb-14">
            <div className="inline-flex gap-2 px-5 py-2 bg-indigo-50 text-indigo-600 text-sm font-semibold rounded-full items-center">
                <Sparkles size={16}/>Workspace Status
            </div>
            <h2 className="text-slate-900 mt-6 font-bold tracking-tight max-w-4xl text-5xl">Everything running beautifully</h2>
            <p className="mt-4 max-w-2xl text-slate-500 text-lg">Monitor health , security and activity from one place.</p>
        </div>

        {/*Main*/}
        <div className="grid gap-10 xl:grid-cols-[1.1fr_0.9fr]">

            {/*Left*/}
            <div className="relative flex items-center justify-center min-h-155">
                <div className="absolute h-130 w-130 border border-indigo-100 rounded-full"/>
                <div className="absolute w-105 h-105 border border-violet-100 rounded-full"/>
                <div className="absolute w-80 h-80 rounded-full border border-slate-100 "/>

                <div className="relative flex h-60 w-60 flex-col items-center justify-center rounded-full bg-linear-to-br from-slate-900 via-indigo-700 to-violet-700 text-white shadow-[0_0_120px_rgba(79,70,229,.35)]">
                <p className="text-sm uppercase tracking-[0.35em]">
                    Workspace
                </p>
                <h2 className="mt-4 text-7xl font-bold">96</h2>
                <p className="mt-2 text-white/70">Health Score</p>
                </div>
            </div>
            {/*Right*/}
            <div className="grid gap-5 sm:grid-cols-2">
                {modules.map((item)=>{
                    const Icon = item.icon
                    return(
                        <div key={item.title} className="rounded-4xl border border-slate-100 bg-white p-7 transition duration-300 hover:-translate-y-2 shadow-[0_20px_60px_rgba(0,0,0,.05)] hover:shadow-[0_35px_90px_rgba(79,70,229,.12)]">
                            <div className={`flex h-16 w-16 items-center justify-center rounded-3xl bg-linear-to-br ${item.color} text-white`}>
                                <Icon size={26}/>
                            </div>
                            <p className="text-slate-500 text-sm mt-8">{item.title}</p>
                            <h3 className="mt-2 text-3xl font-bold text-slate-900">
                                {item.value}
                            </h3>

                        </div>
                    )
                })}
            </div>

        </div>

        {/*Footer*/}
        <div className="mt-12 flex flex-col gap-6 rounded-4xl bg-slate-900 p-8 text-white md:flex-row md:items-center md:justify-between">
            <div>
                <p className="text-white/50">Environment</p>
                <h3 className="mt-2 text-3xl font-bold">Production Active</h3>
            </div>
            <button className="px-8 py-4 bg-white font-semibold group rounded-full text-slate-900">
                <div className="flex gap-3 items-center ">Open Control Center 
                    <ArrowUpRight className="transition group-hover:rotate-45" />
                </div>
            </button>

        </div>
    </div>

 </section>
  )
}
