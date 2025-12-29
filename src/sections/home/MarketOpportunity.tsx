"use client";

import { useEffect, useRef } from "react";
import type { ECharts, EChartsOption } from "echarts";
import { TrendingUp, MapPin, Target, ArrowRight } from "lucide-react";

export default function MarketOpportunity() {
  const chartRef = useRef<HTMLDivElement | null>(null);

  const countries = [
    { name: "Sweden", stores: 120 },
    { name: "Norway", stores: 30 },
    { name: "Denmark", stores: 15 },
    { name: "Finland", stores: 5 },
  ];

  const phases = [
    {
      phase: "Phase 1",
      title: "Regional Chains",
      details: "50 locations, $5M ARR target",
      active: true, // Highlights the current phase
    },
    {
      phase: "Phase 2",
      title: "PSP Partnerships",
      details: "Square, Clover, Stripe integration",
      active: false,
    },
    {
      phase: "Phase 3",
      title: "National Chains",
      details: "1,000+ locations target",
      active: false,
    },
  ];

  // --- ECHARTS CONFIGURATION ---
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
          backgroundColor: "rgba(0,0,0,0.9)",
          borderColor: "#333",
          textStyle: { color: "#fff" },
          padding: 12,
        },
        grid: {
          left: 20,
          right: 20,
          top: 30,
          bottom: 20,
          containLabel: true,
        },
        xAxis: {
          type: "category",
          data: ["2023", "2024", "2025", "2026", "2027", "2028"],
          axisLine: { lineStyle: { color: "#333" } },
          axisLabel: { color: "#6b7280", fontSize: 12 },
          axisTick: { show: false },
        },
        yAxis: {
          type: "value",
          name: "Market Size ($B)",
          nameTextStyle: { color: "#6b7280", padding: [0, 0, 0, 20] },
          axisLine: { show: false },
          splitLine: { lineStyle: { color: "#1f2937", type: "dashed" } }, // Dark dashed lines
          axisLabel: { color: "#6b7280" },
        },
        series: [
          {
            name: "Market Growth",
            type: "line",
            smooth: true,
            showSymbol: false,
            symbolSize: 8,
            // The "Royal" White Line
            itemStyle: { color: "#fff", borderColor: "#fff", borderWidth: 2 },
            lineStyle: {
              width: 3,
              shadowColor: "rgba(255,255,255,0.3)",
              shadowBlur: 10,
            },
            // Gradient Fill (White fading to transparent)
            areaStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                { offset: 0, color: "rgba(255, 255, 255, 0.2)" },
                { offset: 1, color: "rgba(255, 255, 255, 0)" },
              ]),
            },
            data: [1.2, 2.1, 3.4, 5.0, 7.2, 10.0],
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
    <section className="py-24 relative overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* --- SECTION HEADER --- */}
        <div className="flex flex-col items-center text-center gap-6 mb-20 max-w-4xl mx-auto">
          <div className="relative overflow-hidden rounded-full bg-black px-6 py-2 shadow-xl">
            <div className="shine-effect opacity-50" />
            <span className="relative z-10 text-xs font-bold text-white uppercase tracking-[0.25em]">
              Market Opportunity
            </span>
          </div>

          <h2 className="text-3xl md:text-5xl font-bold leading-tight font-display text-gray-900">
            The unmanned <br />
            <span className="bg-gradient-to-r from-black via-gray-700 to-gray-500 bg-clip-text text-transparent">
              retail market
            </span>
          </h2>
          <p className="text-gray-500 max-w-2xl  text-sm md:text-lg font-light">
            is experiencing explosive growth StoreTech is positioned to capture
            significant market share
          </p>
        </div>

        {/* --- MAIN CONTENT GRID --- */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* LEFT: THE CHART (Premium Black Container) */}
          <div className="animate-on-scroll relative group">
            {/* Background Container */}
            <div className="relative z-10 w-full h-[450px] bg-black rounded-[2.5rem] p-6 shadow-2xl shadow-black/20 overflow-hidden border border-gray-800">
              {/* Header inside Chart */}
              <div className="flex items-center justify-between mb-2 px-2">
                <div className="flex items-center gap-2">
                  <div className="bg-white/10 p-2 rounded-full text-white">
                    <TrendingUp size={18} />
                  </div>
                  <div>
                    <div className="text-white font-bold text-lg">
                      Global Market Size
                    </div>
                    <div className="text-gray-500 text-xs uppercase tracking-wider">
                      Projected Growth (2023-2028)
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-white font-bold text-2xl">10.0B</div>
                  <div className="text-green-400 text-xs font-bold">
                    +28% CAGR
                  </div>
                </div>
              </div>

              {/* The Chart Instance */}
              <div ref={chartRef} className="w-full h-[350px]" />

              {/* Shine Overlay */}
              <div className="shine-effect opacity-10 pointer-events-none" />
            </div>

            {/* Decorative blob behind */}
            <div className="absolute -inset-4 bg-gray-200 blur-3xl opacity-50 -z-10 rounded-[3rem]" />
          </div>

          {/* RIGHT: STRATEGY CARDS */}
          <div className="space-y-12">
            {/* 1. European Success List */}
            <div>
              <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
                <MapPin className="text-black" strokeWidth={3} />
                European Footprint
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {countries.map((v, i) => (
                  <MarketCardOne key={i} {...v} />
                ))}
              </div>
            </div>

            {/* 2. US Expansion Strategy (Black Glass Stack) */}
            <div>
              <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
                <Target className="text-black" strokeWidth={3} />
                US Expansion Strategy
              </h3>
              <div className="space-y-4">
                {phases.map((v, i) => (
                  <MarketCardTwo key={i} {...v} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// --- SUB-COMPONENTS ---

// Simple, Clean Country Card
function MarketCardOne({ name, stores }: { name: string; stores: number }) {
  return (
    <div className="flex items-center justify-between p-4 rounded-2xl bg-gray-50 border border-gray-100 hover:border-black/10 hover:shadow-md transition-all duration-300 group">
      <span className="font-semibold text-gray-700 group-hover:text-black">
        {name}
      </span>
      <span className="flex items-center gap-1.5 text-sm font-bold bg-black text-white px-3 py-1 rounded-full">
        {stores}
        <span className="w-1 h-1 rounded-full bg-green-400 animate-pulse" />
      </span>
    </div>
  );
}

// Premium "Phase" Card
function MarketCardTwo({
  phase,
  title,
  details,
  active,
}: {
  phase: string;
  title: string;
  details: string;
  active: boolean;
}) {
  return (
    <div
      className={`relative overflow-hidden p-5 rounded-2xl transition-all duration-300 group
      ${
        active
          ? "bg-black text-white shadow-xl scale-[1.02]"
          : "bg-white text-gray-600 border border-gray-200 hover:border-black/20"
      }`}
    >
      {/* Active Shine */}
      {active && (
        <div className="shine-effect opacity-20 pointer-events-none" />
      )}

      <div className="flex justify-between items-start relative z-10">
        <div>
          <div
            className={`text-xs font-bold uppercase tracking-widest mb-1 
              ${active ? "text-gray-400" : "text-gray-400"}`}
          >
            {phase}
          </div>
          <div
            className={`text-lg font-bold mb-1 ${
              active ? "text-white" : "text-black"
            }`}
          >
            {title}
          </div>
          <div
            className={`text-sm ${active ? "text-gray-400" : "text-gray-500"}`}
          >
            {details}
          </div>
        </div>

        {/* Icon Arrow */}
        <div
          className={`p-2 rounded-full ${
            active ? "bg-white/10 text-white" : "bg-gray-100 text-gray-400"
          }`}
        >
          <ArrowRight size={18} />
        </div>
      </div>
    </div>
  );
}
