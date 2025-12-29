"use client";

import React from "react";
import MetricCard from "@/components/home/MetricCard"; // Your existing component
import { metrics } from "@/data/metrics"; // Your existing data
import { Trophy } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="pt-32 pb-24 bg-white relative overflow-hidden">
      
      {/* --- BACKGROUND TEXTURE --- */}
      {/* Subtle Dot Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:24px_24px] opacity-60 pointer-events-none" />
      
      {/* Soft Ambient Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-gray-50 rounded-full blur-[100px] -z-10" />

      <div className="container mx-auto px-6 relative z-10">
        
        {/* --- HEADER SECTION --- */}
        <div className="flex flex-col items-center text-center gap-6 mb-24 max-w-4xl mx-auto">
           
           {/* Pill Label */}
           <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black text-white text-xs font-bold uppercase tracking-widest shadow-xl">
              Proven at Scale
           </div>

           {/* Main Headline */}
           <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-display tracking-tight text-gray-900 leading-[1.1]">
             The Market Leader in <br />
             <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-gray-600 to-gray-400">
               Unmanned Retail
             </span>
           </h1>

           {/* Description */}
           <p className="text-xl text-gray-500 font-light leading-relaxed max-w-2xl">
             We don't just build technology; we build reliability. With 145+ stores deployed and 50M+ transactions processed, our platform is battle-tested
           </p>

        </div>

        {/* --- CIRCULAR METRICS GRID --- */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 max-w-5xl mx-auto">
          {metrics.map((v, i) => (
            <div key={i} className="flex justify-center">
                {/* Using the isCircle prop to trigger the 
                    Circular "Royal Black" layout defined in your MetricCard 
                */}
                <MetricCard isCircle label={v.label}>
                  {v.children}
                </MetricCard>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}