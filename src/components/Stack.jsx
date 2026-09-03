import { stack } from "../data/profile";
import { Section } from "./Section";

export function Stack() {
  return (
    <Section
      id="stack"
      eyebrow="Herramientas"
      title="Stack tecnológico"
      lead="Lo que uso a diario, ordenado por dónde vive en el proyecto."
    >
      <div className="stack">
        {stack.map((group) => (
          <div className="stack__group" key={group.title} data-reveal>
            <h3 className="stack__title">{group.title}</h3>
            <ul className="chips chips--lg">
              {group.items.map((item) => (
                <li className="chip" key={item}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
