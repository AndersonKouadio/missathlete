"use client";

import { SectionHeader } from "@/components/section-header";
import Title from "../primitives/Title";

import {
  Calendar,
  Crown,
  DollarSign,
  Gift,
  Handshake,
  MapPin,
  PartyPopper,
  Send,
  Sparkle,
  Trophy,
  Tv,
  Users,
} from "lucide-react";

import {
  Timeline,
  TimelineContent,
  TimelineDate,
  TimelineHeader,
  TimelineIndicator,
  TimelineItem,
  TimelineSeparator,
  TimelineTitle,
} from "@/components/ui/timeline";
import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";

const rewards = [
  {
    id: 1,
    icon: Crown,
    title: "COURONNE &",
    subtitle: "TROPHÉES",
  },
  {
    id: 2,
    icon: DollarSign,
    title: "DOTATIONS",
    subtitle: "FINANCIÈRES",
  },
  {
    id: 3,
    icon: Handshake,
    title: "SPONSORING",
    subtitle: "SPORTIF",
  },
  {
    id: 4,
    icon: Tv,
    title: "OPPORTUNITÉS",
    subtitle: "MÉDIAS",
  },
];

const items = [
  {
    id: 1,
    date: "Du 21 décembre 2025 au 19 janvier 2026 (23h59)",
    title: "Inscriptions",
    icon: Send,
    description: [
      "Critères de participation : Femme ivoirienne, 17-25 ans, pratique une activité sportive (amateur ou pro), bonne condition physique, présentation d'un projet personnel.",
    ],
  },
  {
    id: 2,
    date: "Samedi 24 janvier 2026 - Dimanche 22 février 2026",
    title: "Phase Pré-sélections : Phases Régionales",
    description: [
      "Se déroulent sur 5 weekends de janvier à février 2026 dans les communes d'Abidjan et les villes de l'intérieur (Bouaké, Yamoussoukro, Grand-Bassam, etc.).",
      "Jury : Sportifs, journalistes, influenceurs sport/santéSélection de 12 à 15 finalistes",
    ],
    icon: Users,
    showCities: true,
    planning: [
      {
        date: "Samedi 24 janvier 2026",
        zones: "Koumassi - Marcory - Treichville",
      },
      {
        date: "Samedi 31 janvier 2026",
        zones: "Cocody - Plateau",
      },
      {
        date: "Samedi 7 février 2026",
        zones: "Attécoubé - Abobo",
      },
      {
        date: "Dimanche 8 février 2026",
        zones: "Port-Bouët - Gonzagueville",
      },
      {
        date: "Samedi 14 février 2026",
        zones: "Grand-Bassam",
      },
      {
        date: "Semaine 7 — Dimanche 15 février 2026",
        zones: "Bouaké - Yamoussoukro",
      },
      {
        date: "Samedi 21 février 2026",
        zones: "Bingerville",
      },
      {
        date: "Dimanche 22 février 2026",
        zones: "Yopougon - Adjamé",
      },
    ],
  },
  {
    id: 3,
    date: "1 - 2 semaines",
    title: "Phase Bootcamp National : 24 Total qualifiés",
    description: [
      "Programme : Coaching sportif, prise de parole, défis collectifs, shooting photo/vidéos promotionnelles.",
    ],
    icon: Trophy,
  },
  {
    id: 4,
    date: null,
    title: "Phase Finale: Soirée événementielle",
    description: [
      "Au programme : Défilés (sportswear / traditionnel / gala), prestation artistique, présentation du parcours ou projet personnel, élection de la Miss + 2 dauphines.",
    ],
    icon: Trophy,
  },
];

