"use client";

import React from "react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

// --- HELPERS ---


function ExperienceCard({ role, company, period, desc }: { role: string, company: string, period: string, desc: string }) {
    return (
        <div className="group relative p-6  bg-white/5 border border-white/5 hover:border-white/20 transition-all duration-300">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                <h3 className="text-xl font-semibold text-white group-hover:text-[#fde047] transition-colors">
                    {company}
                </h3>
                <span className="text-xs font-mono text-gray-500 bg-white/5 px-2 py-1 rounded">
                    {period}
                </span>
            </div>
            <p className="text-sm font-medium text-gray-300 mb-2">{role}</p>
            <p className="text-sm text-gray-500 leading-relaxed max-w-2xl">
                {desc}
            </p>
        </div>
    );
}

// --- ANIMATION VARIANTS ---

const fadeInUp: Variants = {
    hidden: {
        opacity: 0,
        y: 40,
        filter: "blur(10px)"
    },
    visible: {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        transition: {
            duration: 0.8,
            ease: "easeOut"
        },
    },
};

const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
        },
    },
};

// --- NAVIGATION COMPONENT ---
function NavBar() {
    // Smooth scroll handler
    const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
        e.preventDefault();
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-[#111111]/80 backdrop-blur-md border-b border-white/5 transition-all duration-300">
            {/* Logo */}
            <a href="/" className="text-white font-sfmono text-lg font-bold tracking-tight hover:opacity-80 transition-opacity">
                SiL3nTL00p
            </a>

            {/* Desktop Links */}
            <div className="hidden md:flex items-center gap-8 text-sm font-sfmono text-gray-400">
                {/* Scroll to Work Section */}
                <a 
                    href="#work" 
                    onClick={(e) => scrollToSection(e, 'work')}
                    className="hover:text-white transition-colors cursor-pointer"
                >
                    work
                </a>
                
                <a href="/about-me" className="text-white">about me</a>
                <a 
                    href="https://drive.google.com/file/d/1P4QbR-jHs0EQ5KOlh4zUSthVKtwps-iQ/view?usp=sharing" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors flex items-center gap-1"
                >
                    resume <span className="text-[10px]">↗</span>
                </a>
            </div>
            
            {/* Mobile Menu Icon (Visual only) */}
            <div className="md:hidden text-white text-xl cursor-pointer">
                ≡
            </div>
        </nav>
    );
}

// --- MAIN COMPONENT ---

function About() {
    return (
        <div className="min-h-screen bg-[#111111]">
            
            <NavBar />

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
                                    My work tracks an evolution from first principles to deployed code. I am driven by the <span className="text-white">quantification of reality</span>—architecting systems that transcend cognitive limits.
                                </p>
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

                    {/* Detailed Experience Cards */}
                    <motion.div 
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-sm font-mono text-gray-500 mb-12 uppercase tracking-widest">
                            // Deep Dive: Experience
                        </h2>
                        <div className="grid gap-4">
                            <ExperienceCard role="Junior Developer" company="AICommunity IITB" period="2025 - NOW" desc="Working with a small team of 8 members to build AI products for insti and freelance projects. Focusing on NLP pipelines and generative models." />
                            <ExperienceCard role="Graphic Designer" company="Techfest" period="2025 - 2026" desc="Supported the design team with social media graphics, print materials, and visual identity systems for Asia's largest Science and Technology festival." />
                        </div>
                    </motion.div>
                </div>

                {/* --- NEW SELECTED WORK SECTION --- */}
                {/* This ID 'work' allows the Navbar to scroll here */}
                <div id="work" className="w-full px-5 mt-40 max-w-[1400px] mx-auto">
                    
                    {/* The "Selected Work" Headline */}
                    <motion.h2 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="text-[12vw] md:text-[8rem] font-bold leading-none tracking-tighter text-[#EBEBF5] mb-[-50px]"
                    >
                        selected work
                    </motion.h2>

                </div>

            </main>
        </div>
    )
}

export { About }