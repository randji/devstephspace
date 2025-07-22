import { AnimatedSection } from "@/components/ui/animated-section"
import { SectionHeader } from "@/components/ui/section-header"
import { ServiceCard } from "@/components/cards/services-card"
import { services } from "@/app/config/site"

export function ServicesSection() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <SectionHeader title="Mes Services" subtitle="Des solutions sur mesure pour tous vos besoins digitaux" />
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
