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
          "NoteTakerGuard detects, removes, and documents unauthorized AI notetakers across enterprise meeting platforms.",
      },
      { property: "og:title", content: "NoteTakerGuard | Intelligent Meeting Governance" },
      {
        property: "og:description",
        content:
          "Detect, remove, and document unauthorized AI notetakers across enterprise meeting platforms.",
      },
      { property: "og:image", content: "/images/socialsharingimage-v2.png" },
      { name: "twitter:image", content: "/images/socialsharingimage-v2.png" },
    ],
    links: [{ rel: "stylesheet", href: "/home.css" }],
  }),
  component: () => <RawHtmlPage html={html} />,
});
