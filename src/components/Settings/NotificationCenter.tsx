import { Bell , Mail , Smartphone , MessageSquare , Shield , Moon , ChevronRight } from "lucide-react"

export default function NotificationCenter() {
    const channels = [
        {
            title:"Email Updates",
            desc:"Billing , invoices , summaries",
            icon:Mail,
            enabled:true,
        },
        {
            title:"Push Alerts",
            desc:"Real-time activity",
            icon:Smartphone,
            enabled:true,
        },
        {
            title:"Message",
            desc:"Workspace communication",
            icon:MessageSquare,
            enabled:false,
        },
    ];
  return (
   <section className="relative overflow-hidden bg-white border border-slate-200 shadow-sm p-8 rounded-4xl">
    <div className="absolute w-72 h-72 bg-indigo-100 -top-24 -right-24 opacity-70 blur-3xl"/>
    <div  className=" absolute w-72 h-72 bg-violet-100 -left-24 -bottom-24 opacity-70 blur-3xl"/>

    <div className="z-10 relative">
        {/*Header*/}
        <div className="flex flex-col gap-10 xl:flex-row xl:items-end xl:justify-between">
            <div>
                <div className="inline-flex rounded-full px-5 py-2 text-sm font-medium bg-black text-white">
                    Notification Center
                </div>
                <h2 className="mt-8 max-w-4xl text-5xl font-bold leading-none tracking-tigher text-slate-950">
                    Control signals . Not interruption . 
                </h2>
            </div>
            <div className="rounded-4xl bg-white px-8 py-6 shadow-[0_20px_80px_rgba(0,0,0,.05)]">
                <p className="text-sm text-slate-500">
                    Current Noise Level
                </p>
                <h3 className="mt-2 text-5xl font-bold">
                    28%
                </h3>
            </div>

        </div>

        {/*Control Panel*/}
        <div className="mt-14 rounded-[44px] bg-white p-5 shadow-[0_40px_120px_rgba(0,0,0,.5)]">
            {channels.map((item)=>{
                const Icon = item.icon
                return(
                    <div key={item.title} className="group grid items-center gap-8 border-b border-slate-100 px-4 py-8 last:border-none lg:grid-cols-[120px_1fr_auto]">
                        {/*Left*/}
                        <div className="flex h-18 w-18 items-center justify-center rounded-[28px] bg-slate-100">
                            <Icon />
                        </div>
                        <div>
                            <h3 className="text-2xl font-semibold">
                            {item.title}
                        </h3>
                        <p className="mt-1 text-lg text-slate-500">
                            {item.desc}
                        </p>

                        </div>
                        <div className="flex items-center gap-6">
                            <div className="relative h-10 w-22 rounded-full bg-slate-200 p-1">
                                <div className={`absolute top-1 h-8 w-8 rounded-full bg-black transition ${item.enabled ? "left-14":"left-1"}`} />

                               

                            </div>
                            <ChevronRight className="transition group-hover:translate-x-1"/>

                        </div>
                        
                    </div>
                  
                )
            })}
        </div>

        {/*Footer*/}
        <div className="mt-8 grid gap-6 md:grid-cols-3">
            <div className="rounded-4xl bg-slate-950 p-8 text-white">
                <Bell />
                <h3 className="mt-8 text-4xl font-bold">
                    73
                </h3>
                <p className="mt-2 text-white/60">
                    Notification routed
                </p>
            </div>
            <div className="rounded-4xl bg-white p-8">
                <Shield />
                <h3 className="mt-8 text-4xl font-bold">
                    12
                </h3>
                <p className="mt-8 text-4xl font-bold">
                    Priority rules
                </p>
            </div>
            <div className="rounded-4xl bg-[#EEF2FF] p-8">
                <Moon />
                <h3 className="mt-8 text-4xl font-bold">
                    Focus
                </h3>
                <p className="mt-2 text-slate-500"> 
                    Quiet delivery active
                </p>
            </div>

        </div>

    </div>

   </section>
  )
}
