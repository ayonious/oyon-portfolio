import type { ComponentPropsWithRef } from "react";

type ButtonProps = { tooltip?: string } & (
  | (ComponentPropsWithRef<"button"> & { href?: never })
  | (ComponentPropsWithRef<"a"> & { href: string }));

/** Shared text action; href preserves native link semantics for navigation. */
export default function Button(props: ButtonProps) {
  const { tooltip, children, ...nativeProps } = props;
  const className = `action-button relative group ${props.className ?? ""}`;
  const content = <>
    {children}
    {tooltip && (
      <span aria-hidden="true" className="sidebar-tooltip absolute bottom-full left-1/2 mb-2 w-max max-w-64 -translate-x-1/2 whitespace-normal text-center group-hover:opacity-100 group-focus-visible:opacity-100">
        {tooltip}
      </span>
    )}
  </>;

  if (typeof props.href === "string") {
    const { className: _className, ...linkProps } = nativeProps as ComponentPropsWithRef<"a">;
    return <a {...linkProps} title={props.title ?? tooltip} className={className}>{content}</a>;
  }

  const { className: _className, ...buttonProps } = nativeProps as ComponentPropsWithRef<"button">;
  return <button type="button" {...buttonProps} title={props.title ?? tooltip} className={className}>{content}</button>;
}
