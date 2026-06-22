import { Sparkles, ArrowUp, ArrowDown, Coins } from "lucide-react"

export default function CreditFlow() {
  const orbit = [
    {
      label: "Purchased",
      value: "24k",
      position: "top-[8%] left-1/2 -translate-x-1/2",
      color: "bg-indigo-600",
      icon: ArrowUp,
    },
    {
      label: "Consumed",
      value: "18k",
      position: "left-[8%] top-1/2 -translate-y-1/2",
      color: "bg-rose-500",
      icon: ArrowDown,
    },
    {
      label: "Saved",
      value: "4.8k",
      position: "right-[8%] top-1/2 translate-y-1/2",
      color: "bg-emerald-500",
      icon: Coins,
    },
    {
      label: "Forecast",
      value: "31k",
      position: "bottom-[8%] left-1/2 -translate-x-1/2",
      color: "bg-violet-500",
      icon: Sparkles,
    },
  ];
  return (
    <section className="bg-white rounded-4xl p-8 shadow-sm relative overflow-hidden mt-8">
      {/*Glow*/}
      <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-indigo-100 blur-3xl opacity-70" />
      <div className="absolute -left-24 -bottom-24 h-72 w-72 bg-indigo-100 rounded-full blur-3xl opacity-70" />

      <div className="relative z-10">

        {/*Header*/}
        <div className="mb-14">
          <div className="inline-flex rounded-full bg-indigo-50 px-4 py-2 text-sm font-semibold text-indigo-600 gap-3">
            <Sparkles size={16} /> Credit Flow Orbit
          </div>
          <h2 className="mt-5 text-4xl text-slate-900 font-bold">
            Track how credits move
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-slate-500">
            Purchased, consumed and optimized credits in one orbit.
          </p>
        </div>

        {/*Orbit*/}
        {/*Orbit*/}

        <div className="flex justify-center">

          <div className="relative h-190 w-190">

            {/* Ambient Glow */}

            <div className="absolute left-1/2 top-1/2 h-130 w-1130
-translate-x-1/2 -translate-y-1/2
rounded-full
bg-indigo-100
blur-[140px]
opacity-60"/>

            {/* Ring */}

            <div className="absolute inset-20 rounded-full border-30 border-white shadow-[inset_0_0_80px_rgba(99,102,241,0.08)]" />

            <div className="absolute inset-37.5 rounded-full border border-indigo-100" />

            <div className="absolute inset-55 rounded-full border border-indigo-50" />

            {/* Center */}

            <div
              className="
absolute
left-1/2
top-1/2
h-70
w-70
-translate-x-1/2
-translate-y-1/2
rounded-full
bg-white/70
backdrop-blur-3xl
border
border-white
shadow-[0_30px_80px_rgba(99,102,241,0.25)]
"
            >

              <div className="absolute inset-6 rounded-full bg-linear-to-br from-indigo-600 to-violet-600" />

              <div className="relative flex h-full flex-col items-center justify-center text-white">

                <p className="uppercase tracking-[0.4em] text-xs">

                  AVAILABLE

                </p>

                <h2 className="mt-3 text-8xl font-bold">

                  72

                </h2>

                <p className="mt-2 text-lg">

                  Credits Left

                </p>

              </div>

            </div>

            {/* Orbit */}

            {orbit.map((item) => {

              const Icon = item.icon

              return (

                <div
                  key={item.label}
                  className={`absolute ${item.position}`}
                >

                  <div
                    className="
group
relative
"
                  >

                    {/* Connector */}

                    <div className="
absolute
left-1/2
top-1/2
h-16
w-px
bg-linear-to-b
from-indigo-300
to-transparent
"/>

                    {/* Node */}

                    <div
                      className={`
relative
h-36
w-36
rounded-full
${item.color}
shadow-[0_20px_60px_rgba(0,0,0,0.2)]
border
border-white/30
backdrop-blur-xl
flex
flex-col
items-center
justify-center
text-white
transition
duration-500
group-hover:scale-110
group-hover:-translate-y-2
`}
                    >

                      <div className="
absolute
inset-2
rounded-full
border
border-white/20
"/>

                      <Icon size={30} />

                      <h3 className="mt-3 text-4xl font-bold">

                        {item.value}

                      </h3>

                    </div>

                    <p className="mt-5 text-center text-sm font-semibold text-slate-700">

                      {item.label}

                    </p>

                  </div>

                </div>

              )

            })}

          </div>

        </div>

        {/*Footer*/}
        <div className="mt-12 rounded-4xl bg-indigo-50 p-8">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-indigo-600">
                AI Recommendation
              </p>
              <h3 className="mt-2 text-3xl font-bold text-slate-900">
                Reduce exports to save 11%
              </h3>
            </div>
            <div className="text-6xl">
              ✨
            </div>
          </div>
        </div>

      </div>

    </section>
  )
}
