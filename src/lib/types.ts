export type SectionId =
  | "intro"
  | "voiceTone"
  | "community"
  | "contentSamples"
  | "listeningInsights"
  | "toolsWorkflow"
  | "testimonials";

export interface Link {
  url: string;
  label: string;
}

export interface SectionData {
  links: Link[];
  notes: string;
}

export type PortfolioConfig = Record<SectionId, SectionData>;

export interface SectionMeta {
  id: SectionId;
  title: string;
  description: string;
  icon: string;
  tabLabel: string;
}
