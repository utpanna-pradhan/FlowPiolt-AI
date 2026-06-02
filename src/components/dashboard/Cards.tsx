import {Sparkles,CreditCard,Activity,Workflow} from "lucide-react";

export default function Cards() {
    const stats = [
        {
            title:"AI Generations",
            value:"24,521",
            change:"+12%",
            icon:Sparkles
        },
        {
            title:"Credits Left",
            value:"1,245",
            change:"+8%",
            icon:CreditCard,
        },
        {
            title:"Active Workflows",
            value:"48",
            change:"+23%",
            icon:Workflow,
        },
        {
            title:"Productivity",
            value:"89",
            change:"+18%",
            icon:Activity
        }
    ]
  return (
    <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
        {stats.map((item)=>(
            <div key={item.title} className="group relative overflow-hidden rounded-[28px] border border-slate-200/60 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                {/*----------graditent blur------*/}
                <div className="absolute right-0 top-0 h-32 rounded-full bg-indigo-100 blur-3xl opacity-40"/>

                <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-indigo-100 blur-3xl opacity-40" />
                <div className="relative z-10 flex items-start justify-between">
                    <div>
                        <p className="text-sm font-medium text-slate-500">
                            {item.title}
                        </p>
                        <h3 className="mt-3 text-3xl font-bold tracking-light text-slate-900">{item.value}</h3>
                        <span className="mt-3 inline-flex rounded-full bg-emerald-50 px-3 py-1 text-sm font-medium text-emerald-600">
                            {item.change}
                        </span>
                    </div>
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600 transition-transform duration-300 group-hover:scale-10">
                        <item.icon size={28} />
                    </div>
                </div>
            </div>
        ))}
    </div>
  )
}
