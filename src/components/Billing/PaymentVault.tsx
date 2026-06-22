import { Sparkles, CreditCard, ShieldCheck, Lock, ChevronRight, Check } from "lucide-react"

export default function PaymentVault() {
  const card = [
    {
      name: "Primary Business",
      number: "....4821",
      expiry: "08/29",
      active: true,
    },
    {
      name: "Backup Card",
      number: "....9032",
      expiry: "11/28",
      active: false,

    },
    {
      name: "Virtual Card",
      number: "....1186",
      expiry: "01/30",
      active: false,
    },
  ];
  return (
    <section className="relative overflow-hidden p-8 bg-white border border-slate-200 shadow-sm rounded-4xl mt-8">
      {/*Glow*/}
      <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-indigo-100 blur-3xl opacity-70" />
      <div className="absolute -left-24 -bottom-24 rounded-full h-72 w-72 bg-indigo-100 blur-3xl opacity-70" />

      <div className="relative z-10">

        {/*Header*/}
        <div className="mb-14">
          <div className="inline-flex items-center px-4 py-2 bg-indigo-50 text-indigo-600 text-sm font-semibold rounded-full gap-2">
            <Sparkles size={16} />Payment Vault
          </div>
          <h2 className="text-5xl text-slate-900 font-bold tracking-tight mt-5">Secure payment infrastructure</h2>
          <p className="text-slate-500 mt-4 max-w-2xl text-lg">Store cards,manage billing acess and monitor subscription health .</p>

        </div>

        {/*Content*/}
        <div className="grid gap-8 xl:grid-cols-[1fr_320px]">
          {/*Left*/}
          <div className="h-125 relative">
          {card.map((cards,index)=>(
            <div key={cards.number} className="absolute left-0 top-0 w-full max-w-135 rounded-[40px] border border-white/70 bg-linear-to-br from-slate-900 to-indigo-900 p-8 text-white transition duration-300  hover:-translate-y-3 shadow-[0_40px_120px_rgba(0,0,0,0.18)]" style={{
              transform:`translateY(${index*70}px) rotate(${index === 0 ? -3 : index === 1 ? 2 : -2}deg)`, zIndex:card.length-index
            }}>
              <div className="flex justify-between">
                <div>
                  <p className="text-sm text-white/70">
                    {cards.name}
                  </p>
                  <h3 className="text-4xl mt-6 font-bold">
                    {cards.number}
                  </h3>
                </div>
                <CreditCard size={36}/>

              </div>

              <div className="mt-10 flex justify-between">
                <p className="text-xs text-white/70"> VALID</p>
                <p>
                  {cards.expiry}
                </p>
              </div>

              {cards.active && (
                <div className=" rounded-full bg-emerald-500/20 px-4 py-2 text-sm text-emerald-300">
                  Active
                  </div>
              )}
            </div>
          ))}
          </div>

          {/*Right*/}
          <div className="space-y-6">
            <div className="rounded-[34px] border border-slate-200 bg-slate-50 p-8">
              <div className="flex items-center gap-3">
                <ShieldCheck className="text-indigo-600"/>
                <h3 className="text-xl font-bold">Vault Security</h3>

              </div>
              <div className="mt-8 space-y-5">
                <div className="flex justify-between">
                  <span>Encryption</span>
                  <Check className="text-green-600"/>
                </div>
                <div className="flex justify-between">
                  <span >Auto Renewal</span>
                  <Check className="text-green-600"/>
                </div>
                <div className="flex justify-between">
                  <span>Fraud Monitor</span>
                  <Check className="text-green-600"/>
                </div>
              </div>

            </div>

            <div className="rounded-[34px] bg-linear-to-br from-indigo-600 to-violet-600 p-8 text-white">
                <Lock />
                <h3 className="mt-5 text-3xl font-bold">
                  Payment Health
                </h3>
                <p className="mt-3 text-white/70"> 
                  All payment systems operational
                </p>
                <button className="mt-8 flex items-center gap-2 rounded-2xl bg-white px-5 py-3 font-semibold text-indigo-700">
                  Manage Access <ChevronRight />
                </button>
            </div>

          </div>

        </div>

      </div>

    </section>
  )
}
