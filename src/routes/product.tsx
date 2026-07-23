import { createFileRoute } from "@tanstack/react-router";
import html from "../content/product.html?raw";
import { RawHtmlPage } from "../components/RawHtmlPage";

export const Route = createFileRoute("/product")({
  head: () => ({
    meta: [
      { title: "Product | NoteTakerGuard" },
      { name: "description", content: "See NoteTakerGuard meeting-governance capabilities, platform coverage, limitations, and evaluation options." },
    ],
    links: [{ rel: "stylesheet", href: "/site-pages.css" }],
  }),
  component: () => <RawHtmlPage html={html} />,
});
