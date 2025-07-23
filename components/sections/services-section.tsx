import React from "react";

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
