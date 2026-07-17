import { ArrowUpRight } from "lucide-react";

export interface Article {
  image: string;
  category: string;
  title: string;
  read?: string;
}

export function ArticleCard({ article }: { article: Article }) {
  return (
    <a href="#" className="group block">
      <div className="mb-5 aspect-[4/3] overflow-hidden bg-muted">
        <img
          src={article.image}
          alt=""
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>
      <p className="eyebrow mb-3 text-primary">{article.category}</p>
      <h3 className="font-display text-xl leading-tight tracking-tight md:text-2xl">
        <span className="bg-[linear-gradient(currentColor,currentColor)] bg-[length:0_1px] bg-left-bottom bg-no-repeat pb-0.5 transition-[background-size] duration-500 group-hover:bg-[length:100%_1px]">
          {article.title}
        </span>
      </h3>
      {article.read && (
        <p className="mt-3 flex items-center gap-1 text-sm text-muted-foreground">
          {article.read} <ArrowUpRight className="h-3.5 w-3.5" />
        </p>
      )}
    </a>
  );
}
