
export default function Welcome() {
  return (
   <section className="relative overflow-hidden rounded-4xl border border-border/50 bg-linear-to-br from-indigo-600 via-violet-600 to-cyan-500 p-8 text-white shadow-xl">
    <div className="relative z-10 flex flex-col justify-between gap-8 lg:flex-row lg:items-center">

    {/*-------Left content-------*/}
    <div className="max-w-2xl ">
        <span className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm backdrop-blur-md">
           ✨ AI Productivity Platform
        </span>
        <h1 className="mt-5 text-4xl font-bold leading-tight lg:text-5xl">
            Welcome back, <br />Utpanna 👋
        </h1>
        <p className="mt-4 max-w-xl text-base text-slate-200">
            Your AI workflows are running smoothly. Track analytics, automate tasks, and scale productivity faster.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
            <button className=" rounded-2xl bg-white px-6 py-3 font-semibold text-slate-900 transition hover:scale-105">Create Workflow</button>
            <button className="rounded-2xl border border-white/20 bg-white/10 px-6 py-3 font-semibold backdrop-blur-md transition ">
                View Analytics
            </button>
        </div>
    </div>

    {/*---------Right card--------*/}
    <div className="rounded-[28px] border border-white/20 bg-white/10 p-6 backdrop-blur-xl lg:w-85">
        <p className="text-sm text-slate-200">AI Usage</p>
        <h2 className="mt-2 text-4xl font-bold">84%</h2>
        <p className="mt-1 text-sm text-slate-300">Monthly quota used</p>

        <div className="mt-5 h-3 overfloww-hidden rounded-full bg-white/20">
            <div className="h-full w-[84%] rounded-full bg-white"></div>
        </div>

        <div className="mt-6 flex justify-between text-sm text-slate-200">
            <span>126 workflows</span>
            <span>+18% growth</span>
        </div>
    </div>
</div>


{/* Glow Effect */}
<div  className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-cyan-400/20 blur-[100px]" />

   </section>
  )
}
