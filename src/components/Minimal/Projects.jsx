import React from 'react';
import { Section } from './Section';
import { proyectos } from '../../data/dataComponent';

export const Projects = () => {
  return (
    <Section title="Proyectos">
      <div className="projects-list">
        {proyectos.map((project, index) => {
          const isActive = project.web?.url && project.web.url !== '#';

          return (
            <div key={index} className="project-card">
              <div className="project-body">
                <div>
                  <h3>
                    <a
                      href={isActive ? project.web.url : undefined}
                      target="_blank"
                      rel="noreferrer"
                      className="project-title"
                    >
                      {project.title}
                    </a>
                  </h3>
                  <p className="project-desc">{project.description}</p>
                </div>

                {project.points && (
                  <ul className="project-points">
                    {project.points.slice(0, 3).map((point, i) => (
                      <li key={i}>{point.text}</li>
                    ))}
                  </ul>
                )}

                <div className="project-footer">
                  {project.tools && project.tools.length > 0 && (
                    <div className="project-tools">
                      {project.tools.map((tool, i) => (
                        <span key={i} title={tool.props?.title}>{tool}</span>
                      ))}
                    </div>
                  )}

                  {project.web?.btnText && (
                    <a
                      href={isActive ? project.web.url : undefined}
                      target="_blank"
                      rel="noreferrer"
                      className={`project-status ${isActive ? 'project-status--active' : 'project-status--muted'}`}
                    >
                      {project.web.btnText}
                    </a>
                  )}
                </div>
              </div>

              {project.imagen && (
                <div className="project-thumb">
                  <img src={project.imagen} alt={project.title} />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </Section>
  );
};
