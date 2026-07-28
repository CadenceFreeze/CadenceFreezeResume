import type { Project } from "$lib/types/projects";

export const projects: Project[] = [
  {
    title: "Bicycle Card Reordering System",
    slug: "bicycle-card-reordering",

    description:
      "Production customer-facing workflow allowing users to reorder bicycle cards through a responsive web interface.",

    longDescription:
      "Designed and implemented a complete feature from customer research through deployment. Built the frontend experience, backend APIs, database models, and collaborated with product stakeholders to refine the workflow.",

    technologies: [
      "Svelte",
      "TypeScript",
      "Django REST",
      "PostgreSQL",
      "Docker",
    ],

    category: "Professional",

    featured: true,

    github: undefined,

    highlights: [
      "Owned feature development from requirements gathering through deployment",
      "Designed responsive Svelte interfaces",
      "Implemented REST APIs and database models",
      "Collaborated with product teams on UX decisions",
    ],
  },

  {
    title: "Firmware Validation Automation",
    slug: "firmware-validation",

    description:
      "Automated firmware testing infrastructure improving validation speed and consistency.",

    longDescription:
      "Refactored existing firmware validation workflows into generalized automated drivers supporting multiple bicycle platforms.",

    technologies: ["Python", "Rust", "Linux", "GitLab CI/CD"],

    category: "Professional",

    featured: true,

    highlights: [
      "Reduced manual validation effort",
      "Unified six device-specific workflows",
      "Improved repeatability of firmware testing",
    ],
  },

  {
    title: "Cadence Freeze Resume Website",
    slug: "resume-website",

    description:
      "Personal portfolio website built with SvelteKit showcasing software engineering projects and experience.",

    longDescription:
      "A modern developer portfolio designed with reusable components, responsive layouts, and scalable architecture.",

    technologies: ["SvelteKit", "TypeScript", "GitHub Pages", "CSS"],

    category: "Personal",

    featured: true,

    github: "https://github.com/CadenceFreeze/CadenceFreezeResume",

    highlights: [
      "Designed reusable UI component system",
      "Implemented GitHub Pages deployment pipeline",
      "Built scalable portfolio architecture",
    ],
  },

  {
    title: "AI / Machine Learning Projects",
    slug: "machine-learning",

    description:
      "Collection of academic and personal projects focused on artificial intelligence and machine learning.",

    technologies: ["Python", "Machine Learning", "Data Analysis"],

    category: "AI/ML",

    featured: false,

    highlights: [
      "AI/ML specialization coursework",
      "Applied statistical modeling techniques",
    ],
  },
];
