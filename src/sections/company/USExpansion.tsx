"use client";

import { useEffect, useRef } from "react";
import type { ECharts, EChartsOption } from "echarts";
import { Flag, TrendingUp, Target, ArrowRight } from "lucide-react";

export default function USExpansion() {
  const chartRef = useRef<HTMLDivElement | null>(null);

  const timelineData = [
    {
      phase: "Phase 1: Foundation",
      timeframe: "Q1-Q2 2025",
      description: "Establishing the operational beachhead.",
      goals: [
        "Target franchisees & regional chains",
        "Secure first 50 locations ($5M ARR)",
        "Establish US support HQ",
      ],
    },
    {
      phase: "Phase 2: Partnerships",
      timeframe: "Q3-Q4 2025",
      description: "Scaling through strategic channels.",
      goals: [
        "Integrate with Square, Clover, Stripe",
        "$10M ARR via channel partners",
        "Launch unified payment gateway",
      ],
    },
    {
      phase: "Phase 3: Scale",
      timeframe: "2026",
      description: "National expansion and dominance.",
      goals: [
        "National chain partnerships",
        "Targeting 1,000+ locations",
        "Anchor customer acquisitions",
      ],
    },
    {
      phase: "Phase 4: Dominate",
      timeframe: "2027+",
      description: "Market leadership and density.",
      goals: [
        "University & Hospitality expansion",
        "High density, large ACVs",
        "Market leadership position",
      ],
    },
  ];

  // --- CHART CONFIG (Dark Mode) ---
  useEffect(() => {
    if (!chartRef.current) return;

    let chart: ECharts | null = null;
    let destroyed = false;

    const initChart = async () => {
      const echarts = await import("echarts");

      if (!chartRef.current || destroyed) return;

      chart = echarts.init(chartRef.current);

      const option: EChartsOption = {
        backgroundColor: "transparent",
        textStyle: { fontFamily: "inherit" },
        tooltip: {
          trigger: "axis",
          backgroundColor: "#000",
          borderColor: "#333",
          textStyle: { color: "#fff" },
        },
        legend: {
          data: ["Projected ARR ($M)", "Locations"],
          top: 0,
          right: 0,
          textStyle: { color: "#9ca3af" },
          icon: "circle",
        },
        grid: {
          left: 0,
          right: 0,
          top: 40,
          bottom: 0,
          containLabel: true,
        },
        xAxis: {
          type: "category",
          data: ["2024", "2025", "2026", "2027", "2028"],
          axisLine: { lineStyle: { color: "#333" } },
          axisLabel: { color: "#6b7280" },
          axisTick: { show: false },
        },
        yAxis: [
          {
            type: "value",
            name: "ARR",
            splitLine: { lineStyle: { color: "#1f2937", type: "dashed" } },
            axisLabel: { color: "#6b7280" },
          },
          {
            type: "value",
            name: "Locations",
            splitLine: { show: false },
            axisLabel: { show: false },
          },
        ],
        series: [
          {
            name: "Projected ARR ($M)",
            type: "line",
            smooth: true,
            yAxisIndex: 0,
            showSymbol: false,
            itemStyle: { color: "#fff" }, // White Line
            lineStyle: { width: 3, shadowColor: "rgba(255,255,255,0.5)", shadowBlur: 10 },
            areaStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                { offset: 0, color: "rgba(255, 255, 255, 0.2)" },
                { offset: 1, color: "rgba(255, 255, 255, 0)" },
              ]),
            },
            data: [2, 5, 10, 18, 25],
          },
          {
            name: "Locations",
            type: "bar",
            yAxisIndex: 1,
            barWidth: 12,
            itemStyle: { 
                color: "#3f3f46", // Zinc-700 (Dark Gray Bars)
                borderRadius: [4, 4, 0, 0]
            }, 
            data: [50, 150, 400, 800, 1200],
          },
        ],
      };

      chart.setOption(option);
    };

    initChart();

    const handleResize = () => chart?.resize();
    window.addEventListener("resize", handleResize);

    return () => {
      destroyed = true;
      window.removeEventListener("resize", handleResize);
      chart?.dispose();
    };
  }, []);

  return (
    <section className="py-24 px-6 md:px-20 bg-white relative overflow-hidden">
      
      {/* --- BACKGROUND TEXTURE --- */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none opacity-60" />

      <div className="container mx-auto px-6 relative z-10">
        
        {/* --- HEADER --- */}
        <div className="flex flex-col items-center text-center gap-6 mb-20 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-black bg-black text-xs font-bold uppercase tracking-widest text-white shadow-xl">
             <Flag size={14} className="text-white" />
             Strategic Roadmap
          </div>
          <h2 className="text-4xl md:text-5xl font-bold font-display text-gray-900 leading-tight">
             US Market Expansion
          </h2>
          <p className="text-gray-500 max-w-2xl text-lg font-light">
            A strategic four-phase approach to capture the $11.5B US unmanned retail market, balancing rapid scale with sustainable unit economics.
          </p>
        </div>

        {/* --- CONTENT GRID --- */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* LEFT: TIMELINE */}
          <div className="space-y-0 relative">
            {/* Vertical Connector Line */}
            <div className="absolute left-[19px] top-4 bottom-10 w-0.5 bg-dashed border-l-2 border-dashed border-gray-200" />

            {timelineData.map((v, i) => (
              <TimelineItem key={i} {...v} index={i} />
            ))}
          </div>

          {/* RIGHT: CHART CARD */}
          <div className="relative sticky top-32">
             <div className="relative z-10 w-full bg-black rounded-[2.5rem] p-8 shadow-2xl shadow-black/30 border border-gray-800 overflow-hidden">
                
                {/* Header inside Chart Card */}
                <div className="flex items-center justify-between mb-8">
                   <div>
                      <h3 className="text-xl font-bold text-white flex items-center gap-2">
                         <TrendingUp className="text-white" size={20} />
                         Growth Trajectory
                      </h3>
                      <p className="text-gray-500 text-sm mt-1">Projected ARR vs Locations</p>
                   </div>
                   <div className="text-right">
                      <div className="text-2xl font-bold text-white">$25M</div>
                      <div className="text-xs font-bold text-gray-500 uppercase tracking-wider">2028 Target</div>
                   </div>
                </div>

                {/* The Chart */}
                <div ref={chartRef} className="w-full h-[350px]" />
                
                {/* Shine Overlay */}
                <div className="shine-effect opacity-10 pointer-events-none" />
             </div>
             
             {/* Decorative Blur behind chart */}
             <div className="absolute inset-0 bg-gray-500/10 blur-[100px] -z-10 rounded-full" />
          </div>

        </div>
      </div>
    </section>
  );
}

