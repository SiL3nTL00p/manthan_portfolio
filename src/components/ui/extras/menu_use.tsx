import { MenuBar } from "@/components/ui/extras/top_menu"
import * as React from "react"


function MenuBarUse() {

  const menuItems = [
    {
      icon: (props: React.SVGProps<SVGSVGElement>) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" {...props}><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path><path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path></svg>
      ),
      label: "About",
      onClick: () => {
        
        window.location.href = "/about"; // Navigate to /about
      }

    }
  ]

  return (
    <div className="relative top-50 left-0 flex items-end justify-end z-50 scale-110 ">
      
      <MenuBar items={menuItems} />
    </div>
  )
}

export { MenuBarUse }
