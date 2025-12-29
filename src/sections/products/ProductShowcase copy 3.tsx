"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Check, ArrowRight, Box, Zap } from "lucide-react";
import { products } from "@/data/products";
import { productsImg } from "@/data/productsImg";

// Color Mapping for Badges (Unchanged)
const colorStyles: Record<string, string> = {
  blue: "bg-blue-50 text-blue-600 border-blue-100",
  orange: "bg-orange-50 text-orange-600 border-orange-100",
  cyan: "bg-cyan-50 text-cyan-600 border-cyan-100",
  purple: "bg-purple-50 text-purple-600 border-purple-100",
  green: "bg-green-50 text-green-600 border-green-100",
};

export default function ProductShowcase() {
  return (
    <section className="py-32 relative overflow-hidden bg-gray-50 border-y border-gray-200">
      
      {/* --- BACKGROUND TEXTURE & DEPTH --- */}
      {/* 1. Base Grid Texture */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
      
      {/* 2. Ambient Light Orbs (Softer/Deeper) */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-white rounded-full blur-[120px] opacity-40 -translate-y-1/2 translate-x-1/2 pointer-events-none mix-blend-overlay" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gray-200 rounded-full blur-[100px] -z-10 opacity-30 mix-blend-multiply" />

      <div className="container mx-auto px-6 relative z-10">
        
        {/* --- SECTION HEADER --- */}
        <div className="mb-32 max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 bg-white/80 backdrop-blur-sm shadow-[0_2px_8px_rgba(0,0,0,0.04)] text-xs font-bold uppercase tracking-widest text-gray-900 mb-8">
             <Zap size={14} className="text-yellow-500 fill-current" />
             Our Product Suite
          </div>
          <h2 className="text-4xl md:text-6xl font-bold font-display text-gray-900 mb-6 tracking-tight leading-[1.1] drop-shadow-sm">
            Engineered for <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-900 via-gray-600 to-gray-400">
              Modern Retail.
            </span>
          </h2>
          <p className="text-xl text-gray-500 font-light leading-relaxed max-w-2xl mx-auto">
            From entry to checkout, we automate the journey with precision hardware and intelligent software.
          </p>
        </div>

        {/* --- PRODUCT SHOWCASE LOOP --- */}
        <div className="flex flex-col gap-32">
          {products.map((product, index) => {
            const isEven = index % 2 === 0;
            const imageSrc = productsImg[index % productsImg.length];
            const badgeStyle = colorStyles[product.color] || "bg-gray-50 text-gray-600 border-gray-100";

            return (
              <div 
                key={product.name} 
                className={`group flex flex-col lg:flex-row items-center gap-12 lg:gap-24 ${!isEven ? "lg:flex-row-reverse" : ""}`}
              >
                
                {/* --- 1. IMAGE SIDE (Glassmorphism Effect) --- */}
                <div className="w-full lg:w-1/2 perspective-1000">
                  {/* The Card Container - GLASSMORPHISM APPLIED HERE */}
                  <div className="relative aspect-[4/3] w-full rounded-[2.5rem] bg-white/30 backdrop-blur-lg border border-white/60 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] overflow-hidden flex items-center justify-center p-8 md:p-12 transition-all duration-700 ease-out hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.15)] hover:-translate-y-2 ring-1 ring-gray-900/5">
                    
                    {/* Inner Texture/Pattern for Card */}
                    <div className="absolute inset-0 opacity-[0.05] bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />
                    
                    {/* Background Shine/Sheen */}
                    <div className="absolute -inset-[100%] bg-gradient-to-tr from-transparent via-white/40 to-transparent rotate-45 opacity-0 group-hover:opacity-100 group-hover:animate-shine transition-opacity duration-700 pointer-events-none" />
                    
                    {/* Image */}
                    <div className="relative z-10 w-full h-full flex items-center justify-center transition-transform duration-700 group-hover:scale-105 group-hover:-rotate-1">
                      <Image
                        src={imageSrc}
                        alt={product.name}
                        width={800}
                        height={600}
                        className="object-contain max-h-full drop-shadow-[0_10px_20px_rgba(0,0,0,0.15)] group-hover:drop-shadow-[0_20px_30px_rgba(0,0,0,0.2)] transition-all duration-500"
                      />
                    </div>

                    {/* Watermark Number */}
                    <div className="absolute bottom-4 right-8 text-9xl font-bold text-gray-900/[0.05] select-none z-0 tracking-tighter mix-blend-overlay">
                      0{index + 1}
                    </div>
                  </div>
                </div>

                {/* --- 2. CONTENT SIDE --- */}
                <div className="w-full lg:w-1/2">
                  
                  {/* Module Badge */}
                  <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border text-xs font-bold uppercase tracking-wider mb-8 shadow-sm ${badgeStyle}`}>
                    <Box size={14} strokeWidth={2.5} />
                    Module 0{index + 1}
                  </div>

                  {/* Title */}
                  <h3 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight drop-shadow-sm">
                    {product.name}
                  </h3>

                  {/* Description */}
                  <p className="text-lg text-gray-500 leading-relaxed mb-10 border-l-2 border-gray-200 pl-6">
                    {product.description}
                  </p>

                  {/* Features Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 mb-10">
                    {product.features.map((feature, i) => (
                      <div key={i} className="flex items-start gap-3 group/feature">
                        <div className="mt-1 flex items-center justify-center w-5 h-5 rounded-full bg-gray-100 text-gray-600 shrink-0 group-hover/feature:bg-blue-600 group-hover/feature:text-white transition-colors duration-300 shadow-inner">
                          <Check size={10} strokeWidth={4} />
                        </div>
                        <span className="text-sm font-medium text-gray-700 group-hover/feature:text-gray-900 transition-colors">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Action Button: Request Quotation */}
                  <div>
                    <Link href="#getQuote">
                        <button className="flex items-center gap-3 bg-gray-900 text-white px-8 py-4 rounded-full font-bold text-sm tracking-wide shadow-[0_10px_20px_-10px_rgba(0,0,0,0.5)] hover:bg-black hover:shadow-[0_20px_30px_-10px_rgba(0,0,0,0.4)] hover:-translate-y-1 transition-all duration-300 group/btn border border-gray-800">
                        Request Quotation
                        <ArrowRight size={16} className="text-gray-400 group-hover/btn:text-white group-hover/btn:translate-x-1 transition-all" />
                        </button>
                    </Link>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}