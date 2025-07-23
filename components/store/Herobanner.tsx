"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

const Herobanner = () => {
  const [textPosition, setTextPosition] = useState({ x: 30, y: 180 });
  const [subtitlePosition, setSubtitlePosition] = useState({ x: 50, y: 180 });
  const [rectDimensions, setRectDimensions] = useState({
    width: 700,
    height: 70,
  });

  useEffect(() => {
    // Fonction pour ajuster la position du texte en fonction de la largeur de l'écran
    const handleResize = () => {
      const width = window.innerWidth;

      // Calcul du centre vertical en fonction de la hauteur du viewBox (300)
      const centerY = 150; // Le centre vertical du viewBox est à 150

      if (width < 640) {
        // sm
        setTextPosition({ x: 60, y: centerY });
        setSubtitlePosition({ x: 50, y: centerY + 60 }); // Positionner le sous-titre en dessous
        setRectDimensions({ width: 750, height: 10 });
      } else if (width < 768) {
        // md
        setTextPosition({ x: 60, y: centerY });
        setSubtitlePosition({ x: 40, y: centerY + 60 });
        setRectDimensions({ width: 450, height: 50 });
      } else if (width < 1024) {
        // lg
        setTextPosition({ x: 60, y: centerY });
        setSubtitlePosition({ x: 50, y: centerY + 70 });
        setRectDimensions({ width: 550, height: 10 });
      } else {
        // xl et plus grand
        setTextPosition({ x: 40, y: centerY });
        setSubtitlePosition({ x: 60, y: centerY + 80 });
        setRectDimensions({ width: 750, height: 10 });
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Appel initial pour définir la position

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="relative md:h-[100vh] w-full flex flex-col items-center justify-center shadow-2xl">
      <div className="relative w-full md:h-[100vh] flex flex-col md:flex-row items-center">
        {/* Vidéo en arrière-plan avec opacité de 50% */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full md:w-1/3 h-[20vh] md:h-full object-cover opacity-70 z-0"
        >
          <source src="/video/danseur.mp4" type="video/mp4" />
        </video>

        <video
          autoPlay
          muted
          loop
          playsInline
          className=" w-full md:w-1/3 h-[20vh] md:h-full object-cover opacity-70 z-0"
        >
          <source src="/video/peintre.mp4" type="video/mp4" />
        </video>

        <video
          autoPlay
          muted
          loop
          playsInline
          className=" w-full md:w-1/3 h-[20vh] md:h-full object-cover opacity-80 z-0"
        >
          <source src="/video/artisan.mp4" type="video/mp4" />
        </video>

        <svg
          viewBox="0 0 800 300"
          width="100%"
          height="100%"
          className="absolute max-w-[800px] h-auto z-10 flex top-[22%] md:top-[30%] left-1/2 -translate-x-1/2 -translate-y-1/2 md:justify-center md:items-center text-transparent bg-clip-text text-6xl md:text-9xl font-lato font-bold text-nowrap"
        >
          <defs>
            <clipPath id="text-clip">
              <text
                x={textPosition.x}
                y={textPosition.y}
                fontSize="120"
                fontFamily="Lato, sans-serif"
                stroke="white"
                strokeWidth="3"
                fill="none"
              >
                DEV-STEPH
              </text>
            </clipPath>
          </defs>

          {/* rectangle noir derrière (sinon transparent complet) */}
          {/* <rect width="800" height="300" fill="black" opacity="0.8" /> */}

          {/* Texte avec contour blanc */}
          <text
            x={textPosition.x}
            y={textPosition.y}
            fontSize="120"
            fontFamily="Lato, sans-serif"
            stroke="white"
            strokeWidth="3"
            fill="none"
          >
            DEV-STEPH
          </text>

          {/* vidéo en fond visible seulement à travers le texte */}
          <foreignObject width="800" height="300" clipPath="url(#text-clip)">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="absolute top-0 left-0 w-full h-full object-cover opacity-50 z-0"
            >
              <source src="/video/danseur.mp4" type="video/mp4" />
            </video>
          </foreignObject>
        </svg>

        {/* --------------------------------------------------- */}

        <svg
          viewBox="0 0 800 300"
          width="100%"
          height="100%"
          className="absolute flex top-[25%] md:top-[35%] left-1/2 -translate-x-1/2 -translate-y-1/2 md:justify-center md:items-center bg-clip-text bg-white/80 text-xs text-black md:text-2xl font-lato font-bold z-20 mt-20 md:mt-20 text-wrap"
        >
          <defs>
            <clipPath id="text-clip1">
              <text
                x={subtitlePosition.x}
                y={subtitlePosition.y}
                fontSize="50"
                fontFamily="Lato, sans-serif"
                stroke="white"
                strokeWidth="1"
                fill="none"
              >
                Votre Identité créative en ligne
              </text>
            </clipPath>
          </defs>

          {/* rectangle blanc derrière */}
          <rect
            x={subtitlePosition.x - 20}
            y={subtitlePosition.y - 4}
            width={rectDimensions.width}
            height={rectDimensions.height}
            fill="white"
            opacity="0.7"
            rx="10"
          />

          {/* Texte avec contour blanc */}
          <text
            x={subtitlePosition.x}
            y={subtitlePosition.y}
            fontSize="50"
            fontFamily="Lato, sans-serif"
            stroke="white"
            strokeWidth="1"
            fill="none"
          >
            Votre Identité créative en ligne
          </text>

          {/* vidéo en fond visible seulement à travers le texte */}
          <foreignObject width="800" height="300" clipPath="url(#text-clip1)">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="absolute top-0 left-0 w-full h-full object-cover opacity-90 z-0"
            >
              <source src="/video/peintre.mp4" type="video/mp4" />
            </video>
          </foreignObject>
        </svg>
        <div className="bg-white/80 absolute -bottom-5 md:-bottom-10 opacity-90 left-1/2 -translate-x-1/2 -translate-y-1/2 md:w-[150px] md:h-[150px] rounded-full flex items-center justify-center border-2 border-black">
          <Image
            src="/logoDSteph.png"
            alt="Logo"
            width={100}
            height={100}
            className="opacity-90 w-[80px] m-1 md:w-[100px] md:m-2"
          />
        </div>
      </div>
    </section>
  );
};

export default Herobanner;

{
  /* <section className="relative h-auto md:h-[100vh] w-full flex">
  <div className="flex flex-col md:flex-row items-center">

    <video
      src="/video/danseur.mp4"
      autoPlay
      muted
      loop
      playsInline
      className="w-screen md:w-1/3 h-[20vh] md:h-full object-cover"
    />
    <video
      src="/video/peintre.mp4"
      autoPlay
      muted
      loop
      playsInline
      className="w-screen md:w-1/3 h-[20vh] md:h-full object-cover "
    />
    <video
      src="/video/artisan.mp4"
      autoPlay
      muted
      loop
      playsInline
      className="w-screen md:w-1/3 h-[20vh] md:h-full object-cover"
    />
    <h1 className="absolute flex top-[30%] left-1/2 -translate-x-1/2 -translate-y-1/2 md:justify-center md:items-center text-transparent bg-clip-text bg-white/80 text-6xl md:text-9xl font-bold z-20 text-nowrap">
      DEV-STEPH
    </h1>
    <h2 className="absolute flex top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 md:justify-center md:items-center text-transparent bg-clip-text bg-white/80 text-2xl md:text-4xl font-bold z-20 mt-20 md:mt-20 text-nowrap">
      Votre site, Notre savoir-faire
    </h2>
  </div>
</section>
  );
} */
}
