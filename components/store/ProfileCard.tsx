"use client";

import type React from "react";

import { useState } from "react";
import { ChevronDown, X } from "lucide-react";
import { Button } from "@/components/ui/Button";

interface ProfileData {
  id: number;
  name: string;
  description: string;
  image: string;
}

interface ActionItem {
  id: string;
  label: string;
  description: string;
  onClick: () => void;
  variant?: "default" | "primary" | "destructive";
}

// Tableau de données pour les profils
const profilesData: ProfileData[] = [
  {
    id: 1,
    name: "Artisan",
    description:
      "Montrez votre savoir-faire, présentez vos réalisations et attirez de nouveaux clients grâce à une vitrine claire et professionnelle.",
    image: "/Artisan.jpg",
  },
  {
    id: 2,
    name: "Danseur",
    description:
      "Présentez vos performances, vos cours, gérez vos inscriptions et développez votre communauté avec une solution adaptée aux artistes du mouvement.",
    image: "/Danseur.jpg",
  },
  {
    id: 3,
    name: "Commerce",
    description:
      "Boostez vos ventes et votre visibilité avec un site moderne, prêt pour la vente en ligne et pensé pour les commerçants.",
    image: "/Commerce.jpg",
  },
  {
    id: 4,
    name: "Artiste",
    description:
      "Exposez votre univers, partagez vos créations et développez votre présence en ligne avec un site à votre image.",
    image: "/Artiste.jpg",
  },
  {
    id: 5,
    name: "Association",
    description:
      "Gérez vos activités, membres et événements en toute simplicité grâce à un site pensé pour les besoins associatifs.",
    image: "/Association.jpeg",
  },
];

// Tableau des actions personnalisables pour la liste étendue
const getActionItems = (profileName: string): ActionItem[] => [
  {
    id: "follow",
    label: "Suivre",
    description: "Suivre ce profil pour recevoir les mises à jour",

    onClick: () => console.log(`Suivre ${profileName}`),
    variant: "primary",
  },
  {
    id: "message",
    label: "Envoyer un message",
    description: "Démarrer une conversation privée",

    onClick: () => console.log(`Message à ${profileName}`),
  },
  {
    id: "view-profile",
    label: "Voir le profil complet",
    description: "Accéder à toutes les informations du profil",

    onClick: () => console.log(`Voir profil de ${profileName}`),
  },
  {
    id: "add-favorite",
    label: "Ajouter aux favoris",
    description: "Sauvegarder ce profil dans vos favoris",

    onClick: () => console.log(`Favoris ${profileName}`),
  },
  {
    id: "share",
    label: "Partager le profil",
    description: "Partager ce profil avec vos contacts",

    onClick: () => console.log(`Partager ${profileName}`),
  },
  {
    id: "report",
    label: "Signaler",
    description: "Signaler un contenu inapproprié",

    onClick: () => console.log(`Signaler ${profileName}`),
    variant: "destructive",
  },
];

interface ProfileCardProps {
  profile: ProfileData;
}

function ProfileCard({ profile }: ProfileCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const actionItems = getActionItems(profile.name);

  return (
    <div
      className={`group relative w-80 rounded-3xl overflow-hidden bg-gradient-to-b from-gray-100 via-gray-200 to-gray-800 shadow-2xl transition-all duration-700 hover:shadow-3xl ${
        isExpanded ? "h-[700px] hover:scale-100" : "h-[500px] hover:scale-105"
      }`}
    >
      {/* Image de profil */}
      <div
        className={`relative transition-all duration-700 ${
          isExpanded ? "h-[350px]" : "h-full"
        }`}
      >
        <img
          src={profile.image || "/placeholder.svg"}
          alt={profile.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          layout="fill" // Permet à l'image de remplir son conteneur
          objectFit="cover" // Maintient les proportions de l'image
        />

        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

        {/* Contenu principal */}
        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
          {/* Nom et badge de vérification */}
          <div className="flex items-center gap-3 mb-3">
            <h2 className="text-3xl font-bold tracking-tight">
              {profile.name}
            </h2>
          </div>

          {/* Description */}
          <p className="text-gray-200 leading-relaxed mb-6 transition-opacity duration-300 group-hover:opacity-90">
            Votre site web travaille-t-il aussi efficacement que vous pour votre
            association ou votre art&nbsp;?
          </p>

          {/* Bouton d'action */}
          <Button
            onClick={() => setIsExpanded(!isExpanded)}
            className="w-full h-14 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 active:scale-95 bg-white hover:bg-gray-100 text-gray-800 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
          >
            {isExpanded ? "Fermer" : "En savoir plus"}
            {isExpanded ? (
              <X className="w-5 h-5" />
            ) : (
              <ChevronDown className="w-5 h-5 transition-transform duration-300" />
            )}
          </Button>
        </div>

        {/* Animation de particules au hover */}
      </div>

      {/* Zone étendue avec la liste d'actions */}
      <div
        className={`transition-all duration-700 overflow-hidden ${
          isExpanded ? "h-[350px] opacity-100" : "h-0 opacity-0"
        }`}
      >
        <div className="h-full bg-white p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-4">
            Actions disponibles
          </h3>

          <div className="space-y-3 max-h-[280px] overflow-y-auto">
            {actionItems.map((action, index) => (
              <button
                key={action.id}
                onClick={() => {
                  action.onClick();
                  setIsExpanded(false);
                }}
                className={`w-full p-4 rounded-xl text-left flex items-start gap-4 transition-all duration-300 hover:scale-[1.02] transform ${
                  action.variant === "primary"
                    ? "bg-blue-50 hover:bg-blue-100 border-2 border-blue-200"
                    : action.variant === "destructive"
                    ? "bg-red-50 hover:bg-red-100 border-2 border-red-200"
                    : "bg-gray-50 hover:bg-gray-100 border-2 border-gray-200"
                }`}
                style={{
                  animationDelay: `${index * 100}ms`,
                  animation: isExpanded
                    ? "slideInUp 0.5s ease-out forwards"
                    : "none",
                }}
              >
                <div
                  className={`flex-shrink-0 p-2 rounded-lg ${
                    action.variant === "primary"
                      ? "bg-blue-100 text-blue-600"
                      : action.variant === "destructive"
                      ? "bg-red-100 text-red-600"
                      : "bg-gray-100 text-gray-600"
                  }`}
                ></div>
                <div className="flex-1">
                  <h4
                    className={`font-semibold mb-1 ${
                      action.variant === "primary"
                        ? "text-blue-900"
                        : action.variant === "destructive"
                        ? "text-red-900"
                        : "text-gray-900"
                    }`}
                  >
                    {action.label}
                  </h4>
                  <p className="text-sm text-gray-600">{action.description}</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Component() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 justify-items-center">
          {profilesData.map((profile) => (
            <ProfileCard key={profile.id} profile={profile} />
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
