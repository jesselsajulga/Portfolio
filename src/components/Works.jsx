import React from 'react';

import project1 from '../assets/project1.webp';
import project2 from '../assets/project2.webp';
import project3 from '../assets/project3.webp';
import project4 from '../assets/project4.webp';
import project5 from '../assets/project5.webp';
import project6 from '../assets/project6.webp';
import project7 from '../assets/project7.webp';
import project8 from '../assets/project8.webp';
import project9 from '../assets/project9.webp';
import project10 from '../assets/project10.webp';
import project11 from '../assets/project11.webp';
import project12 from '../assets/project12.webp';
import project13 from '../assets/project13.webp';
import project14 from '../assets/project14.webp';
import project15 from '../assets/project15.webp';
import project16 from '../assets/project16.webp';
import project17 from '../assets/project17.webp';
import project18 from '../assets/project18.webp';
import project19 from '../assets/project19.webp';
import project20 from '../assets/competetion.webp';
import deblur from '../assets/deblur.webp';

// --- VERIFIED WORK EXPERIENCE ENTRIES ---
const workExperience = [
  {
    id: "exp-01",
    num: "01",
    role: "AI Trainer",
    company: "DataAnnotation",
    employmentType: "Full time",
    period: "Sep 2026 – Present",
    location: "Remote",
    active: true,
    desc: "Evaluating, training, and fine-tuning large language models. Conducting rigorous code generation reviews, automated reasoning assessment, prompt-response evaluation, and output truthfulness analysis.",
    tags: ["LLM Evaluation", "Code Review", "Prompt Engineering", "Quality Benchmarking"],
  },
  {
    id: "exp-02",
    num: "02",
    role: "Data Annotator",
    company: "Remotasks",
    employmentType: "Full time",
    period: "Jun 2026 – Sep 2026",
    location: "Remote",
    active: false,
    desc: "Structured dataset labeling and quality assurance for machine learning models. Analyzed multi-turn conversational responses, syntax accuracy, and logical deduction consistency.",
    tags: ["Data Annotation", "Model Feedback", "Dataset QA", "Reasoning Audits"],
  },
  {
    id: "exp-03",
    num: "03",
    role: "IT Intern",
    company: "Department of Science and Technology Region X (DOST X)",
    employmentType: "Internship",
    period: "Jan 2026 – Apr 2026",
    location: "Cagayan de Oro, Philippines",
    active: false,
    desc: "Assisted in regional government IT infrastructure support, network configuration, workstation deployment, diagnostic maintenance, and internal technical documentation.",
    tags: ["Network Infrastructure", "System Administration", "IT Support", "Technical Maintenance"],
  },
  {
    id: "exp-04",
    num: "04",
    role: "Computer Technician",
    company: "Freelance",
    employmentType: "Self-Employed",
    period: "Sep 2022 – Jan 2023",
    location: "Cagayan de Oro, Philippines",
    active: false,
    desc: "Component-level hardware diagnostics, custom PC system builds, board inspection, OS reinstallation, storage data recovery, and peripheral optimization.",
    tags: ["Hardware Troubleshooting", "PC Assembly", "Diagnostics", "Component Repair"],
  },
];

