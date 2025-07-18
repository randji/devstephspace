"use client";

import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/Button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function Formule() {
  const [isDetailsVisible, setIsDetailsVisible] = useState(false);

  const toggleDetails = () => {
    setIsDetailsVisible(!isDetailsVisible);
  };

  return (
    <Card className="w-full h-64 sm:w-[300px] sm:h-[600px] md:h-96 lg:h-[500px] overflow-hidden transition-all duration-300 hover:shadow-lg">
      <CardHeader className=" text-black p-6">
        <CardTitle className="text-center text-2xl font-bold">
          Formule Danseur
        </CardTitle>
      </CardHeader>
      <div className="relative overflow-hidden bg-black ">
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        <video
          poster="/video/serviceDanse.mp4"
          className="h-[400px] sm:w-[500px] w-full object-contain opacity-80"
          autoPlay
          loop
          muted
        >
          <source src="/video/serviceDanse.mp4" type="video/mp4" />
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
          {isDetailsVisible ? (
            <ChevronUp className="h-4 w-4" />
          ) : (
            <ChevronDown className="h-4 w-4" />
          )}
        </Button>
      </CardFooter>
    </Card>
  );
}
