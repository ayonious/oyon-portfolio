export type Certification = {
  name: string;
  issuer: string;
  issued: string;
  url: string;
  description?: string;
  result?: string;
};

export const certifications: Certification[] = [
  {
    name: "telc Deutsch C1 Hochschule",
    issuer: "telc",
    url: "https://www.telc.net/sprachpruefungen/zertifikatspruefung/deutsch/telc-deutsch-c1-hochschule/",
    issued: "15 May 2026",
    result: "Befriedigend",
    description: "German language proficiency at CEFR level C1.",
  },
  {
    name: "Learn and Understand NodeJS",
    url: "https://www.udemy.com/course/understand-nodejs/",
    issuer: "Udemy",
    issued: "November 2018",
  },
  {
    name: "Node with React: Fullstack Web Development",
    url: "https://www.udemy.com/course/node-with-react-fullstack-web-development/",
    issuer: "Udemy",
    issued: "November 2018",
  },
  {
    name: "Introduction to Psychology",
    url: "https://www.coursera.org/learn/introduction-psychology",
    issuer: "Coursera",
    issued: "Completed",
    description: "An introduction to the foundations of psychology and human behavior.",
  },
];
