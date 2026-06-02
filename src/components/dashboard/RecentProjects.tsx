import { ArrowRight } from "lucide-react"

export default function RecentProjects() {
    const projects = [
        {
            title: "Blog Generator",
            category: "Content Creation",
            updated: "2 hours ago",
        },
        {
            title: "Sales Email Camgaign",
            category: "Email Automation",
            updated: "Yesterday",
        },
        {
            title: "SEO Content Planner",
            category: "Marketing",
            updated: "3 days ago",
        },
    ]
    return (
        <section className="space-y-5">
            <div>
                <h2 className="text-xl font-semibold text-slate-900">Recent Projects</h2>
                <p className="text-sm text-slate-500">Continue working on your AI workflows.</p>
            </div>
            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                {projects.map((project) => (
                    <div key={project.title} className="group rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                        <div className="flex items-start justify-between">
                            <div>
                                <h3 className="font-semibold text-slate-900">{project.title}</h3>
                                <p className="mt-2 text-sm text-slate-500">{project.category}</p>
                            </div>
                            <ArrowRight size={18}  className="text-slate-400 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"/>
                        </div>
                        <div className="mt-6">
                            <span className="text-xs text-slate-400">
                                Updated {project.updated}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
