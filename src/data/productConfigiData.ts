export const ModulesData = [
  { id: "selfCheckout", label: "Smart Self-Checkout" },
  { id: "vending", label: "Smart Vending" },
  { id: "fridge", label: "Smart Fridge" },
  { id: "doorAccess", label: "Door Access Control" },
  { id: "erp", label: "ERP & Analytics" },
  { id: "mobile", label: "Mobile Apps" },
];

export type PresetKey = "express" | "unmanned" | "corporate" | "complete";

export type PresetDataType = {
  id: PresetKey;
  title: string;
  description: string;
};
export const PresetData: PresetDataType[] = [
  {
    id: "express",
    title: "Express Checkout",
    description: "Basic self-checkout setup",
  },
  {
    id: "unmanned",
    title: "24/7 Unmanned Store",
    description: "Complete unmanned solution",
  },
  {
    id: "corporate",
    title: "Corporate Micro-Market",
    description: "Office building solution",
  },
  {
    id: "complete",
    title: "Complete Ecosystem",
    description: "All modules included",
  },
];

export type contacType = {
  contactName: string;
  contactEmail: string;
  contactMessage: string;
  contactPhone: string;
};

export const initContactData = {
  contactName: "",
  contactEmail: "",
  contactMessage: "",
  contactPhone: "",
};

/* --- module keys and types must come before ModulesState (dependency order) --- */
export const moduleKeys = [
  "selfCheckout",
  "vending",
  "fridge",
  "doorAccess",
  "erp",
  "mobile",
] as const;
export type ModuleKey = typeof moduleKeys[number];

export type ModuleConfig = {
  name: string;
  selected: boolean;
};

export type ModulesState = Record<ModuleKey, ModuleConfig>;

export const initialModules: ModulesState = {
  selfCheckout: { name: "Smart Self-Checkout", selected: false },
  vending: { name: "Smart Vending", selected: false },
  fridge: { name: "Smart Fridge", selected: false },
  doorAccess: { name: "Door Access Control", selected: false },
  erp: { name: "ERP & Analytics", selected: false },
  mobile: { name: "Mobile Apps", selected: false },
};

export const presets: Record<PresetKey, ModuleKey[]> = {
  express: ["selfCheckout", "erp"],
  unmanned: ["selfCheckout", "doorAccess", "erp", "mobile"],
  corporate: ["selfCheckout", "fridge", "erp"],
  complete: moduleKeys.slice(), 
};

