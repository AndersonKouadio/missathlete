"use client";

import { Link } from "lucide-react";
import Image from "next/image";
import Motion from "../primitives/Motion";
import { titleStyle } from "../primitives/Title";
import { Button } from "../ui/button";

export function AboutSection() {
  return (
    <Motion
      animationParams={{
        target: {
          visible: {
            offset: 0.2,
          },
        },
      }}
      tag="section"
      id="about"
      className="w-full relative px-6 py-6 md:py-10 min-h-screen flex flex-col justify-between gap-6 md:gap-10"
    >
      {/* Intro */}
      <div>
        <p
          className={titleStyle({
            className: "text-start font-medium inline",
            size: "lg",
          })}
        >
          Miss Athlète Côte d&apos;Ivoire est née d&apos;une ambition simple :
        </p>
        <p
          className={titleStyle({
            className: "text-start font-medium inline",
            color: "secondary",
            size: "lg",
          })}
        >
          Bien au-delà d&apos;une simple compétition, c&apos;est une plateforme
          de visibilité dédiée à celles qui osent allier performance et
          élégance.
        </p>
      </div>

      {/* Mission et Vision */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 justify-end">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:col-span-2 gap-6 md:gap-10">
          {/* Mission et valeurs */}
          <div className="flex flex-col justify-end gap-4">
            <p
              className={titleStyle({
                color: "primary",
                size: "xs",
                className: "text-start",
              })}
            >
              Mission et valeurs
            </p>
            <p className="text-start text-base md:text-lg">
              <span className="font-medium">Miss Athlète</span> est plus
              qu&apos;un concours de beauté, c&apos;est une plateforme unique
              qui valorise les femmes sportives ivoiriennes. Notre objectif est
              d&apos;offrir une plateforme de visibilité et de créer une
              nouvelle génération de leaders sportives. Nous souhaitons
              promouvoir le sport comme vecteur d&apos;émancipation et de
              valeurs positives.
            </p>
            <div className="flex justify-between">
              <Link href="/become-athlete">
                <Button size="lg" className="rounded-full">
                  Participer
                </Button>
              </Link>
            </div>
          </div>

          {/* Objectifs */}
          <div className="flex flex-col justify-end gap-4">
            <p
              className={titleStyle({
                color: "primary",
                size: "xs",
                className: "text-start",
              })}
            >
              Objectifs
            </p>
            <ul className="list-decimal list-inside text-start md:text-lg">
              <li className="text-sm md:text-base">
                Valoriser les femmes sportives ivoiriennes
              </li>
              <li className="text-sm md:text-base">
                Offrir une plateforme de visibilité
              </li>
              <li className="text-sm md:text-base">
                Créer une nouvelle génération de leaders sportives
              </li>
            </ul>
          </div>
        </div>
        <div className="relative h-[400px] place-items-center lg:col-span-1">
          <Image
            width={300}
            height={300}
            src="/images/kragbe/kragbe_1.jpg"
            alt="About"
            className="object-contain h-full relative"
          />
        </div>
      </div>
    </Motion>
  );
}
