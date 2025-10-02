"use client";
import { ChevronLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Motion from "../primitives/Motion";
import Title from "../primitives/Title";
import { Button } from "../ui/button";

export function SubHeroSection() {
  return (
    <>
      <Motion
        animationParams={{ transition: { delay: 0.3 } }}
        className="w-full relative flex items-center p-6"
      >
        <Link href="/">
          <Button
            size={"lg"}
            variant={"outline"}
            className="rounded-full cursor-pointer"
          >
            <ChevronLeft />
            <span>Retour</span>
          </Button>
        </Link>
      </Motion>
      <Motion
        tag="section"
        id="hero"
        className="w-full relative p-6 h-48 md:h-80"
      >
        <div className="relative max-w-4xl mx-auto z-10 h-full px-6">
          <div className="flex flex-col h-full items-center justify-center gap-5">
            <Title level={1} color="light">
              Devenez Miss Athlète 2026 !
            </Title>
            <p className="text-xs md:text-sm text-white text-center"> 
              L&apos;aventure commence ici. Si vous êtes une femme sportive
              ivoirienne, âgée de 17 à 25 ans et prête à allier force, grâce et
              engagement, nous vous invitons à postuler pour l&apos;édition 2026.
            </p>
          </div>
        </div>
        <div className="absolute z-5 inset-0">
          <div className="relative aspect-video size-full shadow-xl rounded-2xl overflow-hidden">
            <div className="absolute inset-0 z-10 bg-gradient-to-b from-primary-500 to-primary-600 mix-blend-multiply"></div>
            <Image
              src="https://cdn.cosmos.so/e95a8425-e5f7-4701-854b-03b882d5bcc3?format=jpeg"
              alt="Hero Image"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </Motion>
    </>
  );
}
