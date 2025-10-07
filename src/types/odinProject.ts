export const SECTIONS = {
  NODE: "Node.JS",
  DATABASES: "Databases",
  REACT: "React",
  ADVANCED_HTML_CSS: "Advanced HTML and CSS",
  JAVASCRIPT: "JavaScript",
  INTERMEDIATE_HTML_CSS: "Intermediate HTML and CSS",
};

export type SectionType = (typeof SECTIONS)[keyof typeof SECTIONS];

export interface OdinProjectItem {
  title: string;
  type: SectionType;
  description: string;
  website: string;
  repository?: string;
  image?: {
    src: ImageMetadata;
    alt: string;
  };
  tags: string[];
}
