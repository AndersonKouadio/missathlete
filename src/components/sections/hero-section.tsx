"use client";
import { PartyPopper } from "lucide-react";
import Link from "next/link";
import Motion from "../primitives/Motion";
import Title from "../primitives/Title";
import Image from "next/image";

export function HeroSection() {
  return (
    <Motion
      animationParams={{ transition: { delay: 0.3 } }}
      tag="section"
      id="hero"
      className="w-full relative p-6 h-[calc(100vh-10rem)]"
    >
      <div className="relative h-full flex items-center justify-center w-full px-6">
        <div className="relative z-10 max-w-3xl mx-auto h-full w-full flex flex-col gap-10 items-center justify-center">
          <p className="border border-border backdrop-blur-lg bg-gradient-to-bl from-primary-200/20 to-primary-600/20 text-white rounded-full text-sm h-8 px-3 flex items-center gap-2">
            <PartyPopper className="size-4" />
            <span className="text-xs font-medium tracking-wide text-balance md:text-sm">
              L&apos;évènement sportif féminin
            </span>
          </p>
          <div className="flex flex-col items-center justify-center gap-5">
            <Title level={1} color="light">
              Miss Athlète Côte d&apos;Ivoire
            </Title>
            <Title size="xs" level={2} color="light">
              Quand le sport rencontre l&apos;élégance.
            </Title>
            <p className="text-base md:text-lg text-center text-white/80 font-medium text-balance leading-relaxed tracking-tight">
              Miss Athlète est l&apos;événement qui célèbre la force, la grâce
              et l&apos;ambition des femmes sportives ivoiriennes. Une
              plateforme unique pour inspirer une nouvelle génération de
              leaders.
            </p>
          </div>
          <div className="flex items-center gap-2.5 flex-wrap justify-center">
            <Link
              href={"#"}
              className="h-10 flex items-center justify-center w-fit px-5 text-sm font-normal tracking-wide text-primary rounded-full transition-all ease-out active:scale-95 bg-white dark:bg-background border border-[#E5E7EB] dark:border-[#27272A] hover:bg-white/80 dark:hover:bg-background/80"
            >
              Découvrir l&apos;événement
            </Link>
          </div>
        </div>
      </div>
      <div className="absolute z-5 inset-0">
        <div className="relative aspect-video size-full shadow-xl rounded-2xl overflow-hidden">
          <div className="absolute inset-0 z-10 bg-gradient-to-b from-primary-500 to-primary-600 mix-blend-multiply"></div>
          <Image
            src="https://cdn.cosmos.so/58e80c91-9e36-4a93-a735-ac506927c99d?format=jpeg"
            alt="Hero Image"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </Motion>
  );
}
