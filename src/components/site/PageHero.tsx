import type { ReactNode } from "react";

export function PageHero({
  eyebrow,
  title,
  lead,
  children,
}: {
  eyebrow?: string;
  title: ReactNode;
  lead?: string;
  children?: ReactNode;
}) {
  return (
    <section className="border-b border-border">
      <div className="mx-auto max-w-[1600px] px-6 py-20 lg:px-10 lg:py-32">
        {eyebrow && <p className="eyebrow mb-6 text-primary">{eyebrow}</p>}
        <h1 className="display-xl max-w-5xl">{title}</h1>
        {lead && (
          <p className="mt-8 max-w-2xl text-lg text-muted-foreground md:text-xl">
            {lead}
          </p>
        )}
        {children}
      </div>
    </section>
  );
}
