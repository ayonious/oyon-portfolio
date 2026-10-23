import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const sharedProps: IconProps = {
  "aria-hidden": true,
  fill: "none",
  height: 28,
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  strokeWidth: 2,
  viewBox: "0 0 24 24",
  width: 28,
};

export function MegaphoneIcon(props: IconProps) {
  return (
    <svg {...sharedProps} {...props}>
      <path d="M4 9h5l10-5v16L9 15H4ZM9 9v6M6 15l1 5h4l-2-5" />
    </svg>
  );
}

export function CactusIcon(props: IconProps) {
  return (
    <svg {...sharedProps} {...props}>
      <path d="M9 21V6a3 3 0 0 1 6 0v15M9 13H6a3 3 0 0 1-3-3V7M15 16h3a3 3 0 0 0 3-3v-3M6 21h12" />
    </svg>
  );
}

export function WrenchIcon(props: IconProps) {
  return (
    <svg {...sharedProps} {...props}>
      <path d="M14 4a6 6 0 0 0-7 8l-4 5a3 3 0 0 0 4 4l5-5a6 6 0 0 0 8-7l-4 3-4-4Z" />
    </svg>
  );
}

export function SunIcon(props: IconProps) {
  return (
    <svg {...sharedProps} height={24} strokeWidth={1.75} width={24} {...props}>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 3v2M12 19v2M3 12h2M19 12h2M5.5 5.5 7 7m10 10 1.5 1.5m0-13L17 7M7 17l-1.5 1.5" />
    </svg>
  );
}

export function MoonIcon(props: IconProps) {
  return (
    <svg {...sharedProps} height={24} strokeWidth={1.75} width={24} {...props}>
      <path d="M20 14A8.5 8.5 0 0 1 10 4a8.5 8.5 0 1 0 10 10Z" />
    </svg>
  );
}

export function SailboatIcon(props: IconProps) {
  return (
    <svg {...sharedProps} height={26} strokeWidth={1.75} width={26} {...props}>
      <path d="M12 3v14M12 3l-8 11h8m3-7 6 7h-6M3 17h18l-3 4H6Z" />
    </svg>
  );
}

export function BriefcaseIcon(props: IconProps) {
  return (
    <svg {...sharedProps} height={24} strokeWidth={1.75} width={24} {...props}>
      <rect x="3.5" y="7" width="17" height="13" rx="2" />
      <path d="M8 7V4h8v3M3.5 12a21 21 0 0 0 17 0M12 12v3" />
    </svg>
  );
}
