"use client";

import Image from "next/image";
import { Link as ScrollLink } from "react-scroll";

import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
}

export const Logo = ({ className }: LogoProps) => {
  return (
    <ScrollLink
      spy
      smooth
      to="home"
      className={cn("cursor-pointer", className)}
    >
      <Image
        src="/assets/logo.svg"
        alt="Urban Build Logo"
        width={230}
        height={48}
      />
    </ScrollLink>
  );
};
