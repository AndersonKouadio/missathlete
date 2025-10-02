"use client";

import { useState } from "react";
import { Send, User, Mail, Phone, MapPin, Trophy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Title from "../primitives/Title";
import Image from "next/image";

const sports = [
  { key: "football", label: "Football" },
  { key: "basketball", label: "Basketball" },
  { key: "tennis", label: "Tennis" },
  { key: "natation", label: "Natation" },
  { key: "athletisme", label: "Athlétisme" },
  { key: "volleyball", label: "Volleyball" },
  { key: "handball", label: "Handball" },
  { key: "autre", label: "Autre" },
];

export function ParticipateFormSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    sport: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSportChange = (value: string) => {
    setFormData({ ...formData, sport: value });
  };

  const handleSubmit = () => {
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <section className="w-full relative px-6 py-12 md:py-16 min-h-screen flex items-center bg-gradient-to-br from-gray-50 via-white to-primary-50">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Form Section */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                <Trophy className="w-4 h-4" />
                Inscription
              </div>
              <Title level={2} className="text-start">
                Rejoignez l&apos;aventure sportive
              </Title>
              <p className="text-gray-600 text-lg">
                Entrez votre contact pour recevoir le lien d&apos;inscription
                officiel dès son ouverture.
              </p>
            </div>

            {/* Form */}
            <div className="space-y-5">
              {/* Name Field */}
              <div className="space-y-2">
                <Label
                  htmlFor="name"
                  className="flex items-center gap-2 text-gray-700"
                >
                  <User className="w-4 h-4 text-primary" />
                  Nom & Prénom
                </Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Jean Dupont"
                  className="h-11"
                />
              </div>

              {/* Email Field */}
              <div className="space-y-2">
                <Label
                  htmlFor="email"
                  className="flex items-center gap-2 text-gray-700"
                >
                  <Mail className="w-4 h-4 text-primary" />
                  E-mail
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="jean.dupont@example.com"
                  className="h-11"
                />
              </div>

              {/* Phone Field */}
              <div className="space-y-2">
                <Label
                  htmlFor="phone"
                  className="flex items-center gap-2 text-gray-700"
                >
                  <Phone className="w-4 h-4 text-primary" />
                  Téléphone
                </Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+225 XX XX XX XX XX"
                  className="h-11"
                />
              </div>

              {/* Location Field */}
              <div className="space-y-2">
                <Label
                  htmlFor="location"
                  className="flex items-center gap-2 text-gray-700"
                >
                  <MapPin className="w-4 h-4 text-primary" />
                  Lieu d&apos;habitation
                </Label>
                <Input
                  id="location"
                  name="location"
                  type="text"
                  value={formData.location}
                  onChange={handleChange}
                  placeholder="Abidjan, Cocody"
                  className="h-11"
                />
              </div>

              {/* Sport Select */}
              <div className="space-y-2">
                <Label
                  htmlFor="sport"
                  className="flex items-center gap-2 text-gray-700"
                >
                  <Trophy className="w-4 h-4 text-primary" />
                  Sport pratiqué
                </Label>
                <Select
                  value={formData.sport}
                  onValueChange={handleSportChange}
                >
                  <SelectTrigger className="h-11 w-full">
                    <SelectValue placeholder="Sélectionnez un sport" />
                  </SelectTrigger>
                  <SelectContent>
                    {sports.map((sport) => (
                      <SelectItem key={sport.key} value={sport.key}>
                        {sport.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Submit Button */}
              <Button
                onClick={handleSubmit}
                className="w-full h-12 bg-primary hover:bg-primary/90 text-primary-foreground mt-2"
                size="lg"
              >
                {isSubmitted ? (
                  "Inscription enregistrée !"
                ) : (
                  <>
                    Recevoir le lien d&apos;inscription
                    <Send className="w-4 h-4 ml-2" />
                  </>
                )}
              </Button>
            </div>

            {/* Info Items */}
            <div className="grid sm:grid-cols-2 gap-6 pt-4">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Trophy className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">
                    Tous niveaux
                  </h4>
                  <p className="text-sm text-gray-600">
                    Du débutant au confirmé
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">
                    Notification rapide
                  </h4>
                  <p className="text-sm text-gray-600">
                    Recevez le lien par email
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Image Section */}
          <div className="hidden lg:block">
            <div className="relative rounded-2xl overflow-hidden">
              <Image
                src="https://cdn.cosmos.so/2b310226-d0b5-45ab-822f-b9ac3b95df32?format=jpeg"
                alt="Sport"
                fill
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
