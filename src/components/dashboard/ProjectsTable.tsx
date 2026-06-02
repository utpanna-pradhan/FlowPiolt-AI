import { ArrowRight } from "lucide-react"

const projects = [
    {
        name: "Blog Generator",
        type: "Content Creation",
        status: "Active",
        lastUpdated: "2 min ago",
    },
    {
        name: "Sales Report AI",
        type: "Analytics",
        status: "Completed",
        lastUpdated: "1 hour ago",
    },
    {
        name: "Lead Workflow",
        type: "Automation",
        status: "Running",
        lastUpdated: "3 hours ago"
    },
    {
        name: "Email Campaign",
        type: "Marketing",
        status: "Draft",
        lastUpdated: "Yesterday",
    },
]
export default function ProjectsTable() {
    const getStatusColor = (status: string) => {
        switch (status) {
            case "Active":
                return "bg-green-100 text-green-700";
            case "Running":
                return "bg-blue-100 text-blue-700";
            case "Completed":
                return "bg-indigo-100 text-indigo-700";
            case "Draft":
                return "bg-slate-100 text-slate-700";
            default:
                return "bg-slate-100 text-slate-700"
        }
    };

    return (
        <section className="rounded-4xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="mb-6 flex items-center justify-between">

                <div>
                    <h2 className="text-xl font-semibold text-slate-900">Recent Projects</h2>
                    <p className="text-sm text-slate-500">Manage your AI workflows and workspaces</p>
                </div>

                <button className="text-sm font-medium text-indigo-600 hover:text-indigo-700">View All</button>
            </div>

            <div className="overflow-auto">
                <table className="w-full">
                    <thead>
                        <tr className="border-b border-slate-200">
                            <th className="pb-4 text-left text-sm font-medium text-slate-500">Project</th>
                            <th className="pb-4 text-left text-sm font-medium text-slate-500">Type</th>
                            <th className="pb-4 text-left text-sm font-medium text-slate-500">Status</th>
                            <th className="pb-4 text-sm text-slate-500 text-left font-medium">Updated</th>

                            <th />
                        </tr>
                    </thead>
                    <tbody>
                        {projects.map((project) => (
                            <tr key={project.name} className="border-b border-slate-100 transition-colors hover:bg-slate-50">
                              
                                <td className="py-5 font-medium text-slate-900">{project.name}</td>

                                <td className="py-5 text-slate-600">
                                    {project.type}</td>

                                <td className="py-5">
                                    <span className={`rounded-full px-3 py-1 text-xs font-medium ${getStatusColor(project.status)}`}>
                                         {project.status}
                                    </span>
                                   </td>

                                <td className="py-5 text-slate-500">
                                    {project.lastUpdated}</td>

                                <td className="py-5">
                                    <button className="flex items-center gap-2 text-sm font-medium text-indigo-600 hover:text-indigo-700">
                                        Open
                                        <ArrowRight size={16} />
                                        </button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </section>
    )
}
