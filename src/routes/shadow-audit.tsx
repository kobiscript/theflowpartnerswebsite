import { createFileRoute } from "@tanstack/react-router";
import html from "../content/shadow-audit.html?raw";
import { RawHtmlPage } from "../components/RawHtmlPage";

export const Route = createFileRoute("/shadow-audit")({
  head: () => ({
    meta: [
      { title: "Start a 48-Hour Shadow Audit | NoteTakerGuard" },
      { name: "description", content: "Prepare for a real 48-hour NoteTakerGuard Shadow Audit and continue to secure account setup." },
    ],
    links: [{ rel: "stylesheet", href: "/site-pages.css" }],
  }),
  component: () => <RawHtmlPage html={html} />,
});
