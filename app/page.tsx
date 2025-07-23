import HeroBanner from "@/components/store/Herobanner";
import Service from "@/components/store/Service";
import ProfileCard from "@/components/store/ProfileCard";
import { AboutSection } from "@/components/sections/about-section";
import { AboutMeSection } from "@/components/sections/about-me-section";
import { PortfolioSection as ImportedPortfolioSection } from "@/components/sections/portfolio-section";
import { ContactSection } from "@/components/sections/contact-section";
import { Footer } from "@/components/layout/footer";
import { siteConfig } from "@/app/config/site";
import { ServicesSection } from "@/components/sections/services-section";

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

export default function page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-50 to-stone-100">
      <HeroBanner />
      <Service />
      <ProfileCard />
      <AboutSection config={siteConfig} />
      <ServicesSection />
      <AboutMeSection />
      <ImportedPortfolioSection projects={projects} />
      <ContactSection config={siteConfig} />
      <Footer />
    </div>
  );
}
