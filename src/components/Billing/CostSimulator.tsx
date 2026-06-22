"use client";

import { useState } from "react";
import {
Sparkles,
ArrowUpRight,
Shield,
Zap,
TrendingUp,
Activity
} from "lucide-react";

export default function CostSimulator() {

const [load,setLoad]=useState(64);

const spend=
Math.round(
18420+
load*240
);

const savings=
Math.round(
spend*0.14
);

const health=
100-
Math.floor(
load*0.4
);

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

{/* Background */}

<div
className="
absolute
inset-0
opacity-[0.03]
bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)]
bg-size[42px_42px]
"
/>

<div
className="
absolute
-right-24
-top-24
h-72
w-72
rounded-full
bg-indigo-100
blur-3xl
opacity-70
"
/>

<div
className="
absolute
-left-24
-bottom-24
h-72
w-72
rounded-full
bg-violet-100
blur-3xl
opacity-70
"
/>

<div className="relative z-10">

{/* Header */}

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

AI Cost Command Table

</div>

<h2
className="
mt-6
max-w-4xl
text-5xl
font-bold
leading-tight
tracking-tight
text-slate-900
"
>
Control future spending
before it becomes billing
</h2>

<p
className="
mt-5
max-w-2xl
text-lg
leading-relaxed
text-slate-500
"
>
AI continuously simulates usage pressure
and predicts billing outcomes.
</p>

</div>


<div
className="
grid
gap-8
xl:grid-cols-[0.9fr_1.2fr_0.9fr]
"
>

{/* LEFT */}

<div className="space-y-6">

<div
className="
rounded-[34px]
bg-slate-900
p-8
text-white
"
>

<p className="text-white/60">
Current Spend
</p>

<h3
className="
mt-4
text-6xl
font-bold
"
>
₹18.4k
</h3>

</div>


<div
className="
rounded-[34px]
border
border-slate-200
bg-white
p-8
"
>

<div className="flex items-center gap-3">

<Activity/>

System Health

</div>

<h3
className="
mt-5
text-5xl
font-bold
text-emerald-600
"
>
{health}
%

</h3>

</div>

</div>


{/* CENTER */}

<div
className="
flex
flex-col
items-center
justify-center
"
>

<div
className="
relative
flex
h-107.5
w-107.5
max-w-full
items-center
justify-center
"
>

<div className="absolute inset-0 rounded-full border border-indigo-100"/>

<div className="absolute inset-[10%] rounded-full border border-violet-100"/>

<div className="absolute inset-[22%] rounded-full border border-indigo-200"/>


<div
className="
absolute
inset-[30%]
rounded-full
bg-indigo-300
blur-[120px]
opacity-20
"
/>


<div
style={{
transform:
`scale(${1+load/300})`
}}
className="
relative
flex
h-60
w-60
items-center
justify-center
rounded-full
bg-linear-to-br
from-indigo-600
via-violet-600
to-fuchsia-600
text-white
transition
duration-700
shadow-[0_0_150px_rgba(99,102,241,.35)]
"
>

<div>

<p className="text-center text-sm">
Usage Pressure
</p>

<h2
className="
mt-3
text-center
text-7xl
font-bold
"
>
{load}
%

</h2>

</div>

</div>


<div className="absolute -bottom-14 w-full">

<input
type="range"
value={load}
min="20"
max="100"
onChange={(e)=>
setLoad(
Number(e.target.value)
)
}
className="
w-full
accent-indigo-600
"
/>

<div className="mt-3 flex justify-between text-xs text-slate-400">

<span>Low</span>

<span>Balanced</span>

<span>High</span>

</div>

</div>

</div>

</div>


{/* RIGHT */}

<div className="space-y-6">

<div
className="
rounded-[34px]
bg-linear-to-br
from-indigo-600
to-violet-600
p-8
text-white
"
>

<div className="flex items-center gap-3">

<TrendingUp/>

Projected Bill

</div>

<h2
className="
mt-6
text-6xl
font-bold
"
>
₹
{spend.toLocaleString()}

</h2>

<p className="mt-3 text-white/70">

Based on current pressure

</p>

</div>


<div
className="
rounded-[34px]
border
border-indigo-100
bg-indigo-50
p-8
"
>

<div className="flex items-center gap-3">

<Shield/>

Preventable Waste

</div>

<h3
className="
mt-5
text-5xl
font-bold
text-emerald-600
"
>
₹
{savings}

</h3>

</div>

</div>

</div>


<div className="mt-16">

<button
className="
group
w-full
rounded-4xl
bg-slate-900
px-8
py-7
font-semibold
text-white
transition
hover:-translate-y-1
"
>

<div
className="
flex
items-center
justify-center
gap-3
"
>

<Zap/>

Run Optimization

<ArrowUpRight
className="
transition
group-hover:rotate-45
"
/>

</div>

</button>

</div>

</div>

</section>

)

}