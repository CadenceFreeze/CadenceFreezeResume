export interface Project {
  title: string;
  description: string;

  technologies: string[];

  image?: string;

  github?: string;
  demo?: string;

  featured?: boolean;

  category:
    | "Software"
    | "AI/ML"
    | "Web"
    | "Automation";

  highlights: string[];
}