import Link from "next/link";

export default function HomePage() {
  return (
    <>
      <h1>Home</h1>
      <p>Welcome to your basic Next.js site.</p>
      <p>Start editing this page to make it your own.</p>
      <Link href="/about">Learn more about us →</Link>
    </>
  );
}
