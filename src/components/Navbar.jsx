import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import throttle from 'lodash/throttle';

const NAV_LINKS = [
  { name: 'About', href: '#about' },
  { name: 'Work', href: '#works' },
  { name: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [activeTab, setActiveTab] = useState('Home');
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Throttled Scroll Spy & border trigger
  useEffect(() => {
    const handleScroll = throttle(() => {
      if (typeof window === 'undefined') return;
      const scrollY = window.scrollY;
      setScrolled(scrollY > 20);

      const scrollPosition = scrollY + 200;
      NAV_LINKS.forEach((link) => {
        const section = document.querySelector(link.href);
        if (section) {
          const { offsetTop, offsetHeight } = section;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveTab(link.name);
          }
        }
      });
      if (scrollY < 180) {
        setActiveTab('Home');
      }
    }, 100);

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      handleScroll.cancel();
    };
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-200 ${scrolled
        ? 'bg-[#111111]/95 backdrop-blur-md border-b border-[#343431]'
        : 'bg-[#111111] border-b border-transparent'
        }`}
    >
      <div className="editorial-container">
        <div className="flex items-center justify-between h-20 md:h-24">

          {/* Pure Typographic Identity */}
          <a
            href="#home"
            className="group flex flex-col focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F2F2ED] rounded-sm"
          >
            <span className="font-heading font-semibold text-sm md:text-base tracking-tight text-[#F2F2ED] group-hover:text-[#FFFFFF] transition-colors">
              JESSEL ROME B. SAJULGA
            </span>
            <span className="font-mono-meta text-[11px] text-[#777772] tracking-wider">
              COMPUTER ENGINEER
            </span>
          </a>

          {/* Desktop Editorial Navigation */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Main Navigation">
            {NAV_LINKS.map((link) => {
              const isActive = activeTab === link.name;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`text-sm tracking-wide font-medium py-1 transition-colors relative focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F2F2ED] rounded-sm ${isActive
                    ? 'text-[#FFFFFF]'
                    : 'text-[#777772] hover:text-[#F2F2ED]'
                    }`}
                >
                  {link.name}
                  {isActive && (
                    <span
                      className="absolute bottom-0 left-0 w-full h-[1.5px] bg-[#FFFFFF]"
                      aria-hidden="true"
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Mobile Menu Toggle Button */}
          <div className="md:hidden flex items-center">
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-[#F2F2ED] hover:text-[#FFFFFF] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F2F2ED] rounded-sm"
              aria-expanded={isOpen}
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            className="md:hidden bg-[#111111] border-b border-[#343431] px-5 py-6 shadow-sm"
          >
            <nav className="flex flex-col gap-4" aria-label="Mobile Navigation">
              {NAV_LINKS.map((link) => {
                const isActive = activeTab === link.name;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`text-lg font-medium py-2 border-b border-[#222220] transition-colors ${isActive ? 'text-[#FFFFFF]' : 'text-[#777772]'
                      }`}
                  >
                    {link.name}
                  </a>
                );
              })}
              <div className="pt-2 text-xs md:text-sm text-[#777772]">
                Cagayan de Oro, PH · USTP
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;