import type { SectionMeta, SectionId, PortfolioConfig } from "./types";

export const SECTIONS: SectionMeta[] = [
  {
    id: "intro",
    title: "Intro & Brand Statement",
    description:
      "A clear, one-sentence positioning statement and professional headshot or brand mark. Recruiters spend 5 seconds here — make it count.",
    icon: "✦",
    tabLabel: "Intro",
  },
  {
    id: "voiceTone",
    title: "Voice & Tone Range",
    description:
      "Demonstrate range: playful consumer, buttoned-up B2B, empathetic customer care. Prove you can code-switch across brand voices.",
    icon: "◇",
    tabLabel: "Voice",
  },
  {
    id: "community",
    title: "Community Engagement",
    description:
      "Show real conversations — how you turned a detractor around, sparked UGC, or de-escalated tension. Your instincts in the thread.",
    icon: "⬡",
    tabLabel: "Community",
  },
  {
    id: "contentSamples",
    title: "Content Samples",
    description:
      "A mix of short-form copy, visual direction, video scripts, and long-form community posts. Show versatility across formats.",
    icon: "▣",
    tabLabel: "Content",
  },
  {
    id: "listeningInsights",
    title: "Listening & Insights",
    description:
      "Social listening reports, emerging trend catches, competitive insights delivered to stakeholders. This separates a manager from a strategist.",
    icon: "◉",
    tabLabel: "Insights",
  },
  {
    id: "toolsWorkflow",
    title: "Tools & Workflow",
    description:
      "Platforms and tools you're proficient in — Sprout, Brandwatch, native analytics, etc. A quick compatibility check for hiring teams.",
    icon: "⚙",
    tabLabel: "Tools",
  },
  {
    id: "testimonials",
    title: "Testimonials",
    description:
      "A quote from a manager, client, or cross-functional partner. Even a Slack screenshot (with permission) adds real credibility.",
    icon: "❝",
    tabLabel: "Quotes",
  },
];

export const STORAGE_KEY = "portfolio-config";

export const SECTION_IDS = SECTIONS.map((s) => s.id) as SectionId[];

export function getDefaultConfig(): PortfolioConfig {
  return {
    intro: {
      links: [
        { label: "LinkedIn", url: "https://www.linkedin.com/in/austin-rockne-9a0313398" },
        { label: "Resume (PDF)", url: "https://example.com/austin-rockne-resume.pdf" },
      ],
      notes: "",
    },
    voiceTone: {
      links: [
        { label: "Playful Consumer — Jordan Brand Campaign", url: "https://example.com/voice-consumer" },
        { label: "B2B Thought Leadership — SaaS LinkedIn Series", url: "https://example.com/voice-b2b" },
        { label: "Customer Care Response Framework", url: "https://example.com/voice-care" },
      ],
      notes: "I write for everyone from Gen Z sneakerheads to Fortune 500 C-suites. Each sample below demonstrates a distinct brand voice — same writer, completely different register.",
    },
    community: {
      links: [
        { label: "Detractor → Advocate: Discord Case Study", url: "https://example.com/community-case" },
        { label: "UGC Campaign — 2,400 Submissions in 72hrs", url: "https://example.com/community-ugc" },
        { label: "Crisis De-escalation Thread Example", url: "https://example.com/community-crisis" },
      ],
      notes: "Real conversations from real communities. These examples highlight how I handle tension, spark organic participation, and build genuine loyalty at scale.",
    },
    contentSamples: {
      links: [
        { label: "Instagram Campaign — Product Launch Series", url: "https://example.com/content-ig" },
        { label: "TikTok Script Series — 6-Part Storytelling Arc", url: "https://example.com/content-tiktok" },
        { label: "LinkedIn Thought Leadership — Weekly Column", url: "https://example.com/content-linkedin" },
        { label: "Long-Form Community Newsletter", url: "https://example.com/content-newsletter" },
      ],
      notes: "A cross-platform content mix — short-form copy, visual direction briefs, video scripts, and long-form community posts. Versatility across formats is the job.",
    },
    listeningInsights: {
      links: [
        { label: "Q3 2024 Trend Report — Delivered to VP of Brand", url: "https://example.com/insights-q3" },
        { label: "Competitor Landscape Analysis", url: "https://example.com/insights-competitive" },
        { label: "Audience Sentiment Deep-Dive — Post-Rebrand", url: "https://example.com/insights-sentiment" },
      ],
      notes: "These reports caught conversations before they became headlines. I deliver social listening in plain language — no dashboard screenshots, just actionable takeaways for stakeholders.",
    },
    toolsWorkflow: {
      links: [
        { label: "Sprout Social — Advanced Certification", url: "https://example.com/tools-sprout" },
        { label: "Brandwatch — Listening & Reporting", url: "https://example.com/tools-brandwatch" },
        { label: "Content Calendar & Workflow (Notion Template)", url: "https://example.com/tools-notion" },
      ],
      notes: "Proficient across the full social tech stack: Sprout Social, Brandwatch, Hootsuite, Later, native platform analytics (Meta, TikTok, LinkedIn), Figma for creative briefs, and Notion for campaign management.",
    },
    testimonials: {
      links: [
        { label: "LinkedIn Recommendations (3)", url: "https://www.linkedin.com/in/austin-rockne-9a0313398" },
      ],
      notes: "\"Austin doesn't just manage social — he builds the kind of community that makes people feel like insiders. He turned a struggling Discord server into our most engaged brand touchpoint in under six months.\"\n— Sarah K., Director of Brand Marketing",
    },
  } as unknown as PortfolioConfig;
}
