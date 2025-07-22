/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true, // Centre le container
      padding: "2rem", // Padding par défaut
      screens: {
        "2xl": "1400px", // Largeur max pour très grands écrans
      },
    },
    extend: {
      // Nouvelles ombres personnalisées
      boxShadow: {
        "3xl": "0 35px 60px -12px rgba(0, 0, 0, 0.25)", // Ombre très prononcée
      },
      fontFamily: {
        sans: [
          "Lato",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
        ],
        lato: ["Lato", "sans-serif"],
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      // 🎨 SYSTÈME DE COULEURS SHADCN/UI
      // Ces couleurs utilisent des variables CSS pour le mode sombre
      colors: {
        border: "hsl(var(--border))", // Bordures
        input: "hsl(var(--input))", // Champs de saisie
        ring: "hsl(var(--ring))", // Anneaux de focus
        background: "hsl(var(--background))", // Arrière-plan principal
        foreground: "hsl(var(--foreground))", // Texte principal

        // Couleurs primaires (votre marque)
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },

        // Couleurs secondaires
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },

        // Couleurs destructives (erreurs, suppressions)
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },

        // Couleurs atténuées (éléments secondaires)
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },

        // Couleurs d'accent (highlights)
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },

        // Couleurs pour les popovers/modales
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },

        // Couleurs pour les cartes
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },

      // 📐 RAYONS DE BORDURE PERSONNALISÉS
      borderRadius: {
        lg: "var(--radius)", // Grand rayon
        md: "calc(var(--radius) - 2px)", // Moyen rayon
        sm: "calc(var(--radius) - 4px)", // Petit rayon
      },
    },
  },
  // 📦 PLUGINS
  plugins: [
    require("tailwindcss-animate"), // Plugin pour les animations avancées
    require("tw-animate-css"), // Plugin pour les animations CSS
  ],
};

export default config;
