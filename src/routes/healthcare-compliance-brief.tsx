import { createFileRoute } from "@tanstack/react-router";
import html from "../content/healthcare-compliance-brief.html?raw";
import { RawHtmlPage } from "../components/RawHtmlPage";

export const Route = createFileRoute("/healthcare-compliance-brief")({
  head: () => ({
    meta: [
      { title: "Healthcare Meeting-Governance Brief | NoteTakerGuard" },
      {
        name: "description",
        content:
          "An interactive healthcare meeting-governance brief on the risks created by unauthorized AI notetakers.",
      },
      { property: "og:title", content: "Healthcare Meeting-Governance Brief | NoteTakerGuard" },
      {
        property: "og:description",
        content:
          "Explore the meeting-layer risks unauthorized AI notetakers can create for healthcare organizations.",
      },
      { property: "og:image", content: "/og.png" },
      { name: "twitter:image", content: "/og.png" },
    ],
    links: [{ rel: "stylesheet", href: "/report-deck.css" }],
  }),
  component: () => <RawHtmlPage html={html} />,
});
