import React from "react";
import { ProjectCard } from "@/components/cards/project-cards";

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
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map((project, index) => (
        <ProjectCard key={index} project={project} index={index} />
      ))}
    </div>
  );
}
