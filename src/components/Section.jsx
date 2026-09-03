export function Section({ id, eyebrow, title, lead, children, actions }) {
  return (
    <section className="section" id={id}>
      <header className="section__head" data-reveal>
        <div>
          {eyebrow && <p className="section__eyebrow">{eyebrow}</p>}
          <h2 className="section__title">{title}</h2>
          {lead && <p className="section__lead">{lead}</p>}
        </div>
        {actions}
      </header>
      {children}
    </section>
  );
}
