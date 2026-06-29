import {
Shield,
Monitor,
KeyRound,
ChevronRight,
Check
}
from "lucide-react"

export default function SecurityHub(){

const sessions=[

{
device:"MacBook Pro",
time:"Active now",
safe:true
},

{
device:"iPhone",
time:"2 hours ago",
safe:true
},

{
device:"Unknown Login",
time:"Blocked",
safe:false
}

]

return(

<section
className="
mt-8
overflow-hidden
rounded-[44px]
border
border-slate-200
bg-[#FAFAFA]
"
>

<div className="grid xl:grid-cols-[1.1fr_0.9fr]">

{/* LEFT */}

<div className="p-10">

<div
className="
inline-flex
rounded-full
bg-black
px-5
py-2
text-sm
font-medium
text-white
"
>

Security Hub

</div>

<h2
className="
mt-8
max-w-3xl
text-6xl
font-bold
leading-none
tracking-tight
text-slate-950
"
>

Trust should feel quiet.

</h2>

<p
className="
mt-5
max-w-xl
text-lg
text-slate-500
"
>

Identity, sessions and protection managed from one layer.

</p>


<div
className="
mt-16
rounded-[40px]
border
border-slate-200
bg-white
p-10
"
>

<div className="flex justify-between">

<div>

<p className="text-sm text-slate-400">

Protection Layer

</p>

<h3
className="
mt-3
text-5xl
font-bold
"
>

Level 04

</h3>

</div>

<div
className="
flex
h-20
w-20
items-center
justify-center
rounded-full
bg-slate-950
text-white
"
>

<Shield size={32}/>

</div>

</div>


<div
className="
mt-10
space-y-5
"
>

<div className="flex justify-between">

<span>Multi Factor</span>

<Check/>

</div>

<div className="flex justify-between">

<span>Device Verification</span>

<Check/>

</div>

<div className="flex justify-between">

<span>Biometric Access</span>

<Check/>

</div>

</div>

</div>

</div>



{/* RIGHT */}

<div
className="
bg-slate-950
p-10
text-white
"
>

<p className="text-white/40">

SESSION ACTIVITY

</p>


<div className="mt-12 space-y-5">

{sessions.map((item,index)=>(

<div
key={index}
className="
rounded-[34px]
border
border-white/10
bg-white/5
p-7
"
>

<div
className="
flex
items-start
justify-between
"
>

<div>

<div
className="
flex
items-center
gap-4
"
>

<div
className="
flex
h-14
w-14
items-center
justify-center
rounded-3xl
bg-white/10
"
>

{item.safe
?

<Monitor/>

:

<KeyRound/>

}

</div>

<div>

<h3
className="
text-xl
font-semibold
"
>

{item.device}

</h3>

<p
className="
mt-1
text-white/50
"
>

{item.time}

</p>

</div>

</div>

</div>


<div
className={`
rounded-full
px-4
py-2
text-sm
font-medium
${
item.safe
?
"bg-emerald-500/20 text-emerald-300"
:
"bg-rose-500/20 text-rose-300"
}
`}
>

{item.safe
?
"Verified"
:
"Blocked"}

</div>

</div>

</div>

))}

</div>


<button
className="
mt-10
flex
w-full
items-center
justify-between
rounded-[30px]
bg-white
px-8
py-6
font-semibold
text-slate-950
"
>

Open Security Report

<ChevronRight/>

</button>

</div>

</div>

</section>

)

}