
import { ModuleKey } from "./productConfigiData";


export type moduleCardType = {
  name: string;
  module: ModuleKey[];
  color: colorKeys;
  description: string;
  features: string[];
  price?: number;
};

export const COLORS = {
  blue: { bg: "bg-blue-600", text: "text-blue-400" },
  green: { bg: "bg-green-600", text: "text-green-400" },
  orange: { bg: "bg-orange-600", text: "text-orange-400" },
  cyan: { bg: "bg-cyan-600", text: "text-cyan-400" },
  purple: { bg: "bg-purple-600", text: "text-purple-400" },
} as const;
type colorKeys = keyof typeof COLORS;

export const products: moduleCardType[] = [
  {
    name: "Smart Self-Checkout",
    color: "blue",
    module:["selfCheckout"],
    description:
      "Effortless scanning with built-in barcode reader and manual add when needed. Real-time discounts and multiple payment methods",
    features: [
      "Barcode scanning & manual entry",
      "Real-time promotions & discounts",
      "Multiple payment methods",
      "Digital & printed receipts",
      "Age verification integration",
      "Offline-first operation",
    ],
  },
  {
    name: "Smart Vending Machine",
    color: "orange",
    module:["vending"],
    description:
      "AI-assisted selection with weight and vision checks. Remote monitoring, predictive restocking, and theft detection",
    features: [
      "AI product recognition",
      "Weight sensor confirmation",
      "Age verification for restricted items",
      "Remote monitoring & control",
      "Predictive restocking",
      "Temperature sensors",
    ],
  },
  {
    name: "Smart Fridge",
    color: "cyan",
    module:["fridge"],
    description:
      "One-swipe access with time-window control. Auto item recognition on door close with instant receipt generation",
    features: [
      "Pre-authorization access",
      "AI item recognition",
      "Temperature monitoring",
      "Expiry tracking & alerts",
      "Smart markdowns",
      "Remote inventory management",
    ],
  },
  {
    name: "Door Access Control",
    color: "purple",
    module:["doorAccess"],
    description:
      "Multi-factor authentication with opening hours control, occupancy enforcement, and video logging",
    features: [
      "Multi-factor authentication",
      "Opening hours & rules",
      "Occupancy enforcement",
      "Video logging & audit trail",
      "Emergency unlock workflows",
      "Integration with other modules",
    ],

  },
  {
    name: "Centralized ERP & Analytics",
    color: "blue",
    module:["erp"],
    description:
      "Complete inventory management, sales analytics, and operational dashboard with role-based access control",
    features: [
      // Inventory Management
      "Purchase orders & transfers",
      "FEFO expiry tracking",
      "Stock alerts & replenishment",
      "Multi-location support",

      // Analytics & Reporting
      "Sales analytics dashboard",
      "Tax & margin reporting",
      "Operational KPIs",
      "Audit trails & compliance",
    ],
  },
  {
    name: "Mobile Customer Apps",
    color: "orange",
    module:["mobile"],
    description:
      "Complete customer experience with store locator, scan-and-go checkout, wallet, loyalty, and personalized promotions",
    features: [
      // Customer Features
      "Store locator & hours",
      "Scan-and-go checkout",
      "Digital wallet & receipts",
      "Loyalty & rewards",

      // Business Tools
      "Personalized promotions",
      "Push notifications",
      "Staff tools & support",
      "Issue resolution flows",
    ],
  },
];
