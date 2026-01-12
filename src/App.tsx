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

     {/* Projects */}
      <div className="z-15"> 
        <ProjectsGrid/>
      </div>

    {/* Footer */}
      <div className="z-15"> 
        <footer className=" flex flex-col items-center body bg-[#1C1C1C] dot-grid z-[1] w-full sticky bottom-0 text-zinc-100 font-sfmono">
            <section className="w-full grid grid-cols-12 grid-gap relative z-10 max-w-8xl pb-4 pt-4 px-4 gap-y-8">
                <div className="flex-col align-center space-y-2 col-start-1 col-end-13 caption md:col-start-1 md:col-end-6">
                    <span className="flex flex-row space-x-2 align-middle">
                        <p className="self-center px-2 pt-1 pb-[2px] mono uppercase text-zinc-600">Last updated 2025-12-31</p>
                    </span>
                </div>
            </section>
        </footer>
      </div>


    </div>
  )

}

export default App
