import { Wallet ,  Receipt , ArrowUpRight , ChevronRight , Check} from "lucide-react"

export default function BillingPreference() {
    const items = [
        {
            label:"Billing Cycle",
            value:"Monthly",
        },
        {
            label:"Invoice Delivery",
            value:"PDF + Email ",

        },
        {
            label:"Default Payment",
            value:"Visa .... 4721",
        },
    ];
  return (
   <section className="p-8 bg-white overflow-hidden rounded-4xl border border-slate-200 shadow-sm mt-8 relative">

    <div className="absolute bg-indigo-100 w-72 h-72 -right-24 -top-24 opacity-70 blur-3xl"/>
    <div className="absolute bg-violet-100 w-72 h-72  -left-24 -bottom-24 blur-3xl opacity-70"/>

    <div className="relative z-10">
        {/*Header*/}
        <div>

        </div>

        {/*Main*/}
        <div className="grid xl:grid-cols-[280px_1fr_380px] gap-3">
            {/*Siderbar*/}
            <aside className="border-r xl:border-b-0 border-slate-200 p-8">
                <div className="mb-14">
                    <div className="flex w-14 h-14 items-center justify-center rounded-3xl bg-slate-950 text-white">
                        <Wallet />
                    </div>
                    <h2 className="mt-8 text-4xl font-bold">
                        Billing
                    </h2>
                    <p className="mt-3 text-slate-500">
                        Configure payment behavior 
                    </p>
                </div>
                <div className="space-y-2">
                    {
                        [
                            "Overview",
                            "Methods",
                            "Invoices",
                            "Renewal",
                            "Limits",
                        ].map((item,index)=>(
                            <button key={item} className=
                            {`w-full rounded-3xl px-6 py-5 text-left transition ${index === 0 ? "bg-slate-950 text-white" : "hover:bg-white"}`}>
                                {item}

                            </button>
                        ))
                    }
                </div>
            </aside>
            {/*Center*/}
            <div className="p-8">
                    <div className="flex items-center justify-between ">
                        <div>
                            <p className="text-slate-400">
                                BILLING CONTROL
                            </p>
                            <h2 className="mt-3 text-5xl font-bold">
                                Preferences
                            </h2>
                        </div>
                        <button className="rounded-full bg-slate-950 px-8 py-4 text-white shrink-0 font-medium">
                            Save
                        </button>

                    </div>
                    <div className="mt-10 space-y-4">
                        {items.map((item)=>(
                            <button key={item.label} className="group flex w-full items-center justify-between rounded-4xl border border-slate-200 bg-white px-8 py-7 hover:shadow-lg">
                                <div>
                                    <p className="text-sm text-slate-400">
                                        {item.label}
                                    </p>
                                    <h3 className="mt-3 text-2xl font-semibold">
                                        {item.value}
                                    </h3>
                                </div>
                                <ChevronRight className="transition group-hover:translate-x-1"/>

                            </button>
                        ))}
                    </div>
                    <div className="mt-10 rounded-[36px] bg-slate-950 p-8 text-white">
                        <p className="text-white/50">
                            Automation
                        </p>
                        <div className="mt-6 flex items-center justify-between">
                            <div>
                                <h3 className="text-4xl font-bold">
                                    Smart Billing
                                </h3>
                                <p className="mt-2 text-white/60">
                                    Auto optimize payment routing
                                </p>
                            </div>
                            <Check size={40}/>
                        </div>
                    </div>
            </div>
            <aside className="border-t xl:border-t-0  xl:border-l  border-slate-200 p-8">
                <div className="sticky top-8 rounded-[36px] border border-slate-200 bg-linear-to-b from-white to-slate-50 p-8 shadow-[0_30px_90px_rgba(0,0,0,0.5)]">
                    <div className="flex items-center gap-3">
                        <Receipt />
                        Invoice Preview
                    </div>
                    <div className="mt-10">
                        <div className="flex justify-between">
                            <span className="text-slate-400">
                                Plan
                            </span>
                            <span>
                                Pro Annual
                            </span>

                        </div>
                        <div className="mt-6 flex justify-between">
                            <span className="text-slate-400">
                                Renewal
                            </span>
                            <span>
                                21 June
                            </span>
                        </div>
                        <div className="mt-6 flex justify-between">
                            <span className="text-slate-400">
                                Amount
                            </span>
                            <span>
                               ₹ 18,420
                            </span>
                        </div>

                    </div>
                    <button className="mt-12 flex items-center gap-3 rounded-full bg-slate-950 px-6 py-4 text-white">
                        Open Invoice
                        <ArrowUpRight />
                    </button>
                </div>
            </aside>
        </div>


    </div>

   </section>
  )
}
