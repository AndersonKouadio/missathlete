"use client";
import Image from "next/image";
import Link from "next/link";
import {
  Mail,
  Phone,
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
} from "lucide-react";

export function CTASection() {
  return (
    <section
      id="contact"
      className="flex flex-col items-center justify-center w-full px-6 py-12"
    >
      <div className="w-full max-w-screen-xl">
        <div className="min-h-[450px] md:min-h-[500px] overflow-hidden shadow-2xl w-full border border-pink-200 rounded-3xl bg-gradient-to-br from-pink-500 to-pink-600 relative">
          <Image
            src="/agent-cta-background.png"
            alt="Contact Background"
            className="absolute inset-0 w-full h-full object-cover object-right md:object-center opacity-20"
            fill
            priority
          />

          <div className="inset-0 flex flex-col items-center justify-center px-6 md:px-12 py-12">
            <div className="max-w-3xl w-full text-center space-y-8">
              {/* Titre */}
              <h2 className="text-white text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
                Restons Connectés
              </h2>

              {/* Texte descriptif */}
              <p className="text-white/95 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                Contactez l&apos;initiatrice du projet,{" "}
                <span className="font-bold">Cynthia Kragbé</span>, pour toute
                question de partenariat, de média ou d&apos;information
                générale.
              </p>

              {/* Coordonnées */}
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 md:p-8 space-y-4 border border-white/20">
                <h3 className="text-white text-xl md:text-2xl font-bold mb-6">
                  Coordonnées
                </h3>

                <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
                  {/* Email */}
                  <Link
                    href="mailto:cynthiakragbe@yahoo.com"
                    className="bg-white text-pink-600 font-semibold text-sm md:text-base px-6 py-3 rounded-full flex items-center gap-3 hover:bg-pink-50 transition-all shadow-lg hover:shadow-xl transform hover:scale-105 w-full md:w-auto justify-center"
                  >
                    <Mail size={20} />
                    cynthiakragbe@yahoo.com
                  </Link>

                  {/* Téléphone */}
                  <Link
                    href="https://wa.me/2250749064440"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white text-pink-600 font-semibold text-sm md:text-base px-6 py-3 rounded-full flex items-center gap-3 hover:bg-pink-50 transition-all shadow-lg hover:shadow-xl transform hover:scale-105 w-full md:w-auto justify-center"
                  >
                    <Phone size={20} />
                    +225 07 49 06 44 40
                  </Link>
                </div>
              </div>

              {/* Réseaux Sociaux */}
              <div className="space-y-4">
                <h4 className="text-white text-lg md:text-xl font-semibold">
                  Suivez-nous
                </h4>
                <div className="flex gap-4 justify-center flex-wrap">
                  <Link
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 md:w-14 md:h-14 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white hover:text-pink-600 text-white transition-all shadow-lg hover:shadow-xl transform hover:scale-110 border border-white/30"
                    aria-label="Facebook"
                  >
                    <Facebook size={24} />
                  </Link>
                  <Link
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 md:w-14 md:h-14 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white hover:text-pink-600 text-white transition-all shadow-lg hover:shadow-xl transform hover:scale-110 border border-white/30"
                    aria-label="Instagram"
                  >
                    <Instagram size={24} />
                  </Link>
                  <Link
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 md:w-14 md:h-14 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white hover:text-pink-600 text-white transition-all shadow-lg hover:shadow-xl transform hover:scale-110 border border-white/30"
                    aria-label="TikTok"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-6 h-6"
                    >
                      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                    </svg>
                  </Link>
                  <Link
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 md:w-14 md:h-14 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white hover:text-pink-600 text-white transition-all shadow-lg hover:shadow-xl transform hover:scale-110 border border-white/30"
                    aria-label="YouTube"
                  >
                    <Youtube size={24} />
                  </Link>
                  <Link
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 md:w-14 md:h-14 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white hover:text-pink-600 text-white transition-all shadow-lg hover:shadow-xl transform hover:scale-110 border border-white/30"
                    aria-label="LinkedIn"
                  >
                    <Linkedin size={24} />
                  </Link>
                </div>
              </div>

              <p className="text-white/90 text-sm md:text-base pt-4">
                Nous sommes impatients de collaborer avec vous ! 💫
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
