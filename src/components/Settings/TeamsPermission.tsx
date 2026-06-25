import { Users , Shield , KeyRound , UserPlus , ChevronRight , Lock } from "lucide-react"


export default function TeamsPermission() {
    const members =[
        {
            name:"Utpanna",
            role:"Owner",
            activity:true,
        },
        {
            name:"Sarah",
            role:"Designer",

        },
        {
            name:"Alex",
            role:"Developer",
        },
    ];
const permissions=[

{
name:"Billing",
access:"Full"
},

{
name:"Workspace",
access:"Limited"
},

{
name:"Deployments",
access:"Admin"
}

]
  return (
   <section className="relative overflow-hidden p-8 rounded-4xl bg-white shadow-sm border border-slate-200">
    <div className="absolute w-72 h-72 bg-indigo-100 -top-24 -right-24 blur-3xl opacity-70"/>
    <div className="absolute w-72 h-72 bg-violet-100  -left-24 -bottom-24 opacity-70 blur-3xl"/>

    <div className="relative z-10">
        {/*Header*/}
        <div className="mb-16">
              
            <div className="inline-flex bg-slate-900 rounded-full text-white px-5 py-2 gap-2 text-sm font-medium items-center">
                <Users size={16}/>Teams & Premissions
            </div>

            <h2 className="text-slate-900 font-bold text-5xl tracking-tight max-w-4xl leading-none mt-8">Control people . Not access mistakes.</h2>
            <p className="text-slate-500 text-lg mt-4 max-w-2xl ">
                Manage owership , permissions and workspace visibility.
            </p>
     
        </div>

        {/*Main*/}
        <div className="grid gap-8 xl:grid-cols-[1.15fr_0.85fr]">
            {/*Left*/}
            <div className="bg-white rounded-[40px] p-8 shadow-[0_30px_90px_rgba(0,0,0,.04)]">
                <div className="mb-8 flex items-center justify-between">
                    <h3 className="text-2xl font-bold ">Active Team</h3>
                    <button className="bg-slate-950 text-white px-5 py-3 rounded-full"><UserPlus /></button>
                </div>
                <div className="space-y-5">
                    {members.map((item)=>(
                        <div key={item.name} className="flex items-center justify-between rounded-[28px] bg-slate-50 p-6">
                            <div className="flex items-center gap-5">
                                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-slate-900 text-white text-lg font-bold">
                                    {item.name[0]}
                                </div>
                                 <div>
                                <h4 className="text-4xl font-semibold">
                                {item.name}
                            </h4>
                            <p className="mt-1 text-slate-500">
                                {item.role}
                            </p>
                                
                            </div>
                            </div>
                            {item.activity && (
                                <div className="rounded-full bg-emerald-50 px-4 py-2 text-sm font-semibold text-emerald-500"> 
                                Owner
                                </div>
                            )}
                           
                            
                        </div>
                        
                    ))}

                </div>


            </div>
            {/*Right*/}
            <div className="rounded-[40px] p-8 bg-slate-950 text-white">
                <div className="flex items-center gap-3">
                    <KeyRound />
                    Permission Matrix
                </div>
                <div className="mt-10 space-y-5">
                    {permissions.map((item) =>(
                        <div key={item.name} className=" rounded-[28px] bg-white/5 p-6">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-white/60">
                                        {item.name}
                                    </p>
                                    <h4 className="mt-2 text-3xl font-bold">
                                        {item.access}
                                    </h4>
                                </div>
                                <Shield />
                            </div>
                        </div>
                    ))}
                  
                </div>
                <div className="mt-8 rounded-[30px] bg-white p-6 text-slate-950">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="text-slate-500"> Security Health </p>
                            <h3 className="mt-2 text-4xl font-bold">
                                96%
                            </h3>
                        </div>
                        <Lock />
                    </div>
                </div>

            </div>

        </div>

     <div className="mt-8 flex items-center justify-between rounded-[36px] bg-white p-8 shadow-xl">
        <div>
            <p className="text-slate-500">
                Pending Approvals
            </p>
            <h3 className="mt-2 text-4xl font-bold">
                04 Requests
            </h3>
        </div>
        <button className="group rounded-full bg-slate=950 px-8 py-4 font-semibold text-white">
            <div className="flex items-center gap-3">
                Review Access 
                <ChevronRight className="transition group-hover:translate-x-1" />
            </div>
        </button>
     </div>

    </div>

   </section>
  )
}
