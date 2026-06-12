

export default function GrowthForecast() {
    const forecast = [
        {
            label: "AI Requests",
            current: 18900,
            prediction: 25600,
            growth: "+35%",
        },
        {
            label: "Workflows",
            current: 820,
            prediction: 1210,
            growth: "+47%",
        },
        {
            label: "Hours Saved",
            current: 420,
            prediction: 610,
            growth: "+45%",
        },
    ];
    return (
        <section className="rounded-4xl bg-white p-8 border border-slate-200 relative overflow-hidden shadow-sm">

            <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-indigo-100 blur-3xl opacity-70" />
            <div className="absolute -left-24 -bottom-24 h-72 w-72 rounded-full bg-violet-100 blur-3xl opacity-60" />

            <div className="relative z-10">
                <div className="text-center">
                    <p className="text-sm uppercase tracking-widest text-indigo-600">AI Forecast</p>
                    <h2 className="mt-4 text-7xl font-bold text-slate-900">+34%</h2>
                    <p className="mt-3 text-lg text-slate-500">Expected Workspace Growth Next Month</p>

                </div>

                {/*Forcecast Curve*/}
                <div className="mt-16 h-52">
                    <svg
                        viewBox="0 0 500 200"
                        className="h-full w-full"
                    >
                        <path
                            d="M20 170 C120 160 180 140 260 100 C320 70 400 40 480 20"
                            fill="none"
                            stroke="#4f46e5"
                            strokeWidth="8"
                            strokeLinecap="round"
                        />

                        <circle
                            cx="20"
                            cy="170"
                            r="10"
                            fill="#4f46e5"
                        />

                        <circle
                            cx="480"
                            cy="20"
                            r="12"
                            fill="#4f46e5"
                        />
                    </svg>
                </div>

                {/*forecast metrics*/}
                <div>
                    {forecast.map((item)=>(
                        <div key={item.label} className="rounded-4xl border border-slate-200 bg-white/20 p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-xl mb-4">
                            <p className="text-sm text-slate-500">{item.label}</p>
                            <div className="mt-5 flex items-center justify-between ">
                                <div>
                                    <p className="text-xs text-slate-400">Current</p>
                                    <h3 className="text-3xl font-bold text-slate-900">
                                        {item.current.toLocaleString()}
                                    </h3>
                                </div>
                                <div className="text-2xl text-indigo-600">
                                     →
                                </div>
                                <div className="text-right">
                                    <p className="text-xs text-slate-400">Forecast</p>
                                    <h3 className="text-3xl font-bold text-indigo-600">
                                        {item.prediction.toLocaleString()}
                                    </h3>
                                </div>
                            </div>
                            <div className="mt-5 inline-flex rounded-full bg-gray-100 px-3 py-1 text-sm font-semibold text-green-700">
                                {item.growth}
                            </div>
                        </div>
                    ))}
                </div>

                {/*Forecast Insight*/}
                <div className="mt-12 rounded-4xl border border-indigo-100 bg-indigo-50 p-8">
                    <h3 className="text-xl font-semibold text-slate-900">Forecast Insight</h3>
                    <p className="mt-3 leading-relaxed text-slate-600">
                        Based on recent activity patterns, AI usage is projected to increase by 34% over the next month. Marketing workflows and current generation pipelines are expected to drive the majority of this growth.
                    </p>
                </div>

            </div>

        </section>
    )
}
