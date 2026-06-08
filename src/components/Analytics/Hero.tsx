import { TrendingUp ,Sparkles,Download,Calendar } from "lucide-react"

export default function Hero() {
  return (
    <section className="relative p-8 rounded-4xl bg-white border border-slate-200 overflow-hidden lg:p-12 shadow-sm" >

    {/* Top Right Glow */}
      <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-indigo-100 blur-3xl opacity-70" />
    {/* Bottom Left Glow */}
      <div className="absolute -left-24 -bottom-24 h-72 w-72 rounded-full bg-violet-100 blur-3xl opacity-60" />

    <div className="relative z-10 grid gap-10 lg:grid-cols-2">

    </div>
    

    </section>
  )
}
