import { createFileRoute } from "@tanstack/react-router";
import html from "../content/contact.html?raw";
import { RawHtmlPage } from "../components/RawHtmlPage";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact | NoteTakerGuard" },
      { name: "description", content: "Contact The Flow Partners about NoteTakerGuard." },
    ],
    links: [{ rel: "stylesheet", href: "/site-pages.css" }],
  }),
  component: () => <RawHtmlPage html={html} />,
});
