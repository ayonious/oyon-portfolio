import {
  siAnthropic,
  siCouchbase,
  siCursor,
  siCypress,
  siDocker,
  siExpress,
  siGithub,
  siGoodreads,
  siGooglebigquery,
  siGooglecloud,
  siGrafana,
  siJest,
  siKibana,
  siKotlin,
  siKubernetes,
  siMysql,
  siNodedotjs,
  siNpm,
  siPhp,
  siPostgresql,
  siReact,
  siSpringboot,
  siSwift,
  siTailwindcss,
  siTypescript,
  siWordpress,
  siYarn,
  type SimpleIcon,
} from "simple-icons";

const icons: Record<string, SimpleIcon> = {
  Anthropic: siAnthropic,
  Couchbase: siCouchbase,
  Cursor: siCursor,
  Cypress: siCypress,
  Docker: siDocker,
  "Express.js": siExpress,
  GitHub: siGithub,
  Goodreads: siGoodreads,
  BigQuery: siGooglebigquery,
  "Google Cloud": siGooglecloud,
  "Google Cloud Storage": siGooglecloud,
  Grafana: siGrafana,
  Jest: siJest,
  Kibana: siKibana,
  Kotlin: siKotlin,
  "Kotlin with AI assistance": siKotlin,
  Kubernetes: siKubernetes,
  MySQL: siMysql,
  "Node.js": siNodedotjs,
  npm: siNpm,
  PHP: siPhp,
  PostgreSQL: siPostgresql,
  React: siReact,
  "React Native": siReact,
  "Spring Boot": siSpringboot,
  Swift: siSwift,
  "Swift with AI assistance": siSwift,
  "Tailwind CSS": siTailwindcss,
  TypeScript: siTypescript,
  WordPress: siWordpress,
  Yarn: siYarn,
};

type BrandIconProps = {
  name: string;
  className?: string;
};

export default function BrandIcon({ name, className = "h-5 w-5" }: BrandIconProps) {
  if (name === "LinkedIn") {
    return (
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className={className}
        fill="#0A66C2"
      >
        <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45Z" />
      </svg>
    );
  }

  const icon = icons[name];

  if (!icon) {
    return null;
  }

  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className={className}
      fill="currentColor"
    >
      <path d={icon.path} />
    </svg>
  );
}
