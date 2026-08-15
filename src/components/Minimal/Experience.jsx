import React from 'react';
import { Section } from './Section';

export const Experience = () => {
  return (
    <Section title="Experiencia">
      <div>
        <div className="flex-between mb-2">
          <h3 className="exp-role">Freelancer</h3>
          <span className="text-mono-sm">Ene 2024 — Presente</span>
        </div>
        <p className="exp-title">Desarrollador Full Stack</p>
        <ul className="exp-points">
          <li>Diseño y desarrollo de sistemas de gestión utilizando Java, Spring Boot y React.</li>
          <li>Desarrollo de landing pages para emprendimientos locales, mejorando la visibilidad del negocio.</li>
        </ul>
      </div>
    </Section>
  );
};
