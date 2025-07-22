import HeroBanner from "@/components/store/Herobanner";
import Service from "@/components/store/Service";
import ProfileCard from "@/components/store/ProfileCard";
import { Code, Smartphone, Globe, Briefcase } from "lucide-react";
import { AboutSection } from "@/components/sections/about-section";
import { AboutMeSection } from "@/components/sections/about-me-section";
import { PortfolioSection as ImportedPortfolioSection } from "@/components/sections/portfolio-section";
import { ContactSection } from "@/components/sections/contact-section";
import { Footer } from "@/components/layout/footer";
import { siteConfig } from "@/app/config/site";
import Image from "next/image";

const services = [
  {
    icon: Code,
    title: "Développement",
    description: "Applications web sur mesure avec les dernières technologies",
    features: ["React/Next.js", "Node.js", "TypeScript", "API REST"],
  },
  {
    icon: Globe,
    title: "Sites Web",
    description: "Sites vitrine et e-commerce responsive et optimisés",
    features: ["Design responsive", "SEO optimisé", "Performance", "CMS"],
  },
  {
    icon: Smartphone,
    title: "Applications Mobiles",
    description: "Apps natives et hybrides pour iOS et Android",
    features: ["React Native", "Flutter", "PWA", "App Store"],
  },
  {
    icon: Briefcase,
    title: "Consulting",
    description: "Conseil en architecture et stratégie digitale",
    features: ["Architecture", "Code Review", "Formation", "Audit"],
  },
];

interface Project {
  title: string;
  category: string;
  image: string;
  tech: string[];
}

// interface PageProps {
//   projects: Project[];
// }

const projects: Project[] = [
  {
    title: "E-commerce Fashion",
    category: "Web Development",
    image: "/placeholder.svg?height=300&width=400",
    tech: ["Next.js", "Stripe", "Tailwind"],
  },
  {
    title: "App Mobile Fitness",
    category: "Mobile App",
    image: "/placeholder.svg?height=300&width=400",
    tech: ["React Native", "Firebase", "Redux"],
  },
  {
    title: "Dashboard Analytics",
    category: "Web App",
    image: "/placeholder.svg?height=300&width=400",
    tech: ["React", "D3.js", "Node.js"],
  },
  {
    title: "Site Vitrine Restaurant",
    category: "Website",
    image: "/placeholder.svg?height=300&width=400",
    tech: ["WordPress", "PHP", "MySQL"],
  },
  {
    title: "App de Livraison",
    category: "Mobile App",
    image: "/placeholder.svg?height=300&width=400",
    tech: ["Flutter", "Google Maps", "Firebase"],
  },
  {
    title: "Plateforme SaaS",
    category: "Web App",
    image: "/placeholder.svg?height=300&width=400",
    tech: ["Vue.js", "Laravel", "PostgreSQL"],
  },
];

interface Service {
  icon: React.ComponentType;
  title: string;
  description: string;
  features: string[];
}

interface ServicesSectionProps {
  services: Service[];
}

export function ServicesSection({ services }: ServicesSectionProps) {
  return (
    <div>
      {services.map((service, index) => (
        <div key={index}>
          <service.icon />
          <h3>{service.title}</h3>
          <p>{service.description}</p>
          <ul>
            {service.features.map((feature, idx) => (
              <li key={idx}>{feature}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

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

export default function Store() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-50 to-stone-100">
      <HeroBanner />
      <Service />
      <ProfileCard />
      <AboutSection config={siteConfig} />
      <ServicesSection services={services} />
      <AboutMeSection />
      <ImportedPortfolioSection projects={projects} />
      <ContactSection config={siteConfig} />
      <Footer />
    </div>
  );
}
