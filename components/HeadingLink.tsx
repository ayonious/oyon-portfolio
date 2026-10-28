import { linkContent } from "../config/siteContent";
import type { ComponentPropsWithRef } from "react";

type HeadingLinkProps = ComponentPropsWithRef<"a"> & {
  tooltip?: string;
};

export default function HeadingLink({ children, className = "", tooltip = linkContent.openWebsite, ...props }: HeadingLinkProps) {
  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      {...props}
      title={props.title ?? tooltip}
      className={`heading-link group ${className}`}
    >
      {children}
      {tooltip && (
        <span aria-hidden="true" className="sidebar-tooltip absolute bottom-full left-0 mb-2 w-max group-hover:opacity-100 group-focus-visible:opacity-100">
          {tooltip}
        </span>
      )}
    </a>
  );
}
