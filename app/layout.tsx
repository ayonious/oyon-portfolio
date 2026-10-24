import type { Metadata } from "next";
import type { ReactNode } from "react";
import ProfileSidebar from "../components/ProfileSidebar";
import { siteMetadata } from "../config/siteContent";
import "./globals.css";

export const metadata: Metadata = siteMetadata;

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="lg:grid lg:h-screen lg:grid-cols-[360px_minmax(0,1fr)] lg:overflow-hidden">
          <ProfileSidebar />
          <main className="px-6 py-6 sm:px-8 lg:h-screen lg:overflow-y-auto lg:px-10 lg:py-10 xl:px-14">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