export function EventSection() {
  return (
    <div
      id="event"
      className="w-full relative px-6 py-12 md:py-16 min-h-screen flex flex-col gap-8 md:gap-12 bg-gradient-to-br from-gray-50 via-white to-primary-50"
    >
      <SectionHeader className="max-w-screen-xl mx-auto text-center">
        <Title level={2} color="primary">
          L&apos;Évènement
        </Title>
        <Title level={2} size="sm">
          Calendrier & Déroulement 2025-2026
        </Title>
      </SectionHeader>

      {/* Info Cards */}
      <div className="max-w-screen-xl mx-auto w-full grid md:grid-cols-2 gap-6 mb-6">
        <div className="bg-white rounded-2xl p-6 md:p-8 border border-primary-100">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0">
              <Send className="text-primary-600" size={24} />
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-primary-600">
              INSCRIPTIONS
            </h3>
          </div>
          <p className="text-gray-700 leading-relaxed">
            Êtes-vous prêts à changer de destin ? Inscrivez-vous sur votre
            plateforme favorite et prenez part aux activités en suivant les
            instructions.
          </p>
        </div>

        <div className="bg-white rounded-2xl p-6 md:p-8 border border-primary-100">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0">
              <Users className="text-primary-600" size={24} />
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-primary-600">
              PHASES DE PRÉSÉLECTIONS
            </h3>
          </div>
          <p className="text-gray-700 leading-relaxed">
            Les Prépaya Audites Cofoun, évoluent tissus, qui prennent le relais,
            tissent l&apos;avenir, chaînes narratives.
          </p>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="max-w-screen-xl mx-auto w-full grid grid-cols-1 lg:grid-cols-5 gap-8 md:gap-10">
        <div className="lg:col-span-3 space-y-8">
          <TimelineComponent />
        </div>
        <div className="hidden lg:block lg:col-span-2 relative min-h-[400px] lg:min-h-[600px] rounded-2xl overflow-hidden shadow-xl">
          <Image
            src="https://cdn.cosmos.so/afa69feb-4753-49cb-a226-57dcdcff0fc5?format=jpeg"
            alt="Event"
            fill
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Rewards Section */}
      <div className="max-w-screen-xl mx-auto w-full bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-8 md:p-12 text-center shadow-2xl">
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 bg-secondary/20 rounded-2xl flex items-center justify-center">
            <Trophy className="text-secondary" size={40} />
          </div>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
          Les Récompenses
        </h2>
        <p className="text-secondary text-base md:text-lg mb-8 max-w-2xl mx-auto">
          Couronne & Trophées, dotations financières, sponsoring sportif,
          opportunités médias.
        </p>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 max-w-2xl mx-auto mb-8">
          {rewards.map((reward) => {
            const IconComponent = reward.icon;
            return (
              <div key={reward.id} className="flex flex-col gap-2 items-center">
                {/* Icon */}
                <div className="w-12 h-12 md:w-14 md:h-14 text-secondary rounded-xl flex items-center justify-center">
                  <IconComponent size={80} strokeWidth={2} />
                </div>

                {/* Card */}
                <div className="w-full bg-primary rounded-lg text-center min-h-20 flex flex-col items-center justify-center">
                  <h3 className="font-bold text-sm md:text-sm leading-tight uppercase">
                    {reward.title}
                  </h3>
                  <h3 className="font-bold text-sm md:text-sm leading-tight uppercase">
                    {reward.subtitle}
                  </h3>
                </div>
              </div>
            );
          })}
        </div>
        <Link href="#contact">
          <Button className="h-12 w-48 bg-gradient-to-r from-primary-500 to-primary-600 text-white px-8 md:px-12 py-3 md:py-4 rounded-full text-base md:text-lg font-bold hover:from-primary-600 hover:to-primary-700 transition-all transform hover:scale-105 shadow-lg">
            Restez Informé
            <Sparkle size={32} />
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default function TimelineComponent() {
  return (
    <div className="flex flex-col gap-8 items-start">
      {/* Launch Ceremony Card */}
      <div className="w-full bg-gradient-to-r from-primary-500 to-primary-600 rounded-2xl shadow-2xl overflow-hidden hover:shadow-3xl transition-shadow">
        <div className="flex items-center justify-between p-6 md:p-8">
          <div className="flex items-center gap-4 md:gap-6 flex-1">
            <div className="w-14 h-14 md:w-16 md:h-16 bg-white rounded-xl flex items-center justify-center flex-shrink-0">
              <Gift className="text-primary-600" size={32} />
            </div>
            <div className="text-white">
              <p className="font-bold text-xl md:text-2xl lg:text-3xl mb-1">
                Cérémonie de lancement
              </p>
              <p className="text-sm md:text-base lg:text-lg text-primary-100">
                21 décembre 2025
              </p>
            </div>
          </div>
          <div className="flex-shrink-0 ml-4">
            <PartyPopper size={36} className="text-white md:w-12 md:h-12" />
          </div>
        </div>
      </div>

      {/* Timeline */}
      <Timeline defaultValue={0} className="w-full">
        {items.map((item) => (
          <TimelineItem
            key={item.id}
            step={item.id}
            className="group-data-[orientation=vertical]/timeline:ms-12 md:ms-14"
          >
            <TimelineHeader>
              <TimelineSeparator className="group-data-[orientation=vertical]/timeline:-left-9 md:-left-10 group-data-[orientation=vertical]/timeline:h-[calc(100%-1.5rem-0.25rem)] group-data-[orientation=vertical]/timeline:translate-y-6.5" />
              <TimelineTitle className="mt-0.5 text-xl md:text-2xl font-bold text-gray-900">
                {item.title}
              </TimelineTitle>
              <TimelineIndicator
                className={`rounded-xl bg-primary-500 text-white flex size-12 md:size-14 items-center justify-center shadow-lg group-data-[orientation=vertical]/timeline:-left-9 md:-left-10 border-4 border-white`}
              >
                <item.icon size={24} className="md:w-7 md:h-7" />
              </TimelineIndicator>
            </TimelineHeader>
            <TimelineContent className="pb-6">
              {item.description && (
                <ul className="ml-4 list-disc text-gray-700 leading-relaxed">
                  {item.description.map((desc, i) => (
                    <li key={i}>{desc}</li>
                  ))}
                </ul>
              )}
              {item.showCities && (
                <div className="grid grid-cols-2 gap-2 mt-3">
                  {item.planning.map((plan, i) => (
                    <div
                      key={i}
                      className="px-3 py-2 bg-secondary/50 rounded-lg text-sm text-foreground"
                    >
                      <div className="font-bold text-primary-700 ">
                        {plan.date}
                      </div>
                      <div className="flex gap-2 items-center font-medium">
                        <MapPin size={18} /> {plan.zones}
                      </div>
                    </div>
                  ))}
                </div>
              )}
              {item.date && (
                <TimelineDate className="mt-4 mb-0 flex gap-2 items-center text-xs md:text-base text-primary-600 font-medium">
                  <Calendar size={18} /> {item.date}
                </TimelineDate>
              )}
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </div>
  );
}
