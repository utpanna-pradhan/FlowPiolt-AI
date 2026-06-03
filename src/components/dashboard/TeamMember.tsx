

export default function TeamMember() {
    const members = [
        {
            name: "John Doe",
            role: "Product Manager",
            avatar: "https://i.pravatar.cc/100?img=11",
            status: "Online",
        },
        {
            name: "Sarah Wilson",
            role: "UI Designer",
            avatar: "https://i.pravatar.cc/100?img=12",
            status: "Online",
        },
        {
            name: "Mike Johnson",
            role: "Frontend Developer",
            avatar: "https://i.pravatar.cc/100?img=13",
            status: "Away",
        },
        {
            name: "Emma Davis",
            role: "Marketing Lead",
            avatar: "https://i.pravatar.cc/100?img=14",
            status: "Offline",
        },
    ];
    return (
        <section className="rounded-4xl border border-slate-200 bg-white p-6 shadow-sm">

            <div className="mb-6 flex items-center justify-between">
               
               <div>
                    <h2 className="text-xl font-semibold text-slate-900">Team Members</h2>
                    <p className="text-sm text-slate-500">Active members in your workspace</p>
                </div> 
                <div className="rounded-full bg-indigo-50 px-3 py-1 text-sm font-medium text-indigo-600">
                    {members.length} Members
                </div>
                <button className="rounded-xl bg-indigo-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-indigo-700">Invite</button>
            </div>

            <div className="space-y-4">
                {members.map((member) => (
                    <div className="flex items-center justify-between rounded-2xl border border-slate-100 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-indigo-100 hover:shadow-md" key={member.name}>
                        <div className="relative">
                            <div className="flex items-center gap-3">
                                <img src={member.avatar} className="h-12 w-12 rounded-full object-cover" alt={member.name} />
                                <div >
                                    <h3 className="font-medium text-slate-900">{member.name}</h3>
                                    <p className="text-sm text-slate-500">{member.role}</p>
                                </div>
                            </div>
                            <span className={`rounded-full px-3 py-1 text-xs font-medium
                ${member.status === "Online" ? "bg-green-100 text-green-700" : member.status === "Away" ? "bg-yellow-100 text-yellow-700" : "bg-slate-100 text-slate-700"}`}>
                                {member.status}
                            </span>
                        </div>

                    </div>
                ))}
            </div>
        </section>
    )
}
