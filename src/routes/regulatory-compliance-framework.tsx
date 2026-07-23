import { createFileRoute } from "@tanstack/react-router";
import html from "../content/regulatory-compliance-framework.html?raw";
import { RawHtmlPage } from "../components/RawHtmlPage";

export const Route = createFileRoute("/regulatory-compliance-framework")({
  head: () => ({
    meta: [
      { title: "Regulatory Considerations for Meeting Governance | NoteTakerGuard" },
      {
        name: "description",
        content:
          "Interactive regulatory considerations for governing unauthorized AI notetakers across regulated industries.",
      },
      { property: "og:title", content: "Regulatory Considerations for Meeting Governance | NoteTakerGuard" },
      {
        property: "og:description",
        content:
          "Explore how AI meeting tools intersect with governance expectations across regulated industries.",
      },
      { property: "og:image", content: "/og.png" },
      { name: "twitter:image", content: "/og.png" },
    ],
    links: [{ rel: "stylesheet", href: "/report-deck.css" }],
  }),
  component: () => <RawHtmlPage html={html} />,
});
