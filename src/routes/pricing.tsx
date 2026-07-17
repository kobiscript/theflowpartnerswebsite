import { createFileRoute } from "@tanstack/react-router";
import html from "../content/pricing.html?raw";
import { RawHtmlPage } from "../components/RawHtmlPage";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Pricing | NoteTakerGuard" },
      { name: "description", content: "NoteTakerGuard pricing plans for AI notetaker governance." },
    ],
    links: [{ rel: "stylesheet", href: "/site-pages.css" }],
  }),
  component: () => <RawHtmlPage html={html} />,
});
