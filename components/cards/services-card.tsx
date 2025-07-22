"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/Button"
import { Badge } from "@/components/ui/badge"
import type { Service } from "@/app/types"

interface ServiceCardProps {
  service: Service
  index: number
}

export function ServiceCard({ service, index }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -10, scale: 1.02 }}
      className="group"
    >
      <Card className="h-full border-0 shadow-lg hover:shadow-2xl transition-all duration-300 rounded-3xl overflow-hidden bg-gradient-to-br from-stone-50 to-stone-100">
        <CardContent className="p-8 text-center">
          <motion.div
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ duration: 0.3 }}
            className="w-16 h-16 mx-auto mb-6 bg-stone-800 rounded-2xl flex items-center justify-center group-hover:bg-stone-700 transition-colors duration-300"
          >
            <service.icon className="w-8 h-8 text-white" />
          </motion.div>

          <h3 className="text-xl font-bold text-stone-800 mb-4">{service.title}</h3>

          <p className="text-stone-600 mb-6 leading-relaxed">{service.description}</p>

          <div className="space-y-2 mb-6">
            {service.features.map((feature, idx) => (
              <Badge
                key={idx}
                variant="secondary"
                className="bg-stone-200 text-stone-700 hover:bg-stone-300 rounded-full px-3 py-1 text-xs"
              >
                {feature}
              </Badge>
            ))}
          </div>

          <Button
            className="bg-stone-800 hover:bg-stone-700 text-white rounded-full px-6 py-2 transition-all duration-300 hover:scale-105"
            size="sm"
          >
            En savoir plus
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  )
}
