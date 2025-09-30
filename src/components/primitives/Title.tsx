import React, { JSX } from "react";
import { tv } from "tailwind-variants";

export const titleStyle = tv({
  base: "font-medium tracking-tighter text-balance text-center",
  variants: {
    color: {
      primary: "from-primary-500 to-primary-600",
      secondary: "from-secondary to-primary-600",
      light: "from-white to-[#BBBBBB]",
    },
    size: {
      base: "text-base",
      xs: "text-xl md:text-2xl lg:text-3xl xl:text-4xl",
      sm: "text-2xl md:text-3xl lg:text-4xl xl:text-5xl",
      md: "text-3xl md:text-4xl lg:text-5xl xl:text-6xl",
      lg: "text-3xl md:text-5xl lg:text-6xl xl:text-7xl",
    },
    fullWidth: {
      true: "w-full block",
    },
  },
  defaultVariants: {
    size: "md",
  },
  compoundVariants: [
    {
      color: ["primary", "secondary", "light"],
      class: "bg-clip-text text-transparent bg-gradient-to-b",
    },
  ],
});

interface TitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  color?: keyof typeof titleStyle.variants.color;
  size?: keyof typeof titleStyle.variants.size;
  fullWidth?: boolean;
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  children?: React.ReactNode;
}

export default function Title({
  color,
  size,
  fullWidth,
  children,
  className,
  level = 1,
  ...props
}: TitleProps) {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;

  return React.createElement(
    Tag,
    {
      className: titleStyle({ color, size, fullWidth, className }),
      ...props,
    },
    children
  );
}
