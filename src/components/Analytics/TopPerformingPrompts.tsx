
export default function TopPerformingPrompts() {
    const prompts = [
        {
            title: "Blog Generator",
            score: 98,
            usage: 4200,
            conversion: 92,
        },
        {
            title: "Marketing Copy",
            score: 91,
            usage: 3100,
            conversion: 87,
        },
        {
            title: "Email Campaign",
            score: 84,
            usage: 2400,
            conversion: 79,
        },
        {
            title: "Meeting Summary",
            score: 77,
            usage: 1800,
            conversion: 73,
        },
    ];
    const champion = prompts[0];
    const runnerUps = prompts.slice(1);
    return (
        <section className="bg-white border border-slate-200 rounded-4xl p-8 shadow-sm relative overflow-hidden">
            {/* Glow Effects */}
            <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-indigo-100 blur-3xl opacity-70" />

            <div className="absolute -left-24 -bottom-24 h-72 w-72 rounded-full bg-violet-100 blur-3xl opacity-60" />

            <div className="relative z-10">

                {/*Header*/}
                <div className="mb-10">
                    <h2 className="text-3xl font-bold text-slate-900">Top Prompts </h2>
                    <p className="mt-2 text-slate-500">Discover which AI prompts dominate your workspace performance.</p>
                </div>

                {/*Champion*/}
                <div className="mb-10 rounded-4xl border border-indigo-100 bg-linear-to-br from-indigo-50 to-violet-50 p-10">
                    <div className="mb-4 text-center text-6xl"> 👑</div>
                    <p className="text-center text-sm font-semibold uppercase tracking-widest text-indigo-600">Champion Prompt</p>
                    <h3 className="mt-3 text-center text-4xl font-bold text-slate-900">
                        {champion.title}
                    </h3>
                    <div className="mt-4 flex justify-center">
                        <span className="rounded-full bg-indigo-100 px-4 py-2 text-sm font-medium text-indigo-700">
                            Most Used Prompt This Month
                        </span>
                    </div>
                    <p className="mt-4 text-center text-6xl font-bold text-indigo-600">
                        {champion.score}
                    </p>
                    <p className="text-center text-slate-500">
                        Performance Score
                    </p>
                    <div className="mt-8 grid gap-5 md:grid-cols-2">
                        <div className="rounded-3xl bg-white p-5 shadow-sm">
                            <p className="text-sm text-slate-500">Total Usage</p>
                            <h4 className="mt-2 text-3xl font-bold text-slate-900">{champion.usage.toLocaleString()}</h4>
                        </div>
                        <div className="rounded-3xl bg-white p-5 shadow-sm">
                            <p className="text-sm text-slate-500">
                                Conversion Rate
                            </p>
                            <h4 className="mt-2 text-3xl font-bold text-green-600">
                                {champion.conversion}%
                            </h4>
                        </div>
                        <div className="rounded-3xl bg-white p-5 shadow-sm">
                            <p className="text-sm text-slate-500">
                                Growth
                            </p>
                            <h4 className="mt-2 text-3xl font-bold text-indigo-600">
                                +18%
                            </h4>
                        </div>
                    </div>
                </div>

                {/*Runner Ups*/}
                <div>
                    <h3 className="mb-6 text-xl font-semibold text-slate-900">Runner Ups</h3>
                    <div className="space-y-6">
                        {runnerUps.map((prompt, index) => (
                            <div key={prompt.title}>
                                <div className="mb-2 flex items-center justify-between">
                                    <div>
                                        <span className="mr-3 font-bold text-indigo-600">
                                            #{index + 2}
                                        </span>
                                        <span className="font-medium text-slate-900">
                                            {prompt.title}

                                        </span>

                                    </div>

                                    <span className="font-bold text-slate-900">
                                        {prompt.score}
                                    </span>
                                </div>
                                <div className="h-4 overflow-hidden rounded-full bg-slate-100">
                                    <div style={{ width: `${prompt.score}%` }} className="h-full rounded-full bg-linear-to-r from-indigo-500 to-violet-500" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>


                {/*AI Insight*/}
                <div className="mt-10 rounded-[28px] border border-indigo-100 bg-indigo-50 p-6">
                    <h3 className="text-lg font-semibold text-slate-900">
                        AI Insight
                    </h3>
                    <p className="mt-2 text-slate-600">💡 Blog Generator accounts for 38% of total workspace activity.
                        Teams using this prompt show a 17% higher completion rate than average workflows.
                    </p>
                </div>
            </div>
        </section>
    )
}
