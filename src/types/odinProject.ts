export const enum SECTIONS {
  INTERMEDIATE_HTML_CSS = "Intermediate HTML and CSS",
  JAVASCRIPT = "JavaScript",
  ADVANCED_HTML_CSS = "Advanced HTML and CSS",
  REACT = "React",
  DATABASES = "Databases",
  NODE = "NodeJS",
}

export interface OdinProjectItem {
  title: string;
  type: SECTIONS;
  description: string;
  website: string;
  repository?: string;
  image?: {
    src: ImageMetadata;
    alt: string;
  };
}
