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
    <section className="py-24 bg-white relative overflow-hidden border-t border-gray-100">
      
      {/* Clean Background - No Texture */}

      <div className="container mx-auto px-6 relative z-10">
        
        {/* --- HEADER --- */}
        <div className="flex flex-col items-center text-center gap-6 mb-20 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black text-xs font-bold uppercase tracking-widest text-white shadow-xl">
             <Zap size={14} className="text-white fill-current" />
             Under the Hood
          </div>
          <h2 className="text-4xl md:text-5xl font-bold font-display text-black tracking-tight leading-tight">
             Enterprise-Grade <br />
             Technical Infrastructure
          </h2>
          <p className="text-gray-500 max-w-xl text-lg font-light leading-relaxed">
            Built for scale, security, and reliability. We use industry-standard protocols to ensure 99.99% uptime.
          </p>
        </div>

        {/* --- SPECS GRID --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {specs.map((spec, index) => (
            <div 
              key={index} 
              className="group relative flex flex-col p-6 rounded-[1.5rem] bg-black text-white shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:shadow-black/25"
            >
              
              {/* Icon Box (White on Black Card) */}
              <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white text-black shadow-lg group-hover:scale-110 transition-transform duration-300">
                <spec.icon size={24} strokeWidth={2} />
              </div>

              {/* Content */}
              <div className="relative z-10 mt-auto">
                <h3 className="text-xs font-bold uppercase tracking-widest text-gray-500 mb-3 group-hover:text-gray-400 transition-colors">
                  {spec.label}
                </h3>
                {/* Monospace font for technical feel */}
                <p className="font-mono text-sm leading-relaxed text-gray-200 group-hover:text-white transition-colors">
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