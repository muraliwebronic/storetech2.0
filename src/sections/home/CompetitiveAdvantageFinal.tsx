"use client";

import React from "react";
import { Check, X, Minus } from "lucide-react";

// --- DATA ---
const tableData = [
  {
    name: "Amazon Just Walk Out",
    desc: "Computer vision solution",
    cost: "High ($50k+)",
    setup: "Complex Setup",
    platform: "Single Format",
    isWinner: false,
  },
  {
    name: "Traditional SCO",
    desc: "Legacy Self-Checkout",
    cost: "Medium ($15k+)",
    setup: "Multiple Vendors",
    platform: "Checkout Only",
    isWinner: false,
  },
  {
    name: "CV Startups",
    desc: "Computer Vision Only",
    cost: "Modest ($20k+)",
    setup: "Limited",
    platform: "Single Focus",
    isWinner: false,
  },
  {
    name: "StoreTech",
    desc: "Consolidated Platform",
    cost: "Low ($5k–$8k)",
    setup: "Single Terminal",
    platform: "Full Ecosystem",
    isWinner: true, // This triggers the Black Theme
  },
];

export default function CompetitiveAdvantage() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6">
        
        {/* --- HEADER (Matches RetailRevolution Theme) --- */}
        <div className="flex flex-col items-center text-center gap-6 mb-16 max-w-4xl mx-auto">
          {/* Pill Label */}
          <div className="relative overflow-hidden rounded-full bg-black px-6 py-2 shadow-xl">
            <div className="shine-effect opacity-50" />
            <span className="relative z-10 text-xs font-bold text-white uppercase tracking-[0.25em]">
              Competitive Advantage
            </span>
          </div>

          {/* Headline */}
          <h2 className="text-3xl md:text-5xl font-bold leading-tight font-display text-gray-900">
            Compare the market. <br />
            <span className="bg-gradient-to-r from-black via-gray-700 to-gray-500 bg-clip-text text-transparent">
              See why StoreTech wins.
            </span>
          </h2>

          <p className="text-gray-500 max-w-2xl text-lg font-light">
            Our unique hardware consolidation gives us a sustainable edge over
            legacy and CV-only solutions.
          </p>
        </div>

        {/* --- CUSTOM GRID TABLE --- */}
        <div className="max-w-6xl mx-auto">
          {/* Table Header */}
          <div className="hidden md:grid grid-cols-12 gap-4 px-8 pb-4 text-xs font-bold text-gray-400 uppercase tracking-wider">
            <div className="col-span-4">Solution</div>
            <div className="col-span-3">Cost per Store</div>
            <div className="col-span-3">Hardware Setup</div>
            <div className="col-span-2">Platform Type</div>
          </div>

          {/* Table Body */}
          <div className="flex flex-col gap-4">
            {tableData.map((row, index) => (
              <div
                key={index}
                className={`relative grid grid-cols-1 md:grid-cols-12 items-center gap-4 p-6 md:px-8 md:py-6 rounded-[1.5rem] transition-all duration-300
                  ${
                    row.isWinner
                      ? "bg-[#0A0A0A] text-white shadow-2xl shadow-black/20 scale-[1.02] z-10 border border-white/10"
                      : "bg-white text-gray-600 border border-gray-100 hover:border-gray-200 hover:shadow-lg"
                  }
                `}
              >
                {/* Shine Effect for Winner */}
                {row.isWinner && (
                  <div className="shine-effect absolute inset-0 rounded-[1.5rem] opacity-20" />
                )}

                {/* Col 1: Solution Name */}
                <div className="col-span-1 md:col-span-4 relative z-10">
                  <div className="flex items-center gap-3">
                    {/* Icon Box */}
                    <div
                      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full 
                        ${
                          row.isWinner
                            ? "bg-green-500/20 text-green-400 ring-1 ring-green-500/50"
                            : "bg-gray-100 text-gray-400"
                        }`}
                    >
                      {row.isWinner ? <Check size={18} strokeWidth={3} /> : <Minus size={18} />}
                    </div>
                    <div>
                      <h4 className={`font-bold text-lg ${row.isWinner ? "text-white" : "text-gray-900"}`}>
                        {row.name}
                      </h4>
                      <p className={`text-sm ${row.isWinner ? "text-gray-400" : "text-gray-500"}`}>
                        {row.desc}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Col 2: Cost */}
                <div className="col-span-1 md:col-span-3 relative z-10 pl-14 md:pl-0">
                  <span className="md:hidden text-xs font-bold uppercase text-gray-400 block mb-1">
                    Cost per Store
                  </span>
                  <span className={`font-medium ${row.isWinner ? "text-green-400" : ""}`}>
                    {row.cost}
                  </span>
                </div>

                {/* Col 3: Setup */}
                <div className="col-span-1 md:col-span-3 relative z-10 pl-14 md:pl-0">
                   <span className="md:hidden text-xs font-bold uppercase text-gray-400 block mb-1">
                    Setup
                  </span>
                  <span>{row.setup}</span>
                </div>

                {/* Col 4: Platform */}
                <div className="col-span-1 md:col-span-2 relative z-10 pl-14 md:pl-0">
                   <span className="md:hidden text-xs font-bold uppercase text-gray-400 block mb-1">
                    Platform
                  </span>
                  <span>{row.platform}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Footer Legend */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-8 border-t border-gray-100 pt-8">
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <div className="h-2 w-2 rounded-full bg-gray-300" />
              Disadvantage / Standard
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-900 font-medium">
              <div className="h-2 w-2 rounded-full bg-black shadow-[0_0_10px_rgba(0,0,0,0.3)]" />
              StoreTech Advantage
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}