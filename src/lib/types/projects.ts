export interface Project {
  title: string;
  description: string;
  slug?: string;
  longDescription?: string;

  technologies: string[];

  image?: string;

  github?: string;
  demo?: string;

  featured?: boolean;

  category: "Software" | "AI/ML" | "Web" | "Automation" | "Professional" | "Education" | "Personal";

  highlights: string[];
}