// --- TIMELINE COMPONENT ---
function TimelineItem({ phase, timeframe, description, goals, index }: any) {
  return (
    <div className="relative pl-16 pb-12 last:pb-0 group">
      
      {/* Dot Marker */}
      <div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center shadow-sm z-10 group-hover:scale-110 group-hover:border-black transition-all duration-300">
         <span className="text-xs font-bold text-gray-400 group-hover:text-black">0{index + 1}</span>
      </div>

      <div className="flex flex-col gap-2">
         {/* Phase & Time */}
         <div className="flex flex-wrap items-center gap-3">
            <h3 className="text-xl font-bold text-gray-900 group-hover:text-black transition-colors">{phase}</h3>
            <span className="px-2 py-0.5 rounded-md bg-gray-100 text-gray-600 text-xs font-bold uppercase tracking-wider">
               {timeframe}
            </span>
         </div>
         
         {/* Description */}
         <p className="text-gray-500 text-sm font-medium mb-3">
            {description}
         </p>

         {/* Goals List */}
         <ul className="space-y-2">
            {goals.map((goal: string, i: number) => (
               <li key={i} className="flex items-start gap-2.5 text-sm text-gray-600">
                  <Target size={14} className="mt-1 shrink-0 text-gray-400 group-hover:text-black transition-colors" />
                  {goal}
               </li>
            ))}
         </ul>
      </div>
    </div>
  );
}