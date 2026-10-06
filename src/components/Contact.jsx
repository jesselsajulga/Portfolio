import React from 'react';
import { ArrowUpRight, Mail } from 'lucide-react';

const socialLinks = [
  {
    name: 'GitHub',
    handle: '@jesselsajulga',
    url: 'https://github.com/jesselsajulga',
  },
  {
    name: 'LinkedIn',
    handle: 'Jessel Rome',
    url: 'https://www.linkedin.com/in/jessel-rome-b-sajulga-b22b843a4/',
  },
  {
    name: 'Messenger',
    handle: '@itsmejesselsajulga',
    url: 'https://www.facebook.com/itsmejesselsajulga',
  },
  {
    name: 'Instagram',
    handle: '@_jcieee1',
    url: 'https://www.instagram.com/_jcieee1/',
  },
];

const Contact = () => {
  return (
    <section
      id="contact"
      className="bg-[#111111] text-[#F2F2ED] py-28 md:py-36 border-b border-[#343431]"
    >
      <div className="editorial-container">

        {/* Section Structural Header */}
        <div className="flex flex-wrap items-baseline justify-between gap-4 pb-6 border-b border-[#343431] mb-16 md:mb-24">
          <div className="flex items-baseline gap-4">
            <span className="font-mono-meta text-xs md:text-sm text-[#F2F2ED] font-semibold">
              04 / CONTACT
            </span>
            <span className="font-mono-meta text-xs md:text-sm text-[#777772]">
              COMMUNICATION · INQUIRIES · COLLABORATION
            </span>
          </div>
          <span className="font-mono-meta text-xs md:text-sm text-[#777772]">
            CAGAYAN DE ORO, PH
          </span>
        </div>

        {/* 12-Column Asymmetric Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">

          {/* Left: Main Editorial Invitation (7 columns) */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div>
              <span className="font-mono-meta text-xs text-[#777772] block mb-4">
                GET IN TOUCH
              </span>
              <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#F2F2ED] leading-tight mb-8">
                Let's build something dependable.
              </h2>
              <p className="text-base sm:text-lg text-[#B0B0AA] leading-relaxed max-w-xl mb-10">
                Whether you have an embedded systems prototype, machine learning challenge, hardware infrastructure project, or full-time opportunity, I am always open to discussing new work.
              </p>
            </div>

            {/* Direct Email Callout */}
            <div className="pt-8 border-t border-[#343431]">
              <span className="font-mono-meta text-xs text-[#777772] block mb-3">
                PRIMARY EMAIL INQUIRY
              </span>
              <a
                href="mailto:sajulga.jessel123@gmail.com"
                className="group inline-flex items-center gap-3 text-xl sm:text-2xl md:text-3xl font-semibold text-[#F2F2ED] hover:text-[#FFFFFF] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F2F2ED] rounded-sm"
              >
                <Mail size={24} className="text-[#777772] group-hover:text-[#F2F2ED] transition-colors shrink-0" />
                <span className="underline underline-offset-8 decoration-[#343431] group-hover:decoration-[#F2F2ED] transition-colors">
                  sajulga.jessel123@gmail.com
                </span>
                <ArrowUpRight size={22} className="text-[#777772] group-hover:text-[#FFFFFF] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0" />
              </a>
            </div>
          </div>

          {/* Right: Channels & Directory (5 columns) */}
          <div className="lg:col-span-5 flex flex-col justify-between pt-8 lg:pt-0 border-t lg:border-t-0 border-[#343431]">
            <div className="border border-[#343431] bg-[#181818] p-8 md:p-10">
              <span className="font-mono-meta text-xs text-[#777772] block mb-6">
                PROFILES & CHANNELS
              </span>

              <div className="divide-y divide-[#343431]">
                {socialLinks.map((item) => (
                  <a
                    key={item.name}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-4 flex items-center justify-between group hover:bg-[#111111]/40 px-2 -mx-2 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F2F2ED] rounded-sm"
                  >
                    <div>
                      <span className="font-heading font-medium text-base text-[#F2F2ED] group-hover:text-[#FFFFFF] block transition-colors">
                        {item.name}
                      </span>
                      <span className="font-mono-meta text-xs text-[#777772]">
                        {item.handle}
                      </span>
                    </div>
                    <ArrowUpRight
                      size={16}
                      className="text-[#777772] group-hover:text-[#FFFFFF] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
                    />
                  </a>
                ))}
              </div>

              <div className="pt-6 mt-6 border-t border-[#343431] flex items-center justify-between text-xs font-mono-meta text-[#777772]">
                <span>AVAILABILITY</span>
                <span className="text-[#F2F2ED] font-semibold">OPEN TO ENGAGEMENTS</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;