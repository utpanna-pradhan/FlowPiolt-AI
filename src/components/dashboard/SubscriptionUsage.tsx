

export default function SubscriptionUsage() {
    const usage=[
        {
            title:"Credits Used",
            current:2400,
            total:3000,
            suffix:"",
        },
        {
            title:"Storage",
            current:48 ,
            total:50,
            suffix:"GB",
        },
        {
            title:"AI Requests",
            current:9200,
            total:10000,
            suffix:"",
        },
        {
            title:"Workflow",
            current:18,
            total:25,
            suffix:"",
        },
    ];
  return (
   <section className="rounded-4xl border border-slate-200 bg-white p-6 shadow-sm">

        <div className="mb-8">
            <h2 className="text-xl font-semibold text-slate-900">Subscription Usage</h2>
            <p className="text-sm text-slate-500">Monitor your current plan limits</p>
        </div>

        <div className="space-y-6">
            {usage.map((item)=>{
                const percentage =  (item.current / item.total) * 100;
                const barColor = 
                percentage > 90 ?
                 "from-red-500 to-orange-500" 
                 : percentage > 75 
                 ? "from-yellow-500 to-orange-500" 
                 : "from-indigo-500 to-violet-500";
                return(
                    <div key={item.title}>
                        <div className="mb-2 flex items-center justify-between">
                            <p className="font-medium text-slate-700">{item.title}</p>
                            <p className="text-sm text-slate-500">{item.current} {item.suffix} / {item.total}{item.suffix}</p>
                        </div>

                        <div className="h-3 overflow-hidden rounded-full bg-slate-100">
                            <div className={`h-full rounded-full bg-linear-to-r ${barColor} transition-all duration-500`} style={{width:`${percentage}%`,}} />
                        </div>
                    </div>
                )
            })}
        </div>

        <div className="mt-8 rounded-3xl bg-linear-to-r from-indigo-600 to-violet-600 p-5 text-white">
                <h3 className="text-lg font-semibold">
                    Need More Credits?
                </h3>
                <p className="mt-2 text-sm text-indigo-100">Upgrade your plan and unloack unlimited AI workflows,reports, and advanced analytics.</p>

                <button className="mt-4 rounded-xl bg-white px-4 py-2 text-sm font-semibold text-indigo-600 transition-all duration-300 hover:scale-105">
                    Upgrade Plan
                </button>
        </div>
   </section>
  )
}
