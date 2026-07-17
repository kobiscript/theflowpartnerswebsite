import { ArrowUpRight } from "lucide-react";

export interface Tile {
  title: string;
  description: string;
}

export function TileGrid({ tiles, columns = 3 }: { tiles: Tile[]; columns?: 2 | 3 | 4 }) {
  const grid =
    columns === 4
      ? "md:grid-cols-2 lg:grid-cols-4"
      : columns === 2
        ? "md:grid-cols-2"
        : "md:grid-cols-2 lg:grid-cols-3";
  return (
    <div className={`grid grid-cols-1 ${grid} border-t border-l border-border`}>
      {tiles.map((t) => (
        <a
          href="#"
          key={t.title}
          className="group relative flex flex-col justify-between border-r border-b border-border p-8 transition-colors hover:bg-primary hover:text-primary-foreground"
        >
          <h3 className="display-md pr-8">{t.title}</h3>
          <p className="mt-8 max-w-sm text-sm text-muted-foreground group-hover:text-primary-foreground/85">
            {t.description}
          </p>
          <ArrowUpRight className="absolute top-8 right-8 h-6 w-6 opacity-40 transition-all group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:opacity-100" />
        </a>
      ))}
    </div>
  );
}
