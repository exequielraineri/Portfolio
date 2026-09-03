import { useMemo, useState } from "react";
import { FiArrowUpRight } from "react-icons/fi";
import { groups, projects } from "../data/projects";
import { useReveal } from "../hooks/useReveal";
import { Section } from "./Section";

function Cover({ project }) {
  if (project.cover) {
    // "contain" es para capturas verticales (mockups de celular): recortarlas
    // a un cuadro apaisado se comería casi toda la pantalla.
    const mode = project.coverMode === "contain" ? "card__cover--contain" : "";

    return (
      <div className={`card__cover ${mode}`}>
        <img
          src={project.cover}
          alt={`Captura de ${project.title}`}
          loading="lazy"
          style={project.coverPosition ? { objectPosition: project.coverPosition } : undefined}
        />
      </div>
    );
  }

  return (
    <div className="card__cover card__cover--generated" aria-hidden="true">
      <span className="card__mark">{project.mark}</span>
    </div>
  );
}

function ProjectCard({ project }) {
  const primary = project.links.find((link) => link.url);

  return (
    <article className={`card ${project.featured ? "card--featured" : ""}`} data-reveal>
      <Cover project={project} />

      <div className="card__body">
        <div className="card__head">
          <h3 className="card__title">
            {primary ? (
              <a href={primary.url} target="_blank" rel="noreferrer">
                {project.title}
                <FiArrowUpRight className="card__title-icon" aria-hidden="true" />
              </a>
            ) : (
              project.title
            )}
          </h3>
          <span className="card__year">{project.year}</span>
        </div>

        <p className="card__subtitle">{project.subtitle}</p>
        <p className="card__desc">{project.description}</p>

        <ul className="card__highlights">
          {project.highlights.map((highlight) => (
            <li key={highlight}>{highlight}</li>
          ))}
        </ul>

        <div className="card__foot">
          <ul className="chips">
            {project.tech.map((tech) => (
              <li className="chip" key={tech}>
                {tech}
              </li>
            ))}
          </ul>

          <div className="card__links">
            {project.links.map((link) =>
              link.url ? (
                <a
                  key={link.label}
                  className="btn btn--sm btn--outline"
                  href={link.url}
                  target="_blank"
                  rel="noreferrer"
                >
                  {link.label}
                  <FiArrowUpRight aria-hidden="true" />
                </a>
              ) : (
                <span key={link.label} className="tag tag--muted">
                  {link.label}
                </span>
              )
            )}
          </div>
        </div>
      </div>
    </article>
  );
}

export function Projects() {
  const [filter, setFilter] = useState("all");

  const visible = useMemo(
    () => (filter === "all" ? projects : projects.filter((p) => p.group === filter)),
    [filter]
  );

  // Las tarjetas que entran al cambiar de filtro son nodos nuevos: hay que
  // volver a observarlas o se quedan en opacity 0.
  useReveal([filter]);

  const filters = (
    <div className="filters" role="group" aria-label="Filtrar proyectos">
      {groups.map((group) => {
        const count =
          group.key === "all"
            ? projects.length
            : projects.filter((p) => p.group === group.key).length;

        return (
          <button
            key={group.key}
            type="button"
            className={`filters__btn ${filter === group.key ? "is-active" : ""}`}
            onClick={() => setFilter(group.key)}
            aria-pressed={filter === group.key}
          >
            {group.label}
            <span className="filters__count">{count}</span>
          </button>
        );
      })}
    </div>
  );

  return (
    <Section
      id="proyectos"
      eyebrow="Trabajo seleccionado"
      title="Proyectos"
      lead="Sistemas que administran el día a día de un negocio y sitios que le traen clientes."
      actions={filters}
    >
      <div className="cards">
        {visible.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </Section>
  );
}
