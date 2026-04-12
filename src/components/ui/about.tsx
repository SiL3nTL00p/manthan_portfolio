"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Variants } from "framer-motion";

// --- HELPERS ---

// Terminal-style Experience Section
function TerminalExperience() {
    const experiences = [
        {
            company: "AICommunity IITB",
            period: "2025 - NOW",
            role: "Junior Developer",
            desc: "Working with a small team of 8 members to build AI products for insti and freelance projects. Focusing on NLP pipelines and generative models."
        },
        {
            company: "Techfest",
            period: "2025 - 2026",
            role: "Graphic Designer",
            desc: "Supported the design team with social media graphics, print materials, and visual identity systems for Asia's largest Science and Technology festival."
        }
    ];

    return (
        <div className="bg-[#111111] rounded-md p-5 font-mono text-[15px] text-gray-200 border border-white/5 max-w-2xl mx-auto">
            <div className="mb-4 flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded bg-red-500 inline-block"></span>
                <span className="h-2.5 w-2.5 rounded bg-yellow-500 inline-block"></span>
                <span className="h-2.5 w-2.5 rounded bg-green-500 inline-block"></span>
                <span className="ml-3 text-gray-500 text-xs">manthan@portfolio:~$</span>
            </div>
            <div className="space-y-6">
                {experiences.map((exp, idx) => (
                    <div key={exp.company}>
                        <div className="flex flex-wrap items-center gap-2">
                            <span className="text-gray-400">$</span>
                            <span className="text-gray-300">cat</span>
                            <span className="text-gray-500">./experience/{exp.company.replace(/\s/g, '').toLowerCase()}</span>
                            <span className="text-gray-600 ml-2 text-xs">[{exp.period}]</span>
                        </div>
                        <div className="pl-6 mt-1">
                            <span className="text-gray-500">role:</span> <span className="text-gray-200">{exp.role}</span><br />
                            <span className="text-gray-500">desc:</span> <span className="text-gray-200">{exp.desc}</span>
                        </div>
                        {idx !== experiences.length - 1 && <div className="border-b border-white/5 my-4" />}
                    </div>
                ))}
            </div>
        </div>
    );
}

// --- ANIMATION VARIANTS ---

const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 40, filter: "blur(10px)" },
    visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.8, ease: "easeOut" } },
};

const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
};

const menuVariants: Variants = {
    closed: { opacity: 0, y: -100 },
    open: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeInOut" } }
};

const linkVariants = {
    closed: { opacity: 0, y: 20 },
    open: (i: number) => ({ opacity: 1, y: 0, transition: { delay: 0.1 + i * 0.1, duration: 0.4 } })
};

