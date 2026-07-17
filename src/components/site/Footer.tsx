import { Link } from "@tanstack/react-router";

const columns = [
  {
    title: "What we do",
    links: [
      { to: "/services", label: "Strategy & Consulting" },
      { to: "/services", label: "Technology" },
      { to: "/services", label: "Operations" },
      { to: "/services", label: "Data & AI" },
      { to: "/services", label: "Song" },
    ],
  },
  {
    title: "Who we are",
    links: [
      { to: "/about", label: "Leadership" },
      { to: "/about", label: "Our values" },
      { to: "/about", label: "Newsroom" },
      { to: "/about", label: "Investors" },
    ],
  },
  {
    title: "Insights",
    links: [
      { to: "/insights", label: "Research" },
      { to: "/insights", label: "Reports" },
      { to: "/insights", label: "Blog" },
    ],
  },
  {
    title: "Careers",
    links: [
      { to: "/careers", label: "Search jobs" },
      { to: "/careers", label: "Life at Flow" },
      { to: "/careers", label: "Students" },
    ],
  },
] as const;

export function Footer() {
  return (
    <footer className="bg-[color:var(--ink)] text-[color:var(--ink-foreground)]">
      <div className="mx-auto max-w-[1600px] px-6 py-20 lg:px-10">
        <div className="flex flex-col gap-10 border-b border-white/10 pb-16 lg:flex-row lg:items-end lg:justify-between">
          <h2 className="display-lg max-w-3xl">
            Let there be <span className="text-primary">change&gt;</span>
          </h2>
          <Link
            to="/contact"
            className="inline-flex w-fit rounded-full bg-primary px-7 py-3 text-sm font-medium text-primary-foreground transition-transform hover:-translate-y-0.5"
          >
            Get in touch
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-10 py-14 md:grid-cols-4">
          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="mb-4 text-sm font-medium tracking-wide text-white/60">
                {col.title}
              </h3>
              <ul className="space-y-2">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link to={l.to} className="text-sm text-white/85 hover:text-primary">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-4 border-t border-white/10 pt-8 text-sm text-white/60 md:flex-row md:items-center md:justify-between">
          <div className="flex items-baseline gap-1 text-lg text-white">
            <span className="font-display">Flow</span>
            <span className="text-primary">&gt;</span>
          </div>
          <p>© {new Date().getFullYear()} Flow Partners. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
            <a href="#" className="hover:text-white">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
