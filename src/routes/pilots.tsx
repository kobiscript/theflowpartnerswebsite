import { createFileRoute } from "@tanstack/react-router";
import html from "../content/pilots.html?raw";
import { RawHtmlPage } from "../components/RawHtmlPage";

export const Route = createFileRoute("/pilots")({
  head: () => ({
    meta: [
      { title: "Pilots | NoteTakerGuard" },
      { name: "description", content: "Start a NoteTakerGuard 48-hour shadow audit." },
    ],
    links: [{ rel: "stylesheet", href: "/site-pages.css" }],
  }),
  component: () => <RawHtmlPage html={html} />,
});
