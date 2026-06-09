
import { AreaChart, Area, ResponsiveContainer, Tooltip, XAxis, CartesianGrid } from "recharts";

export default function PerformanceTend() {
    const performanceData = [
        {
            month: "Jan",
            requests: 1200,
            workflows: 240,
            credits: 180,
        },
        {
            month: "Feb",
            requests: 1800,
            workflows: 320,
            credits: 260,
        },
        {
            month: "Mar",
            requests: 2400,
            workflows: 410,
            credits: 350,
        },
        {
            month: "Apr",
            requests: 3200,
            workflows: 520,
            credits: 430,
        },
        {
            month: "May",
            requests: 4100,
            workflows: 640,
            credits: 510,
        },
        {
            month: "Jun",
            requests: 5200,
            workflows: 820,
            credits: 650,
        },
    ];
    return (
        <section className="relative overflow-hidden p-8 rounded-4xl border border-slate-200 bg-white shadow-sm">

            {/* Top Right Glow */}
            <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-indigo-100 blur-3xl opacity-70" />
            {/* Bottom Left Glow */}
            <div className="absolute -left-24 -bottom-24 h-72 w-72 rounded-full bg-violet-100 blur-3xl opacity-60" />


            <div className="relative z-10">

                {/*Header*/}
                <div className=" mb-8 flex flex-wrap items-center justify-between gap-4">
                    {/*left*/}
                    <div>
                        <h2 className="text-3xl font-bold text-slate-900">
                            AI Performance Trend
                        </h2>
                        <p className="mt-2 text-slate-500">
                            Monitor requests, workflows and credit usage
                        </p>
                    </div>
                    {/*right*/}
                    <div className="flex gap-2">
                        <button className="rounded-xl bg-indigo-600 px-4 py-2 text-sm font-medium text-white">6M</button>
                        <button className="rounded-xl px-4 py-2 text-sm text-slate-500 hover:bg-slate-100">1Y</button>
                        <button className="rounded-xl px-4 py-2 text-sm text-slate-500 hover:bg-slate-100">All</button>
                    </div>

                </div>
            </div>


            {/*Chart*/}
            <div className="h-105 w-full">
                <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={performanceData}>
                        <defs>
                            <linearGradient id="trendGradient" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="54%" stopColor="#4f46e5" stopOpacity={0.4} />
                                <stop offset="95%" stopColor="#4f46e5" stopOpacity={0} />
                            </linearGradient>
                        </defs>
                        <CartesianGrid vertical={false} strokeDasharray="4 4" stroke="#e2e8f0" />
                        <XAxis dataKey="month" axisLine={false} tickLine={false} />
                        <Tooltip />
                    
                        <Area type="monotone" dataKey="requests" stroke="#4f46e5" strokeWidth={4} fill="url(#trendGradient)" dot={false} activeDot={{r:7,fill:"#4f46e5",stroke:"#fff" , strokeWidth:2}}/>
                    </AreaChart>

                </ResponsiveContainer>
                <div>

                

                </div>

            </div>

                <div className="mt-8 grid gap-4 md:grid-cols-3">
                        <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
                            <p className="text-sm text-slate-500">Total Requests</p>
                            <h3 className="mt-2 text-3xl font-bold text-slate-900">18.9k</h3>
                            <p className="mt-1 text-sm text-green-600">
                                +32% from last period
                            </p>
                        </div>
                        <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
                            <p className="text-sm text-slate-500">Workflows Created</p>
                            <h3 className="mt-2 text-3xl font-bold text-slate-900">
                                820
                            </h3>
                            <p className="mt-1 text-sm text-green-600">
                                +18% growth
                            </p>
                        </div>

                        <div className="rounded-3xl border border-slate-200 bg-slate-50 p-5">
                            <p className="text-sm text-slate-500">Credits Saved</p>
                            <h3 className="mt-2 text-3xl font-bold text-slate-900">650</h3>
                            <p className="mt-1 text-sm text-green-600">+24% efficiency</p>
                        </div>
                    </div>
        </section>
    )
}
