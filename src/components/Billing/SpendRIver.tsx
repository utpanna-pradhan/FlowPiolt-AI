import { Sparkles } from "lucide-react"

export default function SpendRIver() {
    const spending = [
        {
            label: "Content Generation",
            amount: 9200,
            width: "100%",
            color: "from-indigo-600 to-violet-600"
        },
        {
            label: "Workflow Automation",
            amount: 6200,
            width: "75%",
            color: "from-violet-500 to-fuchsia-500",
        },
        {
            label: "Document Export",
            amount: 3400,
            width: "55%",
            color: "from-blue-500 to-cyan-500",
        },
        {
            label: "Team Collaboration",
            amount: 2100,
            width: "35%",
            color: "from-emerald-500 to-teal-500",
        },
    ];
    return (
        <section className="mt-8 rounded-4xl bg-white shadow-sm p-8 border border-slate-200 relative overflow-hidden">

            {/*Glow*/}
            <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-indigo-100 blur-3xl opacity-70" />
            <div className="absolute -left-24 -bottom-24 h-72 w-72 rounded-full bg-violet-100 blur-3xl opacity-70" />
            <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#000_1px,transparent_1px)] bg-size[18px_18px]" />

            <div className="relative z-10">

                {/*Header*/}
                <div className="mb-14">
                    <div className="inline-flex items-center gap-2 rounded-full bg-indigo-50 px-4 py-2 text-sm font-semibold text-indigo-600">
                        <Sparkles size={16} />AI Spend River
                    </div>
                    <h2 className="mt-5 text-4xl font-bold text-slate-900">
                        Watch where ever rupee flows
                    </h2>
                    <p className="mt-4 max-w-2xl text-lg text-slate-500">Visualize how AI operations consume your budget.</p>
                </div>

                {/*River*/}
                {/* Spend Streams */}

                <div className="space-y-10">

                    {spending.map((item, index) => (

                        <div
                            key={item.label}
                            className="group"
                        >

                            <div className="mb-4 flex items-center justify-between">

                                <div>

                                    <p className="text-xs uppercase tracking-[0.25em] text-slate-400">

                                        Channel {index + 1}

                                    </p>

                                    <h3 className="mt-1 text-2xl font-bold text-slate-900">

                                        {item.label}

                                    </h3>

                                </div>

                                <div className="text-right">

                                    <p className="text-4xl font-bold text-slate-900">

                                        ₹{item.amount.toLocaleString()}

                                    </p>

                                    <p className="text-sm text-slate-500">

                                        Monthly Consumption

                                    </p>

                                </div>

                            </div>

                            {/* Flow */}

                            <div className="relative">

                                <div className="h-8 overflow-hidden rounded-full border border-slate-100 bg-slate-50">

                                    <div
                                        style={{
                                            width: item.width
                                        }}
                                        className={`relative h-full rounded-full bg-linear-to-r ${item.color}`}
                                    >

                                        {/* moving river */}

                                        <div className="absolute inset-0">

                                            <div className="absolute left-0 top-0 h-full w-[250%] animate-[pulse_3s_linear_infinite] bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.25),transparent)]" />

                                        </div>

                                        {/* river endpoint */}

                                        <div className="absolute right-0 top-1/2 h-8 w-9 -translate-y-1/2 rounded-full bg-white/30 backdrop-blur-xl" />

                                    </div>

                                </div>

                            </div>

                        </div>

                    ))}

                </div>

                {/*Footer*/}
                <div className="mt-14 flex items-center justify-between rounded-4xl border border-indigo-100 bg-indigo-50 p-8 ">
                    <div>
                        <p className="text-sm font-medium text-indigo-600">Largest Cost Driver</p>
                        <h3 className="mt-2 text-3xl font-bold text-slate-900">
                            Content Generation
                        </h3>
                    </div>
                    <h3>41%</h3>
                </div>

            </div>

        </section>
    )
}
