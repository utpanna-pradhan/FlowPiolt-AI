import Navbar from "@/components/layout/Navbar";
import Sidebar from "@/components/layout/Sidebar";
import MobileSidebar from "@/components/layout/MobileSidebar";
import {Outlet} from 'react-router-dom'
import  {useState} from "react"


export default function DashboardLayout() {
    const [sidebarOpen,setSidebarOpen] = useState(false)
  return (
    <div className="min-h-screen bg-background">
        
        {/*--------Mobile Overlay-------*/}
       <MobileSidebar isOpen={sidebarOpen} onClose={()=>setSidebarOpen(false)}/>
        <div className="flex">
            {/*-------sidebar-------*/}
          <div className="hidden lg:block">
            <Sidebar />
          </div>
            {/*-------------Main Content-------*/}
            <main className="flex-1 ">
                <Navbar onMenuClick={()=>setSidebarOpen(true)} />
                    <div className="p-4 lg:p-8">
                        <Outlet />
                    </div>
            </main>
        </div>
      
    </div>
  )
}
