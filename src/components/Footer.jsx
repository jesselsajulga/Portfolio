import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#111111] text-[#F2F2ED] py-12 border-t border-[#343431]">
      <div className="editorial-container flex flex-col md:flex-row items-baseline justify-between gap-6">
        
        {/* Identity & Colophon */}
        <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-6 font-mono-meta text-xs text-[#777772]">
          <span className="text-[#F2F2ED] font-semibold">
            JESSEL ROME B. SAJULGA
          </span>
          <span>© 2026 · ALL RIGHTS RESERVED</span>
          <span>CAGAYAN DE ORO, PH</span>
        </div>

        {/* Quiet Navigation Links */}
        <div className="flex items-center gap-6 font-mono-meta text-xs text-[#777772]">
          <a
            href="#home"
            className="hover:text-[#FFFFFF] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F2F2ED] rounded-sm"
          >
            TOP ↑
          </a>
          <a
            href="#about"
            className="hover:text-[#FFFFFF] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F2F2ED] rounded-sm"
          >
            ABOUT
          </a>
          <a
            href="#works"
            className="hover:text-[#FFFFFF] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F2F2ED] rounded-sm"
          >
            WORK
          </a>
          <a
            href="#contact"
            className="hover:text-[#FFFFFF] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F2F2ED] rounded-sm"
          >
            CONTACT
          </a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;