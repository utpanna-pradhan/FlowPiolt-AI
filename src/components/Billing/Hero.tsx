import { Sparkles, ArrowUpRight, Wallet, Clock3, Coins } from "lucide-react"

export default function Hero() {
    return (
        <section className="bg-white border border-slate-200 p-8 rounded-4xl shadow-sm relative overflow-hidden">

            {/* Top Right Glow */}
            <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-indigo-100 blur-3xl opacity-70" />
            {/* Bottom Left Glow */}
            <div className="absolute -left-24 -bottom-24 h-72 w-72 rounded-full bg-violet-100 blur-3xl opacity-60" />

            <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#000_1px,transparent_1px)] bg-size[18px_18px]" />
            <div className="relative z-10">
                {/*TOP*/}
                <div className="mb-12 flex flex-wrap items-center justify-between gap-6">
                    <div>
                        <div className="inline-flex items-center gap-2 rounded-full border border-indigo-50 px-4 py-2 text-sm font-semibold text-indigo-600">
                            <Sparkles size={16} />
                            Billing Command Deck
                        </div>
                        <h1 className="mt-5 max-w-3xl text-5xl font-bold leading-tight tracking-tight text-slate-900">
                            Control spending 
<br />
                            Scale intelligently
                        </h1>
                        <p className="mt-5 max-w-xl text-lg leading-relaxed text-slate-500">Monitor usage,forecast costs and optimize AI operations before expenses grow.</p>
                    </div>

                    {/*Spend*/}
                    <div className=" rounded-[36px] border border-white/70 bg-white/70 p-10 backdrop-blur-xl shadow-xl">
                        <p className="text-slate-500 text-sm font-medium">Current Monthly Spend</p>
                        <h2 className="mt-3 text-6xl font-bold tracking-tight text-slate-900">
                            ₹18,420
                        </h2>
                        <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-green-50 px-4 py-2 text-sm font-semibold text-green-600">
                            <ArrowUpRight size={16} />
                            +18% efficiency
                        </div>
                    </div>
                </div>

                {/*Command Rail*/}
                <div className="grid gap-6 lg:grid-cols-[1.3fr_0.9fr_0.9fr]">
                    {/*Left*/}
                    <div className="rounded-[36px] border border-slate-200 bg-linear-to-br from-indigo-600 to-violet-600 p-8 text-white shadow-xl">
                        <div className="mb-8 flex items-center gap-3">
                            <Wallet />
                            Active Plan
                        </div>
                        <h3 className="text-4xl font-bold">
                            Flowpilot Pro
                        </h3>
                        <p className="mt-3 text-white/80">
                        Unlimited prompts · Priority AI · Faster generation</p>
                        <button className="mt-8 rounded-2xl bg-white px-6 py-3 font-semibold text-indigo-700 transition hover:scale-[1.03]">Manage Subscription</button>
                    </div>
                    {/*Middle*/}
                    <div className="rounded-[36px] border border-slate-200 bg-white/70 p-8 backdrop-blur-xl">
                        <div className="mb-6 flex items-center gap-3">
                            <Coins />Credits
                        </div>
                        <h3 className="text-5xl font-bold text-slate-900">72%</h3>
                        <p className="mt-3 text-slate-500">Remaining this cycle</p>
                        <div className="mt-8 h-4 overflow-hidden rounded-full bg-slate-100">
                            <div className="h-full w-[72%] rounded-full bg-linear-to-r from-indigo-500 to-violet-500 relative overflow-hidden"/>
                            <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-white/10 blur-3xl"/>
                        </div>
                    </div>

                    {/*right*/}
                    <div className="rounded-[36px] border border-slate-200 bg-white/70 p-8 backdrop-blur-xl">
                        <div className="mb-6 flex items-center gap-3">
                            <Clock3 />Renewal
                        </div>
                        <h3 className="text-5xl font-bold text-slate-900">
                            12
                        </h3>
                        <p className="mt-2 text-slate-500">
                            Days Remaining
                        </p>
                        <div className="mt-8">
                            <div className="inline-flex rounded-full bg-indigo-50 px-4 py-2 text-sm font-medium text-indigo-600">
                                Auto Renewal Enabled
                            </div>
                        </div>
                    </div>
                </div>

            </div>



        </section>
    )
}
