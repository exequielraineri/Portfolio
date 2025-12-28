import React from 'react';
import { Section } from './Section';
import { proyectos } from '../../data/dataComponent';

export const Projects = () => {
  return (
    <Section title="Proyectos">
      <div style={{ display: 'grid', gap: '4rem' }}>
        {proyectos.map((project, index) => (
          <div key={index} style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) 200px', gap: '2rem', alignItems: 'start' }} className="project-card">
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              
              {/* Header */}
              <div>
                <a 
                  href={project.web?.url && project.web.url !== '#' ? project.web.url : undefined} 
                  target="_blank" 
                  rel="noreferrer"
                  style={{ 
                    fontSize: '1.2rem', 
                    fontWeight: '700', 
                    color: '#fff', 
                    textDecoration: 'none',
                    display: 'inline-block',
                    marginBottom: '0.5rem'
                  }}
                  className="project-title"
                >
                  {project.title}
                </a>
                <p style={{ fontSize: '0.95rem', color: '#aaa', lineHeight: '1.6', margin: 0 }}>
                  {project.description}
                </p>
              </div>

              {/* Points */}
              <ul style={{ paddingLeft: '1rem', margin: 0, listStyle: 'disc', color: '#666', fontSize: '0.85rem' }}>
                 {project.points && project.points.slice(0, 3).map((point, i) => (
                   <li key={i} style={{ marginBottom: '0.25rem' }}>{point.text}</li>
                 ))}
              </ul>

              {/* Footer: Tools & Actions */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginTop: 'auto' }}>
                
                {/* Tools - using CSS to override the hardcoded 2em size from data */}
                {project.tools && project.tools.length > 0 && (
                  <div className="project-tools" style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', color: '#888' }}>
                    {project.tools.map((tool, i) => (
                      <span key={i} title={tool.props?.title} style={{ display: 'flex', alignItems: 'center' }}>
                        {tool}
                      </span>
                    ))}
                  </div>
                )}

                {/* Status / Link Button */}
                {project.web?.btnText && (
                  <div>
                    <a
                      href={project.web?.url && project.web.url !== '#' ? project.web.url : undefined} 
                      target="_blank" 
                      rel="noreferrer"
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        fontSize: '0.8rem',
                        fontWeight: '600',
                        color: project.web.url !== '#' ? '#fff' : '#666',
                        border: `1px solid ${project.web.url !== '#' ? '#fff' : '#333'}`,
                        padding: '0.4rem 1rem',
                        borderRadius: '4px',
                        textTransform: 'uppercase',
                        letterSpacing: '0.05em',
                        cursor: project.web.url !== '#' ? 'pointer' : 'default',
                        transition: 'all 0.2s'
                      }}
                      className={project.web.url !== '#' ? 'btn-active' : ''}
                    >
                      {project.web.btnText}
                    </a>
                  </div>
                )}
              </div>
            </div>
            
            {/* Image Thumbnail */}
            {project.imagen && (
              <div style={{ borderRadius: '8px', overflow: 'hidden', border: '1px solid #222', alignSelf: 'start' }}>
                <img 
                  src={project.imagen} 
                  alt={project.title} 
                  style={{ 
                    width: '100%', 
                    height: 'auto',
                    display: 'block',
                    filter: 'grayscale(100%) opacity(0.8)',
                    transition: 'all 0.3s ease'
                  }}
                  className="project-img"
                />
              </div>
            )}
          </div>
        ))}
      </div>
      
      <style>{`
        /* Force icons to be smaller */
        .project-tools svg {
          width: 1.25em !important;
          height: 1.25em !important;
          transition: color 0.2s;
        }
        .project-tools svg:hover {
          color: #fff;
        }
        
        .project-title:hover {
          text-decoration: underline !important;
        }

        .btn-active:hover {
          background-color: #fff;
          color: #000 !important;
        }

        .project-img:hover {
          filter: grayscale(0%) opacity(1) !important;
          transform: scale(1.05);
        }

        @media (max-width: 600px) {
          .project-card {
            grid-template-columns: 1fr !important;
          }
          .project-card img {
            max-width: 100%;
          }
        }
      `}</style>
    </Section>
  );
};
