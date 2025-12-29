"use client";

import React from "react";
import Image from "next/image";
import { Check, ArrowRight } from "lucide-react";
import { products } from "@/data/products"; // Assuming you have the data file
import { productsImg } from "@/data/productsImg"; // Assuming you have the images file

export default function ProductShowcase() {
  return (
    <section className="py-32 bg-black relative overflow-hidden">
      
      {/* Background Ambience */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-gray-900/40 via-black to-black pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        
        {/* --- SECTION HEADER --- */}
        <div className="mb-32 max-w-4xl">
          <h2 className="text-5xl md:text-7xl font-bold font-display text-white mb-6 tracking-tight leading-[1.1]">
            Engineered for <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-200 via-gray-500 to-gray-700">
              Modern Retail.
            </span>
          </h2>
          <p className="text-xl text-gray-500 max-w-2xl font-light leading-relaxed">
            Our modular suite covers every touchpoint of the unmanned experience. 
            From entry to checkout, we automate the journey.
          </p>
        </div>

        {/* --- PRODUCT SHOWCASE LOOP --- */}
        <div className="flex flex-col gap-32 lg:gap-48">
          {products.map((product, index) => {
            // Determine Layout Direction (Zig-Zag)
            const isEven = index % 2 === 0;
            
            // Map images (cycling through the 4 available images if there are more products)
            const imageSrc = productsImg[index % productsImg.length];

            return (
              <div 
                key={product.name} 
                className={`flex flex-col lg:flex-row items-center gap-16 lg:gap-24 ${!isEven ? "lg:flex-row-reverse" : ""}`}
              >
                
                {/* --- 1. VISUAL SIDE (Image) --- */}
                <div className="w-full lg:w-1/2 relative group">
                  
                  {/* Decorative Numbering (e.g., 01, 02) */}
                  <div className={`absolute -top-12 ${isEven ? "-left-8" : "-right-8"} text-[8rem] md:text-[10rem] font-bold text-white/5 font-display leading-none select-none z-0`}>
                    0{index + 1}
                  </div>

                  {/* Image Container (Glass Effect) */}
                  <div className="relative z-10 rounded-[2.5rem] overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm shadow-2xl shadow-black/50 transition-transform duration-700 hover:scale-[1.02]">
                    
                    {/* Shine Effect */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                    
                    {/* The Product Image */}
                    <div className="relative aspect-[4/3] w-full p-8 md:p-12 flex items-center justify-center">
                       {/* Subtle Glow behind image */}
                       <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/80 opacity-60" />
                       
                       <Image
                        src={imageSrc}
                        alt={product.name}
                        width={800}
                        height={600}
                        className="object-contain w-full h-full drop-shadow-2xl relative z-10"
                      />
                    </div>
                  </div>
                </div>

                {/* --- 2. CONTENT SIDE (Text) --- */}
                <div className="w-full lg:w-1/2">
                  
                  {/* Module Tag */}
                  <div className="inline-flex items-center gap-2 mb-6">
                    <span className="h-px w-8 bg-gray-600"></span>
                    <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-400">
                      Module {index + 1}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-3xl md:text-5xl font-bold text-white mb-6 font-display tracking-tight">
                    {product.name}
                  </h3>

                  {/* Description */}
                  <p className="text-lg text-gray-400 leading-relaxed mb-10 max-w-lg">
                    {product.description}
                  </p>

                  {/* Features Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 mb-10">
                    {product.features.map((feature, i) => (
                      <div key={i} className="flex items-start gap-3 group/feature">
                        <div className="mt-1 flex items-center justify-center w-5 h-5 rounded-full bg-white/10 text-white group-hover/feature:bg-white group-hover/feature:text-black transition-colors duration-300 shrink-0">
                          <Check size={12} strokeWidth={3} />
                        </div>
                        <span className="text-sm font-medium text-gray-500 group-hover/feature:text-gray-300 transition-colors">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Action Button */}
                  <button className="group flex items-center gap-3 text-white font-semibold tracking-wide border-b border-white/20 pb-1 hover:border-white transition-all">
                    View Specifications
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </button>

                </div>
              </div>
            );
          })}
        </div>
        
        {/* Bottom Fade */}
        <div className="h-32 bg-gradient-to-t from-black to-transparent w-full absolute bottom-0 left-0 pointer-events-none" />

      </div>
    </section>
  );
}