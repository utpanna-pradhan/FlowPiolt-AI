import {
Sparkles,
TrendingUp,
Shield,
Zap,
ArrowUpRight
} from "lucide-react"

export default function BillingIntelligence() {

const insights=[
{
title:"Usage Increased",
text:"Export activity increased 18%",
accent:"bg-rose-500",
icon:TrendingUp,
},

{
title:"Protected Spend",
text:"Detected and prevented ₹1,420 waste",
accent:"bg-emerald-500",
icon:Shield,
},

{
title:"Optimization",
text:"Shifted execution to low-cost window",
accent:"bg-indigo-500",
icon:Zap,
},
]

return(

<section
className="
relative
mt-8
overflow-hidden
rounded-[40px]
border
border-slate-200
bg-white
p-8
shadow-sm
"
>

{/* glow */}

<div
className="
absolute
-right-24
-top-24
h-72
w-72
rounded-full
bg-indigo-100
opacity-70
blur-3xl
"
/>

<div
className="
absolute
-bottom-24
-left-24
h-72
w-72
rounded-full
bg-violet-100
opacity-70
blur-3xl
"
/>

<div className="relative z-10">

{/* header */}

<div className="mb-16">

<div
className="
inline-flex
items-center
gap-2
rounded-full
bg-indigo-50
px-5
py-2
text-sm
font-semibold
text-indigo-600
"
>

<Sparkles size={16}/>

Billing Intelligence

</div>

<h2
className="
mt-6
max-w-4xl
text-5xl
font-bold
leading-tight
text-slate-900
"
>

AI investigated your billing activity

</h2>

<p
className="
mt-4
max-w-2xl
text-lg
text-slate-500
"
>

Every cost event becomes a connected insight.

</p>

</div>



<div
className="
grid
gap-10
xl:grid-cols-[1.3fr_0.8fr]
"
>

{/* LEFT */}
{/* LEFT */}

<div
className="
relative

lg:min-h-180
min-h-auto
"
>

{/* MOBILE */}

<div className="flex flex-col gap-6 lg:hidden">

<div
className="
rounded-[30px]
bg-white
p-8
shadow-[0_20px_60px_rgba(0,0,0,.08)]
"
>

<div className="text-sm text-slate-400">
Event #201
</div>

<h3 className="mt-5 text-4xl font-bold">
₹3,420
</h3>

<p className="mt-2 text-slate-500">
Unexpected export spike
</p>

</div>


<div
className="
rounded-[30px]
bg-indigo-50
p-8
shadow-[0_20px_60px_rgba(0,0,0,.06)]
"
>

<h3 className="text-3xl font-bold">
Optimization Found
</h3>

<p className="mt-3 text-slate-600">
Move exports after 6 PM
</p>

<div
className="
mt-6
inline-flex
rounded-full
bg-white
px-5
py-3
font-semibold
"
>

Save ₹1,920

</div>

</div>


<div
className="
rounded-[30px]
bg-slate-900
p-8
text-white
shadow-[0_30px_90px_rgba(0,0,0,.18)]
"
>

<p className="text-white/50">
Final Decision
</p>

<h3 className="mt-5 text-5xl font-bold">
11%
</h3>

<p className="mt-2 text-white/70">
Projected reduction
</p>

</div>

</div>



{/* DESKTOP */}

<div className="hidden lg:block">

<div
className="
absolute
left-[28%]
top-[26%]
h-0.5
w-55
rotate-18
bg-slate-300
"
/>

<div
className="
absolute
left-[32%]
top-[58%]
h-0.5
w-60
-rotate-14
bg-slate-300
"
/>


<div
className="
absolute
left-0
top-0
w-75
-rotate-3
rounded-4xl
bg-white
p-8
shadow-[0_25px_70px_rgba(0,0,0,.08)]
"
>

<div className="text-sm text-slate-400">
Event #201
</div>

<h3 className="mt-5 text-4xl font-bold">
₹3,420
</h3>

<p className="mt-2 text-slate-500">
Unexpected export spike
</p>

</div>


<div
className="
absolute
right-0
top-45
w-[320px]
rotate-[4deg]
rounded-4xl
bg-indigo-50
p-8
shadow-[0_25px_70px_rgba(0,0,0,.06)]
"
>

<h3 className="text-3xl font-bold">
Optimization Found
</h3>

<p className="mt-3 text-slate-600">
Move exports after 6 PM
</p>

<div
className="
mt-6
inline-flex
rounded-full
bg-white
px-5
py-3
font-semibold
"
>

Save ₹1,920

</div>

</div>


<div
className="
absolute
bottom-10
left-27.5
w-85
-rotate-2
rounded-4xl
bg-slate-900
p-8
text-white
shadow-[0_40px_120px_rgba(0,0,0,.16)]
"
>

<p className="text-white/50">
Final Decision
</p>

<h3 className="mt-5 text-5xl font-bold">
11%
</h3>

<p className="mt-2 text-white/70">
Projected reduction
</p>

</div>

</div>

</div>



{/* RIGHT */}

<div
className="
rounded-[36px]
border
border-slate-200
bg-white
p-8
shadow-sm
"
>

<p
className="
text-sm
font-semibold
text-slate-400
"
>

AI REPORT

</p>

<div className="mt-10 space-y-10">

{insights.map((item)=>{

const Icon=item.icon

return(

<div
key={item.title}
className="
flex
gap-5
"
>

<div
className={`
h-14
w-14
rounded-2xl
${item.accent}
flex
items-center
justify-center
text-white
shadow-sm
`}
>

<Icon/>

</div>

<div>

<h3
className="
text-xl
font-bold
"
>

{item.title}

</h3>

<p
className="
mt-2
text-slate-500
"
>

{item.text}

</p>

</div>

</div>

)

})}

</div>


<button
className="
mt-12
flex
w-full
items-center
justify-center
gap-3
rounded-3xl
bg-slate-900
px-6
py-5
font-semibold
text-white
transition
hover:-translate-y-1
"
>

Approve Suggestions

<ArrowUpRight/>

</button>

</div>

</div>

</div>

</section>

)

}