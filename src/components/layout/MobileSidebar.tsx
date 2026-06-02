import {LayoutDashboard,Sparkles,BarChart3,X,CreditCard,Settings} from "lucide-react";
import { NavLink } from "react-router-dom";
 type MobileSidebarProps = {
    isOpen:boolean;
    onClose:()=>void;
 };

const menuItems = [
    {
        title:"Dashboard",
        icon:LayoutDashboard,
        path:"/dashboard",
    },
    {
        title:"Workplace",
        icon:Sparkles,
        path:"/workspace",
    },
    {
        title:"Analytics",
        icon:BarChart3,
        path:"/analytics",
    },
    
];
const accountItems=[
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
export default function MobileSidebar({isOpen,onClose}:MobileSidebarProps) {
  return (
    <>
    {/*-----------Overlay-----------*/}
    {isOpen && (
        <div className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm lg:hidden" onClick={onClose}/>
    )}
    {/*---------Sidebar-------*/}
    <aside className={`fixed top-0 left-0 z-50 h-screen w-72 bg-white border-r border-slate-200 shadow-xl transform transition-transform duration-300 ease-in-out ${isOpen ?   "translate-x-0" : "-translate-x-full"} lg:hidden `}>

        {/*--------Header--------*/}
    <div className="flex items-center justify-between border-b border-slate-200 px-6 py-6">
        <div>
            <h1 className="text-xl font-bold text-slate-900">FlowPilot AI</h1>
            <p className="text-sm text-slate-500">
                AI Productivity platform
            </p>
        </div>
        <button onClick={onClose} className="rounded-full p-2 hover:bg-slate-100">
            <X size={22} />
        </button>
    </div>

    {/*------------Navigation------------*/}
    <div className="flex flex-1 flex-col justify-between px-4 py-6">
        <div>
            {/*-------Main------*/}
            <div className="mb-8">
                <p className="mb-3 px-4 text-xs font-semibold uppercase tracking-wider text-slate-400">Main</p>
                <nav className="space-y-2">
                    {menuItems.map((item)=>(
                        <NavLink 
                        key={item.title} 
                        to={item.path}
                        onClick={onClose} 
                        className={({isActive})=> 
                            `flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-medium transition-all duration-200 ${isActive ? "bg-indigo-50 text-indigo-600 ": "text-slate-600 hover:bg-slate-100"}`}>
                                <item.icon size={20} />
                                {item.title}
                            </NavLink>
                    ))}
                </nav>
            </div>


            {/*------account-------*/}
             <div className="mb-8">
                <p className="mb-3 px-4 text-xs font-semibold uppercase tracking-wider text-slate-400">Account</p>
                <nav className="space-y-2">
                    {accountItems.map((item)=>(
                        <NavLink 
                        key={item.title} 
                        to={item.path}
                        onClick={onClose} 
                        className={({isActive})=> 
                            `flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-medium transition-all duration-200 ${isActive ? "bg-indigo-50 text-indigo-600 ": "text-slate-600 hover:bg-slate-100"}`}>
                                <item.icon size={20} />
                                {item.title}
                            </NavLink>
                    ))}
                </nav>
            </div>
        </div>

    </div>
    </aside>
    </>
  )
}
