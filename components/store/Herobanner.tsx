"use client";

import React from "react";

const Herobanner = () => {
  return (
    <section className="relative h-auto md:h-[100vh] w-full flex shadow-2xl">
      <div className="relative w-full h-screen flex flex-col md:flex-row items-center ">
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
          className="absolute max-w-[800px] h-auto z-10 flex top-[12%] md:top-[30%] left-1/2 -translate-x-1/2 -translate-y-1/2 md:justify-center md:items-center text-transparent bg-clip-text text-6xl md:text-9xl font-bold text-nowrap"
        >
          <defs>
            <clipPath id="text-clip">
              <text
                x="30"
                y="180"
                fontSize="120"
                fontFamily="Arial Black, sans-serif"
                stroke="white"
                strokeWidth="2"
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
            x="30"
            y="180"
            fontSize="120"
            fontFamily="Arial Black, sans-serif"
            stroke="white"
            strokeWidth="6"
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
              className="absolute top-0 left-0 w-full h-full object-cover  z-0"
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
          className="absolute flex top-[20%]  md:top-[45%] left-1/2 -translate-x-1/2 -translate-y-1/2 md:justify-center md:items-center text-transparent bg-clip-text bg-white/80 text-xs
           md:text-2xl font-bold z-20 mt-20 md:mt-20 text-wrap"
        >
          <defs>
            <clipPath id="text-clip1">
              <text
                x="50"
                y="180"
                fontSize="40"
                fontFamily="Arial Black, sans-serif"
                stroke="white"
                strokeWidth="2"
                fill="none"
              >
                Votre Identité créative en ligne
              </text>
            </clipPath>
          </defs>

          {/* rectangle noir derrière (sinon transparent complet) */}
          {/* <rect width="800" height="300" fill="black" opacity="0.8" /> */}

          {/* Texte avec contour blanc */}
          <text
            x="50"
            y="180"
            fontSize="40"
            fontFamily="Arial Black, sans-serif"
            stroke="white"
            strokeWidth="6"
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
              className="absolute top-0 left-0 w-full h-full object-cover  z-0"
            >
              <source src="/video/peintre.mp4" type="video/mp4" />
            </video>
          </foreignObject>
        </svg>
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
