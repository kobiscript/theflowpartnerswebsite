import { createFileRoute } from "@tanstack/react-router";
import html from "../content/index.html?raw";
import { RawHtmlPage } from "../components/RawHtmlPage";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "NoteTakerGuard | Intelligent Meeting Governance" },
      {
        name: "description",
        content:
          "NoteTakerGuard helps regulated organizations see and govern unauthorized AI participants across Zoom, Microsoft Teams, and Google Meet.",
      },
      { property: "og:title", content: "NoteTakerGuard | Intelligent Meeting Governance" },
      {
        property: "og:description",
        content:
          "See and govern unauthorized AI participants across Zoom, Microsoft Teams, and Google Meet.",
      },
      { property: "og:image", content: "/og.png" },
      { name: "twitter:image", content: "/og.png" },
    ],
    links: [{ rel: "stylesheet", href: "/home.css" }],
  }),
  component: () => <RawHtmlPage html={html} />,
});
