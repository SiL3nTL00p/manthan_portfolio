"use client"

import { useEffect, useState } from "react"
import { ProjectsGrid } from "./components/ui/Projects2"
import { About } from "./components/ui/about"
import InitialView from "./components/ui/InitialView"

function App() {
  const [showMain, setShowMain] = useState<boolean>(false)
  const [mainVisible, setMainVisible] = useState<boolean>(false)

  useEffect(() => {
    // Check localStorage on mount
    const seen = localStorage.getItem("seenSplash_v1")
    if (seen) setShowMain(true)
  }, [])

  // Choose what to show initially: 'welcome' or 'github'
  const initialType: "welcome" | "github" = "welcome"

  // when showMain flips to true, enable a short fade-in for the main container
  useEffect(() => {
    if (showMain) {
      // allow the main container to mount, then trigger opacity transition
      const t = window.setTimeout(() => setMainVisible(true), 50)
      return () => clearTimeout(t)
    } else {
      setMainVisible(false)
    }
  }, [showMain])

  return (
    <>
      {!showMain && (
        <InitialView type={initialType} onFinish={() => setShowMain(true)} />
      )}

      {showMain && (
        <div
          className={`min-h-screen flex flex-col bg-[#0b0909] text-gray-200 scale-100 relative overflow-hidden transition-opacity duration-500 ${mainVisible ? "opacity-100" : "opacity-0"
            }`}
        >

          {/* About section */}
          <div className="z-15">
            <About />
          </div>

          {/* Projects */}
          <div className="z-15">
            <ProjectsGrid />
          </div>

        </div>
      )}
    </>
  )
}

export default App
