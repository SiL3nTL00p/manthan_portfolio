"use client"


import { ProjectsGrid } from "./components/ui/Projects2"
import { About } from "./components/ui/about"

function App() {


  return (
    <div className="min-h-screen flex flex-col bg-[#0b0909] text-gray-200 scale-100 relative overflow-hidden">

      {/* About section */}
      <div className="z-15"> 
        <About/>
      </div>

;     {/* Projects */}
      <div className="z-15"> 
        <ProjectsGrid/>
      </div>

    </div>
  )

}

export default App
