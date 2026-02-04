
function ListItem({ href, text }: { href: string; text: string }) {
    return (
        <li className="group">
            <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-start gap-0.5"
            >
                <span className="text-[14px] text-[#ffffff] border-b-2 border-dotted border-[#444] leading-tight hover:text-[#fde047] hover:border-[#fde047] transition-all duration-300 ease-in-out" style={{ fontFamily: '"Neue Haas Unica", "IBM Plex Sans", ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans"', fontWeight: 525 }}>
                    {text}
                </span>
                <sup className="text-[10px] md:text-[10px] text-[#fde047] opacity-100 duration-300">↗</sup>
            </a>
        </li>
    );
}

function About() {


    return (
        <div>
            <main className="flex flex-col items-center justify-start bg-[#0b0909] text-white font-sfmono relative z-10 pt-4 animate-in fade-in duration-1000">

                {/* Fixed Header - Outside Grid */}
                <div className="w-full mb-6 animate-in fade-in duration-1000 px-5" style={{ animationDelay: '100ms' }}>
                    <div className="flex items-center w-full gap-4 mb-2">
                        <h1 className="text-[18px] font-sfmono md:text-[20px] text-white flex-shrink-0 tracking-snug" style={{ fontWeight: 700 }}>Manthan</h1>
                        <p className="text-[12px] md:text-[14px] text-gray-500 tracking-tight font-sfmono ml-auto text-right" style={{ fontWeight: 500 }}>Sophomore <a href="https://www.iitb.ac.in/" className="hover:text-white transition-colors duration-350 ease-in-out">@IIT Bombay</a><sup className="font-sans leading-[0] text-[8px] md:text-[10px]" style={{ fontWeight: 300 }} >↗</sup></p>
                    </div>

                    {/* Separator Line - spans full width */}
                    <div className="w-full h-[0.5px] bg-gray-400/30 "></div>
                </div>

                {/* Main Container - responsive layout */}
                <div className="w-full grid grid-cols-2 md:grid-cols-12 gap-y-8 md:gap-x-4 md:gap-y-0 items-start px-5">

                    {/* COLUMN 1-5: About Section */}
                    <section className="col-span-2 md:col-span-5 space-y-3 animate-in fade-in duration-1000" style={{ animationDelay: '200ms' }}>
                        {/* About Section Heading */}
                        <h2 className="text-[#7a7770] text-[14px] font-sfmono tracking-[0.1em] uppercase select-none mb-3" style={{ fontWeight: 400 }}>
                            About
                        </h2>

                        {/* Bio Text */}
                        <div className="space-y-4  text-[#ffffff]" style={{ fontFamily: '"Neue Haas Unica", "IBM Plex Sans", ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans"', fontWeight: 525, lineHeight: '140%' }}>
                            <p className="text-[14px] leading-snug tracking-normal">
                                <span className="text-[#fde047] border-b-2 border-dotted border-[#444] ">Konnichiwa !!!</span> <br />
                                I synthesize machine learning theory with practical engineering, solving complex puzzles through the lens of a student-builder.
                                I am driven by the quantification of reality, the ability to map physical phenomena into numerical dimensions and architect systems that transcend human cognitive limits.
                                My portfolio tracks my evolution from first principles to deployed code, are you ready to explore the trajectory, huh ?

                            </p>
                        </div>
                    </section>

                    {/* COLUMN 7: Gap */}
                    <div className="hidden md:block md:col-span-1"></div>

                    {/* COLUMN 8-9: Experience Section */}
                    <section className="col-span-2 md:col-span-2 space-y-3 animate-in fade-in duration-1000" style={{ animationDelay: '300ms' }}>
                        <h2 className="text-[#7a7770] text-[14px] font-sfmono tracking-[0.15em] uppercase mb-3 select-none" style={{ fontWeight: 400 }}>My Experience</h2>
                        <ul className="space-y-2 list-disc text-[14px] leading-tight list-inside text-[#ffffff]" style={{ fontFamily: '"Neue Haas Unica", "IBM Plex Sans", ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans"', fontWeight: 525 }}>
                            <li>Research Intern</li>
                            <li>Junior SWE <a href="https://ai.tech-iitb.org/" className="tracking-normal border-b-2 border-dotted border-[#444] hover:text-[#fde047] hover:border-[#fde047] inline-block transition-all duration-300 ease-in-out" style={{ fontFamily: '"Neue Haas Unica", "IBM Plex Sans", ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans"' }}>@AiCommunity</a><sup className="font-sans leading-[0] text-[9px] text-[#fde047]" style={{ fontWeight: 300 }}>↗</sup></li>
                            <li>Graphic Designer <a href="https://techfest.org/" className="tracking-normal border-b-2 border-dotted border-[#444] hover:text-[#fde047] hover:border-[#fde047] inline-block transition-all duration-300 ease-in-out" style={{ fontFamily: '"Neue Haas Unica", "IBM Plex Sans", ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans"' }}>@TechFest</a><sup className="font-sans leading-[0] text-[9px] text-[#fde047]" style={{ fontWeight: 300 }}>↗</sup></li>
                        </ul>
                    </section>

                    {/* COLUMN 10: Connect Section */}
                    <section className="col-span-1 md:col-span-1 md:col-start-10 space-y-3 animate-in fade-in duration-1000" style={{ animationDelay: '400ms' }}>
                        <h2 className="text-[#7a7770] text-[14px] font-sfmono tracking-[0.15em] uppercase mb-3 select-none" style={{ fontWeight: 400 }}>
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

                    {/* COLUMN 12: Links Section */}
                    <section className="col-span-1 md:col-span-2 md:col-start-11 space-y-3 animate-in fade-in duration-1000" style={{ animationDelay: '500ms' }}>
                        <h2 className="text-[#7a7770] text-[14px] font-sfmono tracking-[0.15em] uppercase mb-3 select-none" style={{ fontWeight: 400 }}>
                            Links
                        </h2>

                        <ul className="space-y-2">
                            <ListItem
                                href="https://drive.google.com/file/d/1P4QbR-jHs0EQ5KOlh4zUSthVKtwps-iQ/view?usp=sharing"
                                text="Resume"
                            />
                            <ListItem
                                href="/blog"
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
