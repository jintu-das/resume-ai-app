export type Template = {
  id: string;
  name: string;
  description: string;
  preview: string;
  category: "modern" | "classic" | "creative";
  isPro?: boolean;
};
