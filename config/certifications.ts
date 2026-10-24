export type Certification = {
  name: string;
  issuer: string;
  issued: string;
  description?: string;
  credentialId?: string;
  credentialUrl?: string;
};

export const certifications: Certification[] = [
  {
    name: "telc Deutsch C1 Hochschule",
    issuer: "telc",
    issued: "2026",
    description: "German language proficiency at CEFR level C1.",
  },
  {
    name: "Learn and Understand NodeJS",
    issuer: "Udemy",
    issued: "November 2018",
    credentialId: "UC-HTKYP7TF",
    credentialUrl: "https://www.udemy.com/certificate/UC-HTKYP7TF/",
  },
  {
    name: "Node with React: Fullstack Web Development",
    issuer: "Udemy",
    issued: "November 2018",
    credentialId: "UC-HH4VIZK2",
    credentialUrl: "https://www.udemy.com/certificate/UC-HH4VIZK2/",
  },
];
