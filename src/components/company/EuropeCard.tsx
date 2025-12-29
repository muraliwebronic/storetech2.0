import React from "react";
import { CheckCircle2 } from "lucide-react";

export default function EuropeCard({
  title,
  stats,
  bullets,
}: {
  title: string;
  stats: { label: string; value: number | string }[];
  bullets: string[];
  // Color prop removed from interface
}) {
  
  return (
    // High contrast: Solid Black Card on the White Section background
    <div className={`group relative p-8 rounded-[2rem] bg-black text-white shadow-2xl transition-all duration-300 hover:-translate-y-1`}>
      
      <div className="relative z-10">
        
        {/* Title - White text */}
        <h3 className="text-2xl font-bold mb-8 text-white">
          {title}
        </h3>

        {/* Stats Grid - Darker gray boxes inside the black card for depth without color */}
        <div className="grid grid-cols-2 gap-4 mb-8">
          {stats.map((v, i) => (
            <div key={i} className="p-5 rounded-2xl bg-gray-900 border border-gray-800">
              <div className="text-3xl font-bold text-white">{v.value}</div>
              <div className="text-xs font-bold uppercase tracking-wider text-gray-400 mt-2">
                {v.label}
              </div>
            </div>
          ))}
        </div>

        {/* Bullets - White icons, light gray text */}
        <ul className="space-y-4">
          {bullets.map((v, i) => (
            <li key={i} className="flex items-start gap-3">
              {/* Icon is solid white */}
              <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-white" fill="currentColor" />
              <span className="text-sm text-gray-300 font-medium leading-relaxed">{v}</span>
            </li>
          ))}
        </ul>

      </div>
    </div>
  );
}