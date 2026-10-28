import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import Button from "./Button";
import HeadingLink from "./HeadingLink";
import ProjectStars from "./projects/ProjectStars";
import NpmDownloads from "./projects/NpmDownloads";
import BrandIcon from "./BrandIcon";
import { storyContent } from "../config/storybook";
import { aboutContent, linkContent } from "../config/siteContent";
import { workHistory } from "../config/workHistory";
import { programmingBooks } from "../config/books";
import { certifications } from "../config/certifications";

function SharedComponents() {
  const content = storyContent.sharedOverview;
  const company = workHistory[0];
  const book = programmingBooks[0];
  const course = certifications.find((item) => item.category === "course" && item.url)!;
  return (
    <div className="mx-auto max-w-4xl space-y-10 p-6">
      <header>
        <h1 className="text-3xl font-bold">{content.title}</h1>
        <p className="mt-3">{content.introduction}</p>
      </header>
      <section>
        <h2 className="text-2xl font-bold">{content.buttonsTitle}</h2>
        <div className="mt-12 flex flex-wrap items-center gap-5">
          <Button tooltip={storyContent.buttonTooltip}>{aboutContent.contactForm.submitLabel}</Button>
          <Button disabled>{aboutContent.contactForm.submitLabel}</Button>
          <Button disabled>{aboutContent.contactForm.sendingLabel}</Button>
          <Button href={storyContent.packageProject.demoUrl!} target="_blank" rel="noreferrer" tooltip={storyContent.packageProject.demoLabel}>
            {storyContent.packageProject.demoLabel}
          </Button>
        </div>
      </section>
      <section>
        <h2 className="text-2xl font-bold">{content.headingsTitle}</h2>
        <div className="mt-12 grid gap-8 sm:grid-cols-2">
          <h3 className="text-xl font-bold"><HeadingLink href={company.url} tooltip={linkContent.openWebsite} className="gap-2"><BrandIcon name={company.company} />{company.company}</HeadingLink></h3>
          <h3 className="text-xl font-bold"><HeadingLink href={book.url} tooltip={linkContent.seeInGoodreads}>{book.title}</HeadingLink></h3>
          <h3 className="text-xl font-bold"><HeadingLink href={course.url}>{course.name}</HeadingLink></h3>
        </div>
      </section>
      <section>
        <h2 className="text-2xl font-bold">{content.metricsTitle}</h2>
        <div className="mt-8 flex flex-wrap items-center gap-5">
          <ProjectStars stars={storyContent.packageProject.stars} url={storyContent.packageProject.url} />
          <NpmDownloads stat={storyContent.downloadStat} />
        </div>
      </section>
    </div>
  );
}

const meta = {
  title: "Shared/All shared components",
  component: SharedComponents,
  parameters: { layout: "fullscreen" },
} satisfies Meta<typeof SharedComponents>;
export default meta;
type Story = StoryObj<typeof meta>;
export const Overview: Story = {};
export const Dark: Story = { globals: { theme: "dark" } };
