import { FileText, Mail, BarChart3, Megaphone, Calendar, Workflow, ArrowRight } from "lucide-react"
export default function PromptTemplates() {
    const templates = [
        {
            title: "Blog Post",
            description: "Generate SEO-friendly articles",
            icon: FileText,
            color: "bg-blue-50 text-blue-600"
        },
        {
            title: "Email Campaign",
            description: "Create high-converting emails",
            icon: Mail,
            color: "bg-indigo-50 text-indigo-600",
        },
        {
            title: "Business Report",
            description: "Generate professional reports",
            icon: BarChart3,
            color: "bg-green-50 text-green-600",

        },
        {
            title: "MArketing Copy",
            description: "Ads , landing pages and social posts",
            icon: Megaphone,
            color: "bg-orange-50 text-orange-600",
        },
        {
            title: "Meeting Summary",
            description: "Convert meetings into action items",
            icon: Calendar,
            color: "bg-purple-50 text-purple-600",
        },
        {
            title: "Workflow Plan",
            description: "Design automation processes",
            icon: Workflow,
            color: "bg-pink-50 text-pink-600"
        },
    ];
    return (
        <section className=" relative mb-8 bg-white border border-slate-200 p-6 shadow-sm rounded-4xl">

            <div className="absolute -top-20 -right-20 h-60 w-60 rounded-full bg-indigo-100 blur-3xl opacity-60" />
            <div className="absolute -bottom-20 -left-20 h-60 w-60 rounded-full bg-indigo-100 blur-3xl opacity-60" />


            {/*------------Header----------------*/}
            <div className="mb-6">

                <h2 className="text-2xl font-semibold text-slate-900">
                    Quick Start Templates
                </h2>
                <p className="mt-1 text-slate-500">
                    Start faster with AI-powered templates.
                </p>
            </div>

            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                {templates.map((template) => {
                    const Icon = template.icon;
                    return (
                        <button key={template.title} className="group relative overflow-hidden rounded-[28px] border border-slate-200 bg-white p-6 text-left shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-indigo-200 hover:shadow-xl hover:bg-slate-50">

                            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-indigo-300/30 blur-3xl opacity-0 transition-all duration-500 group-hover:opacity-100" />

                            <div className="relative z-10">

                                <div className={`mb-5 flex h-14 w-14 items-center justify-center rounded-2xl transition-all duration-300 group-hover:scale-110 ${template.color} `}>
                                    <Icon size={26} />
                                </div>

                                <h3 className="text-lg font-semibold text-slate-900">
                                    {template.title}
                                </h3>
                                <p className="mt-2 text-sm leading-relaxed text-slate-500">
                                    {template.description}
                                </p>

                                <div className="mt-5 flex items-center gap-2 text-sm font-medium text-indigo-600">
                                    Use Template
                                    <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
                                </div>
                            </div>
                        </button>
                    )
                })}
            </div>

        </section>
    )
}
