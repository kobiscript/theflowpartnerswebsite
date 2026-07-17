import { createFileRoute } from "@tanstack/react-router";
import html from "../content/about.html?raw";
import { RawHtmlPage } from "../components/RawHtmlPage";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About | NoteTakerGuard" },
      { name: "description", content: "About The Flow Partners and NoteTakerGuard." },
    ],
    links: [{ rel: "stylesheet", href: "/site-pages.css" }],
  }),
  component: () => <RawHtmlPage html={html} />,
});
