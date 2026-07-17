import { useEffect, useMemo } from "react";

type EmbeddedScript = {
  code: string;
  src?: string;
  type?: string;
};

/**
 * Renders raw HTML (the body inner content) from a static HTML file that
 * lives in /public. Rewrites relative `*.html` links to route paths and
 * mounts any legacy scripts after the page markup is available.
 */
export function RawHtmlPage({ html }: { html: string }) {
  const page = useMemo(() => {
    const bodyMatch = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
    let inner = bodyMatch ? bodyMatch[1] : html;
    const scripts: EmbeddedScript[] = [];

    // Scripts inserted through dangerouslySetInnerHTML do not execute. Pull
    // them out so they can be mounted after the page markup is in the DOM.
    inner = inner.replace(
      /<script\b([^>]*)>([\s\S]*?)<\/script>/gi,
      (_match, attributes: string, code: string) => {
        const src = attributes.match(/\bsrc=["']([^"']+)["']/i)?.[1];
        const type = attributes.match(/\btype=["']([^"']+)["']/i)?.[1];
        scripts.push({ code, src, type });
        return "";
      },
    );

    // Rewrite `foo.html` -> `/foo`, and `index.html` -> `/`
    inner = inner.replace(/href="([a-zA-Z0-9\-_]+)\.html(#[^"]*)?"/g, (_m, name, hash = "") => {
      const path = name === "index" ? "/" : `/${name}`;
      return `href="${path}${hash}"`;
    });
    return { bodyHtml: inner, scripts };
  }, [html]);

  useEffect(() => {
    const mountedScripts: HTMLScriptElement[] = [];

    for (const embedded of page.scripts) {
      const script = document.createElement("script");
      script.async = false;
      if (embedded.type) script.type = embedded.type;

      if (embedded.src) {
        script.src = new URL(embedded.src, `${window.location.origin}/`).toString();
      } else {
        // Isolate legacy page variables so a development remount cannot cause
        // global `const` redeclaration errors.
        script.text = `(() => {\n${embedded.code}\n})();`;
      }

      document.body.appendChild(script);
      mountedScripts.push(script);
    }

    return () => mountedScripts.forEach((script) => script.remove());
  }, [page.scripts]);

  return <div dangerouslySetInnerHTML={{ __html: page.bodyHtml }} />;
}
