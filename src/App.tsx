"use client"

import { BottomMenu } from "./components/ui/bottom_menu"
import { Squares } from "./components/ui/background"


function App() {


  return (
    <div className="min-h-screen flex flex-col bg-[#0b0909] text-gray-200 scale-100 relative overflow-hidden">

      {/* Background squares - behind */}
      <div className="absolute inset-0 -z-10 rounded-lg overflow-hidden bg-[#060606]">
        <Squares
          direction="diagonal"
          speed={0.5}
          squareSize={40}
          borderColor="#333"
          hoverFillColor="#222"
        />
      </div>

      {/* Main content */}
      <main className="flex flex-1 items-center justify-center px-4 pt-5 relative z-10 scale-105">
        <section className="w-full max-w-md bg-transparent">
          
          {/* Profile */}
          <div className="mb-6 flex items-center justify-self-start scale-100">
            <div className="relative mr-3 h-12 w-12 overflow-hidden rounded-full bg-gray-800">
              <img src="/profile.JPG" alt="@manthan" className="h-full w-full object-cover" />
            </div>
            <div>
              <div className="font-bold text-white">SiL3nTL00p</div>
            </div>
          </div>

          {/* Bio */}
          <div className="space-y-5 text-left text-sm text-[#a09a95] bg-transparent">
            <p>
              Hi, I&apos;m <span className="text-[#ef6e3b]">Manthan</span> – a student at IIT Bombay.
            </p>
            <p>I’m passionate about building intelligent systems and exploring how machine learning can solve real-world problems.</p>
            <p>My experience until now :</p>
            <span className="whitespace-pre-line">
              • Research Intern{"\n"}• Junior SWE @AiCommunity{"\n"}• Graphic Designer @TechFest{"\n"}
            </span>
            <p>
              I enjoy diving into the technical details, but my true passion lies in crafting simplicity. Always up for a conversation about design, AI, code, or anything tech-related—let’s make complex things effortlessly clear together.
            </p>
          </div>

          {/* Links with tiny icons */}
          <div className="mt-8 flex gap-4 text-xs uppercase tracking-widest">
            <a
              href="mailto:pattedamanthan@gmail.com?subject=Message from Website&body=Hey Sachin! I'm writing to you regarding..."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-[#a09a95] hover:text-white transition-colors duration-350 ease-in-out"
            >
              <svg className="w-3 h-3 mr-1 fill-current" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zM4 8l8 5 8-5v-2l-8 5-8-5v2z"/></svg>
              email
            </a>

            <a
              href="https://www.linkedin.com/in/manthan-p-6457b3313/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-[#a09a95] hover:text-white transition-colors duration-350 ease-in-out"
            >
              <svg className="w-3 h-3 mr-1 fill-current" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M4.98 3.5C3.34 3.5 2 4.84 2 6.48c0 1.64 1.34 2.98 2.98 2.98 1.63 0 2.98-1.34 2.98-2.98 0-1.64-1.35-2.98-2.98-2.98zM2.4 21.5h5.17v-9h-5.17v9zM8.08 12.62v9h5.15v-4.93c0-2.8-3.65-2.64-3.65 0v4.93h5.18v-5.71c0-7.23-7.7-6.94-7.68 0z"/></svg>
              linkedin
            </a>

            <a
              href="https://github.com/SiL3nTL00p"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-[#a09a95] hover:text-white transition-colors duration-350 ease-in-out"
            >
              <svg className="w-3 h-3 mr-1 fill-current" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M12 0a12 12 0 00-3.79 23.4c.6.1.82-.26.82-.58v-2.23c-3.34.73-4.04-1.63-4.04-1.63a3.17 3.17 0 00-1.33-1.74c-1.08-.74.08-.72.08-.72a2.5 2.5 0 011.82 1.23 2.54 2.54 0 003.47 1 2.54 2.54 0 01.75-1.6c-2.67-.3-5.47-1.34-5.47-6 0-1.33.47-2.42 1.23-3.28a4.54 4.54 0 01.1-3.22s1-.32 3.3 1.23a11.5 11.5 0 016 0C17 4.1 18 4.42 18 4.42a4.54 4.54 0 01.1 3.22c.76.86 1.23 1.95 1.23 3.28 0 4.66-2.8 5.68-5.47 6a2.85 2.85 0 01.81 2.2v3.27c0 .32.22.7.82.58A12 12 0 0012 0z"/></svg>
              github
            </a>

            <a
              href="https://www.instagram.com/manthan_spryzen/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-[#a09a95] hover:text-white transition-colors duration-350 ease-in-out"
            >
              <svg className="w-3 h-3 mr-1 fill-current" viewBox="0 0 512 512" aria-hidden="true" focusable="false"><path d="M349.33 69.33H162.67c-51.2 0-93.34 42.13-93.34 93.34v186.66c0 51.2 42.13 93.34 93.34 93.34h186.66c51.2 0 93.34-42.13 93.34-93.34V162.67c0-51.2-42.13-93.34-93.34-93.34zM464 256c0 57.41-46.6 104-104 104H152c-57.41 0-104-46.6-104-104V152c0-57.41 46.6-104 104-104h208c57.41 0 104 46.6 104 104zm-49.23-104.76a35.37 35.37 0 11-70.74 0 35.37 35.37 0 0170.74 0zM256 160a96 96 0 1096 96 96.11 96.11 0 00-96-96zm0 160a64 64 0 1164-64 64.06 64.06 0 01-64 64z"/></svg>
              instagram
            </a>
          </div>
        </section>
      </main>

      {/* Bottom Menu */}
      <BottomMenu />
    </div>
  )

}

export default App
