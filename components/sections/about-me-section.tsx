import { AnimatedSection } from "@/components/ui/animated-section"
import { SectionHeader } from "@/components/ui/section-header"
import Image from "next/image"

export function AboutMeSection() {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-stone-100 to-stone-200">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <SectionHeader title="À Propos de Moi" />
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <AnimatedSection direction="left">
            <div className="prose prose-lg text-stone-700 leading-relaxed">
              <p className="mb-6">
                Passionné par le développement depuis plus de 5 ans, je me spécialise dans la création d'applications
                web et mobiles modernes. Mon approche combine expertise technique et sens esthétique pour livrer des
                solutions qui dépassent les attentes.
              </p>
              <p className="mb-6">
                Chaque projet est une opportunité d'innover et de repousser les limites du possible. Je travaille en
                étroite collaboration avec mes clients pour comprendre leurs besoins et transformer leurs visions en
                réalité digitale.
              </p>
              <p>
                Toujours à l'affût des dernières tendances technologiques, je m'assure que vos projets bénéficient des
                meilleures pratiques et des outils les plus performants du marché.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection direction="right" className="relative">
            <div className="relative w-full h-96 rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/placeholder.svg?height=400&width=400"
                alt="Portrait professionnel"
                fill
                className="object-cover"
              />
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
