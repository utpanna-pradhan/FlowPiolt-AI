
import { Sparkles , FileText , ArrowRight , CheckCircle2 , FileSpreadsheet , FileJson  } from "lucide-react"
export default function InvoiceConverter() {
    const formats =[
        {
            label:"PDF",
            icon:FileText,
        },
        {
            label:"Excel",
            icon:FileSpreadsheet,

        },
        {
            label:"JSON",
            icon:FileJson,
        },
    ];
  return (
   <section className="relative overflow-hidden p-8 bg-white shadow-sm rounded-4xl border border-slate-200 mt-14">
     {/*Glow*/}
            <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-indigo-100 blur-3xl opacity-70" />
          
            <div className="absolute -left-24 -bottom-24 h-72 w-72 rounded-full bg-violet-100 blur-3xl opacity-60" />
    
    <div className="relative z-10">
        {/*Header*/}
        <div className="mt-4">
            <div className="inline-flex gap-2 bg-indigo-50 text-indigo-600 rounded-full px-4 py-2  items-center text-xs sm:text-sm font-semibold">
                <Sparkles size={16} />Invoice Converter
            </div>
            <h3 className="text-slate-900 tracking-tight text-3xl sm:text-4xl xl:text-5xl font-bold mt-5 max-w-4xl ">
                Transform invoices into usable data
            </h3>
            <p className="mt-4 text-slate-500 max-w-2xl text-base sm:text-lg">
                Convert raw billing files into structured formats instantly.
            </p>
        </div>

        {/*Main*/}
        <div className="mt-8 grid items-center grid-cols-1 lg:grid-cols-[1fr_160px_1fr]">
            {/*Left*/}
            <div className="rounded-4xl border border-slate-200 shadow-xl bg-white p-5 sm:p-8 "> 

                <div className="flex gap-3 mb-8 items-center">
                    <FileText className="text-indigo-600"/>
                    <h3 className="text-2xl font-bold">Incomming Invoice</h3>
                </div>

                <div className="space-y-4">
                    {
                        [
                            "Invoice #2401",
                            "Client Charges",
                            "Tax Breakdown",
                            "Payment Summary",
                        ].map((line)=>(
                        <div key={line} className="rounded-2xl p-4 bg-slate-50 text-slate-700">
                            {line}
                        </div>
                    ))
                    }
                </div>

            </div>

            {/*Center*/}
            <div className="flex flex-col items-center justify-center  sm:mt-8">
                    <div className="relative flex h-23 w-24 sm:h-32 sm:w-32 lg:w-36 lg:h-36 items-center justify-center rounded-full bg-linear-to-br from-indigo-600 to-violet-600 shadow-[0_0_100px_rgba(99,102,241,0.3)]">
                        <div className="absolute inset-3 rounded-full border border-indigo-300 animate-pulse"/>
                        <ArrowRight size={34} className="text-white"/>
                    </div>
                    <p className="mt-6 text-sm sm:text-base font-semibold text-slate-700">AI Processing</p>
            </div>

            {/*Right*/}
            <div className="rounded-4xl bg-linear-to-br from-slate-900 to-indigo-900 p-5 sm:p-8 text-white shadow-xl sm:mt-6">
                <div className="flex items-center gap-2">
                    <CheckCircle2 />
                    <h3 className="text-2xl font-bold">
                        Converted Output
                    </h3>
                </div>
                
                <div className="space-y-4 mt-10">
                    {formats.map((item)=>{
                        const Icon = item.icon
                        return(
                            <div key={item.label} className="flex flex-col sm:flex-row gap-4 sm:items-center justify-between rounded-3xl bg-white/10 p-5 backdrop-blur">
                                <div className="flex gap-3">
                                    <Icon />
                                    <span>
                                        {item.label}
                                    </span>

                                </div>
                                <span className="rounded-full bg-emerald-500/20 px-3 py-1 text-sm text-emerald-300">
                                    Ready
                                </span>
                            </div>
                        )
                    })}
                </div>
            </div>

        </div>

    </div>


   </section>
  )
}
