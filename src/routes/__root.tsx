import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

// Scaffold Tailwind stylesheet intentionally not loaded — pages ship their own CSS.
import { reportLovableError } from "../lib/lovable-error-reporting";

function NotFoundComponent() {
  return (
    <div style={{ minHeight: "70vh", display: "flex", alignItems: "center", justifyContent: "center", padding: "2rem", fontFamily: "Inter, system-ui, sans-serif" }}>
      <div style={{ maxWidth: 480, textAlign: "center" }}>
        <p style={{ color: "#7c5cff", letterSpacing: "0.12em", textTransform: "uppercase", fontSize: 12, marginBottom: 12 }}>404</p>
        <h1 style={{ fontSize: 36, margin: 0 }}>Page not found</h1>
        <p style={{ marginTop: 12, color: "#555" }}>The page you're looking for doesn't exist or has been moved.</p>
        <p style={{ marginTop: 24 }}>
          <Link to="/" style={{ color: "#050505", textDecoration: "underline" }}>Back home</Link>
        </p>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div style={{ minHeight: "70vh", display: "flex", alignItems: "center", justifyContent: "center", padding: "2rem", fontFamily: "Inter, system-ui, sans-serif" }}>
      <div style={{ maxWidth: 480, textAlign: "center" }}>
        <h1 style={{ fontSize: 28 }}>This page didn't load</h1>
        <p style={{ marginTop: 12, color: "#555" }}>Something went wrong. Try again or head home.</p>
        <div style={{ marginTop: 24, display: "flex", gap: 12, justifyContent: "center" }}>
          <button
            onClick={() => { router.invalidate(); reset(); }}
            style={{ background: "#050505", color: "#fff", border: 0, borderRadius: 999, padding: "10px 20px", cursor: "pointer" }}
          >
            Try again
          </button>
          <a href="/" style={{ border: "1px solid #050505", borderRadius: 999, padding: "10px 20px", textDecoration: "none", color: "#050505" }}>
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "NoteTakerGuard | Intelligent Meeting Governance" },
      {
        name: "description",
        content:
          "NoteTakerGuard detects, removes, and documents unauthorized AI notetakers across enterprise meeting platforms.",
      },
      { property: "og:site_name", content: "NoteTakerGuard" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <Outlet />
    </QueryClientProvider>
  );
}
