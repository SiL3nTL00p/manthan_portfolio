import { MenuBar } from "./top_menu"
import * as React from "react"


function MenuBarUse() {

  const menuItems = [
    {
      icon: (props: React.SVGProps<SVGSVGElement>) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" {...props}><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path><path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path></svg>
      ),
      label: "Home",
      onClick: () => {
        
        window.location.href = "/about"; // Navigate to /about
      }

    },

    {
      icon: (props: React.SVGProps<SVGSVGElement>) => (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" {...props}><path d="M13.4 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-7.4"></path><path d="M2 6h4"></path><path d="M2 10h4"></path><path d="M2 14h4"></path><path d="M2 18h4"></path><path d="M21.378 5.626a1 1 0 1 0-3.004-3.004l-5.01 5.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z"></path></svg>
      ),
      label: "Resume (CV)",
      onClick: () => {
        
        window.location.href = "https://drive.google.com/file/d/1P4QbR-jHs0EQ5KOlh4zUSthVKtwps-iQ/view?usp=sharing"; // Navigate to resume
      }
      
    },
  ]

  return (
    <div className="relative top-50 left-0 flex items-end justify-end z-50 scale-110 ">
      
      <MenuBar items={menuItems} />
    </div>
  )
}

export { MenuBarUse }
