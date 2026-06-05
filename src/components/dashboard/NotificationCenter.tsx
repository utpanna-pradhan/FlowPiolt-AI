import {Bell,Sparkles,CheckCircle2,Users} from "lucide-react"

export default function NotificationCenter() {
    const notification =[
        {
            title:"AI Report Generated",
            description:"Weekly performance report is ready",
            time:"2 min ago",
            unread:true,
            icon:Sparkles,
        },
        {
            title:"Workflow Completed",
            description:"Marketing automation finished sucessfuly",
            time:"1 hour ago",
            unread:true,    
            icon:CheckCircle2,
        },
        {
            title:"Emma Joined Workspace",
            description:"A new member joined your team",
            time:"3 hours ago",
            unread:false,
            icon:Users
        },
        {
            title:"AI Recommendation Available",
            description:"New optimization suggestions are ready",
            time:"Yesterday",
            unread:false,
            icon:Bell
        },
    ];
  return (
   <section className="rounded-4xl border border-slate-200 bg-white p-6 shadow-sm">
    <div className="mb-6 flex items-center justify-between">
        
        <div>
            <h2 className="text-xl font-semibold text-slate-900">Notifications</h2>
            <p className="text-sm text-slate-500">
                Recent activity from your workspace
            </p>
        </div>

        <button className="text-sm font-medium text-indigo-600 hover:text-indigo-700">
            View All
        </button>
    </div>

    <div className="space-y-3">
        {notification.map((notification)=>{
            const Icon  = notification.icon;
            return(
                <div key={notification.title} className="group flex items-center gap-4 rounded-2xl border border-slate-100 p-4 transition-all duration-300 hover:border-indigo-100 hover:bg-slate-50 hover:shadow-sm">

                    {/*Unread dot */}
                    {notification.unread && (
                        <div className="mt-2 h-2.5 w-2.5 rounded-full bg-indigo-600"/>
                    )}

                    {/*Icon */}
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600">
                        <Icon size={20} />
                    </div>

                    {/*Content*/}
                    <div className="flex-1">
                        <div className="flex items-center justify-between">
                            <h3 className="font-medium text-slate-900">{notification.title}</h3>

                            <span className="text-xs text-slate-400">
                                {notification.time}
                            </span>
                        </div>
                        <p className="text-sm mt-1 text-slate-500">
                            {notification.description}
                        </p>
                    </div>
                </div>
            )
        })}
    </div>
   </section>
  )
}
