"use client";

import React from "react";
import { Zap, ShieldCheck, TrendingUp, BarChart3 } from "lucide-react";

export default function MarketValidation() {
  
  const caseStudyData = [
    {
      title: "Peak Performance",
      description: "Stress-tested during high-volume retail events.",
      icon: Zap,
      stats: [
        { label: "Black Friday", value: "12k tx/hr" },
        { label: "Payment Time", value: "18s" },
        { label: "Uptime", value: "99.99%" },
        { label: "Response", value: "< 2hr" },
      ],
    },
    {
      title: "Reliability Metrics",
      description: "Enterprise-grade uptime and security standards.",
      icon: ShieldCheck,
      stats: [
        { label: "System Uptime", value: "99.97%" },
        { label: "Tx Success", value: "99.9%" },
        { label: "Data Accuracy", value: "100%" },
        { label: "Security", value: "Zero Incidents" },
      ],
    },
    {
      title: "Business Impact",
      description: "Proven ROI with cost reduction and revenue growth.",
      icon: TrendingUp,
      stats: [
        { label: "Labor Saved", value: "70%" },
        { label: "Rev Uplift", value: "+45%" },
        { label: "Deployment", value: "10 Days" },
        { label: "Cost Savings", value: "60%" },
      ],
    },
  ];

  return (
    <section className="py-24 bg-white border-t border-gray-100">
      
      <div className="container mx-auto px-6">
        
        {/* --- HEADER --- */}
        <div className="flex flex-col items-center text-center gap-6 mb-20 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-black bg-black text-xs font-bold uppercase tracking-widest text-white shadow-xl">
             <BarChart3 size={14} className="text-white" />
             Market Validation
          </div>
          <h2 className="text-4xl md:text-5xl font-bold font-display text-black tracking-tight leading-tight">
             Battle-Tested Results
          </h2>
          <p className="text-gray-500 max-w-xl text-lg font-light leading-relaxed">
            Our technology is validated across multiple retail formats, delivering consistent, verifiable results at scale.
          </p>
        </div>

        {/* --- GRID --- */}
        <div className="grid lg:grid-cols-3 gap-8">
          {caseStudyData.map((item, i) => (
            <MarketCard key={i} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}

// --- MONOCHROME CARD COMPONENT ---
function MarketCard({
  title,
  description,
  icon: Icon,
  stats,
}: {
  title: string;
  description: string;
  icon: any;
  stats: { label: string; value: string }[];
}) {
  return (
    <div className="group flex flex-col p-8 rounded-[2.5rem] bg-gray-50 border border-gray-100 transition-all duration-500 hover:bg-white hover:border-black hover:shadow-2xl hover:shadow-black/10 hover:-translate-y-2">
      
      {/* Header Area */}
      <div className="mb-10">
        <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-white border border-gray-200 mb-6 shadow-sm group-hover:bg-black group-hover:border-black transition-colors duration-300">
           <Icon size={24} strokeWidth={2} className="text-black group-hover:text-white transition-colors duration-300" />
        </div>
        
        <h3 className="text-2xl font-bold mb-3 text-gray-900 group-hover:text-black">
          {title}
        </h3>
        <p className="text-sm text-gray-500 leading-relaxed font-medium">
          {description}
        </p>
      </div>

      {/* Stats Grid (No Table borders) */}
      <div className="mt-auto grid grid-cols-2 gap-x-6 gap-y-8">
        {stats.map((stat, i) => (
          <div key={i} className="flex flex-col gap-1">
            <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400 group-hover:text-gray-500 transition-colors">
              {stat.label}
            </span>
            <span className="text-lg font-bold text-gray-900 font-display">
              {stat.value}
            </span>
          </div>
        ))}
      </div>

    </div>
  );
}