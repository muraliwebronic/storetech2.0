export type RetailCardType = {
  title: string;
  description: string;
  textcolor: string;
  bgcolor: string;
  points: string[];
};
 
export const retailRevolutionData: RetailCardType[] = [
    {
      title: "The Old Way",
      description:
        "Legacy setups drain time and budget with fragmented vendors and long deployment cycles.",
      textcolor: "text-red-400",
      bgcolor: "bg-red-400",
      points: [
        "Multiple hardware vendors",
        "Complex integration projects",
      ],
    },
    {
      title: "The StoreTech Way",
      description:
        "A unified, modern platform that simplifies deployment and cuts total cost per store.",
      textcolor: "text-green-400",
      bgcolor: "bg-green-400",
      points: [
        "Single consolidated platform",
        "Plug-and-play deployment",
      ],
    },
  ];