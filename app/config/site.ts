import { Code } from 'lucide-react'
import type { SiteConfig, Service, Project } from "@/app/types";

export const siteConfig: SiteConfig = {
  name: "DEV-STEPH",
  title: "Développeur Full-Stack",
  subtitle: "Votre vision devient réalité numérique",
  description: "Spécialisé dans la création d'applications web et mobiles modernes, je transforme vos idées en solutions digitales performantes et esthétiques.",
  email: "contact@devsteph.fr",
  phone: "+33 7 50 89 35 47",
  location: "Paris, France",
  links: {
    github: "https://github.com/dev-steph",
    linkedin: "https://linkedin.com/in/dev-steph",
    twitter: "https://twitter.com/dev-steph",
  },
}

export const services: Service[] = [
  {
    icon: Code,
    title: "Développement",
    description: "Applications web sur mesure avec les dernières technologies",
    features: ["React/Next.js", "Node.js", "TypeScript", "API REST"],
  },
  // ... autres services
]

export const projects: Project[] = [
  {
    title: "E-commerce Fashion",
    category: "Web Development",
    image: "/placeholder.svg?height=300&width=400",
    tech: ["Next.js", "Stripe", "Tailwind"],
  },
  
  // ... autres projets
]