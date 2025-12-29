"use client";

import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { notification } from "antd";
import { 
  Check, 
  X, 
  ArrowRight, 
  Loader2, 
  Settings, 
  Zap,
  Layers,
  Building,
  Box
} from "lucide-react";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import {
  ModulesData,
  PresetData,
  presets,
  initContactData,
  moduleKeys,
  initialModules,
  type PresetKey,
  type contacType,
  type ModuleKey,
  type ModulesState,
} from "@/data/productConfigiData";

// --- ICONS MAP ---
const PresetIcons: Record<string, any> = {
  express: Zap,
  unmanned: Layers,
  corporate: Building,
  complete: Box,
};

export default function ProductConfigurator() {
  // State
  const { value: storedModules, set: setStoredModules } = useLocalStorage<string[]>("selectedModules", []);
  const [modules, setModules] = useState<ModulesState>(initialModules);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  // Sync LocalStorage
  useEffect(() => {
    if (!storedModules) return;
    const merged: ModulesState = moduleKeys.reduce((acc, key) => {
      acc[key] = { ...initialModules[key], selected: storedModules.includes(key) };
      return acc;
    }, {} as ModulesState);
    setModules(merged);
  }, [storedModules]);

  // Toggle Logic
  const handleToggle = (key: ModuleKey) => {
    setModules((prev) => {
      const newState = { ...prev, [key]: { ...prev[key], selected: !prev[key].selected } };
      const selectedKeys = moduleKeys.filter((k) => newState[k].selected);
      setStoredModules(selectedKeys);
      return newState;
    });
  };

  // Preset Logic
  const applyPreset = (preset: PresetKey) => {
    const targetKeys = presets[preset];
    setModules((prev) => {
      const newState = { ...prev };
      moduleKeys.forEach((key) => {
        newState[key].selected = targetKeys.includes(key);
      });
      setStoredModules(targetKeys);
      return newState;
    });
  };

  // Count selected
  const selectedCount = Object.values(modules).filter((m) => m.selected).length;

  return (
    <section id="configurator" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-black bg-white text-xs font-bold uppercase tracking-widest text-black mb-6">
            <Settings size={14} />
            Configurator
          </div>
          <h2 className="text-4xl md:text-5xl font-bold font-display text-black mb-6">
            Build Your Solution
          </h2>
          <p className="text-gray-500 text-lg font-light">
            Select individual modules or choose a quick-start preset below
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* LEFT: MODULES GRID (Col Span 8) */}
          <div className="lg:col-span-8">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-black text-white flex items-center justify-center text-xs">1</span>
              Select Modules
            </h3>
            
            <div className="grid md:grid-cols-2 gap-4">
              {ModulesData.map((mod) => {
                const isSelected = modules[mod.id as ModuleKey]?.selected;
                return (
                  <motion.div
                    key={mod.id}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => handleToggle(mod.id as ModuleKey)}
                    className={`cursor-pointer group relative p-6 rounded-2xl border-2 transition-all duration-300
                      ${isSelected 
                        ? "bg-black border-black text-white shadow-xl" 
                        : "bg-white border-gray-100 hover:border-black text-black"
                      }
                    `}
                  >
                    <div className="flex justify-between items-center">
                      <span className="font-bold text-lg">{mod.label}</span>
                      <div className={`w-6 h-6 rounded-full border flex items-center justify-center transition-colors
                        ${isSelected ? "border-white bg-white text-black" : "border-gray-300 text-transparent"}
                      `}>
                        <Check size={14} strokeWidth={4} />
                      </div>
                    </div>
                    {isSelected && (
                      <div className="absolute inset-0 bg-white/5 opacity-20 animate-pulse rounded-2xl pointer-events-none" />
                    )}
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* RIGHT: PRESETS & SUMMARY (Col Span 4) */}
          <div className="lg:col-span-4 space-y-12">
            
            {/* Presets */}
            <div>
               <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <span className="w-6 h-6 rounded-full bg-black text-white flex items-center justify-center text-xs">2</span>
                Quick Start
              </h3>
              <div className="space-y-3">
                {PresetData.map((preset) => {
                  const Icon = PresetIcons[preset.id] || Box;
                  return (
                    <button
                      key={preset.id}
                      onClick={() => applyPreset(preset.id)}
                      className="w-full text-left p-4 rounded-xl bg-gray-50 hover:bg-black hover:text-white transition-all duration-300 group flex items-center gap-4 border border-transparent hover:border-black"
                    >
                      <div className="w-10 h-10 rounded-lg bg-white border border-gray-200 flex items-center justify-center text-black group-hover:bg-white/10 group-hover:text-white group-hover:border-transparent transition-colors">
                        <Icon size={18} />
                      </div>
                      <div>
                        <div className="font-bold text-sm">{preset.title}</div>
                        <div className="text-xs text-gray-500 group-hover:text-gray-400">{preset.description}</div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Sticky Action Area */}
            <div className="sticky top-8 bg-black text-white p-8 rounded-[2rem] shadow-2xl">
              <div className="flex justify-between items-end mb-6">
                <div>
                  <div className="text-4xl font-bold mb-1">{selectedCount}</div>
                  <div className="text-xs font-bold uppercase tracking-wider text-gray-400">Modules Selected</div>
                </div>
                <Box size={32} className="text-gray-600" />
              </div>
              
              <button
                onClick={() => setIsModalOpen(true)}
                disabled={selectedCount === 0}
                className={`w-full py-4 rounded-full font-bold text-sm tracking-widest uppercase transition-all flex items-center justify-center gap-2
                  ${selectedCount > 0 
                    ? "bg-white text-black hover:bg-gray-200" 
                    : "bg-gray-800 text-gray-500 cursor-not-allowed"}
                `}
              >
                Request Quote
                <ArrowRight size={16} />
              </button>
            </div>

          </div>
        </div>

        {/* --- MODAL FORM --- */}
        <ConfigFormModal 
          isOpen={isModalOpen} 
          onClose={() => setIsModalOpen(false)} 
          modules={modules}
        />

      </div>
    </section>
  );
}


// --- SUB-COMPONENT: MODAL FORM ---
function ConfigFormModal({ isOpen, onClose, modules }: { isOpen: boolean; onClose: () => void; modules: ModulesState }) {
  const [contactData, setContactData] = useState<contacType>(initContactData);
  const [loading, setLoading] = useState(false);
  const [api] = useState("https://wpdemo.webronics.com/wp-json/webronic/v1/contact");
  const [noti, contextHolder] = notification.useNotification();

  // Filter selected items for the "Message"
  const selectedItems = Object.values(modules).filter(m => m.selected).map(m => m.name);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const messageString = "I am interested in:\n" + selectedItems.map((item, i) => `${i + 1}. ${item}`).join("\n");
    
    const payload = {
      name: contactData.contactName,
      email: contactData.contactEmail,
      phone: contactData.contactPhone,
      message: messageString // Auto-generated message
    };

    try {
      const res = await fetch(api, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        noti.success({
          message: "Request Sent",
          description: "We have received your configuration.",
          placement: "topRight",
          style: { backgroundColor: "#000", color: "#fff" }
        });
        setTimeout(onClose, 1000);
        setContactData(initContactData);
      }
    } catch (err) {
      noti.error({ message: "Submission Failed", description: "Please try again later." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {contextHolder}
          {/* Backdrop */}
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
          />
          
          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.95 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none"
          >
            <div className="bg-white w-full max-w-lg rounded-[2rem] shadow-2xl overflow-hidden pointer-events-auto flex flex-col max-h-[90vh]">
              
              {/* Header */}
              <div className="p-8 border-b border-gray-100 flex justify-between items-center bg-gray-50">
                <div>
                  <h3 className="text-2xl font-bold text-black">Finalize Request</h3>
                  <p className="text-sm text-gray-500">Send us your configuration.</p>
                </div>
                <button onClick={onClose} className="p-2 bg-white rounded-full hover:bg-black hover:text-white transition-colors border border-gray-200">
                  <X size={20} />
                </button>
              </div>

              {/* Scrollable Content */}
              <div className="p-8 overflow-y-auto">
                <form onSubmit={handleSubmit} className="space-y-6">
                  
                  {/* Read-Only Summary */}
                  <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
                    <label className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-2 block">Selected Configuration</label>
                    <ul className="space-y-1">
                      {selectedItems.map((item, i) => (
                        <li key={i} className="text-sm font-semibold text-black flex items-center gap-2">
                          <Check size={12} className="text-green-600" /> {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Inputs */}
                  <div className="space-y-4">
                    <div>
                      <label className="text-sm font-bold text-black mb-1 block">Full Name</label>
                      <input 
                        required 
                        type="text" 
                        value={contactData.contactName}
                        onChange={e => setContactData({...contactData, contactName: e.target.value})}
                        className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-black transition-colors"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-bold text-black mb-1 block">Email Address</label>
                      <input 
                        required 
                        type="email" 
                        value={contactData.contactEmail}
                        onChange={e => setContactData({...contactData, contactEmail: e.target.value})}
                        className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-black transition-colors"
                        placeholder="john@company.com"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-bold text-black mb-1 block">Phone Number</label>
                      <input 
                        required 
                        type="tel" 
                        value={contactData.contactPhone}
                        onChange={e => setContactData({...contactData, contactPhone: e.target.value})}
                        className="w-full bg-white border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-black transition-colors"
                        placeholder="+1 (555) 000-0000"
                      />
                    </div>
                  </div>

                  <button 
                    type="submit" 
                    disabled={loading}
                    className="w-full bg-black text-white font-bold py-4 rounded-xl hover:bg-gray-800 transition-all flex items-center justify-center gap-2"
                  >
                    {loading ? <Loader2 className="animate-spin" /> : "Submit Request"}
                  </button>
                </form>
              </div>

            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}