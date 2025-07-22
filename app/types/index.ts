export interface SiteConfig {
  name: string
  title: string
  subtitle: string
  description: string
  email: string
  phone: string
  location: string
  links: {
    github: string
    linkedin: string
    twitter: string
  }
}

export interface Service {
  icon: any
  title: string
  description: string
  features: string[]
}

export interface Project {
  title: string
  category: string
  image: string
  tech: string[]
}

export interface ContactInfo {
  icon: any
  label: string
  value: string
}