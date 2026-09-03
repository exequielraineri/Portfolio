import { experience } from "../data/profile";
import { Section } from "./Section";

export function Experience() {
  return (
    <Section
      id="experiencia"
      eyebrow="Trayectoria"
      title="Experiencia"
      lead="Desarrollo freelance para comercios y PyMEs del NOA, de la base de datos a la puesta en marcha."
    >
      <ol className="timeline">
        {experience.map((entry) => (
          <li className="timeline__item" key={entry.company} data-reveal>
            <div className="timeline__marker" aria-hidden="true">
              <span className={entry.current ? "timeline__dot is-current" : "timeline__dot"} />
            </div>

            <div className="timeline__body">
              <div className="timeline__head">
                <h3 className="timeline__company">{entry.company}</h3>
                <span className="timeline__period">{entry.period}</span>
              </div>
              <p className="timeline__role">{entry.role}</p>
              <ul className="timeline__points">
                {entry.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>
    </Section>
  );
}
