export const siteMetadata = {
  title: "Nahiyan Kamal — Software Engineer",
  description:
    "Personal portfolio of Nahiyan Kamal, a Senior Fullstack Software Engineer based in Berlin.",
};

export const homeContent = {
  location: "Berlin, Germany",
  title: "Hey, I'm Nahiyan!",
  introduction:
    "I'm a Senior Fullstack Software Engineer who builds reliable web and mobile products with TypeScript, React, React Native, and Node.js.",
  currentWork:
    "I currently work at Omio, focusing on authentication, payments, and services used by travelers around the world.",
};

export type NavigationIcon =
  | "briefcase"
  | "wrench"
  | "lightning"
  | "robot"
  | "books"
  | "diploma"
  | "theater"
  | "paw"
  | "megaphone";

export const sidebarContent = {
  name: "Nahiyan K",
  introduction: {
    linkText: "Nahiyan",
    textBefore: "I'm ",
    textAfter:
      ", a software engineer and open-source creator. This is my digital introduction. 🙋🏻",
  },
  navigation: [
    { href: "/work", label: "Work", icon: "briefcase" },
    { href: "/projects", label: "Open source", icon: "wrench" },
    { href: "/skills", label: "Skills", icon: "lightning" },
    { href: "/ai", label: "AI", icon: "robot" },
    { href: "/reading", label: "Books", icon: "books" },
    { href: "/certifications", label: "Certifications", icon: "diploma" },
    { href: "/blog", label: "Blog", icon: "megaphone" },
    { href: "/about", label: "About me", icon: "theater" },
    { href: "/about-this-site", label: "About this site", icon: "paw" },
  ] satisfies Array<{ href: string; label: string; icon: NavigationIcon }>,
  socialLinks: [
    { label: "GitHub", url: "https://github.com/ayonious" },
    {
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/nahiyan-k-0782743a",
    },
  ],
};

export const aboutContent = {
  title: "About me",
  paragraphs: [
    [
      { text: "I'm Nahiyan, a " },
      { text: "Senior Fullstack Software Engineer", href: "/work" },
      {
        text: " based in Berlin. I build web, mobile, backend, payment, authentication, and travel products used at scale.",
      },
    ],
    [
      { text: "I also maintain " },
      { text: "open-source tools", href: "/projects" },
      { text: ", create " },
      { text: "AI-assisted engineering workflows", href: "/ai" },
      {
        text: ", and enjoy turning complicated systems into practical, reliable software.",
      },
    ],
    [
      { text: "Outside engineering, I enjoy traveling, learning languages, and reading " },
      { text: "philosophy and psychology", href: "/reading" },
      {
        text: " to better understand people, society, and the world.",
      },
    ],
  ],
  image: {
    src: "/images/nahiyan-cartoon-profile.webp",
    alt: "Cartoon portrait of Nahiyan K at a black-sand beach",
  },
  profilesTitle: "Find me online",
  profiles: [
    {
      name: "GitHub",
      emoji: "💻",
      description: "My personal projects and open-source contributions.",
      url: "https://github.com/ayonious",
    },
    {
      name: "LinkedIn",
      emoji: "💼",
      description: "My professional experience and career updates.",
      url: "https://www.linkedin.com/in/nahiyan-k-0782743a",
    },
    {
      name: "Goodreads",
      emoji: "📚",
      description: "Books I have read and want to read.",
      url: "https://www.goodreads.com/user/show/95339067-nahiyan-k",
    },
    {
      name: "Console Table Printer",
      emoji: "🛠️",
      description: "The open-source organization I contribute to and maintain.",
      url: "https://github.com/console-table-printer",
    },
  ],
};

export const pageContent = {
  work: {
    title: "Work history",
    introduction:
      "My career building web, mobile, payments, authentication, and travel products.",
    projectsTitle: "Selected work projects",
    projectsIntroduction:
      "Each project follows the Situation, Task, Action, Result format and includes every service-scale figure available in my career records.",
    scaleTitle: "Documented service scale",
    starLabels: ["Situation", "Task", "Action", "Result"],
  },
  projects: {
    title: "Open-source projects",
    introduction:
      "Projects I maintain personally and with the Console Table Printer organization.",
    viewOnGitHub: "View on GitHub →",
  },
  skills: {
    title: "Skills",
    introduction:
      "Technologies, engineering practices, and product domains I have worked with throughout my career.",
  },
  ai: {
    title: "AI",
    introduction:
      "I use AI as an engineering tool and build LLM-powered product experiences, automations, reusable skills, and tool integrations.",
    workTitle: "Production work",
    toolsTitle: "Tools I use",
    capabilitiesTitle: "AI capabilities",
  },
  books: {
    title: "Books",
    introduction:
      "Books that shape how I think about software, leadership, people, and the world around me.",
    goodreadsLabel: "See all my books on Goodreads →",
    goodreadsUrl: "https://www.goodreads.com/user/show/95339067-nahiyan-k",
    programmingTitle: "Programming-related books",
    otherTitle: "Other books",
  },
  certifications: {
    title: "Certifications",
    introduction:
      "Language and software development credentials I have earned.",
    credentialLabel: "Show credential ↗",
    completedLabel: "Completed",
  },
  blog: {
    title: "Blog",
    introduction:
      "Notes about software engineering, projects, and things I am learning will appear here.",
  },
  contact: {
    title: "Contact",
    introduction: "Have a question? Get in touch.",
    email: "hello@example.com",
  },
};

export const aboutSiteContent = {
  title: "About this site",
  introduction:
    "This portfolio is built with open-source software. Thank you to the maintainers and contributors behind every package that makes it possible.",
  majorTitle: "Major technologies",
  packagesTitle: "All packages",
  packagesIntroduction:
    "Runtime and development dependencies currently listed in the project.",
  creditsTitle: "Design and assets",
  reuse: {
    title: "Use this site for your own profile",
    introduction:
      "You can use this portfolio as a starting point for building your own profile site.",
    notes: [
      "I do not provide any guarantee for using this website, but I try to keep the project as reusable as possible.",
      "Use the project at your own risk.",
      "Credit the original authors, projects, and packages when required by their licenses.",
    ],
    repositoryLabel: "View and reuse this site on GitHub →",
    repositoryUrl: "https://github.com/ayonious/oyon-portfolio",
  },
  credits: [
    {
      name: "Tania Rascia's website",
      role: "Layout inspiration",
      emoji: "🎨",
      url: "https://www.taniarascia.com/",
    },
    {
      name: "Icons For Free",
      role: "Interface icons",
      emoji: "✨",
      url: "https://iconsforfree.com/",
    },
    {
      name: "Vercel",
      role: "Deployment",
      emoji: "🚀",
      url: "https://vercel.com/",
    },
  ],
};
