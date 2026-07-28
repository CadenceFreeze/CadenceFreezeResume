import type { Experience } from "$lib/types/experience";

export const experiences: Experience[] = [
  {
    company: "SRAM",
    position: "Digital Software Engineering Intern",

    start: "May 2026",
    end: "Present",

    location: "Colorado Springs, CO",

    type: "Internship",

    description: [
      "Building production software for connected cycling products.",
    ],

    bullets: [
      "Designed and implemented customer-facing bicycle card reordering functionality.",
      "Developed Django REST APIs and PostgreSQL models.",
      "Created generalized firmware validation drivers.",
      "Automated developer log analysis workflows.",
    ],

    technologies: [
      "Svelte",
      "TypeScript",
      "Python",
      "Django",
      "REST",
      "PostgreSQL",
      "Rust",
      "JavaScript",
      "Docker",
      "Git",
      "Jira",
      "Confluence",
    ],

    current: true,
  },

  {
    company: "South Dakota Mines",

    position: "B.S. Computer Science — AI/ML Specialization",

    start: "2023",
    end: "Dec 2026",

    location: "Rapid City, SD",

    type: "Education",

    description: [
      "Computer Science student specializing in artificial intelligence and machine learning while building production-level software systems.",
    ],

    bullets: [
      "Coursework spanning artificial intelligence, machine learning, software engineering, computer architecture, databases, and systems programming.",
      "Built full-stack applications using modern web frameworks, REST APIs, databases, and cloud-based development workflows.",
      "Applied software engineering practices including version control, CI/CD, testing, and agile development.",
    ],

    technologies: [
      "C++",
      "Java",
      "Python",
      "SQL",
      "Linux",
      "Git",
      "GitLab CI/CD",
      "Machine Learning",
      "Artificial Intelligence",
      "Kotlin",
      "Node.js",
      "AArch64",
      "GitHub",
      "Agile",
      "Objective-C",
    ],
  },

  {
    company: "Independent Software Projects",

    position: "Software Engineer — Personal Projects",

    start: "2024",
    end: "Present",

    location: "Remote",

    type: "Work",

    description: [
      "Designing and building software projects focused on web development, automation, and artificial intelligence.",
    ],

    bullets: [
      "Developed a production-style personal portfolio platform using SvelteKit and GitHub Pages.",
      "Built full-stack applications integrating frontend interfaces, backend APIs, and relational databases.",
      "Explored AI/ML applications through independent projects and technical experimentation.",
    ],

    technologies: [
      "SvelteKit",
      "TypeScript",
      "Python",
      "REST APIs",
      "PostgreSQL",
      "GitHub Actions",
      "Machine Learning",
    ],

    featured: true,
  },
];
