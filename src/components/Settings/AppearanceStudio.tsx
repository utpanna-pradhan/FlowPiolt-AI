import { Sparkles , Moon , Sun , Monitor , Palette , SlidersHorizontal , Check } from "lucide-react"

export default function AppearanceStudio() {
    const themes =[
        {
            name:"Midnight",
            icon:Moon,
            activity:true,
        },
        {
            name:"Light",
            icon:Sun,
            
        },
        {
            name:"System",
            icon:Monitor,
        },
    ];
    const colors=[
        "bg-indigo-500",
        "bg-violet-500",
        "bg-cyan-500",
        "bg-emerald-500",
        "bg-rose-500",
    ]
  return (
    <section className="relative overflow-hidden bg-white rounded-4xl p-8 shadow-sm mt-8 border border-slate-200">
        <div className="absolute w-72 h-72 bg-indigo-100 -top-24 -right-24 blur-3xl opacity-70"/>
        <div className="absolute w-72 h-72 -left-24 -bottom-24 bg-violet-100 blur-3xl opacity-70" />
        <div className="relative z-10">
            {/*Header*/}
            <div className="mb-14">
                <div className="inline-flex gap-2 bg-indigo-50 text-indigo-600 font-semibold text-sm px-5 py-2 rounded-full items-center ">
                    <Sparkles size={16}/> Appearance Studio
                </div>
                <h2 className="text-slate-900 text-5xl max-w-4xl font-bold tracking-tight mt-6">
                    Build your own identity
                </h2>
                <p className="mt-4 max-w-2xl text-lg text-slate-500 ">
                    Create a workplace that feels uniquely yours.
                </p>
            </div>

            {/*Mian*/}
            <div className="grid gap-8 xl:grid-cols-[1.4fr_0.7fr] ">
                <div className="relative overflow-hidden rounded-[40px] bg-slate-950 p-10 text-white min-h-162.5">
                    <div className="absolute inset-0 bg-linear-to-br from-indigo-900/40 via-transparent to-violet-700/30 "/>
                    <div className="relative">
                        <p className="text-white/50">
                            LIVE PREVIEW
                        </p>
                        <div className="mt-10 space-y-6">
                            <div className="rounded-4xl bg-white/10 p-8 backdrop-blur-xl">
                                <div className="flex justify-between flex-wrap items-start gap-5">
                                    <div>
                                        <p className="text-white/60">Workspace</p>
                                        <h3 className="mt-3 text-3xl font-bold">
                                            Midnight Theme
                                        </h3>
                                    </div>
                                    <div className="rounded-full bg-emerald-500/20 px-5 py-3  text-sm text-emerald-300">
                                        Active
                                    </div>

                                </div>
                                <div className="mt-8 grid gap-4 md:grid-cols-[0.7fr_1fr]">
                                    <div className="h-56 rounded-[26px] bg-white"/>
                                  <div className="flex flex-col gap-4">
                                    <div className="h-28 rounded-[26px] bg-white/10" />
                                    <div className="h-24 rounded-[26px] bg-indigo-500"/>

                                  </div>
                                </div>
                            </div>
                            <div className="rounded-4xl bg-white/5 p-8 mt-8">
                            <div className="flex items-center gap-3">
                                <Palette />
                                Accent Engine
                            </div>
                            <div className="mt-6 flex flex-wrap gap-4">
                                {colors.map((color)=>(
                                    <button key={color} className={`h-14 w-14 rounded-full ${color} transition hover:scale-110`}>

                                    </button>
                                ))}
                            </div>
                        </div>
                        </div>
                       

                    </div>

                    
                </div>

                <div className="rounded-[40px] border border-slate-200 bg-white/80 p-8 backdrop-blur-xl">
                    <div className="flex items-center gap-3  mb-8">
                        <SlidersHorizontal />
                        Controls
                    </div>
                    <div className="mb-8">
                        {themes.map((item)=>{
                            const Icon = item.icon
                            return(
                                <button key={item.name} className={`w-full mb-8 rounded-[28px] border p-6 text-left transition ${item.activity ? "border-indigo-500 bg-indigo-50" : "border-slate-200"}`}>
                                    <div className="flex justify-between " >
                                        <div>
                                            <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-slate-900 text-white">
                                                <Icon />
                                            </div>
                                            <h3>
                                                {item.name}
                                            </h3>
                                        </div>
                                        {item.activity && <Check />}
                                    </div>
                                </button>
                            )
                        })}
                    </div>
                    <div className="mt-8 rounded-[30px] bg-linear-to-br from-indigo-600 to-violet-600 p-8 text-white">
                        <p className="text-white/70">
                            Visual Score
                        </p>
                        <h3 className="mt-4 text-6xl font-bold">
                            96
                        </h3>
                        <p className="mt-2">
                            Workspace identity optimized
                        </p>
                    </div>
                </div>

            </div>

        </div>
    </section>
  )
}
