import {Bell,Sparkles,CheckCircle2,Users} from "lucide-react"

export default function NotificationCenter() {
    const notification =[
        {
            title:"AI Report Generated",
            description:"Weekly performance report is ready",
            time:"2 min ago",
            unread:true,
        },
        {
            title:"Workflow Completed",
            description:"Marketing automation finished sucessfuly",
            time:"1 hour ago",
            unread:true,    
        },
        {
            title:"Emma Joined Workspace",
            description:"A new member joined your team",
            time:"3 hours ago",
            unread:false,
        },
        {
            title:"AI Recommendation Available",
            description:"New optimization suggestions are ready",
            time:"Yesterday",
            unread:false,
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
                <div key={notification.title} className="group flex items-center gap-4">
                </div>
            )
        })}
    </div>
   </section>
  )
}
