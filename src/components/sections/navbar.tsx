"use client";

import { Icons } from "@/components/icons";
import { NavMenu } from "@/components/nav-menu";
import { cn } from "@/lib/utils";
import { Facebook, Instagram, Menu, Twitter, X } from "lucide-react";
import { AnimatePresence, motion, useScroll } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import Motion from "../primitives/Motion";
import { Button } from "../ui/button";

// Animation variants
const overlayVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 },
};

const drawerVariants = {
  hidden: { opacity: 0, y: 100 },
  visible: {
    opacity: 1,
    y: 0,
    rotate: 0,
    transition: {
      type: "spring" as const,
      damping: 15,
      stiffness: 200,
      staggerChildren: 0.03,
    },
  },
  exit: {
    opacity: 0,
    y: 100,
    transition: { duration: 0.1 },
  },
};

const drawerMenuContainerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const drawerMenuVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const links = [
  { id: 1, name: "Accueil", href: "#hero" },
  { id: 2, name: "À propos", href: "#about" },
  { id: 3, name: "L'Événement", href: "#event" },
  { id: 5, name: "Partenaires", href: "#partners" },
  { id: 4, name: "Les Athlètes", href: "#athletes" },
  { id: 6, name: "Contact", href: "#contact" },
];

export function Navbar() {
  const { scrollY } = useScroll();
  const [hasScrolled, setHasScrolled] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      const sections = links.map((item) => item.href.substring(1));

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const unsubscribe = scrollY.on("change", (latest) => {
      setHasScrolled(latest > 10);
    });
    return unsubscribe;
  }, [scrollY]);

  const toggleDrawer = () => setIsDrawerOpen((prev) => !prev);
  const handleOverlayClick = () => setIsDrawerOpen(false);

  return (
    <>
      <Motion
        trigger="mount"
        animationParams={{
          target: {
            hidden: {
              y: -100,
            },
          },
          transition: {
            ease: [0.25, 0.1, 0.25, 1],
            delay: 0.2,
          },
        }}
        tag="div"
        variant="verticalSlideIn"
        className="flex justify-center items-center gap-4 p-2 mb-2 backdrop-blur-lg bg-secondary"
      >
        <a
          href="https://www.facebook.com/"
          className="flex items-center gap-1 text-primary-foreground"
        >
          <Facebook className="size-5" />
          <span className="text-sm font-medium">Facebook</span>
        </a>
        <a
          href="https://www.twitter.com/"
          className="flex items-center gap-1 text-primary-foreground"
        >
          <Twitter className="size-5" />
          <span className="text-sm font-medium">Twitter</span>
        </a>
        <a
          href="https://www.instagram.com/"
          className="flex items-center gap-1 text-primary-foreground"
        >
          <Instagram className="size-5" />
          <span className="text-sm font-medium">Instagram</span>
        </a>
      </Motion>

      <header
        className={cn(
          "sticky z-50 flex justify-center transition-all duration-300 md:mx-0",
          hasScrolled ? "top-6" : "top-4"
        )}
      >
        <Motion
          trigger="mount"
          animationParams={{
            target: {
              hidden: {
                y: -120,
              },
            },
            transition: {
              ease: [0.25, 0.1, 0.25, 1],
            },
          }}
          tag="div"
          variant="verticalSlideIn"
          className="w-[calc(100%-4rem)] md:w-auto"
        >
          <div
            className={cn(
              "mx-auto w-full max-w-7xl rounded-2xl transition-all duration-300 xl:px-0",
              hasScrolled
                ? "px-2 border border-border backdrop-blur-lg bg-background/75"
                : "shadow-none px-7"
            )}
          >
            <div className="flex w-full h-[70px] items-center justify-between p-4">
              <Link href="/">
                <Icons.logo className="size-28 md:size-44" />
              </Link>

              <NavMenu links={links} />

              <div className="flex flex-row items-center gap-1 md:gap-3 shrink-0">
                <div className="flex items-center space-x-6">
                  <Button className="rounded-full hidden md:block" size="lg">
                    Prendre RDV
                  </Button>
                </div>
                <button
                  className="md:hidden border border-border size-8 rounded-md cursor-pointer flex items-center justify-center"
                  onClick={toggleDrawer}
                >
                  {isDrawerOpen ? (
                    <X className="size-5" />
                  ) : (
                    <Menu className="size-5" />
                  )}
                </button>
              </div>
            </div>
          </div>
        </Motion>

        {/* Mobile Drawer */}
        <AnimatePresence>
          {isDrawerOpen && (
            <>
              <motion.div
                className="fixed inset-0 bg-black/50 backdrop-blur-sm"
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={overlayVariants}
                transition={{ duration: 0.2 }}
                onClick={handleOverlayClick}
              />

              <motion.div
                className="fixed inset-x-0 w-[95%] mx-auto bottom-3 bg-background border border-border p-4 rounded-xl shadow-lg"
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={drawerVariants}
              >
                {/* Mobile menu content */}
                <div className="flex flex-col gap-4">
                  <div className="flex items-center justify-between">
                    <Link href="/">
                      <Icons.logo className="size-28 md:size-44" />
                    </Link>
                    <button
                      onClick={toggleDrawer}
                      className="border border-border rounded-md p-1 cursor-pointer"
                    >
                      <X className="size-5" />
                    </button>
                  </div>

                  <motion.ul
                    className="flex flex-col text-sm mb-4 border border-border rounded-md"
                    variants={drawerMenuContainerVariants}
                  >
                    <AnimatePresence>
                      {links.map((item) => (
                        <motion.li
                          key={item.id}
                          className="p-2.5 border-b border-border last:border-b-0"
                          variants={drawerMenuVariants}
                        >
                          <a
                            href={item.href}
                            onClick={(e) => {
                              e.preventDefault();
                              const element = document.getElementById(
                                item.href.substring(1)
                              );
                              element?.scrollIntoView({ behavior: "smooth" });
                              setIsDrawerOpen(false);
                            }}
                            className={`underline-offset-4 hover:text-primary/80 transition-colors ${
                              activeSection === item.href.substring(1)
                                ? "text-primary"
                                : "text-primary-foreground/60 hover:text-primary-foreground"
                            }`}
                          >
                            {item.name}
                          </a>
                        </motion.li>
                      ))}
                    </AnimatePresence>
                  </motion.ul>

                  {/* Action buttons */}
                  <div className="flex flex-col gap-2">
                    <Button className="w-full rounded-full" size="lg">
                      Prendre RDV
                    </Button>
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
