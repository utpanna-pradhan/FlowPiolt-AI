import { Calendar, Sparkles, Coins, TrendingUp, ArrowRight } from "lucide-react"

export default function BillingTimeline() {
    const timeline = [
        {
            title: "Cycle Started",
            date: "01 June",
            amount: "₹12,000",
            icon: Calendar,
            color: "from-indigo-600 to-violet-600",
        },
        {
            title: "Usage Spike",
            date: "08 June",
            amount: "+₹3,420",
            icon: TrendingUp,
            color: "from-violet-600 to-fuchsia-600",
        },
        {
            title: "Credits Optimized",
            date: "12 June",
            amount: "-₹1,200",
            icon: Coins,
            color: "from-emerald-500 to-teal-500",
        },
        {
            title: "Renewal Forecast",
            date: "21 June",
            amount: "₹18,420",
            icon: Sparkles,
            color: "from-blue-600 to-cyan-600",
        },
    ];
    return (
        <section className="p-8 bg-white shadow-sm relative overflow-hidden border border-slate-200 mt-8 rounded-4xl">

            {/*Glow*/}
            <div className="absolute -right-24 -top-24 rounded-full bg-indigo-100 h-72 w-72 opacity-70 blur-3xl" />
            <div className="absolute -bottom-24 -left-24 rounded-full bg-indigo-100 w-72 h-72 opacity-70 blur-3xl " />

            <div className="relative z-10">
                {/*Header*/}
                <div className="mb-16">
                    <div className="inline-flex items-center gap-2 rounded-full bg-indigo-50 text-indigo-600 px-4 py-2 text-sm font-semibold">
                        <Sparkles size={16} />
                        Billing Timeline
                    </div>
                    <h2 className="mt-5 max-w-3xl text-5xl font-bold tracking-tight text-slate-900">
                        Watch spending evolve across your billing cycle
                    </h2>
                    <p className="mt-4 max-w-2xl text-slate-500 leading-relaxed">
                        Follow subscription events , spikes and optmitization opportunities.
                    </p>
                </div>

                {/*vertical rails*/}
                <div className="max-w-5xl relative  mx-auto">
                   <div
className="
absolute
left-1/2
top-0
bottom-0
w-0.5
-translate-x-1/2
bg-linear-to-b
from-indigo-200
via-violet-200
to-transparent
"
/>
                    <div className="space-y-20">
                       {timeline.map((item,index)=>{

const Icon=item.icon

return(

<div
key={item.title}
className={`
relative
flex
${index%2===0
?
"justify-start"
:
"justify-end"
}
`}
>

{/* CENTER NODE */}

<div
className="
absolute
left-1/2
top-1/2
z-20
-translate-x-1/2
-translate-y-1/2
"
>

<div className="relative">

<div className="
absolute
inset-0
rounded-full
bg-indigo-300
blur-2xl
opacity-40
"/>

<div
className={`
relative
flex
h-18
w-18
items-center
justify-center
rounded-full
bg-linear-to-br
${item.color}
shadow-[0_20px_60px_rgba(99,102,241,0.35)]
`}
>

<Icon
size={26}
className="text-white"
/>

</div>

</div>

</div>

{/* CONTENT */}

<div
className="
w-[44%]
rounded-[34px]
border
border-slate-100
bg-white/80
backdrop-blur-xl
p-8
shadow-[0_20px_80px_rgba(0,0,0,0.08)]
transition-all
duration-500
hover:-translate-y-2
"
>

<div className="flex items-start justify-between">

<div>

<p className="
text-sm
font-semibold
text-indigo-600
">

{item.date}

</p>

<h3 className="
mt-3
text-2xl
font-bold
text-slate-900
">

{item.title}

</h3>

<p className="
mt-4
text-slate-500
">

Billing event processed

</p>

</div>

<div>

<p className="
text-3xl
font-bold
text-slate-900
">

{item.amount}

</p>

</div>

</div>

<div className="
mt-8
flex
items-center
gap-2
font-semibold
text-indigo-600
">

View Details

<ArrowRight size={18}/>

</div>

</div>

</div>

)

})}
                    </div>

                </div>

            </div>

        </section>
    )
}
