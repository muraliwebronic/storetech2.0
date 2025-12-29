"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

// 1. CONSTANTS
const navs = [
  { href: "/", children: "Home" },
  { href: "/products", children: "Products" },
  { href: "/company", children: "Company" },
  { href: "/#getQuote", children: "Request Quotation", isButton: true },
];

export default function NavBar() {
  const [isMobileNav, setisMobileNav] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  // 2. SCROLL EFFECT LOGIC
  useEffect(() => {
    const handleScroll = () => {
      // Trigger effect after scrolling 20px
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    setisMobileNav(false); // Close mobile menu on route change
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  return (
    <>
      {/* NAVBAR CONTAINER */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out px-4 md:px-6 
          ${isScrolled ? "py-4" : "py-6"}`
        }
      >
        <div
          className={`mx-auto max-w-7xl flex items-center justify-between rounded-full px-6 py-3 transition-all duration-500
            ${isScrolled 
              /* SCROLLED: Black Glass Effect */
              ? "bg-black/85 backdrop-blur-xl shadow-2xl " 
              /* TOP: Transparent */
              : "bg-transparent" 
            }`
          }
        >
          {/* LOGO */}
          <Link href="/" className="font-display font-bold text-2xl tracking-tight group">
            {/* "Store" - Changes color based on scroll */}
            <span className={`transition-colors duration-300 ${isScrolled ? "text-white" : "text-black"}`}>
              Store
            </span>
            {/* "Tech" - Always dark gray at top, white/gray when scrolled */}
            <span className={`transition-colors duration-300 ${isScrolled ? "text-gray-400" : "text-gray-600"}`}>
              Tech
            </span>
          </Link>

          {/* DESKTOP NAV */}
          <div className="hidden md:flex items-center space-x-2">
            {navs.map((item, i) => (
              item.isButton ? (
                // CTA Button (Always visible contrast)
                <Link
                  key={i}
                  href={item.href}
                  className={`ml-4 px-6 py-2.5 rounded-full font-medium text-sm transition-all shadow-lg hover:scale-105
                    ${isScrolled 
                        ? "bg-white text-black hover:bg-gray-200" // White button on black glass
                        : "bg-black text-white hover:bg-gray-800" // Black button on light background
                    }`
                  }
                >
                  {item.children}
                </Link>
              ) : (
                // Standard Links
                <Link
                  key={i}
                  href={item.href}
                  className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300
                    ${pathname === item.href 
                      /* Active State */
                      ? (isScrolled ? "text-white bg-white/10" : "text-black bg-black/5")
                      /* Inactive State */
                      : (isScrolled 
                          ? "text-gray-400 hover:text-white hover:bg-white/5" // Light text on black
                          : "text-gray-600 hover:text-black hover:bg-black/5" // Dark text on white
                        )
                    }`
                  }
                >
                  {item.children}
                </Link>
              )
            ))}
          </div>

          {/* MOBILE HAMBURGER BUTTON */}
          <button
            onClick={() => setisMobileNav(!isMobileNav)}
            className={`md:hidden p-2 rounded-full transition-colors
               ${isScrolled ? "text-white hover:bg-white/10" : "text-black hover:bg-black/5"}`
            }
            aria-label="Toggle Menu"
          >
            {isMobileNav ? (
              // Close Icon
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              // Menu Icon
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* MOBILE MENU OVERLAY (Black Glass Theme) */}
      <div
        className={`fixed inset-x-0 top-[80px] z-40 p-4 md:hidden transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] transform origin-top
          ${isMobileNav 
            ? "opacity-100 scale-y-100 translate-y-0" 
            : "opacity-0 scale-y-95 -translate-y-4 pointer-events-none"
          }`
        }
      >
        <div className="bg-black/90 backdrop-blur-2xl rounded-[2rem] shadow-2xl border border-white/10 p-6 flex flex-col space-y-2">
          {navs.map((item, i) => (
            <Link
              key={i}
              href={item.href}
              className={`block w-full px-4 py-4 rounded-xl text-center font-medium transition-all
                ${item.isButton 
                  ? "bg-white text-black mt-4 shadow-lg hover:bg-gray-200" 
                  : pathname === item.href
                    ? "bg-white/10 text-white"
                    : "text-gray-400 hover:text-white hover:bg-white/5"
                }`
              }
              onClick={() => setisMobileNav(false)}
            >
              {item.children}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}