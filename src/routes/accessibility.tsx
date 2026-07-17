import { createFileRoute } from "@tanstack/react-router";
import html from "../content/accessibility.html?raw";
import { RawHtmlPage } from "../components/RawHtmlPage";

export const Route = createFileRoute("/accessibility")({
  head: () => ({
    meta: [
      { title: "Accessibility | NoteTakerGuard" },
      { name: "description", content: "NoteTakerGuard accessibility statement." },
    ],
    links: [{ rel: "stylesheet", href: "/site-pages.css" }],
  }),
  component: () => <RawHtmlPage html={html} />,
});
