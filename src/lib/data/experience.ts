import type { Experience } from "$lib/types/experience";

export const experiences: Experience[] = [
  {
    company: "SRAM",
    position: "Digital Software Engineering Intern",

    start: "May 2026",
    end: "Present",

    location: "Colorado Springs, CO",

    type: "Internship",

    description:
      ["Building production software for connected cycling products."],

    bullets: [
      "Designed and implemented customer-facing bicycle card reordering functionality.",
      "Developed Django REST APIs and PostgreSQL models.",
      "Created generalized firmware validation drivers.",
      "Automated developer log analysis workflows."
    ],

    technologies: [
      "Svelte",
      "TypeScript",
      "Python",
      "Django",
      "REST",
      "PostgreSQL"
    ],

    current: true
  },

  {

    company: "South Dakota Mines",

    position: "Computer Science Student",

    start: "2023",
    end: "Present",

    location: "Rapid City, SD",

    type: "Work",

    description:
      ["AI/ML specialization while building production software projects."],

    bullets: [
      "Coursework in AI, ML, systems, software engineering.",
      "Developed numerous full-stack applications."
    ],

    technologies: [
      "C++",
      "Java",
      "Python",
      "Rust"
    ]
  }
];