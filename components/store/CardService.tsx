"use client";

import React from "react";

export default function CardService() {
  return (
    <section className="flex flex-col items-center justify-center mt-[20%]">
      <h1>CardService</h1>
      <div className="relative w-full m-5 flex flex-col md:flex-row items-center justify-center gap-4 border-2 border-black rounded-lg p-4 overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full md:w-1/3 h-[30vh] md:h-[40vh] object-cover rounded-2xl"
        >
          <source src="/video/serviceDanse.mp4" type="video/mp4" />
        </video>
        <ul className="flex flex-col font-lato text-base w-full md:w-2/3 px-4">
          <li className=" p-1">
            <p>Galerie vidéo optimisée pour les performances</p>
          </li>
          <li>
            <p>Calendrier des spectacles et ateliers</p>
          </li>
          <li>
            <p>Book photo professionnel</p>
          </li>
          <li>
            <p>Intégration de témoignages de chorégraphes/directeurs</p>
          </li>
          <li>
            <p>Section spécifique pour les cours/workshops</p>
          </li>
        </ul>
      </div>
    </section>
  );
}
