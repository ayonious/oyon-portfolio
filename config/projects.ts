export type OpenSourceProject = {
  demoLabel?: string;
  demoUrl?: string;
  description: string;
  language?: string;
  name: string;
  pinned?: boolean;
  stars: number;
  technologies?: string[];
  url: string;
};

export const openSourceProjectsConfig = {
  profile: {
    label: "Pinned personal repositories",
    onlyPinned: true,
    url: "https://github.com/ayonious",
    projects: [
      { name: "File-Compression", url: "https://github.com/ayonious/File-Compression", description: "Zip and unzip files using Huffman coding and the LZW algorithm.", language: "Java", pinned: true, stars: 47 },
      { name: "Vagrant-Best-Practices", url: "https://github.com/ayonious/Vagrant-Best-Practices", description: "Examples for learning useful Vagrant features.", stars: 17 },
      { name: "lombok-examples", url: "https://github.com/ayonious/lombok-examples", description: "Practical examples for using Project Lombok.", language: "Java", stars: 8 },
      { name: "Java-Best-Practices-Java8", url: "https://github.com/ayonious/Java-Best-Practices-Java8", description: "Examples of Java 8 functional programming, streams, functions, and predicates.", language: "Java", stars: 7 },
      { name: "C-Code-Beautifier", url: "https://github.com/ayonious/C-Code-Beautifier", description: "A parser that formats code written in C and C++.", language: "C++", stars: 5 },
      { name: "nested-rules-engine", url: "https://github.com/ayonious/nested-rules-engine", description: "A decision-tree-based rules engine.", language: "TypeScript", stars: 4 },
      { name: "random-names", url: "https://github.com/ayonious/random-names", description: "A random-name viewer.", language: "TypeScript", stars: 4 },
      { name: "react-context-example", url: "https://github.com/ayonious/react-context-example", description: "An example of changing themes with React Context.", language: "TypeScript", stars: 3 },
      { name: "saltstack-best-practices-basics", url: "https://github.com/ayonious/saltstack-best-practices-basics", description: "Simple examples for learning SaltStack.", stars: 2 },
      { name: "that-it-guy-tech-blog", url: "https://github.com/ayonious/that-it-guy-tech-blog", description: "My personal technology blog.", language: "MDX", technologies: ["Gatsby", "React", "MDX"], pinned: true, stars: 2 },
      { name: "oyon-portfolio", url: "https://github.com/ayonious/oyon-portfolio", description: "My personal portfolio built with Next.js, TypeScript, and Tailwind CSS.", language: "TypeScript", pinned: true, stars: 0 },
      { name: "git-network-trainline", url: "https://github.com/ayonious/git-network-trainline", description: "Show a city's train lines as a Git network.", language: "JavaScript", stars: 0 },
      { name: "gradle-tutorial", url: "https://github.com/ayonious/gradle-tutorial", description: "Examples for learning useful Gradle features.", language: "Java", stars: 1 },
      { name: "interview-cheatsheet", url: "https://github.com/ayonious/interview-cheatsheet", description: "A collection of common technical interview questions.", language: "TypeScript", stars: 1 },
    ] satisfies OpenSourceProject[],
  },
  gamified: {
    label: "Gamified projects",
    url: "https://github.com/ayonious",
    projects: [
      {
        name: "Random Names",
        url: "https://github.com/ayonious/random-names",
        demoUrl: "https://random-names.netlify.app",
        demoLabel: "Try the name explorer",
        description:
          "Explore randomly generated names from different regions in an interactive React app.",
        language: "TypeScript",
        stars: 4,
      },
      {
        name: "Explorer Bug",
        url: "https://github.com/ayonious/explorer-bug",
        demoUrl: "https://exploringbug.netlify.app",
        demoLabel: "Play Explorer Bug",
        description:
          "Move a small bug around a two-dimensional world while exploring keyboard interaction and interface boundaries.",
        language: "TypeScript",
        stars: 0,
      },
      {
        name: "Git Network Trainline",
        url: "https://github.com/ayonious/git-network-trainline",
        demoUrl: "https://github.com/ayonious/git-network-trainline/network",
        demoLabel: "Explore the train network",
        description:
          "Turn a city's railway lines into a navigable Git network graph using graph theory and Git branches.",
        language: "JavaScript",
        stars: 0,
      },
    ] satisfies OpenSourceProject[],
  },
  templates: {
    label: "Templates",
    view: "list" as const,
    url: "https://github.com/ayonious?tab=repositories&q=template",
    projects: [
      {
        name: "nextjs-template",
        url: "https://github.com/ayonious/nextjs-template",
        description:
          "A Next.js starting point with a practical set of tools and project defaults.",
        language: "TypeScript",
        stars: 0,
      },
      {
        name: "template-react-ts",
        url: "https://github.com/ayonious/template-react-ts",
        description:
          "A React and TypeScript starter for projects that do not use Create React App.",
        language: "TypeScript",
        stars: 0,
      },
      {
        name: "template-express-microservice-ts",
        url: "https://github.com/ayonious/template-express-microservice-ts",
        description:
          "A minimal Express and TypeScript foundation for starting a microservice.",
        language: "TypeScript",
        stars: 0,
      },
      {
        name: "nestjs-bootstrap",
        url: "https://github.com/ayonious/nestjs-bootstrap",
        description:
          "A NestJS bootstrap project with common boilerplate configuration ready to extend.",
        stars: 0,
      },
      {
        name: "simple-html-template",
        url: "https://github.com/ayonious/simple-html-template",
        demoUrl: "https://ayonious.github.io/simple-html-template",
        demoLabel: "View the example page",
        description:
          "A small HTML starter for quickly publishing a simple static webpage.",
        stars: 0,
      },
    ] satisfies OpenSourceProject[],
  },
  organization: {
    label: "Console Table Printer organization",
    limit: 4,
    url: "https://github.com/console-table-printer",
    projects: [
      { name: "console-table-printer", url: "https://github.com/console-table-printer/console-table-printer", description: "Print colorful, readable tables in the console.", language: "TypeScript", stars: 227 },
      { name: "simple-wcswidth", url: "https://github.com/console-table-printer/simple-wcswidth", description: "A simple TypeScript implementation of Markus Kuhn's wcswidth function.", language: "TypeScript", stars: 5 },
      { name: "table-printer-cli", url: "https://github.com/console-table-printer/table-printer-cli", description: "A command-line tool for printing terminal tables.", language: "TypeScript", stars: 2 },
      { name: "console-table-docu", url: "https://github.com/console-table-printer/console-table-docu", description: "Documentation for Console Table Printer.", language: "TypeScript", stars: 1 },
      { name: "chrome-extension-table-printer", url: "https://github.com/console-table-printer/chrome-extension-table-printer", description: "A Chrome extension for formatting JSON.", language: "JavaScript", stars: 0 },
      { name: "e2e", url: "https://github.com/console-table-printer/e2e", description: "End-to-end tests for the organization's packages and websites.", language: "TypeScript", stars: 0 },
      { name: "homebrew-console-table", url: "https://github.com/console-table-printer/homebrew-console-table", description: "The Homebrew tap for installing Console Table CLI.", language: "Ruby", stars: 0 },
    ] satisfies OpenSourceProject[],
  },
};
