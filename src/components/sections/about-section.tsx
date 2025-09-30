"use client";

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
      <div className="w-full relative flex flex-col gap-6 md:gap-10">
        <p
          className={titleStyle({
            color: "primary",
            size: "xs",
            className: "text-start",
          })}
        >
          Mission et Vision
        </p>
        <div>
          <p
            className={titleStyle({
              className: "text-start font-medium inline",
              size: "lg",
            })}
          >
            Miss Athlète Côte d&apos;Ivoire est née d&apos;une ambition simple : {" "}
          </p>
          <p
            className={titleStyle({
              className: "text-start font-medium inline",
              color: "secondary",
              size: "lg",
            })}
          >
            Bien au-delà d&apos;une simple compétition, c&apos;est une
            plateforme de visibilité dédiée à celles qui osent allier
            performance et élégance.
          </p>
        </div>
      </div>

      {/* Mission et Vision */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 justify-end">
        <div className="flex flex-col justify-end gap-6 md:gap-10 lg:col-span-2 ">
          <p className="text-start text-base md:text-lg">
            <span className="font-medium">Miss Athlète</span> est plus
            qu&apos;un concours de beauté, c&apos;est une plateforme unique qui
            valorise les femmes sportives ivoiriennes. Notre objectif est
            d&apos;offrir une plateforme de visibilité et de créer une nouvelle
            génération de leaders sportives. Nous souhaitons promouvoir le sport
            comme vecteur d&apos;émancipation et de valeurs positives.
          </p>
          <div className="flex justify-between">
            <Button size="lg" className="rounded-full">
              Devenir Miss Athlète
            </Button>
          </div>
        </div>
        <div className="relative h-[400px] place-items-center lg:col-span-1">
          <div className="bg-primary blur-md lg:blur-xl absolute inset-0">
            <Image
              width={300}
              height={300}
              src="https://cdn.cosmos.so/27b021a9-6458-4088-9735-a6b135edc096?format=jpeg"
              alt="About"
              className="object-contain h-full relative"
            />
          </div>
          <Image
            width={300}
            height={300}
            src="https://cdn.cosmos.so/27b021a9-6458-4088-9735-a6b135edc096?format=jpeg"
            alt="About"
            className="object-contain h-full relative"
          />
        </div>
      </div>
    </Motion>
  );
}
