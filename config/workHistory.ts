export type WorkHistoryEntry = {
  company: string;
  end: string;
  highlights: string[];
  location: string;
  role: string;
  start: string;
  technologies?: string[];
};

export const workHistory: WorkHistoryEntry[] = [
  {
    company: "Omio",
    role: "Senior Fullstack Software Engineer",
    location: "Berlin, Germany",
    start: "September 2025",
    end: "Present",
    technologies: ["Node.js", "TypeScript", "React", "React Native", "AI"],
    highlights: [
      "Leading the migration of web, mobile, and backend authentication to one centralized platform.",
      "Maintaining identity and access management systems, including OAuth and SSO.",
      "Maintaining payment services and developing live-update services used by millions of travelers.",
      "Supporting shared Node.js packages and mentoring teams integrating the authentication platform.",
      "Creating AI-assisted engineering automation, skills, and MCP servers, and supporting technical hiring.",
    ],
  },
  {
    company: "Omio",
    role: "Software Engineer",
    location: "Berlin, Germany",
    start: "November 2016",
    end: "August 2025",
    technologies: [
      "Node.js",
      "TypeScript",
      "React",
      "React Native",
      "Java",
      "Spring Boot",
    ],
    highlights: [
      "Built and maintained PCI-compliant financial and payment systems.",
      "Integrated card payments, PayPal, Apple Pay, Google Pay, iDEAL, Klarna Sofort, Alipay, and WeChat Pay through Adyen and Braintree.",
      "Built OAuth and SSO authentication flows for Google, Apple, Facebook, and email login.",
      "Led password-based login and passwordless two-factor authentication implementations.",
      "Built and maintained fraud-prevention capabilities.",
    ],
  },
  {
    company: "European bank",
    role: "Software Consultant · Contractor",
    location: "Amsterdam, Netherlands",
    start: "August 2016",
    end: "October 2016",
    highlights: [
      "Worked as a software consultant for one of Europe's largest banks. Further details are protected by a non-disclosure agreement.",
    ],
  },
  {
    company: "Booking.com",
    role: "Graduate Software Developer",
    location: "Amsterdam, Netherlands",
    start: "August 2015",
    end: "July 2016",
    highlights: [
      "Added functionality for surfacing user-generated content.",
      "Built post-sales features for offering additional products and extras after booking.",
      "Created more than 30 experiments measuring bookings, turnover, performance, and other business metrics.",
    ],
  },
];
