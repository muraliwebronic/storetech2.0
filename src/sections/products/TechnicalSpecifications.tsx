"use client";

import React from "react";
import { 
  Cpu, 
  CreditCard, 
  Wifi, 
  ShieldCheck, 
  FileCheck, 
  Webhook, 
  Headphones, 
  Zap,
  Server
} from "lucide-react";

export default function TechnicalSpecifications() {
  
  // Transformed data into a structured object with Icons
  const specs = [
    { 
      label: "Hardware Platform", 
      value: "PAX IM30 Payment Terminal with Android OS", 
      icon: Cpu 
    },
    { 
      label: "Payment Processing", 
      value: "PCI-DSS Level 1 compliant with tokenization", 
      icon: CreditCard 
    },
    { 
      label: "Connectivity", 
      value: "4G Cellular, Wi-Fi, Ethernet with offline capability", 
      icon: Wifi 
    },
    { 
      label: "Security", 
      value: "End-to-end encryption, biometric authentication", 
      icon: ShieldCheck 
    },
    { 
      label: "Compliance", 
      value: "GDPR/CCPA, ADA compliant, age verification ready", 
      icon: FileCheck 
    },
    { 
      label: "Integration", 
      value: "RESTful APIs, webhooks, third-party connectors", 
      icon: Webhook 
    },
    { 
      label: "Infrastructure", 
      value: "Cloud-native, scalable microservices architecture", 
      icon: Server 
    },
    { 
      label: "Support", 
      value: "24/7 monitoring, <2 hour critical response", 
      icon: Headphones 
    },
  ];

  return (
    <section className="py-24 bg-black relative overflow-hidden border-t border-white/10">
      
      {/* --- BACKGROUND TEXTURE --- */}
      {/* Tech Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none opacity-50" />
      
      {/* Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-900/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        
        {/* --- HEADER --- */}
        <div className="flex flex-col items-center text-center gap-6 mb-20 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-xs font-bold uppercase tracking-widest text-white shadow-xl backdrop-blur-md">
             <Zap size={14} className="text-blue-400 fill-current" />
             Under the Hood
          </div>
          <h2 className="text-4xl md:text-5xl font-bold font-display text-white tracking-tight leading-tight">
             Enterprise-Grade <br />
             <span className="text-white ">
               Technical Infrastructure
             </span>
          </h2>
          <p className="text-gray-400 max-w-xl text-lg font-light leading-relaxed">
            Built for scale, security, and reliability. We use industry-standard protocols to ensure 99.99% uptime
          </p>
        </div>

        {/* --- SPECS GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {specs.map((spec, index) => (
            <div 
              key={index} 
              className="group relative flex flex-col p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:border-white/20 hover:-translate-y-1"
            >
              
              {/* Shine Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-500 pointer-events-none" />

              {/* Icon */}
              <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-black border border-white/10 text-white shadow-lg group-hover:scale-110 transition-transform duration-300">
                <spec.icon size={24} strokeWidth={1.5} />
              </div>

              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-sm font-bold uppercase tracking-wider text-gray-500 mb-3 group-hover:text-gray-300 transition-colors">
                  {spec.label}
                </h3>
                {/* Monospace font for technical feel */}
                <p className="font-mono text-sm leading-relaxed text-gray-300 group-hover:text-white transition-colors">
                  {spec.value}
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}