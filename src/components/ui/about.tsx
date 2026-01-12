
function ListItem({ href, text }: { href: string; text: string }) {
  return (
    <li className="group">
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-start gap-0.5"
      >
        <span className="text-base font-bold text-[#a09a95] border-b border-dotted border-[#444] leading-tight hover:text-white transition-colors duration-350 ease-in-out">
          {text}
        </span>
        <sup className="text-[9px] text-[#ef6e3b] opacity-80 duration-300">
          ↗
        </sup>
      </a>
    </li>
  );
}

function About() {


    return (
        <div>
        <main className="flex items-center justify-center bg-[#000000] text-white font-sfmono relative z-10 pt-10">

            {/* Main Container - max-width constrained for readability */}
            <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-2 items-start px-5">

                {/* LEFT COLUMN: Bio and Description (Spans 2 columns on large screens) */}
                <section className="md:col-span-2 space-y-3">

                    {/* Header Profile Section */}
                    <div className="md:col-span-1 flex items-center gap-4">
                        <div>
                            <h1 className="text-4xl font-bold font-sfmono tracking-tighter text-white">SiL3nTL00p</h1>
                            <p className="text text-gray-500 tracking-tight font-sfmono font-medium">Sophomore <a href="https://www.iitb.ac.in/" className="hover:text-white transition-colors duration-350 ease-in-out">@IIT Bombay</a><sup className="font-sans leading-[0] text-[10px] font-light text-[#ef6e3b]">↗</sup></p>
                        </div>
                    </div>

                    {/* Bio Text */}
                    <div className="space-y-4 text-base text-[#a09a95] leading-relaxed font-sfpro">
                        <p className="text-base leading-tighter font-semibold leading-tight tracking-tight">
                            Hi, I&apos;m <span className="text-[#ef6e3b] text-lg font-sfmono font-semibold "> Manthan </span><br/>
                            I’m passionate about building intelligent systems and exploring how machine learning can solve real-world problems. 
                            I enjoy diving into the technical details, but my true passion lies in crafting simplicity. Always up for a conversation about design, AI, code, or anything tech-related.
                        </p>


                        <div className="p-4 rounded-lg bg-white/5 border font-sfpro font-bold text-base border-white/5">
                            <p className=" text-lg font-bold font-sfmono tracking-tighter text-gray-300 mb-2">My <span className="text-lg font-sf font-bold text-base">Experience</span> </p>
                            <ul className="space-y-1 list-disc font-sfmono tracking-tighter text-sm list-inside text-[#a09a95]">
                                <li>Research Intern</li>
                                <li>Junior SWE <a href="https://ai.tech-iitb.org/" className="font-sfmono tracking-tighter hover:text-white transition-colors duration-350 ease-in-out">@AiCommunity</a><sup className="font-sans leading-[0] text-[10px] font-light text-[#ef6e3b]">↗</sup></li>
                                <li>Graphic Designer <a href="" className="font-sfmono tracking-tighter hover:text-white transition-colors duration-350 ease-in-out">@TechFest</a><sup className="font-sans leading-[0] text-[10px] font-light text-[#ef6e3b]">↗</sup></li>
                            </ul>
                        </div>
                    </div>
                </section>


                {/* RIGHT COLUMN: Contact Buttons (Spans 1 column) */}
                <section className="sticky top-10 mt-8 md:mt-0">
                    <div className="grid grid-cols-2 gap-4 font-sfpro ">

                    {/* COLUMN 1: CONNECT */}
                    <div className="flex flex-col items-center  gap-y-3">
                        <h2 className="text-[#ffffff] text-xs font-sfmono tracking-[0.2em] uppercase mb-2 select-none">
                            Connect
                        </h2>
                        
                        <ul className="space-y-2">
                            <ListItem 
                                href="mailto:pattedamanthan@gmail.com" 
                                text="Email" 
                            />
                            <ListItem 
                                href="https://www.linkedin.com/in/manthan-p-6457b3313/" 
                                text="LinkedIn" 
                            />
                            <ListItem 
                                href="https://github.com/SiL3nTL00p" 
                                text="Github" 
                            />
                        </ul>
                    </div>

                    {/* COLUMN 2: RESUME & BLOGS */}
                    <div className="flex flex-col gap-y-3">
                        <h2 className="text-[#ffffff] text-xs font-sfmono tracking-[0.2em] uppercase mb-2 select-none">
                            Links
                        </h2>

                        <ul className="space-y-2">
                            <ListItem 
                                href="https://drive.google.com/file/d/1P4QbR-jHs0EQ5KOlh4zUSthVKtwps-iQ/view?usp=sharing" 
                                text="Resume" 
                            />
                            <ListItem 
                                href="/blogs" 
                                text="Blogs" 
                            />
                        </ul>
                    </div>

    </div>
</section>
            </div>
        </main>

        
        </div>

       
    )
}

export { About }
