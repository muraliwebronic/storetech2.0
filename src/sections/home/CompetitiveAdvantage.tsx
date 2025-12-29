"use client";

import React from "react";
import { Check, X, Minus, AlertCircle } from "lucide-react";

// --- DATA ---
const tableData = [
  {
    name: "Amazon Just Walk Out",
    desc: "Computer vision solution",
    hardware: { label: "Complex setup", status: "negative" },
    platform: { label: "Single format", status: "negative" },
    isWinner: false,
  },
  {
    name: "Traditional SCO",
    desc: "Legacy self-checkout",
    hardware: { label: "Multiple vendors", status: "negative" },
    platform: { label: "Checkout only", status: "negative" },
    isWinner: false,
  },
  {
    name: "CV Startups",
    desc: "Computer vision only",
    hardware: { label: "Limited", status: "warning" },
    platform: { label: "Single focus", status: "negative" },
    isWinner: false,
  },
  {
    name: "StoreTech",
    desc: "Consolidated platform",
    hardware: { label: "Single terminal", status: "positive" },
    platform: { label: "Full ecosystem", status: "positive" },
    isWinner: true, 
  },
];

export default function CompetitiveAdvantage() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      
      {/* Background Decor (Subtle Grid) */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        
        {/* --- HEADER --- */}
        <div className="flex flex-col items-center text-center gap-6 mb-20 max-w-4xl mx-auto">
      
  {/* Pill Label (Style A) with Content "Market Analysis" */}
  <div className="relative overflow-hidden rounded-full bg-black px-6 py-2 shadow-xl group">
    <div className="shine-effect opacity-50" />
    <span className="relative z-10 text-xs font-bold text-white uppercase tracking-[0.25em]">
      Market Analysis
    </span>
  </div>

  {/* Headline (Style A) with Content "Don't settle for fragmented tools" */}
  <h2 className="text-3xl md:text-5xl font-bold leading-tight font-display text-gray-900">
    Why 
    <span className="bg-gradient-to-r from-black via-gray-700 to-gray-500 bg-clip-text text-transparent">
      StoreTech Wins
    </span>
  </h2>

  {/* Subtext (Style A) with Content "Compare the features..." */}
  <p className="text-gray-500 max-w-2xl  text-sm md:text-lg font-light">
    Our unique approach to hardware consolidation gives us a sustainable competitive advantage
  </p>

</div>

        {/* --- COMPARISON CARD --- */}
        <div className="max-w-5xl mx-auto rounded-[2.5rem] bg-gray-50 p-2 md:p-4 border border-gray-100 shadow-2xl shadow-gray-200/50">
          
          {/* Grid Header */}
          <div className="hidden md:grid grid-cols-12 gap-4 px-8 py-4 text-xs font-bold text-gray-400 uppercase tracking-widest">
            <div className="col-span-5">Solution</div> 
            <div className="col-span-4 pl-4">Hardware</div>
            <div className="col-span-3 text-right">Platform</div>
          </div>

          {/* Grid Rows */}
          <div className="flex flex-col gap-3">
            {tableData.map((row, index) => (
              <div
                key={index}
                className={`relative grid grid-cols-1 md:grid-cols-12 items-center gap-6 p-6 md:px-8 md:py-6 rounded-[2rem] transition-all duration-500
                  ${
                    row.isWinner
                      ? "bg-black text-white shadow-2xl shadow-black/40 scale-[1.02] z-10" // Winner Style
                      : "bg-white text-gray-600 border border-transparent hover:border-gray-200 hover:shadow-lg" // Competitor Style
                  }
                `}
              >
                {/* Shine Animation for Winner */}
                {row.isWinner && (
                  <div className="shine-effect absolute inset-0 rounded-[2rem] opacity-20 pointer-events-none" />
                )}

                {/* Column 1: Identity */}
                <div className="col-span-1 md:col-span-5 relative z-10">
                  <div className="flex items-center gap-4">
                     {/* Icon Avatar */}
                     <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full ${row.isWinner ? "bg-white text-black" : "bg-gray-100 text-gray-400"}`}>
                        {row.isWinner ? <Check strokeWidth={3} size={20} /> : <Minus strokeWidth={3} size={20} />}
                     </div>
                     <div>
                        <h4 className={`font-bold text-lg leading-tight ${row.isWinner ? "text-white" : "text-gray-900"}`}>
                          {row.name}
                        </h4>
                        <p className={`text-sm font-medium ${row.isWinner ? "text-gray-400" : "text-gray-400"}`}>
                          {row.desc}
                        </p>
                     </div>
                  </div>
                </div>

                {/* Column 2: Hardware Status */}
                <div className="col-span-1 md:col-span-4 relative z-10 md:pl-4">
                  <StatusBadge status={row.hardware.status} label={row.hardware.label} isDark={row.isWinner} />
                </div>

                {/* Column 3: Platform Status */}
                <div className="col-span-1 md:col-span-3 relative z-10 flex md:justify-end">
                   <StatusBadge status={row.platform.status} label={row.platform.label} isDark={row.isWinner} alignRight />
                </div>

              </div>
            ))}
          </div>

        </div>
        
        {/* --- LEGEND --- */}
        <div className="mt-8 flex justify-center gap-8 text-sm font-medium text-gray-400">
             <div className="flex items-center gap-2">
                 <div className="w-2 h-2 rounded-full bg-gray-300" /> Competitor
             </div>
             <div className="flex items-center gap-2 text-black">
                 <div className="w-2 h-2 rounded-full bg-black" /> StoreTech Winner
             </div>
        </div>

      </div>
    </section>
  );
}

// --- BADGE COMPONENT (Minimalist) ---
function StatusBadge({ status, label, isDark, alignRight }: { status: string; label: string; isDark: boolean; alignRight?: boolean }) {
  let Icon = X;
  let color = "text-gray-400";
  let bg = "bg-gray-100";

  if (status === "negative") {
    Icon = X;
    color = isDark ? "text-gray-500" : "text-gray-400"; // Muted for losers
    bg = isDark ? "bg-white/10" : "bg-gray-100";
  } else if (status === "warning") {
    Icon = AlertCircle;
    color = "text-yellow-500";
    bg = isDark ? "bg-white/10" : "bg-yellow-50";
  } else if (status === "positive") {
    Icon = Check;
    color = "text-black";
    bg = "bg-white"; // Bright white on black background
  }

  return (
    <div className={`flex items-center gap-3 ${alignRight ? "md:flex-row-reverse text-right" : ""}`}>
      {/* Icon Circle */}
      <div className={`flex h-8 w-8 items-center justify-center rounded-full ${bg} ${color}`}>
         <Icon size={14} strokeWidth={2.5} />
      </div>
      {/* Label */}
      <span className={`text-sm font-semibold tracking-wide ${isDark ? "text-gray-200" : "text-gray-600"}`}>
        {label}
      </span>
    </div>
  );
}