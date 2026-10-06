import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import profileImg from '../assets/profile.webp';

const Hero = () => {
  return (
    <section
      id="home"
      className="bg-[#111111] text-[#F2F2ED] pt-32 md:pt-40 pb-20 md:pb-28 border-b border-[#343431]"
    >
      <div className="editorial-container">

        {/* Top structural eyebrow & metadata line */}
        <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-[#343431] mb-12 md:mb-16">
          <span className="font-mono-meta text-xs md:text-sm text-[#F2F2ED] font-semibold">
            01 / IDENTITY & INTRODUCTION
          </span>
          <span className="font-mono-meta text-xs md:text-sm text-[#777772]">
            CAGAYAN DE ORO, PH · USTP
          </span>
        </div>

        {/* 12-Column Asymmetric Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">

          {/* LEFT: Typographic Hierarchy & Positioning (7 cols on desktop) */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div>
              <p className="font-mono-meta text-xs md:text-sm text-[#777772] mb-4">
                COMPUTER ENGINEER / BUILDER
              </p>

              <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-[#F2F2ED] mb-8">
                Jessel Rome <br />
                Sajulga
              </h1>

              <p className="text-xl sm:text-2xl md:text-3xl font-normal text-[#F2F2ED] leading-tight max-w-2xl mb-8">
                I build systems that connect software logic, electronics, and the physical world.
              </p>

              <p className="text-base md:text-lg text-[#B0B0AA] leading-relaxed max-w-xl mb-10">
                Focused on hands-on prototyping and systems integration spanning digital logic,
                embedded microcontrollers, robotics, and connected software.
              </p>
            </div>

            {/* Editorial Calls to Action */}
            <div className="flex flex-wrap items-center gap-6 pt-6 border-t border-[#343431] mb-8">
              <a
                href="#works"
                className="inline-flex items-center gap-2 bg-[#F2F2ED] text-[#111111] hover:bg-[#FFFFFF] hover:text-[#000000] px-6 py-3.5 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F2F2ED] rounded-sm"
              >
                <span>Selected work</span>
                <ArrowUpRight size={16} />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 border border-[#343431] text-[#F2F2ED] hover:border-[#F2F2ED] hover:text-[#FFFFFF] px-6 py-3.5 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F2F2ED] rounded-sm"
              >
                <span>Get in touch</span>
                <ArrowUpRight size={16} />
              </a>
            </div>

            {/* Quick Credentials / Education Line */}
            <div className="flex flex-wrap gap-x-8 gap-y-2 text-xs md:text-sm text-[#777772] font-mono-meta">
              <div>
                <span className="text-[#555550]">DEGREE:</span> BS Computer Engineering
              </div>
              <div>
                <span className="text-[#555550]">INSTITUTION:</span> USTP
              </div>
            </div>

          </div>

          {/* RIGHT: Editorial Portrait Composition (5 cols on desktop) */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="relative border border-[#343431] bg-[#181818] overflow-hidden">
              <img
                src={profileImg}
                alt="Jessel Rome Sajulga portrait"
                className="w-full h-auto object-cover grayscale contrast-105 hover:grayscale-0 transition-all duration-500 block"
                loading="eager"
              />
            </div>

            {/* Architectural caption / photo metadata */}
            <div className="flex items-center justify-between pt-3 text-[11px] font-mono-meta text-[#777772]">
              <span>FIG. 01 — PORTRAIT</span>
              <span>JESSEL ROME B. SAJULGA</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Hero;