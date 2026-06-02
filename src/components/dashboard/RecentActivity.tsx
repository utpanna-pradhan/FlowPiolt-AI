import {CheckCircle2,Sparkles,UserPlus,FileText} from "lucide-react"

export default function RecentActivity() {
    const activities =[
        {
            title:"Blog article generator",
            description:"AI Writer created a 1500-word article",
            time:"2 min ago",
            icon:Sparkles,
        },
        {
            title:"Workflow completed",
            description:"Lead generation workflow finished",
            time:"15 min ago",
            icon:CheckCircle2,
        },
        {
            title:"New team member added",
            description:"Sarah joined your workspace",
            time:"3 hours ago",
            icon:UserPlus,
        },
        {
            title:"Report exported",
            description:"Monthly analytics report downloaded",
            time:"Yesterday",
            icon:FileText,
        }

    ]
  return (
   <section className="rounded-4xl border border-slate-200 bg-white p-6 shadow-sm">
    <div className="mb-6">
        <h2 className="text-xl font-semibold text-slate-900">
            Recent Activity
        </h2>
        <p className="text-sm text-slate-500">
            Latest updates from your workspace
        </p>
    </div>

    <div>
        {activities.map((activity)=>(
            <div key={activity.title} className="group flex items-start gap-4 rounded-2xl border border-transparent p-4 transition-all duration-300 hover:border-slate-200 hover:bg-slate-50">

                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600">
                    <activity.icon size={22} />
                </div>

                <div className="flex-1">
                    <h3 className="font-medium text-slate-900">{activity.title}</h3>
                    <p className="mt-1 text-sm text-slate-500">
                        {activity.description}
                    </p>
                </div>
                <span className="text-sm text-slate-400">
                    {activity.time}
                </span>
                
            </div>
        ))}
    </div>
   </section>
  )
}
