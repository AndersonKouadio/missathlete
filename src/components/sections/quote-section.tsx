"use client";

import { siteConfig } from "@/lib/config";
import Image from "next/image";
import Motion from "../primitives/Motion";

export function QuoteSection() {
  const { quoteSection } = siteConfig;

  return (
    <Motion
      id="quote"
      tag="section"
      animationParams={{ transition: { delay: 0.3 } }}
      className="flex flex-col items-center justify-center gap-8 w-full p-14 bg-accent z-20"
    >
      <blockquote className="max-w-3xl text-left px-4">
        <p className="text-lg md:text-2xl leading-relaxed tracking-tighter font-medium mb-6">
          Miss Athlète Côte d&apos;Ivoire n&apos;est pas seulement un concours de beauté,
          c&apos;est une plateforme unique qui célèbre la force, la grâce et
          l&apos;ambition des femmes sportives ivoiriennes.
        </p>

        <div className="flex gap-4">
          <div className="size-10 relative rounded-full bg-primary border border-border">
            <Image
              src={"/images/kragbe/avatar.jpeg"}
              alt={quoteSection.author.name}
              fill
              className="size-full rounded-full object-contain"
            />
          </div>
          <div className="text-left">
            <cite className="text-lg font-medium text-primary not-italic">
              Cynthia KRAGBE
            </cite>
            <p className="text-sm">Taekwondoïste ivoirienne</p>
          </div>
        </div>
      </blockquote>
    </Motion>
  );
}
