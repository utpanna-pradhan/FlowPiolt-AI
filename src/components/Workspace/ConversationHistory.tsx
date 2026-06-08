import {MessageSquare , Clock3 , ArrowRight} from "lucide-react"

export default function ConversationHistory() {
    const conversations=[
        {
            title:"Product Launch Strategy",
            message:24,
            updated:"5 mins ago",
        },
        {
            title:"Marketing Campaign Ideas" ,
            message:11,
            updated:"Yesterday",
        },
        {
            title:"Meeting Summary Generator",
            message:18,
            updated:"2 days ago",
        },
        {
            title:"SEO Blog PLanning",
            message:32,
            updated:"Last week",
        },
    ];
  return (
   <section className="relative bg-white border border-slate-200 shadow-sm p-8 rounded-4xl ">

      { /*Background Glow */}
             <div className="absolute -top-20 -right-20 h-60 w-60 rounded-full bg-indigo-100 blur-3xl opacity-60" />
            <div className="absolute -bottom-20 -left-20 h-60 w-60 rounded-full bg-indigo-100 blur-3xl opacity-60" />
        {/*Header*/}
        <div className="relative z-10 mb-6 flex items-center justify-between">
            <div>
                <h2 className="text-2xl font-bold text-slate-900">Conversation History</h2>
                <p className="mt-1 text-slate-500">Revisit previous AI discussions and continue where you left off.</p>
            </div>
            <button className="text-sm font-medium text-indigo-600 hover:text-indigo-700">View All</button>
        </div>

        {/*Conversations*/}
        <div className="space-y-4">
            {conversations.map((convo)=>(
                <button key={convo.title} className="group w-full rounded-3xl border border-slate-200 bg-white p-5 text-left transition-all duration-300 hover:-translate-y-1 hover:border-indigo-100 hover:shadow-lg">
                    <div className="flex items-center justify-between">
                        {/*left*/}
                        <div className="flex items-center gap-4">
                            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-50 text-indigo-600">
                                <MessageSquare size={24}/>
                            </div>
                            <div>
                                <h3 className="font-semibold text-slate-900">
                                    {convo.title}
                                </h3>
                                <div className="mt-2 flex flex-wrap items-center gap-3 text-sm text-slate-500">
                                    <span>
                                        {convo.message} Messages
                                    </span>
                                    <span>•</span>
                                    <div className="flex items-center gap-1">
                                        <Clock3 size={14}/>
                                        {convo.updated}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/*right*/}
                        <ArrowRight size={18} className="text-slate-400 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-indigo-600'"/>
                    </div>
                </button>
            ))}
        </div>

   </section>
  )
}
