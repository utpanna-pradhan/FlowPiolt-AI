import { ResponsiveContainer, AreaChart, Area, XAxis,YAxis, Tooltip, CartesianGrid } from "recharts";

export default function UsageChart() {
   
    const usageData = [
        {
            day: "Mon",
            usage: 120,
        },
        {
            day: "Tue",
            usage: 220,
        },
        {
            day: "Wed",
            usage: 180,
        },
        {
            day: "Thu",
            usage: 340,
        },
        {
            day: "Fri",
            usage: 420,
        },
        {
            day: "Sat",
            usage: 380,
        },
        {
            day: "Sun",
            usage: 560,
        },
    ];
 const CustomeTooltip = ({ active,payload}:any)=>{
        if(!active || !payload?.length) return null;
        return(
            <div className="roundex-2xl border border-slate-200 bg-white px-4 py-3 shadow-lg">
                <p className="text-xs text-slate-500">Credits Used</p>
                <p className="text-lg font-bold text-slate-900">{payload[0].value}Credits</p>
            </div>
        )
 };
    return (
        <section className="rounded-4xl border border-slate-200 bg-white p-6 shadow-sm">

            {/*----------Headers-----------*/}
            <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div>
                      <h2 className="text-xl font-semibold text-slate-900">AI Usage Analytics</h2>
                       <p className="text-sm text-slate-500">Workflow activity from the last 7 days</p>
                </div>
              

                    <div className="flex items-center gap-2">
                        <button className="rounded-xl bg-indigo-600 px-4 py-2 text-sm font-semibold text-white">7D</button>
                        <button className="rounded-xl px-4 py-2 text-sm text-slate-500 hover:bg-slate-100">30D</button>
                        <button className="rounded-xl px-4 py-2 text-sm text-slate-500 hover:bg-slate-100">90D</button>
                    </div>
             
            </div>
           

           {/*--------------Stats----------*/}
           <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div>
                <p className="text-xs text-slate-500">Total Credits</p>
                <h3 className="text-2xl font-bold text-slate-900">2,220</h3>
            </div>

            <div>
                <p className="text-xs text-slate-500">Avg Daily Usage</p>
                <h3 className="text-2xl font-bold text-slate-900">317</h3>
            </div>

            <div>
                <p className="text-xs text-green-600"> +23%</p>
                <h3 className="text-2xl font-bold text-slate-900">Weekly Growth</h3>
            </div>
           </div>


        {/*----------Charts-----------*/}
            <div className="h-87.5 w-full">
                <ResponsiveContainer width="100%" height="100%">

                    <AreaChart data={usageData}>
                        <defs>
                            <linearGradient id="usageGradient" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#4f46e5"
                                    stopOpacity={0.35} />
                                <stop offset="95%" stopColor="#4f46e5" stopOpacity={0} />
                            </linearGradient>
                        </defs>

                        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />

                        <XAxis dataKey="day" tickLine={false} axisLine={false} tick={{ fontSize:12}} />

                        <YAxis tickLine={false} axisLine={false}
                        tick={{fontSize:12}} />

                        <Tooltip content={<CustomeTooltip />} cursor={{stroke:"#4f46e5",strokeWidth:1,strokeDasharray:"5 5",}} />
                            
                      
                        <Area type="monotone" dataKey="usage" stroke="#4f46e5" strokeWidth={3} fill="url(#usageGradient)" dot={false} activeDot={{r:7,fill:"#4f46e5",strokeWidth:2,stroke:"#ffffff"}}/>

                    </AreaChart>
                </ResponsiveContainer>
            </div>
        </section>
    )
}
