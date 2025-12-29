"use client";

import React from "react";
import { Check, Box, Zap, Layers, Briefcase, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function SolutionPackages() {
  
  const packages = [
    {
      id: "A",
      title: "Package A",
      subtitle: "Express Checkout",
      description: "Essential automation for small to medium retail setups.",
      icon: Zap,
      features: [
        "Smart Self-Checkout Terminal",
        "Centralized ERP & Analytics",
        "Basic Mobile App",
        "Standard Email Support",
      ],
      featured: false,
    },
    {
      id: "B",
      title: "Package B",
      subtitle: "24/7 Unmanned Store",
      description: "Complete autonomy for round-the-clock operations.",
      icon: Layers, 
      features: [
        "Smart Self-Checkout",
        "Door Access Control System",
        "Full ERP & Analytics Suite",
        "Branded Mobile Apps",
        "Premium 24/7 Support",
        "Priority Deployment",
      ],
      featured: true, // Triggers Premium Black Gradient & Size
    },
    {
      id: "C",
      title: "Package C",
      subtitle: "Corporate Micro-Market",
      description: "Tailored for office pantries and corporate environments.",
      icon: Briefcase,
      features: [
        "Smart Self-Checkout",
        "Smart Fridge Integration",
        "ERP & Advanced Analytics",
        "Employee Mobile App",
        "Corporate Billing Modules",
        "Dedicated Account Manager",
      ],
      featured: false,
    },
  ];

  return (
    <section id="pricing" className="py-24 bg-gray-50 relative overflow-hidden">
      
      {/* Background Texture */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        
        {/* --- HEADER --- */}
        <div className="flex flex-col gap-5 mb-20 text-center">
          <div className="mx-auto rounded-full border border-gray-200 bg-white px-5 py-2 text-xs font-bold uppercase tracking-widest text-gray-900 shadow-sm">
            Solution Packages
          </div>
          <h2 className="mx-auto text-4xl md:text-5xl font-bold font-display tracking-tight text-gray-900">
            Plans for Every Stage
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            Pre-configured packages for common use cases. Start with a foundation and customize as you grow.
          </p>
        </div>

        {/* --- PRICING GRID --- */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center max-w-7xl mx-auto">
          
          {packages.map((pkg) => (
            <div 
              key={pkg.id} 
              className={`relative flex flex-col w-full rounded-3xl transition-all duration-500 group
                ${pkg.featured 
                  ? "bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white shadow-2xl shadow-black/40 scale-100 lg:scale-110 z-10 border border-white/10" // Featured: Premium Black Gradient + Bigger
                  : "bg-white text-gray-900 shadow-xl border border-gray-100 hover:border-gray-300 hover:-translate-y-2" // Standard: Clean White
                }
              `}
            >
              
              {/* Featured Ribbon (Top Overlay) */}
              {pkg.featured && (
                <>
                  <div className="absolute top-5 right-5">
                    <span className="bg-white text-black text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full shadow-lg">
                      Best Value
                    </span>
                  </div>
                  {/* Subtle Shine Animation */}
                  <div className="shine-effect opacity-10 pointer-events-none rounded-3xl" />
                </>
              )}

              {/* Card Padding */}
              <div className="p-8 md:p-10 flex flex-col h-full">
                
                {/* 1. HEADER SECTION (Icon + Title) */}
                <div className="flex flex-col gap-6 mb-8">
                  
                  {/* Icon & Label */}
                  <div className="flex items-center gap-4">
                    <span className={`flex h-12 w-12 items-center justify-center rounded-full shadow-inner
                        ${pkg.featured ? "bg-white/10 text-white border border-white/10" : "bg-gray-100 text-black"}`}>
                      <pkg.icon size={22} strokeWidth={2} />
                    </span>
                    <span className={`font-bold text-lg tracking-wide ${pkg.featured ? "text-gray-300" : "text-gray-500"}`}>
                        {pkg.title}
                    </span>
                  </div>
                  
                  {/* Subtitle/Price Area */}
                  <div>
                    <h3 className={`text-2xl md:text-3xl font-bold leading-tight ${pkg.featured ? "text-white" : "text-black"}`}>
                      {pkg.subtitle}
                    </h3>
                    <p className={`text-sm mt-3 leading-relaxed ${pkg.featured ? "text-gray-400" : "text-gray-500"}`}>
                      {pkg.description}
                    </p>
                  </div>

                  {/* CTA Button */}
                  <Link href="#getQuote" className="w-full">
                    <button className={`w-full rounded-full py-4 text-center font-bold text-sm tracking-wide transition-all duration-300 shadow-lg hover:scale-[1.02]
                        ${pkg.featured 
                          ? "bg-white text-black hover:bg-gray-200" 
                          : "bg-black text-white hover:bg-gray-800"
                        }`}>
                      Choose {pkg.title}
                    </button>
                  </Link>
                </div>

                {/* 2. DIVIDER */}
                <div className={`h-px w-full mb-8 ${pkg.featured ? "bg-white/10" : "bg-gray-100"}`} />

                {/* 3. FEATURES LIST */}
                <div className="flex-1 flex flex-col gap-4">
                  {pkg.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className={`mt-0.5 flex items-center justify-center w-5 h-5 rounded-full shrink-0
                          ${pkg.featured ? "text-white" : "text-black"}`}>
                         <Check size={16} strokeWidth={3} />
                      </div>
                      <span className={`text-sm font-medium ${pkg.featured ? "text-gray-300" : "text-gray-600"}`}>
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

              </div>
            </div>
          ))}

        </div>

        {/* --- CUSTOM PACKAGE BANNER (Bottom) --- */}
        <div className="mt-24 max-w-4xl mx-auto">
          <div className="relative overflow-hidden rounded-[2.5rem] bg-black px-8 py-12 md:p-16 text-center shadow-2xl shadow-gray-900/10 group">
            
            {/* Background Effects */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-[80px] pointer-events-none group-hover:bg-white/10 transition-colors duration-500" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-[80px] pointer-events-none" />
            
            <div className="relative z-10 flex flex-col items-center">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Need Something Custom?
              </h3>
              <p className="text-gray-400 mb-8 max-w-xl text-lg font-light">
                Build your own solution package with our modular platform. Mix and match products to fit your specific needs.
              </p>
              
              <Link href="#getQuote">
                <button className="flex items-center gap-3 bg-white text-black px-8 py-4 rounded-full font-bold text-sm tracking-wide shadow-lg hover:bg-gray-200 hover:scale-105 transition-all duration-300 group/btn">
                   Request Custom Quotation
                   <ArrowRight size={16} className="text-gray-500 group-hover/btn:text-black group-hover/btn:translate-x-1 transition-all" />
                </button>
              </Link>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}