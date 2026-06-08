import {FileText,Mail,Calendar,ArrowRight} from "lucide-react"

export default function RecentGeneration() {
    const generations=[
        {
            title:"Product Launch Blog",
            type:"Blog Post",
            words:1450,
            time:"2 mins ago",
            status:"Ready",
            icon:FileText,
        },
        {
            title:"Summer Email Campaign",
            type:"Marketing Email",
            words:650,
            time:"15 mins ago",
            status:"Ready",
            icon:Mail,
        },
        {
            title:"Weekly Team Summary",
            type:"Meeting Notes",
            word:980,
            time:"1 hour ago",
            status:"Ready",
            icon:Calendar,
        },
    ];
  return (
    <section className="rounded-4xl border border-slate-200 bg-white p-8 shadow-sm relative">
         {/*glow*/}
            <div className="absolute -top-20 -right-20 h-60 w-60 rounded-full bg-indigo-100 blur-3xl opacity-60" />
            <div className="absolute -bottom-20 -left-20 h-60 w-60 rounded-full bg-indigo-100 blur-3xl opacity-60" />

           {/*Header*/}
           <div className="mb-6 flex items-center justify-between">
            <div>
                <h2 className="text-2xl font-bold text-slate-900">Recent Generation</h2>
                <p className="mt-1 text-slate-500">Access your AI-generated content . </p>
            </div>
            <button className="text-sm font-medium text-indigo-600 hover:text-indigo-700">View All</button>
           </div>

           {/*Content*/}
           <div className="space-y-4">
            {generations.map((item)=>{
                const Icon = item.icon
                return(
                    <div key={item.title} className="group flex items-center justify-between rounded-3xl border border-slate-200 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-indigo-100 hover:shadow-lg">
                        {/*left*/}
                        <div className="flex items-center gap-4">
                            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600">
                                <Icon size={24} />
                            </div>
                            <div >
                                <h3 className="font-semibold text-slate-900">
                                    {item.title}
                                </h3>
                                <p className="mt-1 text-sm text-slate-500">
                                    {item.type}
                                </p>
                                <div className="mt-2 flex items-center gap-2 text-xs text-slate-400">
                                    <span>{item.words}</span>
                                    <span></span>
                                    <span>{item.time}</span>
                                </div>
                            </div>
                        </div>

                        {/*right*/}
                        <div className="flex items-center gap-4">
                            <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-700">
                                {item.status}
                            </span>
                            <button className="flex items-center gap-2 text-sm font-medium text-indigo-600"> View
                                <ArrowRight  size={16} className="transition-transform duration-300 group-hover:translate-x-1"/>
                            </button>
                        </div>

                    </div>
                )
            })}
           </div>
        
    </section>
  )
}
