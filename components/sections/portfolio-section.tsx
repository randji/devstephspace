import React from "react";

interface Project {
  title: string;
  category: string;
  image: string;
  tech: string[];
}

interface PortfolioSectionProps {
  projects: Project[];
}

export function PortfolioSection({ projects }: PortfolioSectionProps) {
  return (
    <div>
      {projects.map((project, index) => (
        <div key={index}>
          <Image
            src={project.image}
            alt={project.title}
            width={400}
            height={300}
            className="rounded-lg"
          />
          <h3>{project.title}</h3>
          <p>{project.category}</p>
          <ul>
            {project.tech.map((tech, idx) => (
              <li key={idx}>{tech}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
