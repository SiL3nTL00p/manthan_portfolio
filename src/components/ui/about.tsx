
function ListItem({ href, text }: { href: string; text: string }) {
    return (
        <li className="group">
            <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-start gap-0.5"
            >
                <span className="text-sm font-medium text-[#ffffff] border-b border-dotted border-[#444] leading-tight  hover:text-[#ef6e3b] transition-all duration-300 ease-in-out font-inter">
                    {text}
                </span>
                <sup className="text-[10px] md:text-[9px] text-[#ef6e3b] opacity-100 duration-300">↗</sup>
            </a>
        </li>
    );
}

function About() {


    return (
        <div>
            <main className="flex items-center justify-center bg-[#0b0909] text-white font-sfmono relative z-10 pt-4">

                {/* Main Container - max-width constrained for readability */}
                <div className="w-full grid grid-cols-2 md:grid-cols-5 gap-8 items-start px-5">

                    {/* Header Profile Section - spans all columns */}
                    <div className="col-span-2 md:col-span-5">
                        <div className="flex items-center justify-between gap-4 mb-2">
                            <h1 className="text-lg md:text-xl font-bold font-sfmono tracking-tighter text-white">SiL3nTL00p</h1>
                            <p className="text-xs md:text-sm text-gray-500 tracking-tight font-sfmono font-medium">Sophomore <a href="https://www.iitb.ac.in/" className="hover:text-white transition-colors duration-350 ease-in-out">@IIT Bombay</a><sup className="font-sans leading-[0] text-[8px] md:text-[10px] font-light text-[#ef6e3b]">↗</sup></p>
                        </div>

                        {/* Separator Line - spans full width */}
                        <div className="w-full h-[0.5px] bg-gray-400/30 "></div>
                    </div>

                    {/* COLUMN 1-2: About Section */}
                    <section className="col-span-2 space-y-3 md">
                        {/* About Section Heading */}
                        <h2 className="text-[#7a7770] text-sm font-sfmono tracking-[0.1em] uppercase select-none font-normal mb-3">
                            About
                        </h2>

                        {/* Bio Text */}
                        <div className="space-y-4 text- leading-tight  font-inter font-medium text-[#ffffff]">
                            <p className="text-sm leading-tight tracking-normal">
                                Hi, I&apos;m <span className="text-[#ef6e3b] text-base font-semibold font-sfmono"> Manthan </span><br />
                                I synthesize machine learning theory with practical engineering, solving complex puzzles through the lens of a student-builder.
                                I am driven by the quantification of reality, the ability to map physical phenomena into numerical dimensions and architect systems that transcend human cognitive limits.
                                My portfolio tracks my evolution from first principles to deployed code, are you ready to explore the trajectory, huh ?

                            </p>
                        </div>
                    </section>

                    {/* COLUMN 3-4: Experience Section */}
                    <section className="col-span-2 md:col-span-1 space-y-3">
                        <h2 className="text-[#7a7770] text-sm font-sfmono tracking-[0.15em] uppercase mb-3 select-none font-normal">My Experience</h2>
                        <ul className="space-y-2 list-disc font-inter font-medium text-sm leading-tight list-inside text-[#ffffff]">
                            <li>Research Intern</li>
                            <li>Junior SWE <a href="https://ai.tech-iitb.org/" className="font-inter tracking-normal hover:text-[#ef6e3b]  inline-block transition-all duration-300 ease-in-out">@AiCommunity</a><sup className="font-sans leading-[0] text-[9px] font-light text-[#ef6e3b]">↗</sup></li>
                            <li>Graphic Designer <a href="https://techfest.org/" className="font-inter tracking-normal hover:text-[#ef6e3b]  inline-block transition-all duration-300 ease-in-out">@TechFest</a><sup className="font-sans leading-[0] text-[9px] font-light text-[#ef6e3b]">↗</sup></li>
                        </ul>
                    </section>

                    {/* COLUMN 5: Connect Section */}
                    <section className="col-span-1 space-y-3">
                        <h2 className="text-[#7a7770] text-sm font-sfmono tracking-[0.15em] uppercase mb-3 select-none font-normal">
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

                    {/* COLUMN 6: Links Section */}
                    <section className="col-span-1 space-y-3">
                        <h2 className="text-[#7a7770] text-sm font-sfmono tracking-[0.15em] uppercase mb-3 select-none font-normal">
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
