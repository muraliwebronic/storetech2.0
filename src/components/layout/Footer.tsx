"use client";

import React from "react";
import Link from "next/link";
import { Linkedin, Twitter, Facebook, ArrowRight, Globe, Mail, Phone } from "lucide-react";

export default function Footer() {
  
  const mainLinks = [
    { label: "Home", href: "/#hero" },
    { label: "Products", href: "/products" },
    { label: "Company", href: "/company" },
    { label: "Request Quotation", href: "/#getQuote" },
  ];

  const legalLinks = [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
    { label: "FAQ", href: "/faq" },
  ];

  return (
    <footer className="bg-black text-white pt-24 pb-12 md:px-20 border-t border-white/10 relative overflow-hidden">
      
      {/* Background Decor (Subtle Gradient) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-900 via-black to-black opacity-40 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        
        {/* --- MAIN GRID LAYOUT --- */}
        {/* Mobile: Stacked (1 col) | Desktop: 12-Column Grid for precise spacing */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          
          {/* --- LEFT COLUMN (Brand & Contact) - Takes 5/12 columns --- */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            
            {/* Brand */}
            <div>
              <h3 className="font-display font-bold text-3xl tracking-tight mb-4">
                Store<span className="text-gray-600">Tech</span>
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
                Modular, scalable solutions for unmanned retail — powering automation for self-checkout, vending, and analytics.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-3">
               <div className="flex items-center gap-3 group cursor-pointer">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-white/5 group-hover:bg-white group-hover:text-black transition-colors">
                    <Mail size={14} />
                  </div>
                  <a href="mailto:suryanarayanan@store-tech.se" className="text-lg font-medium text-gray-200 group-hover:text-white transition-colors">
                     suryanarayanan@store-tech.se
                  </a>
               </div>
               
               <div className="flex items-center gap-3 group cursor-pointer">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-white/5 group-hover:bg-white group-hover:text-black transition-colors">
                    <Phone size={14} />
                  </div>
                  <a href="tel:+917200088500" className="text-lg font-medium text-gray-200 group-hover:text-white transition-colors">
                     +91 72000 88500
                  </a>
               </div>
            </div>

            {/* Subscribe Input */}
            <div className="mt-2">
                <form className="relative flex items-center w-full max-w-sm">
                  <input
                    type="email"
                    placeholder="Subscribe to updates"
                    className="w-full bg-white/5 border border-white/10 rounded-full pl-6 pr-14 py-4 text-sm text-white placeholder:text-gray-600 focus:outline-none focus:border-white/30 focus:bg-white/10 transition-all"
                  />
                  <button
                    type="submit"
                    className="absolute right-2 top-2 bottom-2 aspect-square bg-white text-black rounded-full flex items-center justify-center hover:bg-gray-200 hover:scale-105 transition-all shadow-lg"
                  >
                    <ArrowRight size={16} />
                  </button>
                </form>
            </div>
          </div>

          {/* --- SPACER COLUMN (Takes 1/12) - Adds breathing room --- */}
          <div className="hidden lg:block lg:col-span-1" />

          {/* --- RIGHT COLUMN (Links) - Takes 6/12 columns --- */}
          <div className="lg:col-span-6 grid grid-cols-2 gap-8 lg:gap-12">
            
            {/* Platform Links */}
            <div>
              <h4 className="font-bold text-white mb-6 uppercase tracking-widest text-xs">Platform</h4>
              <ul className="space-y-4">
                {mainLinks.map((link) => (
                  <li key={link.label}>
                    <Link 
                      href={link.href} 
                      className="text-gray-500 hover:text-white hover:translate-x-1 inline-block transition-all duration-300 text-sm font-medium"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal Links & Socials */}
            <div>
              <h4 className="font-bold text-white mb-6 uppercase tracking-widest text-xs">Company</h4>
              <ul className="space-y-4 mb-8">
                {legalLinks.map((link) => (
                  <li key={link.label}>
                    <Link 
                      href={link.href} 
                      className="text-gray-500 hover:text-white hover:translate-x-1 inline-block transition-all duration-300 text-sm font-medium"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>

              {/* Social Icons (Moved here for better desktop balance) */}
              <div className="flex gap-3">
                 <SocialLink href="https://linkedin.com" icon={<Linkedin size={18} />} />
                 <SocialLink href="https://twitter.com" icon={<Twitter size={18} />} />
                 <SocialLink href="https://facebook.com" icon={<Facebook size={18} />} />
              </div>
            </div>

          </div>
        </div>

        {/* --- BOTTOM BAR --- */}
        <div className="border-t border-white/10 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-600">
          <p>&copy; {new Date().getFullYear()} StoreTech. All rights reserved.</p>
          <div className="flex items-center gap-2 hover:text-gray-400 transition-colors cursor-pointer">
             <Globe size={14} />
             <a href="https://www.store-tech.se" target="_blank" rel="noopener noreferrer">
               www.store-tech.se
             </a>
          </div>
        </div>

      </div>
    </footer>
  );
}

// Helper Component for Social Icons
function SocialLink({ href, icon }: { href: string; icon: React.ReactNode }) {
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer"
      className="w-10 h-10 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-gray-400 hover:bg-white hover:text-black transition-all duration-300 hover:-translate-y-1"
    >
      {icon}
    </a>
  );
}