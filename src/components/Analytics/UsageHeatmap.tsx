

export default function UsageHeatmap() {
    const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
    const heatmapData = [
        {
            time: "Morning",
            values: [2, 3, 1, 4, 5, 1, 0],
        },
        {
            time: "Afternoon",
            values: [3, 4, 5, 4, 5, 2, 1],
        },
        {
            time: "Evening",
            values: [1, 3, 4, 5, 5, 4, 2],
        },
        {
            time: "Night",
            values: [0, 1, 3, 4, 5, 4, 3]
        }
    ];
    const getColor = (value: number) => {
        if (value === 0) return "bg-slate-100";
        if (value === 1) return "bg-indigo-100";
        if (value === 2) return "bg-indigo-200";
        if (value === 3) return "bg-indigo-300";
        if (value === 4) return "bg-indigo-500";
        return "bg-indigo-700"
    }
    return (
        <section className="rounded-4xl bg-white border border-slate-200 shadow-sm p-8 relative overflow-hidden">

            {/* Top Right Glow */}
            <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-indigo-100 blur-3xl opacity-70" />
            {/* Bottom Left Glow */}
            <div className="absolute -left-24 -bottom-24 h-72 w-72 rounded-full bg-violet-100 blur-3xl opacity-60" />

            <div className="relative z-10">

                {/*Header*/}
                <div className="mb-10">
                    <h2 className="text-3xl font-bold text-slate-900">AI Usage Heatmap</h2>
                    <p className="text-slate-500 mt-2">Discover when your team is most active with AI tools.</p>
                </div>

                {/*Days*/}
                {/* <div className="mb-4 ml-28.5 grid grid-cols-7 gap-3">
                    {days.map((day)=>(
                        <div key={day} className="text-center text-sm font-medium text-slate-500">
                            {day}
                        </div>
                    ))}
                </div> */}
                {/* Days Header */}
<div className="mb-4 flex items-center gap-6">
  <div className="w-24"></div>

  <div className="grid grid-cols-7 gap-10 md:gap-20">
    {days.map((day) => (
      <div
        key={day}
        className="flex h-10 w-10 items-center justify-center  font-medium text-slate-500 md:h-12 md:w-12" 
      >
        {day}
      </div>
    ))}
  </div>
</div>

                {/*Heatmap*/}
                <div className="space-y-4">
                    {heatmapData.map((row)=>(
                        <div key={row.time} className="flex items-center gap-6">
                            
                            {/*TimeLabel*/}
                            <div className="w-24 text-sm font-medium text-slate-600">
                                {row.time}
                            </div>
                            {/*Squares*/}
                            <div className="grid grid-cols-7 gap-10 md:gap-20">
                                {row.values.map((value,index)=>(
                                    <div  key={index} className={`h-10 w-10 md:h-12 md:w-12 rounded-2xl ${getColor(value)} transition-all duration-300 hover:scale-110 hover:-translate-y-1 hover:shadow-xl cursor-pointer`}/>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-12 border-t border-slate-200 pt-8">
                    <div className="grid gap-8 md:grid-cols-3">
                        <div>
                            <p className="text-sm text-slate-500">Peak Activity</p>
                            <h3 className="mt-2 text-2xl font-bold text-slate-900">Friday 7 PM</h3>
                        </div>

                        <div>
                            <p className="text-sm text-slate-500">Most Used Tool</p>
                            <h3 className="mt-2 text-2xl font-bold text-slate-900">Content Generator</h3>
                        </div>

                        <div>
                            <p className="text-sm text-slate-500">Productivity Score</p>
                            <h3 className="mt-2 text-2xl font-bold text-slate-900">92 / 100</h3>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}
