"use client";

import { useState } from "react";
import { RiMenu3Fill } from "react-icons/ri";
import { Link as ScrollLink } from "react-scroll";

import {
  Sheet,
  SheetTitle,
  SheetHeader,
  SheetTrigger,
  SheetContent,
  SheetDescription,
} from "@/components/ui/sheet";
import { Logo } from "@/components/logo";
import { Socials } from "@/components/socials";

import { navLinks } from "@/lib/data";

export const MobileNav = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger
        className="flex items-center justify-center text-3xl text-white"
        onClick={() => setIsOpen(true)}
      >
        <RiMenu3Fill />
      </SheetTrigger>
      <SheetContent className="bg-primary text-white border-none">
        <nav className="pt-16 pb-8 h-full flex flex-col items-center justify-between">
          <SheetHeader>
            <SheetTitle>
              <Logo />
            </SheetTitle>
            <SheetDescription className="sr-only">
              Mobile navigation menu
            </SheetDescription>
          </SheetHeader>
          <ul className="w-full flex flex-col items-center justify-center gap-10">
            {navLinks.map(({ name, path }) => (
              <li
                key={name}
                className="text-white uppercase font-primary font-medium tracking-[1.2px]"
              >
                <ScrollLink
                  spy
                  smooth
                  to={path}
                  activeClass="text-accent"
                  className="cursor-pointer"
                  duration={500}
                  onClick={() => setIsOpen(false)}
                >
                  {name}
                </ScrollLink>
              </li>
            ))}
          </ul>
          <Socials containerStyles="flex items-center gap-6 text-white" />
        </nav>
      </SheetContent>
    </Sheet>
  );
};
