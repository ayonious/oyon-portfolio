import type { ReactNode } from "react";

type PageHeaderProps = {
  title: string;
  introduction: string;
  children?: ReactNode;
};

export default function PageHeader({ title, introduction, children }: PageHeaderProps) {
  return (
    <header>
      <h1 className="text-4xl font-bold tracking-tight">{title}</h1>
      <p className="mt-4 max-w-3xl text-lg text-slate-600 dark:text-slate-300">{introduction}</p>
      {children}
    </header>
  );
}
