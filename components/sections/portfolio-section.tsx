import { AnimatedSection } from "@/components/ui/animated-section";
import { SectionHeader } from "@/components/ui/section-header";
import { ProjectCard } from "@/components/cards/project-cards";

interface PortfolioSectionProps {
  projects: {
    title: string;
    category: string;
    image: string;
    tech: string[];
  }[];
}

export function PortfolioSection({ projects }: PortfolioSectionProps) {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <SectionHeader
            title="Mes Réalisations"
            subtitle="Découvrez quelques-uns de mes projets récents"
          />
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
