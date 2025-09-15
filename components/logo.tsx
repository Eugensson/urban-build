"use client";

import Image from "next/image";
import { Link as ScrollLink } from "react-scroll";

export const Logo = () => {
  return (
    <ScrollLink spy smooth to="home" className="cursor-pointer">
      <Image
        src="/assets/logo.svg"
        alt="Urban Build Logo"
        width={230}
        height={48}
      />
    </ScrollLink>
  );
};
