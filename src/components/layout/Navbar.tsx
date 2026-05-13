import {Bell,Menu,Search} from "lucide-react"
import {Input} from "@/components/ui/input"
import { Button } from "@/components/ui/button"

type NavbarProps ={
    onMenuClick:()=>void
}
export default function Navbar({onMenuClick}:NavbarProps) {
  return (
   <header className="sticky top-0 z-40 flex items-center justify-between border-b border-border/50 bg-background/80 backdrop-blur-xl px-4 py-4 lg:px-8">
    {/*----------Left Side -----------*/}
    <div className="flex items-center gap-4">
        {/*--------Mobile--------*/}
        <Button className="lg:hidden" variant="ghost" size="icon"
        onClick={onMenuClick}>
            <Menu className="h-5 w-5" />
        </Button>

        {/*------search bar-----*/}
        <div className="relative hidden md:block">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"/>
            <Input className="w-70 rounded-xl border-none bg-muted/50 pl-10" placeholder="Search AI workflow..."/>
        </div>

    </div>

    {/*-------right side-------*/}
    <div className="flex items-center gap-3">
        {/*-------notification-----*/}
        <Button variant="ghost" size="icon" className="rounded-full">
            <Bell className="h-5 w-5" />
        </Button>

        {/*---------Profile------*/}
        <div className="flex items-center gap-3 rounded-full border border-border/50 bg-card px-2 py-1">
            <img src="https://i.pravatar.cc/100?img=12" alt="profile" className="h-10 w-10 rounded-full object-cover" />
            <div className="hidden sm:block">
                <p className="text-sm font-medium">John Deo</p>
                <span className="text-xs text-muted-foreground">Pro Plan</span>
            </div>
        </div>
    </div>
   </header>
  )
}
