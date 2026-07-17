import { createFileRoute } from "@tanstack/react-router";
import html from "../content/product.html?raw";
import { RawHtmlPage } from "../components/RawHtmlPage";

export const Route = createFileRoute("/product")({
  head: () => ({
    meta: [
      { title: "Product | NoteTakerGuard" },
      { name: "description", content: "The NoteTakerGuard platform for AI notetaker governance." },
    ],
    links: [{ rel: "stylesheet", href: "/site-pages.css" }],
  }),
  component: () => <RawHtmlPage html={html} />,
});
