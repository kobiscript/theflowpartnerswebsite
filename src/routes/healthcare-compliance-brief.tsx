import { createFileRoute } from "@tanstack/react-router";
import html from "../content/healthcare-compliance-brief.html?raw";
import { RawHtmlPage } from "../components/RawHtmlPage";

export const Route = createFileRoute("/healthcare-compliance-brief")({
  head: () => ({
    meta: [
      { title: "Healthcare Compliance Brief | NoteTakerGuard" },
      {
        name: "description",
        content:
          "An interactive healthcare compliance brief on the meeting-layer risk created by unauthorized AI notetakers.",
      },
      { property: "og:title", content: "Healthcare Compliance Brief | NoteTakerGuard" },
      {
        property: "og:description",
        content:
          "Explore the meeting-layer risks unauthorized AI notetakers can create for healthcare organizations.",
      },
      { property: "og:image", content: "/images/socialsharingimage-v2.png" },
      { name: "twitter:image", content: "/images/socialsharingimage-v2.png" },
    ],
    links: [{ rel: "stylesheet", href: "/report-deck.css" }],
  }),
  component: () => <RawHtmlPage html={html} />,
});
