import { createFileRoute } from "@tanstack/react-router";
import html from "../content/demo.html?raw";
import { RawHtmlPage } from "../components/RawHtmlPage";

export const Route = createFileRoute("/demo")({
  head: () => ({
    meta: [
      { title: "Qualified Product Demo | NoteTakerGuard" },
      { name: "description", content: "Explore an illustrative, platform-aware NoteTakerGuard meeting-governance workflow." },
    ],
    links: [{ rel: "stylesheet", href: "/site-pages.css" }],
  }),
  component: () => <RawHtmlPage html={html} />,
});
