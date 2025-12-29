type metricsType = {
  children: string;
  label: string;
};

export type autoTypedType = {
  strings: string[];
  color: string;
  cursorChar: string;
};

export const metrics: metricsType[] = [
  { children: "145+", label: "Stores Live" },
  { children: "50M+", label: "Transactions" },
  { children: "99.7%", label: "Success Rate" },
  { children: "2", label: "Countries" },
];

export const autoTypeData: autoTypedType = {
  strings: [
    "145+ stores deployed in total to date",
    "50M+ transactions processed",
    "99.7% transaction success rate",
    "Deployed across 2 countries",
  ],
  color: "text-gray-800",
  cursorChar: "|",
};


