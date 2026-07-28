export interface Experience {
  company: string;
  position: string;

  start: string;
  end?: string;
  current?: boolean;

  location: string;

  type: "Internship" | "Work" | "Education";

  description: string[];

  bullets: string[];

  technologies: string[];

  companyUrl?: string;
  logo?: string;

  featured?: boolean;
}