"use client"

import { Play, ChevronDown, ChevronUp } from 'lucide-react'
import { useState } from "react"

import { Button } from "@/components/ui/Button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export function Formule() {
  const [isDetailsVisible, setIsDetailsVisible] = useState(false)

  const toggleDetails = () => {
    setIsDetailsVisible(!isDetailsVisible)
  }

  return (
    <Card className="w-full max-w-lg overflow-hidden transition-all duration-300 hover:shadow-lg">
      <CardHeader className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
        <CardTitle className="text-center text-2xl font-bold">Formule Danseur</CardTitle>
      </CardHeader>
      <div className="relative aspect-video w-full overflow-hidden bg-black">
        <div className="absolute inset-0 flex items-center justify-center">
          <Button variant="outline" size="icon" className="h-16 w-16 rounded-full bg-white/20 backdrop-blur-sm">
            <Play className="h-8 w-8 text-white" />
          </Button>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        <video poster="/placeholder.svg?height=300&width=500" className="h-full w-full object-cover opacity-80">
          <source src="#" type="video/mp4" />
          Votre navigateur ne prend pas en charge la lecture vidéo.
        </video>
      </div>
      <CardContent className="p-6">
        <div
          className={`overflow-hidden transition-all duration-300 ${
            isDetailsVisible ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <ul className="space-y-3 text-sm">
            <li className="flex items-start">
              <div className="mr-2 mt-1 h-1.5 w-1.5 rounded-full bg-purple-600" />
              <span>Galerie vidéo optimisée pour les performances</span>
            </li>
            <li className="flex items-start">
              <div className="mr-2 mt-1 h-1.5 w-1.5 rounded-full bg-purple-600" />
              <span>Calendrier des spectacles et ateliers</span>
            </li>
            <li className="flex items-start">
              <div className="mr-2 mt-1 h-1.5 w-1.5 rounded-full bg-purple-600" />
              <span>Book photo professionnel</span>
            </li>
            <li className="flex items-start">
              <div className="mr-2 mt-1 h-1.5 w-1.5 rounded-full bg-purple-600" />
              <span>Intégration de témoignages de chorégraphes/directeurs</span>
            </li>
            <li className="flex items-start">
              <div className="mr-2 mt-1 h-1.5 w-1.5 rounded-full bg-purple-600" />
              <span>Section spécifique pour les cours/workshops</span>
            </li>
          </ul>
        </div>
      </CardContent>
      <CardFooter className="flex justify-center border-t bg-gray-50 p-4">
        <Button
          onClick={toggleDetails}
          className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white transition-all hover:from-purple-700 hover:to-indigo-700 flex items-center gap-2"
        >
          {isDetailsVisible ? "Masquer les détails" : "En savoir plus"}
          {isDetailsVisible ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
        </Button>
      </CardFooter>
    </Card>
  )
}