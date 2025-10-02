"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SectionHeader } from "@/components/section-header";
import Title from "../primitives/Title";

const faQitems = [
  {
    question: "Quels sont les critères de base pour candidater ?",
    answer:
      "Il faut être une femme de nationalité ivoirienne, âgée de 17 à 25 ans et pratiquer une activité sportive (amateur ou professionnelle). Une bonne condition physique et la présentation d'un projet personnel sont également requis.",
  },
  {
    question: "Quand et comment puis-je m'inscrire pour l'édition 2026 ?",
    answer:
      "Les inscriptions officielles débutent le 21 décembre 2025 et se clôturent le 19 janvier 2026 (23h59). Le lien de candidature sera disponible sur ce site durant cette période.",
  },
  {
    question:
      "Si je ne suis pas à Abidjan, où se déroulent les présélections ?",
    answer:
      "Les présélections sont organisées dans plusieurs communes d'Abidjan ainsi que dans les régions de l'intérieur, notamment à Bouaké et Yamoussoukro, en janvier et février 2026.",
  },
  {
    question: "En quoi consiste le Bootcamp national ?",
    answer:
      "C'est une phase intensive (1 à 2 semaines) où les 24 candidates retenues suivent un programme de coaching sportif, des ateliers de prise de parole et participent à des défis collectifs et des shootings promotionnels.",
  },
  {
    question: "Quels sont les objectifs principaux du concours ?",
    answer:
      "Miss Athlète vise à valoriser les femmes sportives ivoiriennes en créant une plateforme de visibilité. L'objectif est d'inspirer une nouvelle génération de leaders féminines qui allient performance, grâce et engagement.",
  },
];

export function FAQSection() {
  return (
    <section
      id="faq"
      className="flex flex-col items-center justify-center gap-10 pb-10 w-full relative"
    >
      <SectionHeader>
        <Title level={2}>
          Vous avez des questions ? Nous avons les réponses !
        </Title>
        <p className="text-muted-foreground text-center text-balance font-medium">
          Réponses aux questions fréquentes sur le concours
          <span className="font-semibold">Miss Athlète</span>. Pour toute autre
          question, n&apos;hésitez pas à nous contacter.
        </p>
      </SectionHeader>

      <div className="max-w-3xl w-full mx-auto px-10">
        <Accordion
          type="single"
          collapsible
          className="w-full border-b-0 grid gap-2"
        >
          {faQitems.map((faq, index) => (
            <AccordionItem
              key={index}
              value={index.toString()}
              className="border-0 grid gap-2"
            >
              <AccordionTrigger className="border bg-accent border-border rounded-lg px-4 py-3.5 cursor-pointer no-underline hover:no-underline data-[state=open]:ring data-[state=open]:ring-primary/20">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="p-3 border text-primary rounded-lg bg-accent">
                <p className="text-primary font-medium leading-relaxed">
                  {faq.answer}
                </p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
