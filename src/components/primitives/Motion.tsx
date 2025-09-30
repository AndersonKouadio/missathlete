"use client";

import { motion, Variants, Target, Transition } from "framer-motion";
import React, { forwardRef, JSX, ReactNode } from "react";

// On autorise les props target.hidden et target.visible et transition
type AnimationParams = {
  target?: {
    hidden?: Target;
    visible?: Target;
  };
  transition?: Transition;
};

type VariantCreator = (params?: AnimationParams) => Variants;

interface MotionProps extends React.HTMLAttributes<HTMLElement> {
  variant?: keyof typeof variantCreators;
  children?: ReactNode;
  className?: string;
  animationParams?: AnimationParams;
  viewport?: { once: boolean; amount: number };
  tag?: keyof JSX.IntrinsicElements;
  trigger?: "inView" | "mount";

}

const Motion = forwardRef<HTMLElement, MotionProps>(
  (
    {
      variant = "fadeIn",
      children,
      className,
      animationParams = {},
      viewport = { once: true, amount: 0.5 },
      tag = "div",
      trigger = "inView",
      ...props
    },
    ref
  ) => {
    const createVariant = variantCreators[variant];
    const variants = createVariant(animationParams);

    const MotionComponent = motion[tag as keyof typeof motion] as any;

    const viewProps =
    trigger === "inView"
      ? { initial: "hidden", whileInView: "visible", viewport }
      : { initial: "hidden", animate: "visible" };

    return (
      <MotionComponent
        ref={ref}
        {...viewProps}
        variants={variants}
        className={className}
        {...props}
      >
        {children}
      </MotionComponent>
    );
  }
);

export default Motion;

// -------------------- //
// Variants creators
// -------------------- //

const variantCreators: Record<string, VariantCreator> = {
  fadeIn: ({
    target = {},
    transition = {},
  }: AnimationParams = {}): Variants => ({
    hidden: { opacity: 0, ...target.hidden },
    visible: { opacity: 1, ...target.visible, transition },
  }),

  verticalSlideIn: ({
    target = {},
    transition = { duration: 0.8, ease: "easeOut" },
  }: AnimationParams = {}): Variants => ({
    hidden: { y: 50, opacity: 0, ...target.hidden },
    visible: { y: 0, opacity: 1, ...target.visible, transition },
  }),

  horizontalSlideIn: ({
    target = {},
    transition = { duration: 0.8, ease: "easeOut" },
  }: AnimationParams = {}): Variants => ({
    hidden: { x: 50, opacity: 0, ...target.hidden },
    visible: { x: 0, opacity: 1, ...target.visible, transition },
  }),

  rotateIn: ({
    target = {},
    transition = { duration: 1, ease: "easeOut" },
  }: AnimationParams = {}): Variants => ({
    hidden: { rotate: -180, opacity: 0, ...target.hidden },
    visible: { rotate: 0, opacity: 1, ...target.visible, transition },
  }),
};
