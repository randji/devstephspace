"use client"

import { motion } from "framer-motion"
import { siteConfig } from "@/app/config/site"

export function Footer() {
  return (
    <footer className="bg-stone-900 text-white py-12 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold mb-4">{siteConfig.name}</h3>
          <p className="text-stone-400 mb-6">Transformons ensemble vos idées en réalité digitale</p>
          <p className="text-stone-500 text-sm">© 2024 {siteConfig.name}. Tous droits réservés.</p>
        </motion.div>
      </div>
    </footer>
  )
}
