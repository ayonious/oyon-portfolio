export type Certification = {
  name: string;
  issuer: string;
  issued: string;
  description?: string;
  result?: string;
};

export const certifications: Certification[] = [
  {
    name: "telc Deutsch C1 Hochschule",
    issuer: "telc",
    issued: "15 May 2026",
    result: "Befriedigend",
    description: "German language proficiency at CEFR level C1.",
  },
  {
    name: "Learn and Understand NodeJS",
    issuer: "Udemy",
    issued: "November 2018",
  },
  {
    name: "Node with React: Fullstack Web Development",
    issuer: "Udemy",
    issued: "November 2018",
  },
  {
    name: "Introduction to Psychology",
    issuer: "Coursera",
    issued: "Completed",
    description: "An introduction to the foundations of psychology and human behavior.",
  },
];
