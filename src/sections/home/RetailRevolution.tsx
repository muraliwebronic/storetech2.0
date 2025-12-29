"use client";

import React from "react";
import { Check, X } from "lucide-react";
import { comparisonData } from "@/data/comparisonData";



export default function RetailRevolution() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        
        {/* --- SECTION HEADER --- */}
        <div className="flex flex-col items-center text-center gap-6 mb-20 max-w-4xl mx-auto">
           
           {/* Pill Label */}
           <div className="relative overflow-hidden rounded-full bg-black px-6 py-2 shadow-xl group">
              <div className="shine-effect opacity-50" />
              <span className="relative z-10 text-xs font-bold text-white uppercase tracking-[0.25em]">
                The Retail Revolution
              </span>
           </div>

           {/* Headline */}
           <h2 className="text-3xl md:text-5xl font-bold leading-tight font-display text-gray-900">
             Traditional retail is <span className="text-gray-400 line-through decoration-red-500/50">complex</span> <br className="hidden md:block" />
             <span className="bg-gradient-to-r from-black via-gray-700 to-gray-500 bg-clip-text text-transparent">
               StoreTech makes it simple
             </span>
           </h2>

           {/* Subtext */}
           <p className="text-gray-500 max-w-2xl text-lg font-light">
             We consolidate hardware, software, and payments into a single, autonomous platform
           </p>

        </div>

        {/* --- COMPARISON GRID --- */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto items-center">
          {comparisonData.map((item, i) => (
            <ComparisonCard key={i} data={item} />
          ))}
        </div>

      </div>
    </section>
  );
}

// --- COMPARISON CARD COMPONENT ---
function ComparisonCard({ data }: { data: typeof comparisonData[0] }) {
  const isWinner = data.isWinner;

  return (
    <div
      className={`relative flex flex-col gap-6  rounded-[2rem] px-8 py-10 md:px-12 md:py-12 shadow-2xl transition-all duration-500 group
        ${isWinner 
          ? "bg-black/90 backdrop-blur-2xl border border-white/10 text-white md:-translate-y-4 shadow-black/30" 
          : "bg-white border border-gray-100 text-gray-600 shadow-gray-100/50"
        }`
      }
    >
      {/* Shine Effect (Winner Only) */}
      {isWinner && (
         <div className="shine-effect z-0 opacity-20" />
      )}

      {/* Card Header (Badge & Icon) */}
      <div className="flex items-center justify-between relative z-10">
        <div className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider
            ${isWinner ? "bg-white text-black" : "bg-gray-100 text-gray-500"}`}>
            {data.subtitle}
        </div>
        
        {isWinner ? (
             <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-500/20 text-green-400 shadow-inner ring-1 ring-green-500/50">
                <Check size={20} strokeWidth={3} />
             </div>
        ) : (
             <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-100 text-red-400">
                <X size={20} strokeWidth={3} />
             </div>
        )}
      </div>

      {/* Card Content */}
      <div className="relative z-10">
        <h3 className={`text-3xl font-bold mb-3 ${isWinner ? "text-white" : "text-black"}`}>
          {data.title}
        </h3>
        <p className={`leading-relaxed text-lg ${isWinner ? "text-gray-300" : "text-gray-500"}`}>
          {data.description}
        </p>
      </div>

      {/* Feature Points */}
      <div className={`mt-auto pt-8 border-t relative z-10 ${isWinner ? "border-white/10" : "border-gray-100"}`}>
        <ul className="space-y-4">
          {data.points.map((point, idx) => (
            <li key={idx} className="flex items-start gap-3 text-sm font-medium">
               <span className={`mt-1 shrink-0 
                 ${isWinner ? "text-green-400" : "text-red-400"}`}>
                 {isWinner ? <Check size={16} /> : <X size={16} />}
               </span>
               <span className={isWinner ? "text-gray-300" : "text-gray-600"}>
                 {point}
               </span>
            </li>
          ))}
        </ul>
      </div>

    </div>
  );
}