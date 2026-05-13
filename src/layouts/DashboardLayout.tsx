import Navbar from "@/components/layout/Navbar";
import Sidebar from "@/components/layout/Sidebar";
import {Outlet} from 'react-router-dom'
import  {useState} from "react"


export default function DashboardLayout() {
    const [sidebarOpen,setSidebarOpen] = useState(false)
  return (
    <div className="min-h-screen bg-background">
        
        {/*--------Mobile Overlay-------*/}
        {sidebarOpen && (
            <div className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm lg:hidden"
            onClick={()=>setSidebarOpen(false)}/>
            
        )}
        <div className="flex">
            {/*-------sidebar-------*/}
            <div className={`fixed left-0 top-0 z-50 h-screen transition-transform
                duration-300 ease-in-out 
                ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0`}>
                <Sidebar />
            </div>

            {/*-------------Main Content-------*/}
            <main className="flex-1 lg:ml-72">
                <Navbar onMenuClick={()=>setSidebarOpen(true)} />
                    <div className="p-4 lg:p-8">
                        <Outlet />
                    </div>
            </main>
        </div>
      
    </div>
  )
}
