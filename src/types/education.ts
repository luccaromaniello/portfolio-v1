import type { Company } from "@typeDefs/company";

export interface EducationItem {
  startDate: string;
  endDate?: string;
  current: boolean;
  location: string;
  description: string;
  highlight: boolean;
  companies?: Company[];
}
