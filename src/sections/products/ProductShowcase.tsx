"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Check, ArrowRight, Zap } from "lucide-react";
import { products } from "@/data/products";
import { productsImg } from "@/data/productsImg";

// Custom hook for scroll detection
const useElementOnScreen = (options: IntersectionObserverInit) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const [entry] = entries;
      if (entry.isIntersecting) {
        setIsVisible(true);
        if (containerRef.current) observer.unobserve(containerRef.current);
      }
    }, options);

    if (containerRef.current) observer.observe(containerRef.current);

    return () => {
      if (containerRef.current) observer.unobserve(containerRef.current);
    };
  }, [options]);

  return [containerRef, isVisible] as const;
};

const ProductCard = ({ product, index }: { product: any; index: number }) => {
  const [containerRef, isVisible] = useElementOnScreen({
    threshold: 0.15, // Trigger slightly earlier for smoother feel
  });

  const isEven = index % 2 === 0;
  const imageSrc = productsImg[index % productsImg.length];
  
  // Format number to be 01, 02, etc.
  const formattedNumber = (index + 1).toString().padStart(2, '0');

  return (
    <div
      ref={containerRef}
      className={`group flex flex-col lg:flex-row items-center gap-12 lg:gap-24 ${
        !isEven ? "lg:flex-row-reverse" : ""
      } transition-all duration-1000 ease-[cubic-bezier(0.23,1,0.32,1)] transform ${
        isVisible 
          ? "opacity-100 translate-y-0 blur-0 scale-100" 
          : "opacity-0 translate-y-24 blur-sm scale-95"
      }`}
    >
      {/* --- Image Section (Pure Black Card) --- */}
      <div className="w-full lg:w-1/2 perspective-1000">
        <div className="relative aspect-[4/3] w-full rounded-[2rem] bg-neutral-950 border border-white/10 shadow-2xl overflow-hidden flex items-center justify-center p-8 md:p-12 transition-all duration-500 hover:border-white/20">
          
          {/* Subtle Ambient Light behind object */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] bg-white/5 blur-[80px] rounded-full pointer-events-none" />
          
          {/* Grid pattern overlay on black (Very subtle) */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,black,transparent)] pointer-events-none" />

          {/* Clean Number - Top Right */}
          <div className="absolute top-6 right-8 z-10">
             <span className="font-mono text-6xl md:text-8xl font-bold text-white/10 tracking-tighter select-none">
                {formattedNumber}
             </span>
          </div>

          {/* Premium Shimmer Line */}
          <div className="absolute inset-0 -translate-x-full group-hover:animate-shimmer-premium z-20 pointer-events-none">
            <div className="h-full w-20 bg-gradient-to-r from-transparent via-white/10 to-transparent transform skew-x-12" />
          </div>

          {/* Product Image */}
          <div className="relative z-30 w-full h-full flex items-center justify-center transition-transform duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:scale-105 group-hover:-rotate-1">
            <Image
              src={imageSrc}
              alt={product.name}
              width={800}
              height={600}
              className="object-contain max-h-full drop-shadow-[0_20px_40px_rgba(0,0,0,0.8)]"
            />
          </div>
        </div>
      </div>

      {/* --- Content Section --- */}
      <div className="w-full lg:w-1/2">
        <h3 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
          {product.name}
        </h3>
        
        <p className="text-lg text-gray-600 leading-relaxed mb-10 pl-1">
          {product.description}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 mb-12">
          {product.features.map((feature: string, i: number) => (
            <div key={i} className="flex items-center gap-3 group/feature">
              <div className="flex items-center justify-center w-6 h-6 rounded-full bg-black text-white shrink-0 group-hover/feature:scale-110 transition-transform duration-300">
                <Check size={12} strokeWidth={3} />
              </div>
              <span className="text-sm font-medium text-gray-700 group-hover/feature:text-black transition-colors">
                {feature}
              </span>
            </div>
          ))}
        </div>

        <div>
          <Link href="#getQuote">
            <button className="flex items-center gap-3 bg-black text-white px-10 py-4 rounded-full font-bold text-sm tracking-wide hover:bg-neutral-800 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group/btn border border-neutral-800">
              Request Quotation
              <ArrowRight
                size={16}
                className="text-gray-400 group-hover/btn:text-white group-hover/btn:translate-x-1 transition-all"
              />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default function ProductShowcase() {
  return (
    <section className="py-32 relative md:px-20 overflow-hidden bg-gray-50 border-y border-gray-200">
      
      {/* Improved Texture Background */}
      <div className="absolute inset-0 z-0">
         {/* Dot Matrix Pattern */}
         <div className="absolute inset-0 bg-[radial-gradient(#a3a3a3_1px,transparent_1px)] [background-size:24px_24px] opacity-20" />
         
         {/* Radial Vignette to focus center */}
         <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(249,250,251,0.8)_60%,#f9fafb_100%)]" />
         
         {/* Subtle colored glow blobs for depth */}
         <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-100/40 rounded-full blur-[120px] mix-blend-multiply translate-x-1/2 -translate-y-1/2 pointer-events-none" />
         <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-100/40 rounded-full blur-[100px] mix-blend-multiply -translate-x-1/2 translate-y-1/2 pointer-events-none" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header Section */}
        <div className="mb-32 max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 bg-white/50 backdrop-blur-md shadow-sm text-xs font-bold uppercase tracking-widest text-gray-900 mb-8">
            <Zap size={14} className="text-black fill-current" />
            Our Product Suite
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold font-display text-gray-900 mb-6 tracking-tight leading-[1.1]">
            Engineered for <br />
            <span className="relative inline-block">
               <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-500 animate-[gradient-xy_3s_ease_infinite] bg-[length:200%_auto]">
                  Modern Retail
               </span>
               {/* Underline decoration */}
               <span className="absolute bottom-2 left-0 w-full h-3 bg-gray-200/50 -z-10 -rotate-1 skew-x-12" />
            </span>
          </h2>
          
          <p className="text-xl text-gray-500 font-light leading-relaxed max-w-2xl mx-auto">
            From entry to checkout, we automate the journey with precision
            hardware and intelligent software
          </p>
        </div>

        {/* Cards Wrapper */}
        <div className="flex flex-col gap-32">
          {products.map((product, index) => (
            <ProductCard key={product.name} product={product} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}