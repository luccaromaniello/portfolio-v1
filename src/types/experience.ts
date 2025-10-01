import type { Company } from "@typeDefs/company";

export interface ExperienceItem {
  startDate: string;
  endDate?: string;
  current?: boolean;
  location: string;
  title: string;
  companies: Company[];
  description: string;
  technologies: string[];
}
