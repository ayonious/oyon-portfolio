import { pageContent } from "../../config/siteContent";

export default function ContactPage() {
  return (
    <>
      <h1>{pageContent.contact.title}</h1>
      <p>{pageContent.contact.introduction}</p>
      <p>
        Email:{" "}
        <a href={`mailto:${pageContent.contact.email}`}>
          {pageContent.contact.email}
        </a>
      </p>
    </>
  );
}
