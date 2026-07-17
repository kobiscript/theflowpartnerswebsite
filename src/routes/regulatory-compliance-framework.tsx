import { createFileRoute } from "@tanstack/react-router";
import html from "../content/regulatory-compliance-framework.html?raw";
import { RawHtmlPage } from "../components/RawHtmlPage";

export const Route = createFileRoute("/regulatory-compliance-framework")({
  head: () => ({
    meta: [
      { title: "Regulatory Compliance Framework | NoteTakerGuard" },
      {
        name: "description",
        content:
          "An interactive framework for governing unauthorized AI notetakers across regulated industries.",
      },
      { property: "og:title", content: "Regulatory Compliance Framework | NoteTakerGuard" },
      {
        property: "og:description",
        content:
          "Explore how AI meeting tools intersect with governance expectations across regulated industries.",
      },
      { property: "og:image", content: "/images/socialsharingimage-v2.png" },
      { name: "twitter:image", content: "/images/socialsharingimage-v2.png" },
    ],
    links: [{ rel: "stylesheet", href: "/report-deck.css" }],
  }),
  component: () => <RawHtmlPage html={html} />,
});
