"use client";

import React from "react";
import { Zap, ShieldCheck, TrendingUp, BarChart3 } from "lucide-react";

export default function MarketValidation() {
  
  const caseStudyData = [
    {
      title: "Peak Performance",
      description: "Stress-tested during high-volume retail events to ensure stability.",
      icon: Zap,
      accentColor: "text-blue-400",
      dotColor: "bg-blue-400",
      stats: [
        { label: "Black Friday 2024", value: "12,000 tx/hour" },
        { label: "Average Payment Time", value: "18 seconds" },
        { label: "Hardware Failure Rate", value: "0.8%" },
        { label: "Critical Response Time", value: "< 2 hours" },
      ],
    },
    {
      title: "Reliability Metrics",
      description: "Enterprise-grade uptime and security standards.",
      icon: ShieldCheck,
      accentColor: "text-green-400",
      dotColor: "bg-green-400",
      stats: [
        { label: "System Uptime", value: "99.97%" },
        { label: "Transaction Success", value: "99.9%" },
        { label: "Data Accuracy", value: "99.99%" },
        { label: "Security Incidents", value: "Zero" },
      ],
    },
    {
      title: "Business Impact",
      description: "Proven ROI with significant cost reduction and revenue growth.",
      icon: TrendingUp,
      accentColor: "text-orange-400",
      dotColor: "bg-orange-400",
      stats: [
        { label: "Labor Cost Reduction", value: "60-70%" },
        { label: "Revenue Uplift", value: "35-45%" },
        { label: "Deployment Time", value: "10 days avg" },
        { label: "Cost Savings", value: "60% vs traditional" },
      ],
    },
  ];

  return (
    <section className="py-24 bg-black relative overflow-hidden border-t border-white/10">
      
      {/* Background Texture */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none opacity-50" />

      <div className="container mx-auto px-6 relative z-10">
        
        {/* --- HEADER --- */}
        <div className="flex flex-col items-center text-center gap-6 mb-20 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-xs font-bold uppercase tracking-widest text-white shadow-xl backdrop-blur-md">
             <BarChart3 size={14} className="text-white" />
             Market Validation
          </div>
          <h2 className="text-4xl md:text-5xl font-bold font-display text-white tracking-tight leading-tight">
             Battle-Tested Technology
          </h2>
          <p className="text-gray-400 max-w-xl text-lg font-light leading-relaxed">
            Our technology is validated across multiple retail formats, delivering consistent results at scale.
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

// --- REFACTORED CARD COMPONENT ---
function MarketCard({
  title,
  description,
  icon: Icon,
  accentColor,
  dotColor,
  stats,
}: {
  title: string;
  description: string;
  icon: any;
  accentColor: string;
  dotColor: string;
  stats: { label: string; value: string }[];
}) {
  return (
    <div className="group relative flex flex-col p-8 rounded-[2rem] bg-white/5 border border-white/10 backdrop-blur-sm transition-all duration-500 hover:bg-white/10 hover:border-white/20 hover:-translate-y-1">
      
      {/* Shine Hover Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 rounded-[2rem] transition-opacity duration-500 pointer-events-none" />

      {/* Header */}
      <div className="relative z-10 mb-8">
        <div className={`inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-black border border-white/10 mb-6 shadow-lg ${accentColor}`}>
           <Icon size={24} strokeWidth={2} />
        </div>
        <h3 className={`text-2xl font-bold mb-3 text-white group-hover:text-white transition-colors`}>
          {title}
        </h3>
        <p className="text-sm text-gray-400 leading-relaxed font-light">
          {description}
        </p>
      </div>

      {/* Stats List */}
      <div className="relative z-10 space-y-4 mt-auto">
        <div className="h-px w-full bg-white/5 mb-6" /> {/* Divider */}
        
        {stats.map((stat, i) => (
          <div key={i} className="flex items-center justify-between group/stat">
            <div className="flex items-center gap-3">
               <div className={`w-1.5 h-1.5 rounded-full ${dotColor} shrink-0`} />
               <span className="text-sm text-gray-400 font-medium group-hover/stat:text-gray-300 transition-colors">
                 {stat.label}
               </span>
            </div>
            <span className={`text-sm font-bold ${accentColor}`}>
              {stat.value}
            </span>
          </div>
        ))}
      </div>

    </div>
  );
}