"use client";

import React from "react";
import { Parallax } from "react-scroll-parallax";
import { productsImg } from "@/data/productsImg";

export default function ProductsHero() {
  return (
    <section className="mt-32 lg:mt-40 mb-20 relative">
      <div className="container mx-auto px-6">
        
        {/* --- HEADER SECTION (Clean & Focused) --- */}
        <div className="flex flex-col lg:flex-row items-end justify-between gap-8 lg:gap-16 mb-24">
          
          {/* LEFT: Headline */}
          <div className="w-full lg:w-2/3">
            <h1 className="text-5xl sm:text-4xl lg:text-8xl font-bold leading-none font-display tracking-tight text-black">
              Complete <br />
              <span className="bg-linear-to-r from-black via-gray-600 to-gray-400 bg-clip-text text-transparent">
                Product Suite
              </span>
            </h1>
          </div>

          {/* RIGHT: Description (No buttons, just value) */}
          <div className="w-full lg:w-1/3 pb-2">
            <p className="text-lg text-gray-600 leading-relaxed font-medium">
              One platform with six integrated modules. Start with any product and expand as your business grows
            </p>
          </div>
        </div>

        {/* --- PARALLAX SHOWCASE (Premium Black & Borderless) --- */}
        <div className="relative z-0 flex h-96 md:h-128 items-center justify-center rounded-[3rem] bg-black overflow-hidden">
            
            {/* Flex Container for Images */}
            <div className="flex items-center justify-center gap-6 md:gap-16 z-10 pt-10 md:pt-20">
              
              {/* Product 1 */}
              <Parallax speed={-5} className="self-center">
                <img
                  src={productsImg[0]}
                  alt="Module 1"
                  className="w-24 sm:w-32 md:w-48 drop-shadow-2xl opacity-90 hover:opacity-100 hover:scale-105 transition-all duration-700"
                />
              </Parallax>

              {/* Product 2 (Hero Center) */}
              <Parallax speed={10}>
                <img
                  src={productsImg[3]}
                  alt="Core Module"
                  className="w-40 sm:w-56 md:w-80 drop-shadow-2xl z-20 hover:scale-105 transition-transform duration-500"
                />
              </Parallax>

              {/* Product 3 */}
              <Parallax speed={-5} className="self-center">
                <img
                  src={productsImg[2]}
                  alt="Module 3"
                  className="w-24 sm:w-32 md:w-48 drop-shadow-2xl opacity-90 hover:opacity-100 hover:scale-105 transition-all duration-700"
                />
              </Parallax>
            </div>

            {/* Floating Element */}
            <div className="absolute bottom-16 left-[15%] z-20 hidden md:block">
              <Parallax speed={4}>
                <img
                  src={productsImg[1]}
                  alt="Module 4"
                  className="w-28 drop-shadow-lg hover:rotate-6 transition-all duration-700"
                />
              </Parallax>
            </div>

            {/* --- CLOUDY FADE EFFECT --- */}
            <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-black via-black/90 to-transparent z-10 pointer-events-none" />

            {/* Background Texture */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-gray-900 via-black to-black opacity-50 pointer-events-none" />
        </div>

      </div>
    </section>
  );
}