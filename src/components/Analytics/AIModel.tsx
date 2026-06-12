import { Trophy} from "lucide-react"

export default function AIModel() {
  const models = [
    {
      name: "GPT-4o",
      accuracy: 96,
      spped: 88,
      cost: 82,
      requests: "12.4k",
      winner: true,
    },
    {
      name: "Claude 3.5",
      accuracy: 94,
      speed: 92,
      cost: 90,
      requests: "10.8k",
      winner: false,
    },
  ];
  return (
    <section className="relative overflow-hidden rounded-4xl p-8 shadow-sm border border-slate-200">

      <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-indigo-100 blur-3xl opacity-70" />
      <div className="absolute -left-24 -bottom-24 h-72 w-72 rounded-full bg-violet-100 blur-3xl opacity-60" />

      <div className="relative z-10">

        {/*Header*/}
        <div className="mb-12">
            <h2 className="text-3xl text-slate-900 font-bold">AI Model</h2>
            <p className="mt-2 text-slate-500">
              Compare performance between your most-used AI models.
            </p>
        </div>

        {/*Models*/}
        <div className="grid gap-8 lg:grid-cols-3">

        {/*left*/}
        <div className="rounded-4xl border border-indigo-100 bg-linear-to-br from-indigo-50 to-white p-8 ">
              <div className="mb-6 flex items-center justify-between">
                  <h3 className="text-2xl font-bold text-slate-900">{models[0].name}</h3>
                  <Trophy  className="text-indigo-600"/>
              </div>

              <div className="space-y-5">
                <div>
                    <p className="mb-2 text-sm text-slate-500">Accuracy</p>
                    <div className="h-3 rounded-full bg-slate-100">
                      <div className="h-full rounded-full bg-indigo-600 " style={{width:`${models[0].accuracy}%`}}/>
                    </div>
                </div>
                <div>
                  <p className="mb-2 text-sm text-slate-500">Speed</p>
                  <div className="h-3 rounded-full bg-violet-500" style={{width:`${models[0].spped}%`}}>
                    <div />
                  </div>
                </div>
                <div>
                  <p className="mb-2 text-sm text-slate-500">
                    Cost Efficiency
                  </p>
                  <div className="h-3 rounded-full bg-slate-100">
                    <div className="h-full bg-green-500 rounded-full"
                    style={{width:`${models[0].cost}%`}}/>
                  </div>
                </div>
              </div>
        </div>

        {/*Center*/}
        <div className="flex flex-col items-center justify-center">
          <div className="rounded-full bg-indigo-600 px-8 py-6 text-3xl font-bol text-white shadow-xl">VS</div>
          <div className="mt-6 rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700">
            GPT-4o Leads
          </div>
          <p className="mt-4 max-w-xs text-center text-sm text-slate-500">
            GPT-4o currently delivers the highest overall performance score.
          </p>
        </div>

        {/*Right*/}
        <div className="rounded-4xl border border-violet-100 bg-linear-to-br from-violet-50 to-white p-8">
          <h3 className="mb-6 text-2xl font-bold text-slate-900">
            {models[1].name}
          </h3>
          <div className="space-y-5">

            <div>
              <p className="mb-2 text-sm text-slate-500">Accuracy</p>
              <div className="h-3 rounded-full bg-slate-100">
                <div style={{width:`${models[1].accuracy}%`}} className="bg-indigo-600 h-full rounded-full"/>
              </div>
            </div>

            <div>
              <p className="mb-2 text-sm text-slate-500">Speed</p>
              <div className="h-3 rounded-full bg-slate-100">
                <div style={{width:`${models[1].speed}%`}} className="bg-violet-500 h-full rounded-full"/>
              </div>
            </div>

            <div>
              <p className="mt-2 text-slate-500">Cost Efficiency</p>
              <div className="h-3 rounded-full bg-slate-100">
                <div style={{width:`${models[1].cost}%`}} className="h-full rounded-full bg-green-500"/>
              </div>
            </div>
          </div>
        </div>

        </div>
      </div>


    </section>
  )
}
