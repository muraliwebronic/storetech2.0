"use client";

import React from "react";
import { Parallax } from "react-scroll-parallax";
import Link from "next/link";
import AutoTyped from "@/components/common/AutoTyped";
import MetricCard from "@/components/home/MetricCard";
import { metrics, autoTypeData } from "@/data/metrics";
import { productsImg } from "@/data/productsImg";

export default function HeroSection() {
  return (
    <section className="mt-30 lg:mt-32 mb-20 relative">
      <div className="container mx-auto px-6">
        
        {/* --- HERO TOP SECTION --- */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
          {/* LEFT: Main Headline */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left w-full lg:w-1/2">
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-[1.1] font-display mb-6 tracking-tight text-black">
              The Future of <br />
              <span className="bg-gradient-to-r from-black via-gray-600 to-gray-400 bg-clip-text text-transparent">
                Unmanned Retail
              </span>
            </h1>
          </div>

          {/* RIGHT: Subtext, Metrics & Buttons */}
          <div className="flex flex-col items-center lg:items-end w-full lg:w-1/2 gap-8">
            <p className="text-center lg:text-right text-gray-600 text-lg sm:text-xl max-w-md font-light leading-relaxed">
              One platform. Many formats. <br className="hidden sm:block" />{" "}
              Configure once. Scale everywhere.
            </p>

            {/* Metrics */}
            <div className="text-lg sm:text-xl font-medium h-8">
              <AutoTyped
                strings={autoTypeData.strings}
                color={autoTypeData.color}
                cursorChar={autoTypeData.cursorChar}
              />
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <Link href="#investment" className="w-full sm:w-auto">
                <button className="w-full sm:w-auto rounded-full bg-black px-8 py-4 text-white font-medium text-lg shadow-2xl shadow-black/30 hover:bg-gray-900 hover:scale-[1.02] transition-all duration-300">
                  View Opportunity
                </button>
              </Link>
              <Link href="/products.html" className="w-full sm:w-auto">
                <button className="w-full sm:w-auto rounded-full bg-white border border-gray-200 px-8 py-4 text-black font-medium text-lg hover:bg-gray-50 hover:border-black transition-all duration-300">
                  Explore Solutions
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* --- PARALLAX SECTION (Premium Black & Borderless) --- */}
        <div className="mt-20 lg:mt-32">
     
          <div className="relative z-0 flex h-95 md:h-120 items-center justify-center rounded-[3rem] bg-black overflow-hidden">
            
            {/* Flex Container for Images */}
            <div className="flex items-center justify-center gap-6 md:gap-12 z-10 pt-8 md:pt-16">
              
              {/* Product 1 */}
              <Parallax speed={-5} className="self-center">
                <img
                  src={productsImg[0]}
                  alt="Product 1"
                  className="w-20 sm:w-28 md:w-40 drop-shadow-2xl transition-all duration-700 opacity-90 hover:opacity-100 hover:scale-105"
                />
              </Parallax>

              {/* Product 2 (Center) */}
              <Parallax speed={10}>
                <img
                  src={productsImg[3]}
                  alt="Main Product"
                  className="w-32 sm:w-44 md:w-72 drop-shadow-2xl hover:scale-105 transition-transform duration-500 z-20"
                />
              </Parallax>

              {/* Product 3 */}
              <Parallax speed={-5} className="self-center">
                <img
                  src={productsImg[2]}
                  alt="Product 3"
                  className="w-20 sm:w-28 md:w-44 drop-shadow-2xl transition-all duration-700 opacity-90 hover:opacity-100 hover:scale-105"
                />
              </Parallax>
            </div>

            {/* Product 4 (Floating) */}
            <div className="absolute bottom-12 left-[10%] md:left-[20%] z-20">
              <Parallax speed={4}>
                <img
                  src={productsImg[1]}
                  alt="Product 4"
                  className="w-12 md:w-24 drop-shadow-lg transition-all duration-700 hover:rotate-6"
                />
              </Parallax>
            </div>

            {/* --- CLOUDY FADE EFFECT (Seamless) --- */}
            {/* Fades from Solid Black (bottom) to Transparent (top) */}
            <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-black via-black/90 to-transparent z-10 pointer-events-none" />

            {/* Background Texture (Subtle depth) */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-gray-900 via-black to-black opacity-50 pointer-events-none" />
          </div>
        </div>

        {/* --- METRICS GRID --- */}
        <div className="mt-24 container mx-auto">
          <h3 className="mb-10 text-center text-xs font-bold text-gray-900 uppercase tracking-[0.25em]">
            Platform Milestones
          </h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {metrics.map((v, i) => (
              <MetricCard key={i} label={v.label}>
                {v.children}
              </MetricCard>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}