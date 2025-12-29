"use client";

import React from "react";

interface MetricCardProps {
  children: React.ReactNode;
  label: string;
  isCircle?: boolean;
}

export default function MetricCard({
  children,
  label,
  isCircle,
}: MetricCardProps) {
  
  // OPTION A: Circular Layout
  if (isCircle) {
    return (
      <div className="text-center group relative">
        <div className="w-24 h-24 mx-auto mb-4 flex items-center justify-center rounded-full bg-gradient-to-b from-gray-900 to-black border border-white/10 shadow-lg group-hover:scale-110 transition-transform duration-500 overflow-hidden relative">
          
          {/* Shine Animation Layer */}
          <div className="shine-effect" />

          <div className="relative z-10 text-2xl font-bold text-white">
            {children}
          </div>
        </div>
        <div className="text-gray-500 text-xs uppercase tracking-widest font-semibold">
          {label}
        </div>
      </div>
    );
  }

  // OPTION B: Standard Card Layout (Black Gradient + Shine)
  return (
    <div className="group relative overflow-hidden p-6 rounded-2xl text-center border border-white/10 shadow-2xl hover:-translate-y-1 transition-transform duration-300">
      
      {/* 1. Background: Deep Black Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-950 z-0" />

      {/* 2. Animation: The Shiny Reflection */}
      <div className="shine-effect z-0" />

      {/* 3. Content: Elevated above the background */}
      <div className="relative z-10">
        <div className="text-3xl sm:text-4xl font-bold text-white mb-2 tracking-tight">
          {children}
        </div>
        <div className="text-gray-400 text-xs uppercase tracking-[0.2em] font-semibold">
          {label}
        </div>
      </div>
    </div>
  );
}