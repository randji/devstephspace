import { AnimatedSection } from "@/components/ui/animated-section";
import { SectionHeader } from "@/components/ui/section-header";
import { ContactForm } from "@/components/forms/contact-form";
import { ContactInfo } from "@/components/contact/contact-info";

interface ContactSectionProps {
  config: {
    title: string;
    subtitle: string;
    links: {
      github: string;
      linkedin: string;
    };
    name: string;
    description: string;
    email: string;
    phone: string;
    address?: string;
  };
}

export function ContactSection({ config }: ContactSectionProps) {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-stone-800 to-stone-900">
      <div className="max-w-6xl mx-auto">
        <AnimatedSection>
          <SectionHeader
            title="Contactez-moi"
            subtitle="Prêt à donner vie à votre projet ? Parlons-en !"
            className="text-white [&_h2]:text-white [&_p]:text-stone-300"
          />
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <AnimatedSection direction="left">
            <ContactForm />
          </AnimatedSection>

          <AnimatedSection direction="right">
            <ContactInfo config={config} />
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
