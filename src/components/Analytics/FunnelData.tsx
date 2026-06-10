

export default function FunnelData() {
    const funnelData = [
        {
            stage: "Prompts Created",
            value: 10240,
            width: "100%",
            color: "from-indigo-900 to-violet-900"
        },
        {
            stage: "Workflows Started",
            value: 7830,
            width: "80%",
            color: "from-indigo-800 to-violet-800",
        },
        {
            stage: "Outputs Generated",
            value: 5640,
            width: "60%",
            color: "from-indigo-700 to-violet-700",
        },
        {
            stage: "Reports Exported",
            value: 4210,
            width: "45%",
            color: "from-indigo-600 to-violet-600",

        },
        {
            stage: "Shared with Team",
            value: 3120,
            width: "30%",
            color: "from-indigo-500 to-violet-500"
        }
    ]
    return (
        <section className="bg-white border border-slate-200 p-8 relative shadow-sm rounded-4xl">

            {/* Top Right Glow */}
            <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-indigo-100 blur-3xl opacity-70" />
            {/* Bottom Left Glow */}
            <div className="absolute -left-24 -bottom-24 h-72 w-72 rounded-full bg-violet-100 blur-3xl opacity-60" />

            {/*Headers*/}
            <div className="relative z-10">
                <div className="mb-10">
                    <h2 className="font-bold text-slate-900 text-3xl">Workflow Conversion Funnel</h2>
                    <p className="text-slate-500 mt-2">Understand how userd move through your AI workflow pipeline</p>
                </div>

                <div className="space-y-3">
                    {funnelData.map((item, index) => {
                        const conversion =
                            index === 0
                                ? 100
                                : Math.round(
                                    (item.value / funnelData[index - 1].value) * 100
                                );

                        const growth = ["+18%", "+12%", "+9%", "+6%", "+3%"];

                        return (
                            <div key={item.stage}>
                                {/* Funnel Card */}
                                <div
                                    style={{ width: item.width }}
                                    className={`
            group
            relative
            mx-auto
            overflow-hidden
            rounded-[28px]
            bg-linear-to-r
            ${item.color}
            p-6
            shadow-lg
            border
            border-white/20
            transition-all
            duration-300
            hover:scale-[1.02]
            hover:shadow-2xl
            hover:shadow-indigo-500/20
          `}
                                >
                                    {/* Hover Glow */}
                                    <div className="absolute inset-0 bg-white/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                                    <div className="relative z-10 flex items-center justify-between">
                                        {/* Left Side */}
                                        <div>
                                            <div className="mb-3 flex items-center gap-2">
                                                <div className="h-2 w-2 rounded-full bg-white" />

                                                <span className="text-xs text-white/80">
                                                    Stage {index + 1}
                                                </span>
                                            </div>

                                            <div className="mb-3 inline-flex rounded-full bg-white/20 px-3 py-1 text-xs text-white">
                                                {growth[index]} this month
                                            </div>

                                            <h3 className="text-xl font-semibold text-white">
                                                {item.stage}
                                            </h3>
                                        </div>

                                        {/* Right Side */}
                                        <div className="text-right">
                                            <p className="text-3xl font-bold text-white">
                                                {item.value.toLocaleString()}
                                            </p>

                                            <p className="text-sm text-white/80">
                                                Users
                                            </p>

                                            <p className="mt-1 text-xs text-white/70">
                                                {conversion}% conversion
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Connector Line */}
                                {index !== funnelData.length - 1 && (
                                    <div className="flex justify-center py-2">
                                        <div className="h-8 w-px bg-slate-300" />
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    )
}
