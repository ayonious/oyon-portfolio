export type WorkProject = {
  action: string;
  result: string;
  scale: string[];
  situation: string;
  task: string;
  technologies: string[];
  title: string;
};

export const workProjects: WorkProject[] = [
  {
    title: "Centralized email service",
    technologies: ["Node.js", "TypeScript", "Microservices"],
    situation: "Booking, payment, customer-support, and marketing emails were implemented across separate legacy systems.",
    task: "Create a shared service that teams could use for business-critical email delivery.",
    action: "Built a centralized backend service, migrated more than 30 email types, and removed legacy email code from other projects.",
    result: "Made new email types faster to integrate and consolidated monitoring and maintenance in one service.",
    scale: ["About 1,000 requests/minute", "30+ email types", "Multiple product and support teams"],
  },
  {
    title: "Pay Page migration",
    technologies: ["React", "React Native", "Node.js"],
    situation: "The Pay Page had separate native implementations across mobile platforms.",
    task: "Unify the payment experience and reduce duplicated platform work.",
    action: "Led the migration of the Pay Page from native iOS and Android implementations to React Native while coordinating frontend and backend integration.",
    result: "Created a shared cross-platform payment experience with a more maintainable implementation.",
    scale: ["About 1,000 requests/second", "iOS and Android travelers", "Shared mobile payment flow"],
  },
  {
    title: "LLM travel guide",
    technologies: ["Node.js", "LLM services", "Backend"],
    situation: "Travelers needed useful destination guidance within the booking experience.",
    task: "Deliver relevant travel recommendations with a production backend feature.",
    action: "Built the backend for an LLM-powered travel guide and integrated generated recommendations into the product experience.",
    result: "Made contextual travel recommendations available to travelers inside the product.",
    scale: ["Production traveler-facing feature", "Request volume not publicly documented"],
  },
  {
    title: "Live updates and timetables",
    technologies: ["Node.js", "Microservices", "LLM services"],
    situation: "Travelers needed timely notifications and reliable station arrival and departure information.",
    task: "Build services capable of delivering live travel information at high traffic volumes.",
    action: "Developed notification and timetable microservices and incorporated LLM-powered recommendations into live updates.",
    result: "Delivered live travel information and recommendations to millions of travelers.",
    scale: ["About 10,000 requests/second", "Millions of users", "Travel notifications and station data"],
  },
  {
    title: "Global payments and PSP integration",
    technologies: ["Node.js", "TypeScript", "Adyen", "Braintree"],
    situation: "A global travel platform needed secure payment options across markets and devices.",
    task: "Expand payment coverage while maintaining PCI-compliant services.",
    action: "Built integrations for cards, PayPal, Apple Pay, Google Pay, iDEAL, Klarna Sofort, Alipay, and WeChat Pay through Adyen and Braintree.",
    result: "Enabled travelers to pay with locally relevant methods through a shared payment platform.",
    scale: ["About 1,000 requests/minute", "8+ payment methods", "Global travelers"],
  },
  {
    title: "Authentication and user profile platform",
    technologies: ["React", "React Native", "Node.js", "OAuth", "SSO"],
    situation: "Authentication and profile components were distributed across teams and platforms, causing inconsistent sessions and maintenance overhead.",
    task: "Centralize authentication for web, mobile, and backend consumers.",
    action: "Built OAuth, SSO, password, passwordless 2FA, and social-login services and frontend components, then guided teams through migration.",
    result: "Reduced unexpected logouts, improved session consistency, and simplified authentication maintenance.",
    scale: ["About 100 requests/second", "Web and mobile users", "Multiple product teams"],
  },
  {
    title: "Checkout payment components",
    technologies: ["React", "React Native", "Node.js"],
    situation: "Checkout payment methods and frontend rules needed to be reusable across the main checkout experience.",
    task: "Extract payment UI and rules into components that could be integrated consistently.",
    action: "Helped move payment-method components into a shared package and implemented frontend payment rules.",
    result: "Improved reuse and consistency for payment selection across checkout experiences.",
    scale: ["About 1,000 requests/second", "Checkout users", "Shared frontend package"],
  },
];
