import { useState } from "react"
import { Sparkles } from "lucide-react";

export default function AssistantWidget() {
    const suggestions=[
        "Generate weekly report",
        "Summarize project progress",
        "Create marketing copy",
        "Suggest workflow improvments",
    ];
    const [prompt,setPrompt] = useState("")
  return (
    <section className="rounded-4xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="mb-5">
            <h2 className="flex items-center gap-2 text-xl font-semibold text-slate-900">
                <Sparkles className="h-5 w-5 text-indigo-600"/>
                AI Assistant</h2>
            <p className="text-sm text-slate-500">Ask AI anything about your workspace.</p>
           
        </div>
         <textarea value={prompt} onChange={(e)=>setPrompt(e.target.value)} placeholder="Ask AI anything..." 
            className="h-32 w-full rounded-2xl border border-slate-200 p-4 outline-none mb-4" />

            <div className="flex flex-wrap gap-2">
                {suggestions.map((item)=>(
                    <button key={item} onClick={()=>setPrompt(item)} className="rounded-full bg-slate-100 px-3 py-2 text-xs text-slate-600 hover:bg-indigo-50 hover:text-indigo-600 m-1">
                        {item}
                    </button>
                ))}
                
            </div>
            {/* <button className="mt-5 w-full rounded-2xl bg-indigo-600 px-4 py-3 font-medium text-white transition-all duration-300 hover:bg-indigo-700 hober:shadow-lg">Generate Response</button> */}

            <div className="mt-5 flex items-center justify-between">
                <span className="text-sm text-slate-400">AI powered assistant</span>
                <button className=" rounded-2xl bg-indigo-600 px-4 py-3 font-medium text-white transition-all duration-300 hover:bg-indigo-700 hober:shadow-lg">Generate Response</button>
            </div>
    </section>
  )
}