// --- 4 CURATED TECHNICAL DOMAINS GROUPING ALL 20 PROJECTS ---
const projectDomains = [
  {
    id: "domain-01",
    num: "01",
    domain: "IoT, Robotics & Embedded Systems",
    summary: "Physical computing, sensor integration, microcontroller firmware, and autonomous robotics platforms bridging software with real-world hardware actuation.",
    featuredProject: {
      title: "Autonomous Sumo Bot",
      year: "2024",
      highlight: "Competitive Robotics",
      desc: "Autonomous competitive sumo combat robot engineered through Feedback and Control Systems course principles. Features real-time edge-detection sensor integration, high-torque motor actuation, and fast reactive decision algorithms.",
      tech: ["Feedback & Control", "Microcontrollers", "Sensor Integration", "Robotics Hardware"],
      image: project15,
    },
    additionalProjects: [
      { name: "ThirstAid! Smart Hydration Monitor", year: "2024", tech: "IoT · Microprocessors · Sensors", image: project13 },
      { name: "Ultrasonic Parking Assistance System", year: "2024", tech: "Arduino · Ultrasonic Sensors · C++", image: project18 },
      { name: "Automatic Traffic Signal Light Prototype", year: "2024", tech: "Microcontrollers · Embedded Logic", image: project19 },
      { name: "Embedded Mini Banking Terminal", year: "2025", tech: "Embedded Systems · Hardware IO", image: project16 },
      { name: "Regulated Linear DC Power Supply", year: "2023", tech: "Analog Electronics · Transformers", image: project14 },
    ],
    skillsDemonstrated: ["Arduino", "Embedded C/C++", "Sensor Integration", "Feedback & Control", "Robotics", "Power Regulation"],
  },
  {
    id: "domain-02",
    num: "02",
    domain: "Logic & Circuit Architecture",
    summary: "Discrete digital logic design, breadboard circuit prototyping, state machine synchronization, and structural Hardware Description Language (HDL) synthesis.",
    featuredProject: {
      title: "Breadboard Competition Champion",
      year: "2025",
      highlight: "1st Place · USTP",
      desc: "First place breadboard circuit design competition entry at USTP. Designed, wired, and debugged complex digital logic architectures under strict constraints using IC logic gates and rapid hardware troubleshooting.",
      tech: ["Integrated Circuits", "Logic Gates", "Breadboard Prototyping", "Rapid Troubleshooting"],
      image: project20,
    },
    additionalProjects: [
      { name: "HDL & Verilog Structural Blocks", year: "2024", tech: "Verilog · HDL Synthesis · Simulation", image: project11 },
      { name: "Finite State Machine Alarm System", year: "2024", tech: "FSM · Sequential Logic · Circuit Design", image: project4 },
      { name: "Christmas Light Sequence Controller", year: "2024", tech: "555 Timer IC · Astable Multivibrator", image: project3 },
      { name: "Anti-Theft Hardware Security Mechanism", year: "2024", tech: "Flip-Flops · Memory · Digital Logic", image: project2 },
      { name: "Simple LCD Logic Display Circuit", year: "2024", tech: "IC Drivers · Alphanumeric Display", image: project1 },
    ],
    skillsDemonstrated: ["Verilog HDL", "Logic Gates (TTL/CMOS)", "Finite State Machines", "Flip-Flops", "555 Timer IC", "Rapid Breadboarding"],
  },
  {
    id: "domain-03",
    num: "03",
    domain: "Networking, Infrastructure & Security",
    summary: "Enterprise network topologies, routing & switching protocols, perimeter firewall hardening, identity access management, and vulnerability penetration testing.",
    featuredProject: {
      title: "Enterprise Network Infrastructure & Security",
      year: "2025",
      highlight: "Cisco Certified (CCNA)",
      desc: "Cisco Certified Network Associate (CCNA) testbed implementation. Spans routing/switching, IP connectivity, automated Python scripts, pfSense perimeter firewalling, Tailscale overlay VPNs, and Windows Server Active Directory domain hardening.",
      tech: ["Cisco CCNA", "pfSense", "Tailscale VPN", "Active Directory", "Python"],
      image: project10,
    },
    additionalProjects: [
      { name: "Active Directory & Windows Server Infrastructure", year: "2025", tech: "Windows Server · Active Directory · RBAC", image: project17 },
      { name: "White-Hat Penetration Testing & Firewalling", year: "2025", tech: "Cybersecurity · pfSense · Tailscale", image: project12 },
    ],
    skillsDemonstrated: ["Cisco CCNA", "pfSense Firewalls", "Tailscale VPN", "Windows Server", "Active Directory", "TCP/IP & Subnetting", "Python Network Scripting"],
  },
  {
    id: "domain-04",
    num: "04",
    domain: "Software Development & Machine Learning",
    summary: "Machine learning computer vision models, modern web applications, low-level microprocessor assembly, and AI workflow automation.",
    featuredProject: {
      title: "Image Deblurring Neural Network",
      year: "2026",
      highlight: "Machine Learning / Computer Vision",
      desc: "Deep learning computer vision system trained to restore and sharpen blurred photographic images. Implements convolutional architectures to recover fine high-frequency edge textures and resolve motion/optical defocus artifacts.",
      tech: ["Machine Learning", "Computer Vision", "Python", "Deep Learning", "CNN / Neural Networks"],
      image: deblur,
    },
    additionalProjects: [
      { name: "Sensory Prediction Web Engine", year: "2026", tech: "Python · Machine Learning · Tailwind · Web UI", image: project7 },
      { name: "MIPS Architecture & Assembly Pipeline", year: "2025", tech: "MIPS Assembly · Computer Architecture", image: project9 },
      { name: "n8n Workflow Automation Extension", year: "2025", tech: "n8n · AI Automation · Scripting", image: project8 },
      { name: "Portfolio Architecture & Showcase", year: "2026", tech: "React · Vite · Tailwind CSS · Motion", image: project5 },
      { name: "Calculus Problem Solver Calculator", year: "2022", tech: "HTML5 · JavaScript · Evaluation APIs", image: project6 },
    ],
    skillsDemonstrated: ["Machine Learning", "Computer Vision", "Python", "React", "JavaScript", "MIPS Assembly", "n8n Automation"],
  },
];

