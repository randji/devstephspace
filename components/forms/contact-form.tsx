"use client"

import type React from "react"

import { Button } from "@/components/ui/Button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"

export function ContactForm() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Logique d'envoi du formulaire
    console.log("Formulaire envoyé")
  }

  return (
    <Card className="bg-white/10 backdrop-blur-sm border-white/20 rounded-3xl">
      <CardContent className="p-8">
        <h3 className="text-2xl font-bold text-white mb-6">Envoyez-moi un message</h3>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input
              placeholder="Votre nom"
              className="bg-white/10 border-white/20 text-white placeholder:text-stone-300 rounded-2xl"
              required
            />
            <Input
              placeholder="Votre email"
              type="email"
              className="bg-white/10 border-white/20 text-white placeholder:text-stone-300 rounded-2xl"
              required
            />
          </div>

          <Input
            placeholder="Sujet"
            className="bg-white/10 border-white/20 text-white placeholder:text-stone-300 rounded-2xl"
            required
          />

          <Textarea
            placeholder="Votre message"
            rows={5}
            className="bg-white/10 border-white/20 text-white placeholder:text-stone-300 rounded-2xl resize-none"
            required
          />

          <Button
            type="submit"
            className="w-full bg-white text-stone-800 hover:bg-stone-100 rounded-2xl py-3 font-semibold transition-all duration-300 hover:scale-105"
          >
            Envoyer le message
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
