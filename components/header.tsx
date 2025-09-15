"use client";

import { Link as ScrollLink } from "react-scroll";
import { RiArrowRightUpLine } from "react-icons/ri";

import { Logo } from "@/components/logo";
import { MobileNav } from "@/components/mobile-nav";

import { navLinks } from "@/lib/data";

export const Header = () => {
  return (
    <header className="py-4 bg-primary">
      <div className="container flex items-center justify-between">
        <Logo />
        <nav className="hidden xl:flex items-center gap-12">
          <ul className="flex">
            {navLinks.map(({ name, path }) => (
              <li
                key={name}
                className="text-white text-sm uppercase font-primary font-medium tracking-[1.2px] after:content-['/'] after:mx-4 last:after:content-none after:text-accent"
              >
                <ScrollLink
                  spy
                  smooth
                  to={path}
                  activeClass="text-accent"
                  className="cursor-pointer"
                >
                  {name}
                </ScrollLink>
              </li>
            ))}
          </ul>
          <button
            type="button"
            className="min-w-50 h-13.5 py-1.25 pl-2.5 pr-1.25 flex items-center justify-between group bg-white cursor-pointer"
          >
            <span className="flex-1 text-center tracking-[1.2px] font-primary font-bold text-primary text-sm uppercase">
              Get a quote
            </span>
            <div className="size-11 flex items-center justify-center bg-primary">
              <RiArrowRightUpLine
                size={20}
                className="text-white group-hover:rotate-45 transition-transform duration-300"
              />
            </div>
          </button>
        </nav>
        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};