const Works = () => {
  return (
    <section
      id="works"
      className="bg-[#111111] text-[#F2F2ED] py-28 md:py-36 border-b border-[#343431]"
    >
      <div className="editorial-container">

        {/* --- 01. WORK EXPERIENCE SECTION --- */}
        <div id="experience" className="mb-32">

          {/* Eyebrow & Section Header */}
          <div className="flex flex-wrap items-baseline justify-between gap-4 pb-6 border-b border-[#343431] mb-12 md:mb-16">
            <div className="flex items-baseline gap-4">
              <span className="font-mono-meta text-xs md:text-sm text-[#F2F2ED] font-semibold">
                03 / WORK EXPERIENCE
              </span>
              <span className="font-mono-meta text-xs md:text-sm text-[#777772]">
                4 POSITIONS
              </span>
            </div>
            <span className="font-mono-meta text-xs text-[#777772]">
              ROLES · INTERNSHIPS · TECHNICAL PRACTICE
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-12">
            <div className="lg:col-span-5">
              <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#F2F2ED] mb-4">
                Professional Experience
              </h2>
              <p className="text-base text-[#B0B0AA] leading-relaxed max-w-md">
                Industry experience spanning AI model training, data annotation quality assurance, regional government IT infrastructure support, and freelance hardware engineering.
              </p>
            </div>

            {/* Experience Timeline Rows */}
            <div className="lg:col-span-7 divide-y divide-[#343431] border-y border-[#343431]">
              {workExperience.map((exp) => (
                <div
                  key={exp.id}
                  className="py-8 group hover:bg-[#181818]/60 px-4 -mx-4 transition-colors"
                >
                  <div className="flex flex-wrap items-baseline justify-between gap-2 mb-2 font-mono-meta text-xs text-[#777772]">
                    <div className="flex items-center gap-2">
                      <span className="text-[#F2F2ED] font-medium">{exp.num}</span>
                      <span>{exp.period}</span>
                      {exp.active && (
                        <span className="text-[10px] text-[#F2F2ED] border border-[#777772] px-1.5 py-0.2 rounded-sm">
                          CURRENT
                        </span>
                      )}
                    </div>
                    <span>{exp.location} · {exp.employmentType.toUpperCase()}</span>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-3">
                    <h3 className="font-heading text-xl sm:text-2xl font-semibold text-[#F2F2ED] tracking-tight">
                      {exp.role}
                    </h3>
                    <span className="text-base font-medium text-[#F2F2ED]">
                      {exp.company}
                    </span>
                  </div>

                  <p className="text-sm md:text-base text-[#B0B0AA] leading-relaxed mb-4">
                    {exp.desc}
                  </p>

                  <div className="font-mono-meta text-xs text-[#777772]">
                    {exp.tags.join(" · ")}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* --- 02. CURATED TECHNICAL DOMAINS & ALL 20 PROJECTS --- */}
        <div id="project-domains" className="pt-12 border-t border-[#343431]">

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div>
              <div className="flex items-baseline gap-4 mb-2">
                <span className="font-mono-meta text-xs text-[#F2F2ED] font-semibold">
                  03.B / TECHNICAL DOMAINS & PROJECTS
                </span>
                <span className="font-mono-meta text-xs text-[#777772]">
                  4 DOMAINS · 20 ENTRIES
                </span>
              </div>
              <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#F2F2ED]">
                Curated Engineering Work
              </h2>
            </div>
            <p className="text-sm text-[#B0B0AA] max-w-md">
              A curated showcase of 20 verified engineering projects, organized into four technical capabilities.
            </p>
          </div>

          {/* 4 Curated Domain Cards */}
          <div className="space-y-24 md:space-y-32">
            {projectDomains.map((domain, idx) => {
              const isInverted = idx % 2 === 1;

              return (
                <article
                  key={domain.id}
                  className="pt-8 border-t border-[#343431] group"
                >
                  {/* Category Eyebrow */}
                  <div className="flex flex-wrap items-baseline justify-between gap-4 font-mono-meta text-xs text-[#777772] mb-6">
                    <div className="flex items-baseline gap-3">
                      <span className="text-[#F2F2ED] font-medium">DOMAIN {domain.num}</span>
                      <span className="text-[#F2F2ED] font-semibold text-sm">
                        {domain.domain.toUpperCase()}
                      </span>
                    </div>
                    <span>{domain.additionalProjects.length + 1} PROJECTS CATALOGED</span>
                  </div>

                  {/* Domain Overview Description */}
                  <p className="text-[#B0B0AA] text-base md:text-lg max-w-3xl mb-10 leading-relaxed">
                    {domain.summary}
                  </p>

                  {/* Asymmetric Featured Project Presentation */}
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center mb-12">

                    {/* Visual Stage */}
                    <div className={`lg:col-span-7 ${isInverted ? 'lg:order-2' : 'lg:order-1'}`}>
                      <div className="relative border border-[#343431] bg-[#181818] overflow-hidden">
                        <img
                          src={domain.featuredProject.image}
                          alt={domain.featuredProject.title}
                          loading="lazy"
                          className="w-full h-[280px] sm:h-[360px] lg:h-[400px] object-cover grayscale contrast-110 group-hover:grayscale-0 transition-all duration-500 block"
                        />
                        <div className="absolute top-4 left-4 bg-[#111111]/90 backdrop-blur-sm border border-[#343431] px-3 py-1 text-[11px] font-mono-meta text-[#F2F2ED]">
                          FEATURED: {domain.featuredProject.highlight}
                        </div>
                      </div>
                    </div>

                    {/* Featured Narrative */}
                    <div className={`lg:col-span-5 flex flex-col justify-between ${isInverted ? 'lg:order-1' : 'lg:order-2'}`}>
                      <div>
                        <div className="flex items-center gap-3 font-mono-meta text-xs text-[#777772] mb-2">
                          <span>{domain.featuredProject.year}</span>
                          <span>·</span>
                          <span className="text-[#F2F2ED] font-medium">FLAGSHIP PROTOTYPE</span>
                        </div>

                        <h3 className="font-heading text-2xl sm:text-3xl font-semibold text-[#F2F2ED] tracking-tight mb-4">
                          {domain.featuredProject.title}
                        </h3>

                        <p className="text-sm md:text-base text-[#B0B0AA] leading-relaxed mb-6">
                          {domain.featuredProject.desc}
                        </p>
                      </div>

                      <div className="pt-4 border-t border-[#343431]">
                        <span className="font-mono-meta text-[11px] text-[#777772] block mb-1.5">
                          CORE ARCHITECTURE
                        </span>
                        <div className="text-xs font-mono-meta text-[#F2F2ED]">
                          {domain.featuredProject.tech.join(" · ")}
                        </div>
                      </div>
                    </div>

                  </div>

                  {/* Additional Cataloged Projects in this Domain */}
                  <div className="bg-[#161616] border border-[#343431] p-6 md:p-8 rounded-sm mb-6">
                    <span className="font-mono-meta text-[11px] text-[#777772] block mb-4">
                      ADDITIONAL VERIFIED PROJECTS IN THIS DOMAIN ({domain.additionalProjects.length})
                    </span>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                      {domain.additionalProjects.map((proj) => (
                        <div
                          key={proj.name}
                          className="p-3.5 bg-[#111111] border border-[#2a2a27] hover:border-[#3e3e3a] transition-colors rounded-sm flex flex-col justify-between"
                        >
                          <div>
                            <div className="flex items-center justify-between text-[11px] font-mono-meta text-[#777772] mb-1.5">
                              <span>{proj.year}</span>
                            </div>
                            <h4 className="text-sm font-medium text-[#F2F2ED] mb-2 leading-snug">
                              {proj.name}
                            </h4>
                          </div>
                          <span className="text-[11px] font-mono-meta text-[#909088]">
                            {proj.tech}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Skills Demonstrated Tag Strip */}
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-2 pt-2 text-xs font-mono-meta">
                    <span className="text-[#777772]">SKILLS DEMONSTRATED:</span>
                    {domain.skillsDemonstrated.map((skill, sIdx) => (
                      <span key={skill} className="text-[#B0B0AA]">
                        {skill}{sIdx < domain.skillsDemonstrated.length - 1 ? " ·" : ""}
                      </span>
                    ))}
                  </div>

                </article>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};

export default Works;