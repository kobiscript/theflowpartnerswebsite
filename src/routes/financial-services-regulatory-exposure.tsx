import { createFileRoute } from "@tanstack/react-router";
import html from "../content/financial-services-regulatory-exposure.html?raw";
import { RawHtmlPage } from "../components/RawHtmlPage";

export const Route = createFileRoute("/financial-services-regulatory-exposure")({
  head: () => ({
    meta: [
      { title: "Financial Services Regulatory Exposure | NoteTakerGuard" },
      { name: "description", content: "How unmanaged AI notetakers create regulatory exposure in financial services." },
    ],
    links: [{ rel: "stylesheet", href: "/site-pages.css" }],
  }),
  component: () => <RawHtmlPage html={html} />,
});
