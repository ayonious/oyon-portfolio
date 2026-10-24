import Image from "next/image";
import Link from "next/link";
import { aboutContent } from "../../config/siteContent";
import BrandIcon from "../../components/BrandIcon";
import ContactForm from "../../components/about/ContactForm";

export default function AboutPage() {
  return (
    <div className="max-w-4xl py-8 sm:py-16">
      <section className="grid items-center gap-8 md:grid-cols-[minmax(0,1fr)_18rem]">
        <div>
          <h1 className="text-4xl font-bold tracking-tight">{aboutContent.title}</h1>
          <div className="mt-6 space-y-4 text-lg text-slate-600 dark:text-slate-300">
            {aboutContent.paragraphs.map((paragraph, paragraphIndex) => (
              <p key={paragraphIndex}>
                {paragraph.parts.map((part, partIndex) =>
                  part.href ? (
                    <Link key={partIndex} href={part.href}>
                      {part.text}
                    </Link>
                  ) : (
                    <span key={partIndex}>{part.text}</span>
                  ),
                )}
              </p>
            ))}
          </div>
        </div>
        <Image
          src={aboutContent.image.src}
          alt={aboutContent.image.alt}
          width={512}
          height={512}
          priority
          className="aspect-square w-full rounded-3xl border border-slate-200 object-cover shadow-sm dark:border-slate-700"
        />
      </section>

      <ContactForm />

      <section className="mt-14">
        <h2 className="text-2xl font-bold">{aboutContent.profilesTitle}</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {aboutContent.profiles.map((profile) => (
            <a
              key={profile.url}
              href={profile.url}
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl border border-slate-200 bg-white p-5 no-underline shadow-sm transition-colors hover:bg-[var(--accent-soft)] dark:border-slate-700 dark:bg-slate-900 dark:hover:bg-[var(--accent-soft)]"
            >
              <h3 className="flex items-center gap-2 text-xl font-bold">
                <BrandIcon name={profile.name} className="h-6 w-6 shrink-0" />
                {profile.name} →
              </h3>
              <p className="mt-2 text-slate-600 dark:text-slate-300">
                {profile.description}
              </p>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}
