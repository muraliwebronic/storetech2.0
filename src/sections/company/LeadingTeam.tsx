"use client";

import React from "react";
import { Users, Linkedin, Github, ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function LeadingTeam() {
  
  const teamData = [
    {
      name: "Suryanarayanan",
      role: "Partner, StoreTech",
      initials: "S",
      description: "Leading business development and strategic partnerships. 15+ years in retail technology and payment solutions.",
      socials: {
        linkedin: "#",
        github: "#"
      }
    },
    {
      name: "Technical Team",
      role: "Engineering & Product",
      initials: "T",
      description: "Expert engineers in IoT, AI/ML, and cloud infrastructure. Former leaders from top tech companies.",
      socials: {
        linkedin: "#",
        github: "#"
      }
    },
    {
      name: "Operations Team",
      role: "Deployment & Support",
      initials: "O",
      description: "24/7 operations team with deep retail experience. Proven track record in large-scale deployments.",
      socials: {
        linkedin: "#",
        github: "#"
      }
    },
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden border-t border-gray-100">
      
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gray-50 rounded-full blur-[100px] -z-10 opacity-70" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* --- HEADER --- */}
        <div className="flex flex-col items-center text-center gap-6 mb-20 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black text-xs font-bold uppercase tracking-widest text-white shadow-lg">
             <Users size={14} className="text-white" />
             Our Leadership
          </div>
          <h2 className="text-4xl md:text-5xl font-bold font-display text-black tracking-tight leading-tight">
             Visionaries & Builders
          </h2>
          <p className="text-gray-500 max-w-xl text-lg font-light leading-relaxed">
            Experienced professionals with deep expertise in retail technology, payments, and scaling operations.
          </p>
        </div>

        {/* --- TEAM GRID --- */}
        <div className="grid lg:grid-cols-3 gap-8">
          {teamData.map((member, i) => (
            <TeamCard key={i} {...member} />
          ))}
        </div>
      </div>
    </section>
  );
}

// --- PROFESSIONAL TEAM CARD ---
function TeamCard({
  name,
  role,
  initials,
  description,
  socials,
}: {
  name: string;
  role: string;
  initials: string;
  description: string;
  socials: { linkedin: string; github: string };
}) {
  return (
    <div className="group relative flex flex-col p-8 rounded-[2.5rem] bg-gray-50 border border-gray-100 transition-all duration-500 hover:bg-white hover:border-black hover:shadow-2xl hover:shadow-black/10 hover:-translate-y-2">
      
      {/* Top: Avatar & Role */}
      <div className="flex items-start justify-between mb-8">
        
        {/* Monogram Avatar */}
        <div className="h-20 w-20 rounded-2xl bg-white border border-gray-200 flex items-center justify-center text-3xl font-bold font-display text-black shadow-sm group-hover:bg-black group-hover:text-white group-hover:scale-110 transition-all duration-300">
          {initials}
        </div>

        {/* Social Links (Fade in on Hover) */}
        <div className="flex gap-3 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 delay-100">
           <Link href={socials.linkedin} className="p-2 rounded-full bg-gray-100 hover:bg-blue-600 hover:text-white text-gray-500 transition-colors">
              <Linkedin size={18} />
           </Link>
           <Link href={socials.github} className="p-2 rounded-full bg-gray-100 hover:bg-black hover:text-white text-gray-500 transition-colors">
              <Github size={18} />
           </Link>
        </div>
      </div>

      {/* Middle: Content */}
      <div className="mb-6">
        <h3 className="text-2xl font-bold text-gray-900 group-hover:text-black mb-1">
          {name}
        </h3>
        <p className="text-xs font-bold uppercase tracking-widest text-gray-400 group-hover:text-black transition-colors">
          {role}
        </p>
      </div>

      {/* Bottom: Description */}
      <p className="text-sm text-gray-500 leading-relaxed font-medium group-hover:text-gray-600">
        {description}
      </p>

      {/* Decorative Corner Icon */}
      <div className="absolute bottom-8 right-8 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300">
         <ArrowUpRight size={20} className="text-gray-400" />
      </div>

    </div>
  );
}