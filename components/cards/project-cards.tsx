"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import type { Project } from "@/app/types"

interface ProjectCardProps {
  project: Project
  index: number
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -10, scale: 1.02 }}
      className="group cursor-pointer"
    >
      <Card className="overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300 rounded-3xl">
        <div className="relative h-48 overflow-hidden">
          <Image
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />
        </div>

        <CardContent className="p-6">
          <Badge variant="secondary" className="mb-3 bg-stone-100 text-stone-700 rounded-full px-3 py-1 text-xs">
            {project.category}
          </Badge>

          <h3 className="text-xl font-bold text-stone-800 mb-3">{project.title}</h3>

          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech, idx) => (
              <Badge key={idx} variant="outline" className="text-xs rounded-full border-stone-300 text-stone-600">
                {tech}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
