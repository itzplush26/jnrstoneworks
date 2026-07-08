import type { ReactNode } from "react";

type PageHeroProps = {
  kicker: string;
  title: string;
  lead: string;
  meta?: string[];
  actions?: ReactNode;
};

export function PageHero({ kicker, title, lead, meta, actions }: PageHeroProps) {
  return (
    <section className="page-hero section section--dark">
      <div className="section__inner page-heading">
        <span className="page-heading__kicker">{kicker}</span>
        <h1>{title}</h1>
        <p className="section__lead">{lead}</p>
        {meta ? (
          <div className="page-heading__meta">
            {meta.map((item) => (
              <span key={item} className="pill">
                {item}
              </span>
            ))}
          </div>
        ) : null}
        {actions ? <div className="page-controls">{actions}</div> : null}
      </div>
    </section>
  );
}
