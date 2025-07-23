"use client";
import React from "react";
import { Code, Smartphone, Globe, Briefcase } from "lucide-react";
import { ServiceCard } from "@/components/cards/services-card";

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

export function ServicesSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {services.map((service, index) => (
        <ServiceCard key={index} service={service} index={index} />
      ))}
    </div>
  );
}
