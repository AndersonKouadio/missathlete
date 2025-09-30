"use client";
import Image from "next/image";
import Link from "next/link";
import Motion from "../primitives/Motion";
import Title from "../primitives/Title";

const partnerLogos = [
  {
    id: 1,
    name: "La 3",
    href: "#",
    logo: (
      <Image
        fill
        className="object-contain scale-125"
        src="/images/partners/la3.png"
        alt="La 3"
      />
    ),
  },
  {
    id: 2,
    name: "livetv",
    href: "https://www.lifetv.ci",
    logo: (
      <Image
        fill
        className="object-contain scale-75"
        src="/images/partners/livetv.png"
        alt="livetv"
      />
    ),
  },
  {
    id: 3,
    name: "NCI",
    href: "https://www.nci.ci",
    logo: (
      <Image
        fill
        className="object-contain scale-125"
        src="/images/partners/nci.png"
        alt="nci"
      />
    ),
  },
  {
    id: 4,
    name: "Fréquence 2",
    href: "https://rtiplay.ci/frequence2/direct",
    logo: (
      <Image
        fill
        className="object-contain scale-120"
        src="/images/partners/frequence2.png"
        alt="frequence2"
      />
    ),
  },
  {
    id: 5,
    name: "Hit Radio",
    href: "#",
    logo: (
      <Image
        fill
        className="object-contain"
        src="/images/partners/hitradio.png"
        alt="hitradio"
      />
    ),
  },
  {
    id: 6,
    name: "Ivoire Tv Music",
    href: "#",
    logo: (
      <Image
        fill
        className="object-contain"
        src="/images/partners/ivoiretvmusic.png"
        alt="hit"
      />
    ),
  },
];

export function PartnersShowcase() {
  return (
    <Motion
      tag="section"
      id="partners"
      className="flex flex-col items-center justify-center gap-10 py-10 pt-20 w-full relative px-6"
    >
      <Title>Nos Partenaires</Title>
      <p className="text-muted-foreground font-medium text-center max-w-xl">
        Nous sommes convaincus que grâce à des partenaires engagés comme vous,
        cette aventure deviendra une référence sportive et culturelle en Côte
        d&apos;Ivoire. Rejoignez-nous pour écrire ensemble cette histoire.
      </p>
      <div className="grid w-full max-w-7xl grid-cols-2 md:grid-cols-3 overflow-hidden border-y border-border items-center justify-center z-20">
        {partnerLogos.map((logo) => (
          <Link
            href={logo.href}
            className="group w-full h-28 flex items-center justify-center relative p-4 before:absolute before:-left-1 before:top-0 before:z-10 before:h-screen before:w-px before:bg-border before:content-[''] after:absolute after:-top-1 after:left-0 after:z-10 after:h-px after:w-screen after:bg-border after:content-['']"
            key={logo.id}
          >
            <div className="relative transition-all duration-200 [cubic-bezier(0.165, 0.84, 0.44, 1)] translate-y-0 group-hover:-translate-y-4 duration-300 flex items-center justify-center w-full h-full">
              {logo.logo}
            </div>
          </Link>
        ))}
      </div>
    </Motion>
  );
}
