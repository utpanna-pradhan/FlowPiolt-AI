import { useState } from "react";
import { Sparkles, ArrowRight } from "lucide-react";

export default function AIStudio() {
    const [prompt, setPrompt] = useState("");
    const suggestions = [
        "Write a product launch plan",
        "Generate a blog outline",
        "Summarize meeting notes",
        "Create marketing strategy"
    ];
    return (
        <section className="relative overflow-hidden rounded-4xl border border-slate-200 p-6 shadow-sm bg-white">
            {/* Ambient Glow */}
            <div className="absolute -top-20 -right-20 h-60 w-60 rounded-full bg-indigo-100 blur-3xl opacity-60" />
            <div className="absolute -bottom-20 -left-20 h-60 w-60 rounded-full bg-indigo-100 blur-3xl opacity-60" />



            {/*-Header*/}
            <div className="relative z-10 mb-6">
                <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-indigo-50 px-4 py-2 text-sm font-medium text-indigo-600">
                    <Sparkles size={16} />
                    AI Studio
                </div>

                <h2 className="text-2xl font-bold text-slate-900">
                    Create with AI
                </h2>
                <p className="text-slate-500 mt-2"> Describe what you need and let AI handle the heavy lifting</p>
            </div>

            {/*Prompt box*/}
            <textarea value={prompt} onChange={(e) => setPrompt(e.target.value)} placeholder="Example : Create a product launch strategy for a new AI Saas platform..." className="min-h-45 w-full resize-none rounded-3xl border border-slate-200 bg-slate-50 p-5 text-slate-700 outline-none transition focus:border-indigo-300 focus:bg-white " />

            <div className="mt-5 flex flex-wrap gap-3">
                {suggestions.map((item) => (
                    <button key={item} onClick={() => setPrompt(item)}
                        className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-600 transition-all duration-300 hover:border-indigo-200 hover:bg-indigo-50 hover:text-indigo-600">
                        {item}
                    </button>
                ))}
            </div>

            <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <span className="text-sm text-slate-500">
                    {prompt.length}/1000 Characters
                </span>
                <button className="flex items-center gap-2 rounded-2xl bg-indigo-600 px-6 py-3 font-medium text-white transition-all duration-300 hover:bg-indigo-700 hover:shadow-lg">
                    Generate
                    <ArrowRight />
                </button>
            </div>
        </section>
    )
}
