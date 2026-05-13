import {LayoutDashboard,Sparkles,BarChart3,CreditCard,Settings} from "lucide-react"
import { NavLink } from "react-router-dom"

const menuItems=[
    {
        title:"Dashboard",
        icon:LayoutDashboard,
        path:"/dashboard"
    },
    {
        title:"Workspace",
        icon: Sparkles,
        path:"/workspace",
    },
    {
        title:"Analytics",
        icon:BarChart3,
        path:"/analytics"
    },
];
const accountItems = [
    {
        title:"Billing",
        icon:CreditCard,
        path:"/billing",
    },
    {
        title:"Settings",
        icon:Settings,
        path:"/settings",
    },
];
export default function Sidebar() {
  return (
    <div>
      <aside className="min-h-screen hidden w-72 border-r border-slate-200 bg-white lg:flex
      lg:flex-col">
        {/*----------LOGO-------*/}
        <div className="border-b border-slate-200 px-8 py-6">
            <h1 className=" text-2xl font-bold tracking-tight text-slate-900">FlowPilot AI</h1>
            <p className="mt-1 text-sm text-slate-500">AI Productivity Platform</p>
        </div>

        {/*------------Navigation------------*/}
        <div className="flex flex-1 flex-col justify-between px-4 py-6">
            <div>
                {/*--------MAIN------------*/}
                <div className="mb-8">
                    <p className="mb-3 px-4 text-xs font-semibold uppercase tracking-wider text-slate-400">Main</p>
                    <nav className="space-y-2">
                        {menuItems.map((item)=>(
                            <NavLink key={item.title} 
                            to={item.path} className={({isActive})=>`flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-medium transition-all duration-200 ${isActive ? "bg-indigo-50 text-indigo-600 shadow-sm" : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"}`}>
                                <item.icon size={20} />
                                {item.title}
                            </NavLink>
                        ))}
                    </nav>
                </div>

                {/*--------------------Account--------*/}
                <div>
                    <p className="mb-3 px-4 text-xs font-semibold uppercase tracking-wider text-slate-400">Account</p>

                    <nav className="space-y-2">
                      {accountItems.map((item)=>(
                        <NavLink key={item.title}
                        to={item.path} className={({isActive})=>
                        `flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-medium transition-all duration-200 ${isActive ? "bg-indigo-50 text-indigo-600 shadow-sm" : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"}`}>
                            <item.icon size={20} />
                            {item.title}
                        </NavLink>
                      ))}
                    </nav>
                </div>
            
            
            
            </div>

            {/*----------Upgrade card----------*/}
            <div className="mt-8 rounded-3xl border border-slate-200 bg-slate-50 p-5">
                <h3 className="font-semibold text-slate-900">Upgrade to Pro</h3>
                <p className="mt-2 text-sm text-slate-500">Unlock advanced AI tools and analytics.</p>
                <button className="mt-5 w-full roundex-2xl bg-indigo-600 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 rounded-2xl">
                    Upgrade
                </button>
            </div>

        </div>


      </aside>
    </div>
  )
}
