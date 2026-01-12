


function About() {


    return (
        <main className="flex items-center justify-center bg-[#0a0a0a] text-white font-sfmono tracking-tight relative z-10 pt-10">

            {/* Main Container - max-width constrained for readability */}
            <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 items-start px-10">

                {/* LEFT COLUMN: Bio and Description (Spans 2 columns on large screens) */}
                <section className="md:col-span-2 space-y-3">

                    {/* Header Profile Section */}
                    <div className="flex items-center gap-4">
                        <div>
                            <h1 className="text-2xl font-bold tracking-tight text-white">SiL3nTL00p</h1>
                            <p className="text-sm text-gray-500 font-medium">Sophomore <a href="https://www.iitb.ac.in/" className="hover:text-white transition-colors duration-350 ease-in-out">@IIT Bomaby</a><sup className="font-sans leading-[0] text-[10px] font-light text-[#ef6e3b]">↗</sup></p>
                        </div>
                    </div>

                    {/* Bio Text */}
                    <div className="space-y-4 text-base text-[#a09a95] leading-relaxed">
                        <p className="text-sm">
                            Hi, I&apos;m <span className="text-[#ef6e3b] font-semibold">Manthan</span><br/>
                            I’m passionate about building intelligent systems and exploring how machine learning can solve real-world problems. 
                            I enjoy diving into the technical details, but my true passion lies in crafting simplicity. Always up for a conversation about design, AI, code, or anything tech-related—let’s make complex things effortlessly clear together.
                        </p>


                        <div className="p-4 rounded-lg bg-white/5 border border-white/5">
                            <p className="text-sm font-semibold text-gray-300 mb-2">My EXPERIENCE until now:</p>
                            <ul className="space-y-1 text-sm list-disc list-inside text-[#a09a95]">
                                <li>Research Intern</li>
                                <li>Junior SWE <a href="https://ai.tech-iitb.org/" className="hover:text-white transition-colors duration-350 ease-in-out">@AiCommunity</a><sup className="font-sans leading-[0] text-[10px] font-light text-[#ef6e3b]">↗</sup></li>
                                <li>Graphic Designer <a href="" className="hover:text-white transition-colors duration-350 ease-in-out">@TechFest</a><sup className="font-sans leading-[0] text-[10px] font-light text-[#ef6e3b]">↗</sup></li>
                            </ul>
                        </div>
                    </div>
                </section>


                {/* RIGHT COLUMN: Contact Buttons (Spans 1 column) */}
                <section className="flex flex-col items-center justify-center gap-4  md:mt-0 sticky top-10 ">

                    <div className="mt-8 flex flex-col gap-y-2 text-xs tracking-widest">
                        <h2 className="text-white font-semibold">CONNECT</h2>
                        <a
                            href="mailto:pattedamanthan@gmail.com?subject=Message from Website&body=Hey Manthan! I'm writing to you regarding..."
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center text-[#a09a95] hover:text-white transition-colors duration-350 ease-in-out"
                        >
                            <svg className="w-3 h-3 mr-1 fill-current" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zM4 8l8 5 8-5v-2l-8 5-8-5v2z" /></svg>
                            EMAIL
                        </a>

                        <a
                            href="https://www.linkedin.com/in/manthan-p-6457b3313/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center text-[#a09a95] hover:text-white transition-colors duration-350 ease-in-out"
                        >
                            <svg className="w-3 h-3 mr-1 fill-current" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M4.98 3.5C3.34 3.5 2 4.84 2 6.48c0 1.64 1.34 2.98 2.98 2.98 1.63 0 2.98-1.34 2.98-2.98 0-1.64-1.35-2.98-2.98-2.98zM2.4 21.5h5.17v-9h-5.17v9zM8.08 12.62v9h5.15v-4.93c0-2.8-3.65-2.64-3.65 0v4.93h5.18v-5.71c0-7.23-7.7-6.94-7.68 0z" /></svg>
                            LINKEDIN
                        </a>

                        <a
                            href="https://github.com/SiL3nTL00p"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center text-[#a09a95] hover:text-white transition-colors duration-350 ease-in-out"
                        >
                            <svg className="w-3 h-3 mr-1 fill-current" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M12 0a12 12 0 00-3.79 23.4c.6.1.82-.26.82-.58v-2.23c-3.34.73-4.04-1.63-4.04-1.63a3.17 3.17 0 00-1.33-1.74c-1.08-.74.08-.72.08-.72a2.5 2.5 0 011.82 1.23 2.54 2.54 0 003.47 1 2.54 2.54 0 01.75-1.6c-2.67-.3-5.47-1.34-5.47-6 0-1.33.47-2.42 1.23-3.28a4.54 4.54 0 01.1-3.22s1-.32 3.3 1.23a11.5 11.5 0 016 0C17 4.1 18 4.42 18 4.42a4.54 4.54 0 01.1 3.22c.76.86 1.23 1.95 1.23 3.28 0 4.66-2.8 5.68-5.47 6a2.85 2.85 0 01.81 2.2v3.27c0 .32.22.7.82.58A12 12 0 0012 0z" /></svg>
                            GITHUB
                        </a>

                    

                        <h2 className="text-xs uppercase  mt-5 text-white font-semibold">Resume</h2>

                        <a
                            href="https://drive.google.com/file/d/1P4QbR-jHs0EQ5KOlh4zUSthVKtwps-iQ/view?usp=sharing"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center text-[#a09a95] hover:text-white transition-colors duration-350 ease-in-out"
                        >
                            TECH RESUME
                        </a>

                        <a
                            href="https://www.instagram.com/manthan_spryzen/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center text-[#a09a95] hover:text-white transition-colors duration-350 ease-in-out"
                        >
                            NON-TECH RESUME
                        </a>

                        <h2 className="text-xs uppercase  mt-5 text-white font-semibold"><span className="underline decoration-[#a09a95]">Blogs</span><sup className="font-sans leading-[0] text-[10px] font-light text-[#ef6e3b]">↗</sup></h2>

                    </div>

                </section>
            </div>
        </main>
    )
}

export { About }
