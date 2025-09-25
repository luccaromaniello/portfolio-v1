export interface Company {
  name: string;
  website?: string;
}

export interface ExperienceItem {
  role: string;
  startDate: string;
  endDate?: string;
  current?: boolean;
  location: string;
  sector: string;
  description: string;
  technologies: string[];
  companies: Company[];
}
