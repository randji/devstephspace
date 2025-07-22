"use client"

import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from "lucide-react"
import type { SiteConfig } from "@/app/types"

interface ContactInfoProps {
  config: SiteConfig
}

export function ContactInfo({ config }: ContactInfoProps) {
  const contactItems = [
    { icon: Mail, label: "Email", value: config.email },
    { icon: Phone, label: "Téléphone", value: config.phone },
    { icon: MapPin, label: "Localisation", value: config.location },
  ]

  const socialLinks = [
    { icon: Github, href: config.links.github },
    { icon: Linkedin, href: config.links.linkedin },
    { icon: Twitter, href: config.links.twitter },
  ]

  return (
    <div className="space-y-8">
      <div className="text-white">
        <h3 className="text-2xl font-bold mb-6">Informations de contact</h3>

        <div className="space-y-6">
          {contactItems.map((item, index) => (
            <motion.div key={index} whileHover={{ x: 10 }} className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center">
                <item.icon className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="font-semibold">{item.label}</p>
                <p className="text-stone-300">{item.value}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="pt-8 border-t border-white/20">
        <h4 className="text-xl font-bold text-white mb-4">Suivez-moi</h4>

        <div className="flex space-x-4">
          {socialLinks.map((social, index) => (
            <motion.a
              key={index}
              href={social.href}
              whileHover={{ scale: 1.1, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="w-12 h-12 bg-white/10 hover:bg-white/20 rounded-2xl flex items-center justify-center transition-colors duration-300"
            >
              <social.icon className="w-6 h-6 text-white" />
            </motion.a>
          ))}
        </div>
      </div>
    </div>
  )
}
