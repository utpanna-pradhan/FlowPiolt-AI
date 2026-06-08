import { Sparkles , FileText ,Activity ,Zap } from "lucide-react"

export default function UsageTracker() {
  const stas=[
    {
      title:"AI Requests",
      value:"2,847",
      icon:Sparkles,
    },
    {
      title:"Documents Generator",
      value:"326",
      icon:FileText,
    },
    {
      title:"Credits Used",
      value:"74",
      icon:Zap,
    },
    {
      title:"Workflow Runs",
      value:"189",
      icon:Activity
    },
  ];
  return (
    <section className="relative p-8 bg-white border border-slate-200 shadow-sm rounded-4xl overflow-hidden">

  { /*Background Glow */}
             <div className="absolute -top-20 -right-20 h-60 w-60 rounded-full bg-indigo-100 blur-3xl opacity-60" />
            <div className="absolute -bottom-20 -left-20 h-60 w-60 rounded-full bg-indigo-100 blur-3xl opacity-60" />

{/*Header*/}
          <div className="relative z-10 mb-6">
            <h2 className="text-2xl font-bold text-slate-900">Usage Tracker</h2>
            <p className="mt-1 text-slate-500 ">Monitor your AI activity and workspace usage</p>
          </div>

          {/*Content*/}
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {stas.map((stat)=>{
              const Icon  = stat.icon
              return(
                <div key={stat.title} className="rounded-3xl border border-slate-200 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-indigo-100 hover:shadow-lg">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600">
                    <Icon size={22} />
                  </div>
                  <h3 className=" text-3xl font-bold text-slate-900 ">
                    {stat.value}
                  </h3>
                  <p className="mt-2 txt-sm text-slate-500">
                    {stat.title}
                  </p>

                </div>
              )
            })}
          </div>
    </section>
  )
}
