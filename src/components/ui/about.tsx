
function ListItem({ href, text }: { href: string; text: string }) {
    return (
        <li className="group">
            <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-start gap-0.5"
            >
                <span className="text-sm font-semibold text-[#ffffff] border-b border-dotted border-[#444] leading-tight tracking-tight hover:text-[#ef6e3b] hover:-translate-y-0.5 transition-all duration-300 ease-in-out font-inter">
                    {text}
                </span>
                <sup className="text-[7px] md:text-[9px] text-[#ef6e3b] opacity-80 duration-300">
                    ↗
                </sup>
            </a>
        </li>
    );
}

function About() {


    return (
        <div>
            <main className="flex items-center justify-center bg-[#0b0909] text-white font-sfmono relative z-10 pt-10">

                {/* Main Container - max-width constrained for readability */}
                <div className="w-full grid grid-cols-2 md:grid-cols-[1.1fr_1.1fr_1.1fr_1.1fr_0.9fr_0.9fr] gap-6 items-start px-5">

                    {/* COLUMN 1-2: About Section */}
                    <section className="col-span-2 space-y-3">

                        {/* Header Profile Section */}
                        <div className="flex items-center gap-4">
                            <div>
                                <h1 className="text-lg md:text-xl font-bold font-sfmono tracking-tighter text-white">SiL3nTL00p</h1>
                                <p className="text-xs md:text-sm text-gray-500 tracking-tight font-sfmono font-medium">Sophomore <a href="https://www.iitb.ac.in/" className="hover:text-white transition-colors duration-350 ease-in-out">@IIT Bombay</a><sup className="font-sans leading-[0] text-[8px] md:text-[10px] font-light text-[#ef6e3b]">↗</sup></p>
                            </div>
                        </div>

                        {/* Separator Line */}
                        <div className="w-full h-[0.5px] bg-gray-400/30 "></div>

                        {/* About Section Heading */}
                        <h2 className="text-[#7a7770] text-xs font-sfmono tracking-[0.1em] uppercase select-none font-normal mb-3">
                            About
                        </h2>

                        {/* Bio Text */}
                        <div className="space-y-4 text-sm leading-tight tracking-tight font-inter font-semibold text-[#ffffff]">
                            <p className="text-sm leading-tight tracking-normal">
                                Hi, I&apos;m <span className="text-[#ef6e3b] text-base font-semibold font-sfmono"> Manthan </span><br />
                                I’m passionate about building intelligent systems and exploring how machine learning can solve real-world problems.
                                I enjoy diving into the technical details, but my true passion lies in crafting simplicity. Always up for a conversation about design, AI, code, or anything tech-related.
                            </p>
                        </div>
                    </section>

                    {/* COLUMN 3-4: Experience Section */}
                    <section className="col-span-2 space-y-3 md:ml-4">
                        <h2 className="text-[#7a7770] text-xs font-sfmono tracking-[0.15em] uppercase mb-2 select-none font-normal">My Experience</h2>
                        <ul className="space-y-2 list-disc font-inter font-semibold text-sm leading-tight list-inside text-[#ffffff]">
                            <li>Research Intern</li>
                            <li>Junior SWE <a href="https://ai.tech-iitb.org/" className="font-inter tracking-normal hover:text-[#ef6e3b] hover:-translate-y-0.5 inline-block transition-all duration-300 ease-in-out">@AiCommunity</a><sup className="font-sans leading-[0] text-[9px] font-light text-[#ef6e3b]">↗</sup></li>
                            <li>Graphic Designer <a href="https://techfest.org/" className="font-inter tracking-normal hover:text-[#ef6e3b] hover:-translate-y-0.5 inline-block transition-all duration-300 ease-in-out">@TechFest</a><sup className="font-sans leading-[0] text-[9px] font-light text-[#ef6e3b]">↗</sup></li>
                        </ul>
                    </section>

                    {/* COLUMN 3: Connect Section */}
                    <section className="space-y-3 md:pl-2">
                        <h2 className="text-[#7a7770] text-xs font-sfmono tracking-[0.15em] uppercase mb-2 select-none font-normal">
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
                    </section>

                    {/* COLUMN 4: Links Section */}
                    <section className="space-y-3 md:-ml-3">
                        <h2 className="text-[#7a7770] text-xs font-sfmono tracking-[0.15em] uppercase mb-2 select-none font-normal">
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
                    </section>
                </div>
            </main>


        </div>


    )
}

export { About }
