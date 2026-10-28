import type { ComponentPropsWithRef } from "react";

type ButtonProps =
  | (ComponentPropsWithRef<"button"> & { href?: never })
  | (ComponentPropsWithRef<"a"> & { href: string });

/** Shared text action; href preserves native link semantics for navigation. */
export default function Button(props: ButtonProps) {
  const className = `action-button ${props.className ?? ""}`;

  if (typeof props.href === "string") {
    const { className: _className, ...linkProps } = props as ComponentPropsWithRef<"a">;
    return <a {...linkProps} className={className} />;
  }

  const { className: _className, ...buttonProps } = props as ComponentPropsWithRef<"button">;
  return <button type="button" {...buttonProps} className={className} />;
}
