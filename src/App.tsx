"use client"

import { useEffect } from "react"

import { ProjectsGrid } from "./components/ui/Projects2"
import { About, NavBar } from "./components/ui/about"
import GithubContributions from "./components/ui/GithubContributions"

function App() {
  useEffect(() => {
    const scrollToWorkFromHash = () => {
      if (window.location.hash !== "#work") return;

      const navEntry = performance.getEntriesByType("navigation")[0] as PerformanceNavigationTiming | undefined;
      const isReload = navEntry?.type === "reload";

      if (isReload) {
        const cleanUrl = `${window.location.pathname}${window.location.search}`;
        window.history.replaceState(null, "", cleanUrl);
        window.scrollTo({ top: 0, behavior: "auto" });
        return;
      }

      let attempts = 0;
      const maxAttempts = 30;

      const timer = setInterval(() => {
        const workSection = document.getElementById("work");
        if (workSection) {
          workSection.scrollIntoView({ behavior: "smooth", block: "start" });
          clearInterval(timer);
          return;
        }

        attempts += 1;
        if (attempts >= maxAttempts) {
          clearInterval(timer);
        }
      }, 80);

      return timer;
    };

    const activeTimer = scrollToWorkFromHash();
    window.addEventListener("hashchange", scrollToWorkFromHash);

    return () => {
      if (activeTimer) clearInterval(activeTimer);
      window.removeEventListener("hashchange", scrollToWorkFromHash);
    };
  }, []);


  return (
    <>
      <NavBar />
      <div className="min-h-screen flex flex-col bg-[#111111] text-gray-200 scale-100 relative overflow-hidden">

        {/* About section */}
        <div className="z-15 mb-[-10px]">
          <About />
        </div>

        {/* Projects */}
        <div className="z-15 ">
          <ProjectsGrid />
        </div>

        {/* GitHub Contributions */}
        <div className="z-15 mb-10">
          <GithubContributions />
        </div>

        {/* Footer */}
        <div className="z-15 mt-10">
          <footer className=" flex flex-col items-center body bg-[#1C1C1C] dot-grid z-[1] w-full sticky bottom-0 text-zinc-100 font-sfmono">
            <section className="w-full grid grid-cols-12 grid-gap relative z-10 max-w-8xl pb-4 pt-4 px-4 gap-y-8">
              <div className="flex-col align-center space-y-2 col-start-1 col-end-13 caption md:col-start-1 md:col-end-6">
                <span className="flex flex-row space-x-2 align-middle">
                  <p className=" text-sm self-center px-2 pt-1 pb-[2px] mono uppercase text-zinc-600">Last updated 12/04/2026</p>
                </span>
              </div>
            </section>
          </footer>
        </div>


      </div>
    </>
  )

}

export default App
