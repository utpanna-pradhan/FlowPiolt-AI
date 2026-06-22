import { Sparkles , Crown , ArrowUpRight , Zap,Check } from "lucide-react"

export default function SubscriptionCommand() {
    const features =[
        "Unlimited Workspaces",
        "Priority AI Queue",
        "Advanced Analytics",
        "Team Collaboration"
    ]
  return (
   <section className="mt-8 relative overflow-hidden border border-slate-200 shadow-sm bg-white p-8 rounded-4xl">
    {/*Glow*/}
    <div  className="absolute -right-24 -top-24 rounded-full h-72 w-72 bg-indigo-100 blur-3xl opacity-70"/>
    <div className="absolute w-72 h-72 bg-indigo-100 -left-24 -bottom-24 opacity-70 blur-3xl "/>

    <div className="relative z-10">
        {/*Header*/}
        <div className="mb-14 inline-flex gap-2 bg-indigo-50 text-indigo-600 font-semibold text-sm px-4 py-2 rounded-full items-center">
            <Sparkles />Subscription Command Center
        </div>
        <h2 className="text-5xl text-slate-900 font-bold tracking-tight mt-5 max-w-3xl">
            Manage your plan without leaving the dashboard
        </h2>
        <p className="text-lg leading-relaxed mt-4 text-slate-500 max-w-2xl mb-8">Control billing , monitor limits and scale instantly.</p>
    </div>

    {/*Mian*/}
    <div className="grid gap-6 lg:grid-cols-[1.3fr_0.8fr]">
        {/*Left*/}
        <div className="rounded-[36px] bg-linear-to-br from-indigo-600 to-violet-600 p-8 text-white 
        shadow-[0_20px_80px_rgba(79,70,229,0.25)]">
            <div className="flex items-center justify-between mb-10">
                <div>
                    <div className="inline-flex gap-2 rounded-full bg-white/10 px-4 py-2 items-center">
                        <Crown size={16}/>Current Plan
                    </div>
                    <h3 className="mt-6 text-5xl font-bold">
                        Flowpilot Pro
                    </h3>
                    <p className="text-white/70 mt-3">
                        Unlimited Usage
                    </p>
                </div>
                <div className="text-right">
                    <p className="text-sm">
                        Monthly
                    </p>
                   <p className="mt-2 text-6xl font-bold">
                    ₹2999
                    </p> 
                </div>
            </div>
            <div className="space-y-4">
                {features.map((feature)=>(
                    <div key={feature} className="flex items-center gap-3">
                        <div className="flex items-center justify-center h-8 w-8 rounded-full bg-white/10">
                            <Check size={14}/>
                        </div>
                        <span>
                            {feature}
                        </span>
                    </div>
                ))}
                
            </div>
            <button className="mt-10 font-semibold text-indigo-700 rounded-2xl bg-white px-6 py-4 transition hover:scale-[1.02]">
                    Manage Subscription
                </button>

        </div>

        {/*right*/}
        <div className="grid gap-6">
            <div className="bg-white/70 border border-slate-200 p-8 rounded-[36px] backdrop-blur-xl">
                <p className="text-slate-500 font-medium text-sm">
                    Usage This Month
                </p>
                <div className="bg-slate-100 overflow-hidden mt-6 rounded-full">
                    <div className="h-5 w-[72%] rounded-full bg-linear-to-r from-indigo-500 to-violet-500"/>
                </div>
                <h3 className="mt-6 text-5xl font-bold text-slate-900">
                    72%
                </h3>
            </div>
            <div className="rounded-[36px] border border-indigo-100 bg-indigo-50 p-8">
                <div className="flex items-center justify-between">
                    <div>
                        <p className="text-sm font-medium text-indigo-600">
                            Upgrade Path
                        </p>
                        <h3 className="text-slate-900 text-3xl font-bold mt-2">Enterprise</h3>
                        <p className="mt-2 text-slate-500">Custom AI infra</p>
                    </div>
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-indigo-600 text-white">
                        <ArrowUpRight />
                    </div>
                </div>
                <div className="mt-6 inline-flex items-center gap-2 font-semibold text-indigo-600">
                    <Zap size={18}/>Scale instantly
                </div>
            </div>
        </div>
    </div>

   </section>
  )
}
