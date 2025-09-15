import Link from "next/link";
import { RiPhoneFill, RiMailFill } from "react-icons/ri";

import { Socials } from "@/components/socials";

export const TopBar = () => {
  return (
    <section
      className="py-4 xl:h-16 xl:py-0 flex items-center bg-gradient-to-t from-[#ffc221] to-[#ffd76e]"
      id="home"
    >
      <nav className="container flex flex-col xl:flex-row items-center justify-between gap-6">
        <ul className="hidden xl:flex items-center gap-8">
          <li className="flex items-center gap-3">
            <div className="size-8 flex items-center justify-center bg-primary text-white">
              <RiPhoneFill />
            </div>
            <Link
              href="tel:+491234567890"
              className="font-medium text-primary hover:text-primary/70 transition-colors duration-300"
              rel="noreferrer noopener"
              aria-label="Call to phone"
            >
              +49 123 456 7890
            </Link>
          </li>
          <li className="flex items-center gap-3">
            <div className="size-8 flex items-center justify-center bg-primary text-white">
              <RiMailFill />
            </div>
            <Link
              href="mailto:info@urban.com"
              className="font-medium text-primary hover:text-primary/70 transition-colors duration-300"
              target="_blank"
              rel="noreferrer noopener"
              aria-label="Send email"
            >
              info@urban.com
            </Link>
          </li>
        </ul>
        <Socials
          containerStyles="flex items-center gap-8 mx-auto xl:mx-0"
          iconStyles="text-primary hover:text-primary/70 transition-colors duration-300"
        />
      </nav>
    </section>
  );
};
