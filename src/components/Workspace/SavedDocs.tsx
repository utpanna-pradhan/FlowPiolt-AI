import { FileText , Download, Eye , MoreHorizontal } from "lucide-react"

export default function SavedDocs() {
    const documents =[
        {
            name:"Product Launch Strategy.pdf",
            size:"2.4 MB",
            type:"PDF",
            date:"Today"
        },
        {
            name:"Marketing Campaign.docx",
            size:"1.2 MB",
            type:"DOCX",
            date:"Yesterday",
        },
        {
            name:"Maeting Summary.pdf",
            size:"800 KB",
            type:"PDF",
            date:"2 days ago",
        },
    ]

  return (
   <section className="relative overflow-hidden p-8 bg-white border border-slate-200 rounded-4xl shadow-sm">

   { /*Background Glow */}
             <div className="absolute -top-20 -right-20 h-60 w-60 rounded-full bg-indigo-100 blur-3xl opacity-60" />
            <div className="absolute -bottom-20 -left-20 h-60 w-60 rounded-full bg-indigo-100 blur-3xl opacity-60" />

    {/*Header*/}
    <div className="relative z-10 mb-6 flex items-center justify-between">
        <div>
            <h2 className="text-2xl font-bold text-slate-900">Saved Documents</h2>
            <p className="mt-1 text-slate-500">Access your exported AI content anytime.</p>
        </div>
        <button className="text-sm font-medium text-indigo-600">
            View All
        </button>
    </div>

    {/*Content*/}
    <div className="space-y-4">
        {documents.map((doc)=>(
            <div key={doc.name} className="flex items-center justify-between rounded-3xl border border-slate-200 p-5 transition-all duration-300 hover:border-indigo-100 hover:shadow-lg">
                <div className="flex items-center gap-4">
                    <div className="flex items-center justify-center h-14 w-14 rounded-2xl bg-indigo-50 text-indigo-600 ">
                        <FileText size={24} />
                    </div>
                    <div >
                        <h3 className="font-medium text-slate-900">{doc.name}</h3>
                        <p className="mt-1 text-sm text-slate-500"> {doc.type} - {doc.size} - {doc.date} </p>
                    </div>
                </div>

                <div className="flex items-center gap-2">
                    <button className="rounded-xl p-2 hover:bg-slate-100">
                        <Eye  size={18}/>
                    </button>
                    <button className="rounded-xl p-2 hover:bg-slate-100">
                        <Download size={18}/>
                    </button>
                    <button className="rounded-xl p-2 hover:bg-slate-100">
                        <MoreHorizontal  size={18}/>
                    </button>
                </div>
            </div>
        ))}
    </div>


   </section>
  )
}