// --- NAVIGATION COMPONENT ---
function NavBar() {
    const [isOpen, setIsOpen] = useState(false);

    // Lock body scroll when menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isOpen]);

    const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
        setIsOpen(false); // Close menu on click
        // If we are already on the page, just scroll
        const element = document.getElementById(id);
        if (element) {
            e.preventDefault();
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <>
            <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-5 py-3 md:px-6 md:py-4 bg-[#111111] border-b border-white/5 transition-all duration-300">
                {/* Logo */}
                <a href="/" className="text-white font-sfmono text-base md:text-lg font-bold tracking-tight hover:opacity-80 transition-opacity z-50 relative">
                    SiL3nTL00p
                </a>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center gap-8 text-sm font-sfmono text-gray-400">
                    <a href="/#work" onClick={(e) => scrollToSection(e, 'work')} className="hover:text-white transition-colors cursor-pointer">work</a>
                    <a href="/blogs" className="hover:text-white transition-colors cursor-pointer">blogs</a>
                    <a href="/shaped" className="hover:text-white transition-colors cursor-pointer">~/me</a>
                    <a href="https://drive.google.com/drive/folders/1BJFK9gJ529U1H1FGIO8SsF8avREJUg-r?usp=sharing" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-1">
                        resume <span className="text-[10px]">↗</span>
                    </a>
                </div>

                {/* Mobile Menu Toggle (Hamburger / Close) */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden text-white text-xl z-50 relative focus:outline-none"
                >
                    {isOpen ? "✕" : "≡"}
                </button>
            </nav>

            {/* FULL SCREEN MOBILE MENU OVERLAY */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial="closed"
                        animate="open"
                        exit="closed"
                        variants={menuVariants}
                        className="fixed inset-0 bg-[#111111] z-40 flex flex-col justify-start pt-24 px-6 md:hidden"
                    >
                        <div className="flex flex-col gap-5">
                            <motion.a
                                custom={0}
                                variants={linkVariants}
                                href="/#work"
                                onClick={(e) => scrollToSection(e, 'work')}
                                className="text-xl font-semibold text-gray-500 tracking-tight font-sfmono"
                            >
                                work
                            </motion.a>
                            <motion.a
                                custom={1}
                                variants={linkVariants}
                                href="/blogs"
                                className="text-xl font-semibold text-gray-500 tracking-tight font-sfmono"
                            >
                                blogs
                            </motion.a>
                            <motion.a
                                custom={2}
                                variants={linkVariants}
                                href="/shaped"
                                className="text-xl font-semibold text-gray-500 tracking-tight font-sfmono"
                            >
                                ~/me
                            </motion.a>
                            <motion.a
                                custom={3}
                                variants={linkVariants}
                                href="https://drive.google.com/drive/folders/1BJFK9gJ529U1H1FGIO8SsF8avREJUg-r?usp=sharing"
                                target="_blank"
                                className="text-xl font-semibold text-gray-500 tracking-tight font-sfmono"
                            >
                                resume
                            </motion.a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}

// --- MAIN COMPONENT ---

function About() {
    return (
        <div id="about" className="min-h-screen bg-[#111111]">

            <main className="flex flex-col items-center justify-start bg-[#111111] text-white font-sfmono relative z-10 pt-24 animate-in fade-in duration-1000 pb-20">

                <div className="w-full px-5 max-w-5xl mx-auto">
                    {/* Trajectory Section */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start mb-32">
                        <motion.div
                            variants={staggerContainer}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="space-y-8"
                        >
                            <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold tracking-tight text-white">
                                The Trajectory
                            </motion.h2>
                            <motion.div variants={fadeInUp} className="space-y-6 text-[15px] md:text-[16px] text-gray-400 leading-relaxed">
                                <p>
                                    I synthesize <span className="text-white">machine learning theory</span> with practical engineering, solving complex puzzles through the lens of a student-builder.
                                </p>
                                <p>
                                    My work tracks an evolution from first principles to deployed code. I am driven by the <span className="text-white">quantification of reality</span>, architecting systems that transcend cognitive limits.
                                </p>
                                <p>
                                    My current obsession?<span className="text-white"> Hacking biology with code.</span> I’m driven by the math behind living systems and building AI that can understand health data better than we can. It's about quantifying reality to architect systems that transcend cognitive limits.
                                </p>
                                {/* THE SIGNATURE */}
                                <p className="pt-4 text-gray-500 text-right">
                                    — <span className="font-sfmono text-gray-500 text-lg">manthan</span> <br />
                                    <span className="font-sfmono text-gray-500 text-base mt-2 block">Sophomore @ IIT Bombay</span>
                                </p>

                                {/* GET IN TOUCH SECTION */}
                                <div className="mt-8 flex justify-end items-center gap-3">
                                    <p className="text-gray-500 text-sm font-sfmono">get in touch</p>
                                    <div className="flex gap-3">
                                        <a
                                            href="https://www.linkedin.com/in/manthan-p-6457b3313"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-gray-400 hover:text-white transition-colors duration-300"
                                            title="LinkedIn"
                                        >
                                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"/>
                                            </svg>
                                        </a>
                                        <a
                                            href="https://x.com/manthan_spryzen"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-gray-400 hover:text-white transition-colors duration-300"
                                            title="X"
                                        >
                                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.6l-5.165-6.754L2.88 21.75H-2.328l7.732-8.835L-1.537 2.25h6.749l4.946 6.278L18.244 2.25zM17.41 19.97h1.835L5.293 4.028H3.382L17.41 19.97z"/>
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, filter: "blur(20px)" }}
                            whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                            transition={{ duration: 1, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="relative aspect-square md:aspect-[3/4] rounded-2xl overflow-hidden bg-neutral-900 border border-white/5 group"
                        >
                            <img src="https://framerusercontent.com/images/b9ayqjyFJxYrxbpev1rjq1HOk.jpg" alt="Manthan Portrait" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out" />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-transparent opacity-60" />
                        </motion.div>
                    </div>

                    {/* Terminal-style Experience Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-base font-mono text-gray-500 mb-12 uppercase tracking-widest">
                            // Deep Dive: Experience
                        </h2>
                        <TerminalExperience />
                    </motion.div>
                </div>

                {/* --- SELECTED WORK SECTION --- */}
                <div id="work" className="w-full px-5 mt-16 max-w-5xl mx-auto">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-base font-mono text-gray-500 uppercase tracking-widest mb-8 whitespace-nowrap md:mb-[-275px]"
                    >
                        // selected work
                    </motion.h2>
                </div>


            </main>
        </div>
    )
}

export { About, NavBar }