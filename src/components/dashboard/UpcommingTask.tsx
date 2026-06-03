

export default function UpcommingTask() {
    const tasks=[
        {
            title:"Generate Weekly Report",
            time:"09:00 AM",
            priority:"High",
        },
        {
            title:"Review AI Workflow",
            time:"11:30 AM",
            priority:"Medium",
        },
        {
            title:"Client Presentation",
            time:"03:00 PM",
            priority:"High",

        },
        {
            title:"Team Sync Meeting",
            time:"05:00 PM",
            priority:"low",
        },
    ];
  return (
   <section className="rounded-4xl border border-slate-200 bg-white shadow-sm p-6">
        <div className="mb-6">
            <h2 className="text-2xl font-semibold text-slate-900">Upcomming Tasks</h2>
            <p className="text-sm text-slate-500">Your schedule for today</p>
        </div>

        {/* <div className="relative pl-8">
               <div className="absolute left-2 top-0 h-full w-px bg-slate-200">
                    <div className="absolute left-0 top-1 h-4 w-4 rounded-full bg-indigo-600 ring-4 ring-indigo-100">
                        <div className="font-medium text-slate-900">
                           <div></div>
                        </div>
                    </div>
               </div>
               
        </div> */}

        <div className="space-y-6">
            {tasks.map((task)=>(

                <div key={task.title} className="relative flex items-center justify-between pl-8">
                      
                      <div className="absolute left-0 top-1 h-4 w-4 rounded-full bg-indigo-600  ring-4 ring-indigo-100"/>
                      <div  className="absolute left-1.75px top-5 h-full w-px bg-slate-400"/>

                    <h3 className="font-medium text-slate-900">{task.title}</h3>
                    <p className="text-sm text-slate-500">{task.time}</p>
                    <span className={`rounded-full px-3 py-1 text-xs font-medium ${task.priority === "High"?"bg-red-100 text-red-600":task.priority=== "Medium" ? "bg-amber-100 text-amber-600" : "bg-green-100 text-green-600"}`}>{task.priority}</span>
                </div>
            ))}
        </div>
       

   </section>
  )
}
