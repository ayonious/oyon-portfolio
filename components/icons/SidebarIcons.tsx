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

export function AbacusIcon(props: IconProps) {
  return (
    <svg {...sharedProps} {...props}>
      <path d="M3 3v18M21 3v18M3 7h18M3 12h18M3 17h18" />
      <rect x="6" y="5" width="3" height="4" rx="1" />
      <rect x="12" y="10" width="3" height="4" rx="1" />
      <rect x="7" y="15" width="3" height="4" rx="1" />
      <rect x="15" y="15" width="3" height="4" rx="1" />
    </svg>
  );
}
