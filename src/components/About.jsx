import React from 'react';

const capabilities = [
  {
    num: "01",
    title: "EMBEDDED SYSTEMS & ROBOTICS",
    summary: "Firmware, microcontrollers, and autonomous mechanical control.",
    stack: "ESP32 · Arduino · Raspberry Pi · Microcontrollers · Feedback & Control · Ultrasonic Sensors",
  },
  {
    num: "02",
    title: "DISCRETE HARDWARE & LOGIC DESIGN",
    summary: "Digital logic synthesis, finite state machines, and hardware prototyping.",
    stack: "Integrated Circuits · Logic Gates · Verilog HDL · 555 Timer IC · Flip-Flops · Breadboarding",
  },
  {
    num: "03",
    title: "SOFTWARE DEVELOPMENT & MACHINE LEARNING",
    summary: "Modern web applications, computer vision models, and low-level assembly.",
    stack: "Python · Deep Learning · Computer Vision · React · JavaScript (ES6+) · Tailwind CSS · MIPS Assembly",
  },
  {
    num: "04",
    title: "NETWORKING & SYSTEM SECURITY",
    summary: "Enterprise topologies, perimeter security, and identity administration.",
    stack: "Cisco CCNA · pfSense Firewalls · Tailscale Overlay VPN · Windows Server · Active Directory · TCP/IP",
  },
  {
    num: "05",
    title: "AUTOMATION & DEVELOPER WORKFLOWS",
    summary: "System integration pipelines, automated evaluation, and dataset quality.",
    stack: "n8n · AI Prompt Engineering · LLM Evaluation & Auditing · Python Scripting · Linux Environments",
  },
];

const About = () => {
  return (
    <section
      id="about"
      className="bg-[#111111] text-[#F2F2ED] py-28 md:py-36 border-b border-[#343431]"
    >
      <div className="editorial-container">

        {/* Section Structural Header */}
        <div className="flex flex-wrap items-baseline justify-between gap-4 pb-6 border-b border-[#343431] mb-16 md:mb-24">
          <div className="flex items-baseline gap-4">
            <span className="font-mono-meta text-xs md:text-sm text-[#F2F2ED] font-semibold">
              02 / ABOUT & CAPABILITIES
            </span>
            <span className="font-mono-meta text-xs md:text-sm text-[#777772]">
              BACKGROUND · PHILOSOPHY · TECHNICAL RANGE
            </span>
          </div>
          <span className="font-mono-meta text-xs md:text-sm text-[#777772]">
            CAGAYAN DE ORO, PH · USTP
          </span>
        </div>

        {/* --- PART 1: EDITORIAL STATEMENT & BACKGROUND (12-Column Grid) --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 mb-24 md:mb-32">

          {/* LEFT: Core Narrative Statement (7 columns) */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div>
              <span className="font-mono-meta text-xs text-[#777772] block mb-4">
                ENGINEERING PHILOSOPHY
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#F2F2ED] leading-tight mb-8">
                I work across the boundary between software logic and physical systems.
              </h2>
            </div>

            <div className="space-y-6 text-base sm:text-lg text-[#B0B0AA] leading-relaxed max-w-2xl">
              <p>
                My background in Computer Engineering is built on understanding technology
                vertically from discrete logic gates and microcontrollers up to modern software
                architectures, neural networks, and computer networks.
              </p>
              <p>
                Inspiration comes from seeing how abstract logic transforms into physical machines
                that sense, decide, and shape reality. I prioritize hands-on prototyping, rigorous
                troubleshooting, and building dependable systems where hardware and code converge.
              </p>
            </div>
          </div>

          {/* RIGHT: Education & Structured Background (5 columns) */}
          <div className="lg:col-span-5 flex flex-col justify-between pt-8 lg:pt-0 border-t lg:border-t-0 border-[#343431]">
            <div className="border border-[#343431] bg-[#181818] p-8 md:p-10 shadow-sm">
              <span className="font-mono-meta text-xs text-[#777772] block mb-6">
                ACADEMIC FOUNDATION
              </span>

              <div className="mb-8">
                <span className="font-mono-meta text-xs text-[#777772] block mb-1">
                  DEGREE
                </span>
                <h3 className="font-heading text-xl md:text-2xl font-bold text-[#F2F2ED] tracking-tight">
                  Bachelor of Science in Computer Engineering
                </h3>
              </div>

              <div className="mb-8">
                <span className="font-mono-meta text-xs text-[#777772] block mb-1">
                  INSTITUTION
                </span>
                <p className="text-base font-medium text-[#F2F2ED]">
                  University of Science and Technology of Southern Philippines (USTP)
                </p>
                <p className="text-xs font-mono-meta text-[#777772] mt-0.5">
                  Cagayan de Oro City, Philippines
                </p>
              </div>

              <div className="pt-6 border-t border-[#343431] flex flex-wrap items-center justify-between gap-2 text-xs font-mono-meta text-[#777772]">
                <span>SPECIALIZATION</span>
                <span className="text-[#F2F2ED] font-semibold">ROBOTICS, AI & IOT</span>
              </div>
            </div>
          </div>

        </div>

        {/* --- PART 2: NUMBERED CAPABILITIES LIST --- */}
        <div className="pt-16 border-t border-[#343431]">

          <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-4 mb-12">
            <div>
              <span className="font-mono-meta text-xs text-[#777772] block mb-2">
                TECHNICAL CAPABILITIES
              </span>
              <h3 className="font-heading text-3xl sm:text-4xl font-bold tracking-tight text-[#F2F2ED]">
                Demonstrated Engineering Range
              </h3>
            </div>
            <p className="text-sm text-[#777772] max-w-md font-mono-meta">
              05 COMPETENCY DOMAINS DEFINED BY PROJECTS & PRACTICE
            </p>
          </div>

          {/* Architectural Numbered Rows */}
          <div className="divide-y divide-[#343431] border-y border-[#343431]">
            {capabilities.map((cap) => (
              <div
                key={cap.num}
                className="py-8 grid grid-cols-1 lg:grid-cols-12 gap-6 items-baseline hover:bg-[#181818]/60 px-4 -mx-4 transition-colors group"
              >
                {/* Index Number */}
                <div className="lg:col-span-1 font-mono-meta text-sm font-semibold text-[#F2F2ED]">
                  {cap.num}
                </div>

                {/* Capability Title & Summary */}
                <div className="lg:col-span-5">
                  <h4 className="font-heading text-lg sm:text-xl font-bold text-[#F2F2ED] tracking-tight mb-1.5">
                    {cap.title}
                  </h4>
                  <p className="text-sm text-[#B0B0AA] leading-relaxed">
                    {cap.summary}
                  </p>
                </div>

                {/* Concrete Technical Stack */}
                <div className="lg:col-span-6 font-mono-meta text-xs md:text-sm text-[#F2F2ED] leading-relaxed">
                  <span className="text-[#777772] block text-[11px] mb-1 lg:hidden">
                    STACK & TOOLS:
                  </span>
                  {cap.stack}
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

export default About;