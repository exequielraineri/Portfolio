import React from 'react';
import { Section } from './Section';

const categories = [
  {
    title: 'Backend Core',
    items: [
      'Java (17 - 21)',
      'Spring Boot & Security',
      'Spring Cloud (Gateway, Eureka)',
      'JSF / Jakarta EE',
      'RESTful APIs & JWT',
    ],
  },
  {
    title: 'Data & Performance',
    items: [
      'MySQL / Bases de Datos Relacionales',
      'Redis (Cache)',
      'Apache Kafka',
      'Hibernate / JPA',
      'Data Normalization',
    ],
  },
  {
    title: 'Frontend & Mobile',
    items: [
      'React.js',
      'Android (Java/Kotlin)',
      'MVVM & Clean Architecture',
      'HTML5 / CSS3 / Figma',
      'Firebase',
    ],
  },
  {
    title: 'Tools & DevOps',
    items: [
      'Docker & Contenedores',
      'Git / GitHub',
      'Postman',
      'Linux / Terminal',
      'Microservices Concepts',
    ],
  },
];

export const Skills = () => {
  return (
    <Section title="Stack Tecnológico">
      <div className="skills-grid">
        {categories.map((category) => (
          <div key={category.title}>
            <h3 className="skills-category-title">{category.title}</h3>
            <ul className="skills-list">
              {category.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
};
