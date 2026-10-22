import type { Metadata } from "next";
import type { ReactNode } from "react";
import ProfileSidebar from "../components/ProfileSidebar";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nahiyan Kamal — Software Engineer",
  description:
    "Personal portfolio of Nahiyan Kamal, a Senior Fullstack Software Engineer based in Berlin.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="lg:grid lg:h-screen lg:grid-cols-[320px_minmax(0,1fr)] lg:overflow-hidden">
          <ProfileSidebar />
          <main className="px-6 py-6 lg:h-screen lg:overflow-y-auto lg:px-14 lg:py-10">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
