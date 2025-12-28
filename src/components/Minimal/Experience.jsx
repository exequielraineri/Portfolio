import React from 'react';
import { Section } from './Section';

export const Experience = () => {
  return (
    <Section title="Experiencia">
      <div style={{ marginBottom: '2rem' }}>
        <div className="flex-between mb-2">
          <h3 style={{ fontSize: '1.1rem', fontWeight: '600', color: '#fff', margin: 0 }}>Freelancer</h3>
          <span className="text-sm">Ene 2024 — Presente</span>
        </div>
        <p style={{ fontSize: '0.95rem', color: '#ddd' }}>Desarrollador Full Stack</p>
        <ul style={{ paddingLeft: '1rem', listStyleType: 'disc', color: '#aaa', fontSize: '0.9rem' }}>
          <li className="mb-2">Diseño y desarrollo de sistemas de gestión utilizando Java, Spring Boot y React.</li>
          <li>Desarrollo de landing pages para emprendimientos locales, mejorando la visibilidad del negocio.</li>
        </ul>
      </div>
    </Section>
  );
};
