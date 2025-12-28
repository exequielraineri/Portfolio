import React from 'react';
import { Section } from './Section';

export const Skills = () => {
  return (
    <Section title="Stack Tecnológico">
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '3rem' }}>
        
        <div>
          <h3 style={{ fontSize: '1rem', color: '#fff', marginBottom: '1rem', borderBottom: '1px solid #333', paddingBottom: '0.5rem' }}>Backend Core</h3>
          <ul style={{ color: '#aaa', fontSize: '0.9rem', lineHeight: '1.8' }}>
            <li>Java (17 - 21)</li>
            <li>Spring Boot & Security</li>
            <li>Spring Cloud (Gateway, Eureka)</li>
            <li>JSF / Jakarta EE</li>
            <li>RESTful APIs & JWT</li>
          </ul>
        </div>

        <div>
          <h3 style={{ fontSize: '1rem', color: '#fff', marginBottom: '1rem', borderBottom: '1px solid #333', paddingBottom: '0.5rem' }}>Data & Performance</h3>
          <ul style={{ color: '#aaa', fontSize: '0.9rem', lineHeight: '1.8' }}>
            <li>MySQL / Bases de Datos Relacionales</li>
            <li>Redis (Cache)</li>
            <li>Apache Kafka</li>
            <li>Hibernate / JPA</li>
            <li>Data Normalization</li>
          </ul>
        </div>

        <div>
          <h3 style={{ fontSize: '1rem', color: '#fff', marginBottom: '1rem', borderBottom: '1px solid #333', paddingBottom: '0.5rem' }}>Frontend & Mobile</h3>
          <ul style={{ color: '#aaa', fontSize: '0.9rem', lineHeight: '1.8' }}>
            <li>React.js</li>
            <li>Android (Java/Kotlin)</li>
            <li>MVVM & Clean Architecture</li>
            <li>HTML5 / CSS3 / Figma</li>
            <li>Firebase</li>
          </ul>
        </div>

        <div>
          <h3 style={{ fontSize: '1rem', color: '#fff', marginBottom: '1rem', borderBottom: '1px solid #333', paddingBottom: '0.5rem' }}>Tools & DevOps</h3>
          <ul style={{ color: '#aaa', fontSize: '0.9rem', lineHeight: '1.8' }}>
            <li>Docker & Contenedores</li>
            <li>Git / GitHub</li>
            <li>Postman</li>
            <li>Linux / Terminal</li>
            <li>Microservices Concepts</li>
          </ul>
        </div>

      </div>
    </Section>
  );
};
