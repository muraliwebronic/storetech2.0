"use client";

import { useEffect, useRef } from "react";
import type { ECharts, EChartsOption } from "echarts";
import { Globe } from "lucide-react";
import EuropeCard from "@/components/company/EuropeCard";

export default function EuropeanDeployment() {
  const mapRef = useRef<HTMLDivElement | null>(null);

  const caseStudies = [
    {
      title: "24sju Convenience Stores",
      stats: [
        { label: "Stores Launched", value: 120 },
        { label: "Months", value: 18 },
      ],
      bullets: [
        "65% lower technology costs",
        "40% revenue uplift from extended hours",
      ],
    },
    {
      title: "Tanlux Tanning Studios",
      stats: [
        { label: "Salons Live", value: 10 },
        { label: "Labor Reduction", value: "70%" },
      ],
      bullets: [
        "Fully unmanned operations",
        "50% revenue increase",
        "80% reduction in no-shows",
      ],
    },
  ];

  useEffect(() => {
    let chart: ECharts | null = null;
    let destroyed = false;

    async function initMap() {
      const echarts = await import("echarts");
      const europeModule = await import("@/data/maps/custom.geo.json");
      const europeGeo: any = (europeModule as any).default ?? europeModule;

      if (!mapRef.current || destroyed) return;

      echarts.registerMap("europe", europeGeo);
      chart = echarts.init(mapRef.current);

      const option: EChartsOption = {
        backgroundColor: "transparent",
        tooltip: {
          trigger: "item",
          backgroundColor: "#000000",
          borderColor: "#334155", // Slate-700
          borderWidth: 1,
          textStyle: { color: "#ffffff" },
          padding: 12,
        },
        // --- COLORS CONFIGURATION ---
        visualMap: {
          min: 1,
          max: 145,
          left: "20",
          bottom: "20",
          text: ["High Density", "Low Density"],
          calculable: true,
          textStyle: { color: "#000000" }, 
          inRange: {
            // Fades from Dark Gray -> Electric Blue -> Bright Cyan
            color: ["#374151", "#2563eb", "#06b6d4"], 
          },
        },
        geo: {
            map: 'europe',
            roam: false,
            zoom: 1.2,
            label: { show: false },
            itemStyle: {
                // Dark Map Base
                areaColor: '#18181b', // Zinc-900
                borderColor: '#404040', // Zinc-700 Borders
                borderWidth: 1
            },
            emphasis: {
                itemStyle: {
                    areaColor: '#27272a' // Lighter black on hover
                },
                label: {
                    show: false
                }
            }
        },
        series: [
          {
            name: "Deployments",
            type: "map",
            map: "europe", // <--- FIXED: Added this property to satisfy TypeScript
            geoIndex: 0,
            data: [
              { name: "Sweden", value: 120 }, 
              { name: "Norway", value: 30 },
              { name: "Denmark", value: 15 },
              { name: "Finland", value: 5 },
            ],
          },
        ],
      };

      chart.setOption(option);
    }

    initMap();

    const resize = () => chart?.resize();
    window.addEventListener("resize", resize);

    return () => {
      destroyed = true;
      window.removeEventListener("resize", resize);
      chart?.dispose();
    };
  }, []);

  return (
    <section className="py-24  relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* --- HEADER --- */}
        <div className="flex flex-col items-center text-center gap-6 mb-20 max-w-4xl mx-auto">
           <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black text-xs font-bold uppercase tracking-widest text-white shadow-md">
              <Globe size={14} className="text-white" />
              Proven Production
           </div>
           <h2 className="text-4xl md:text-5xl font-bold font-display text-gray-900 leading-tight">
             European Success Story
           </h2>
           <p className="text-gray-500 max-w-2xl text-lg font-light">
             Our platform is proven across four countries, demonstrating scalability, stability, and strong market fit.
           </p>
        </div>

        {/* --- CONTENT GRID --- */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* LEFT: THE MAP */}
          <div className="animate-on-scroll relative">
            <div className="relative z-10 w-full h-[500px] bg-white rounded-[2.5rem] p-4 shadow-xl border-2 border-black overflow-hidden">
              
              <div
                ref={mapRef}
                id="deployment-map"
                className="w-full h-full flex items-center justify-center"
              />
              
              <div className="absolute top-8 left-8 bg-white/90 backdrop-blur-md p-4 rounded-2xl border border-gray-200 shadow-sm z-20">
                <div className="text-3xl font-bold text-black">160+</div>
                <div className="text-xs font-bold text-gray-500 uppercase tracking-widest">Active Locations</div>
              </div>
            </div>
          </div>

          {/* RIGHT: CARDS */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4 ml-2">Featured Deployments</h3>
            {caseStudies.map((v, i) => (
              <EuropeCard
                key={i}
                title={v.title}
                stats={v.stats}
                bullets={v.bullets}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}