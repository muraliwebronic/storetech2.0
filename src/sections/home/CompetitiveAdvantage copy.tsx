"use client";

import React from "react";
import { Check, X, AlertTriangle, Layers, Zap, Box, ShieldCheck } from "lucide-react";

export default function CompetitiveAdvantage() {
  return (
    <section className="py-24 relative overflow-hidden bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* --- SECTION HEADER --- */}
        <div className="flex flex-col items-center text-center gap-6 mb-20 max-w-4xl mx-auto">
           <div className="relative overflow-hidden rounded-full bg-black px-6 py-2 shadow-xl group">
              <div className="shine-effect opacity-50" />
              <span className="relative z-10 text-xs font-bold text-white uppercase tracking-[0.25em]">
                Competitive Advantage
              </span>
           </div>

           <h2 className="text-3xl md:text-5xl font-bold leading-tight font-display text-gray-900">
             Compare the <span className="text-gray-400 decoration-red-500/50">market.</span> <br className="hidden md:block" />
             <span className="bg-gradient-to-r from-black via-gray-700 to-gray-500 bg-clip-text text-transparent">
               See why StoreTech wins.
             </span>
           </h2>

           <p className="text-gray-500 max-w-2xl text-lg font-light">
             Our unique hardware consolidation gives us a sustainable edge over legacy and CV-only solutions.
           </p>
        </div>

        {/* --- COMPARISON MATRIX --- */}
        <div className="animate-on-scroll relative">
          
          {/* Main Table Container */}
          <div className="overflow-x-auto no-scrollbar rounded-[2rem] border border-gray-200 shadow-2xl bg-white">
            
            <table className="w-full text-left border-collapse min-w-[900px]">
              
              {/* HEADER: Solid Black */}
              <thead className="bg-black text-white">
                <tr>
                  <th className="py-6 pl-8 pr-4 text-xs font-bold uppercase tracking-[0.2em] opacity-80">
                    Solution
                  </th>
                  <th className="py-6 px-4 text-xs font-bold uppercase tracking-[0.2em] opacity-80">
                    Cost per Store
                  </th>
                  <th className="py-6 px-4 text-xs font-bold uppercase tracking-[0.2em] opacity-80">
                    Hardware Setup
                  </th>
                  <th className="py-6 px-4 text-xs font-bold uppercase tracking-[0.2em] opacity-80">
                    Platform Type
                  </th>
                </tr>
              </thead>
              
              {/* BODY: Clean White */}
              <tbody className="bg-white text-gray-800">
                
                {/* ROW 1: Amazon Just Walk Out (Negatives) */}
                <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors duration-200">
                  <td className="py-6 pl-8 pr-4">
                    <div className="font-bold text-gray-900 text-lg">Amazon Just Walk Out</div>
                    <div className="text-gray-500 text-xs mt-1 uppercase tracking-wider">Computer vision solution</div>
                  </td>
                  <td className="py-6 px-4">
                    <span className="inline-flex items-center gap-2 text-red-600 font-bold bg-red-50 px-3 py-1.5 rounded-full border border-red-100 text-sm">
                       <X className="w-4 h-4" strokeWidth={3} />
                       High ($50k+)
                    </span>
                  </td>
                  <td className="py-6 px-4">
                    <span className="inline-flex items-center gap-2 text-red-600 font-bold bg-red-50 px-3 py-1.5 rounded-full border border-red-100 text-sm">
                      <X className="w-4 h-4" strokeWidth={3} />
                      Complex Setup
                    </span>
                  </td>
                  <td className="py-6 px-4">
                    <span className="inline-flex items-center gap-2 text-red-600 font-bold bg-red-50 px-3 py-1.5 rounded-full border border-red-100 text-sm">
                      <X className="w-4 h-4" strokeWidth={3} />
                      Single Format
                    </span>
                  </td>
                </tr>

                {/* ROW 2: Traditional SCO (Negatives) */}
                <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors duration-200">
                  <td className="py-6 pl-8 pr-4">
                    <div className="font-bold text-gray-900 text-lg">Traditional SCO</div>
                    <div className="text-gray-500 text-xs mt-1 uppercase tracking-wider">Legacy Self-Checkout</div>
                  </td>
                  <td className="py-6 px-4">
                     <span className="inline-flex items-center gap-2 text-red-600 font-bold bg-red-50 px-3 py-1.5 rounded-full border border-red-100 text-sm">
                       <X className="w-4 h-4" strokeWidth={3} />
                       Medium ($15k+)
                    </span>
                  </td>
                  <td className="py-6 px-4">
                    <span className="inline-flex items-center gap-2 text-red-600 font-bold bg-red-50 px-3 py-1.5 rounded-full border border-red-100 text-sm">
                      <X className="w-4 h-4" strokeWidth={3} />
                      Multiple Vendors
                    </span>
                  </td>
                  <td className="py-6 px-4">
                    <span className="inline-flex items-center gap-2 text-red-600 font-bold bg-red-50 px-3 py-1.5 rounded-full border border-red-100 text-sm">
                      <X className="w-4 h-4" strokeWidth={3} />
                      Checkout Only
                    </span>
                  </td>
                </tr>

                {/* ROW 3: CV Startups (Partials) */}
                <tr className="border-b border-gray-100 hover:bg-gray-50 transition-colors duration-200">
                  <td className="py-6 pl-8 pr-4">
                    <div className="font-bold text-gray-900 text-lg">CV Startups</div>
                    <div className="text-gray-500 text-xs mt-1 uppercase tracking-wider">Computer Vision Only</div>
                  </td>
                  <td className="py-6 px-4">
                     <span className="inline-flex items-center gap-2 text-yellow-600 font-bold bg-yellow-50 px-3 py-1.5 rounded-full border border-yellow-100 text-sm">
                       <AlertTriangle className="w-4 h-4" strokeWidth={2.5} />
                       Modest ($20k+)
                    </span>
                  </td>
                  <td className="py-6 px-4">
                    <span className="inline-flex items-center gap-2 text-yellow-600 font-bold bg-yellow-50 px-3 py-1.5 rounded-full border border-yellow-100 text-sm">
                      <AlertTriangle className="w-4 h-4" strokeWidth={2.5} />
                      Limited
                    </span>
                  </td>
                  <td className="py-6 px-4">
                    <span className="inline-flex items-center gap-2 text-red-600 font-bold bg-red-50 px-3 py-1.5 rounded-full border border-red-100 text-sm">
                      <X className="w-4 h-4" strokeWidth={3} />
                      Single Focus
                    </span>
                  </td>
                </tr>

                {/* ROW 4: StoreTech (THE WINNER - ELEVATED) */}
                {/* Added: md:scale-[1.02] transform origin-center z-10 
                    This makes the row physically larger and sit "above" the others 
                */}
                <tr className="relative bg-black text-white shadow-2xl overflow-hidden group md:scale-[1.02] transform origin-center z-10 transition-transform duration-500">
                  
                  {/* Subtle Shine for the winner */}
                  <td className="absolute inset-0 bg-white/5 pointer-events-none" />
                  
                  <td className="py-8 pl-8 pr-4 relative z-10">
                    <div className="flex items-center gap-3">
                       {/* Pulsing Dot */}
                       <span className="relative flex h-3 w-3">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
                        </span>
                       <div>
                         <div className="font-bold text-white text-xl tracking-tight">StoreTech</div>
                         <div className="text-gray-300 text-xs mt-1 uppercase tracking-wider font-semibold">Consolidated Platform</div>
                       </div>
                    </div>
                  </td>
                  <td className="py-8 px-4 relative z-10">
                    <span className="inline-flex items-center gap-2 text-black font-bold bg-white px-4 py-2 rounded-full shadow-lg text-sm">
                      <Check className="w-4 h-4" strokeWidth={4} />
                      Low ($5k-$8k)
                    </span>
                  </td>
                  <td className="py-8 px-4 relative z-10">
                    <span className="inline-flex items-center gap-2 text-black font-bold bg-white px-4 py-2 rounded-full shadow-lg text-sm">
                      <Check className="w-4 h-4" strokeWidth={4} />
                      Single Terminal
                    </span>
                  </td>
                  <td className="py-8 px-4 relative z-10">
                    <span className="inline-flex items-center gap-2 text-black font-bold bg-white px-4 py-2 rounded-full shadow-lg text-sm">
                      <Check className="w-4 h-4" strokeWidth={4} />
                      Full Ecosystem
                    </span>
                  </td>
                </tr>

              </tbody>
            </table>
          </div>
          
          {/* Legend */}
          <div className="mt-8 flex flex-wrap gap-6 justify-center opacity-70">
            <div className="flex items-center text-sm font-medium">
              <span className="flex items-center justify-center w-5 h-5 bg-red-100 text-red-600 rounded-full mr-2">
                <X size={12} strokeWidth={3} />
              </span>
              <span className="text-gray-500">Disadvantage</span>
            </div>
            <div className="flex items-center text-sm font-medium">
              <span className="flex items-center justify-center w-5 h-5 bg-yellow-100 text-yellow-600 rounded-full mr-2">
                <AlertTriangle size={12} strokeWidth={2.5} />
              </span>
              <span className="text-gray-500">Partial Solution</span>
            </div>
            <div className="flex items-center text-sm font-medium">
              <span className="flex items-center justify-center w-5 h-5 bg-black text-white rounded-full mr-2">
                <Check size={12} strokeWidth={3} />
              </span>
              <span className="text-gray-900 font-bold">StoreTech Advantage</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}