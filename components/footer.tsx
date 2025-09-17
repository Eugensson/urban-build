"use client";

import {
  RiMailFill,
  RiPhoneFill,
  RiArrowRightLine,
  RiMapPin2Fill,
} from "react-icons/ri";
import Link from "next/link";
import { motion } from "framer-motion";

import { Logo } from "@/components/logo";
import { Socials } from "@/components/socials";

import { fadeIn } from "@/lib/variants";

export const Footer = () => {
  return (
    <motion.footer
      variants={fadeIn("up", 0.1)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.1 }}
      className="mt-16 xl:mt-32 bg-primary"
    >
      <div className="container">
        <ul className="py-16 xl:py-25 flex flex-col xl:flex-row gap-15 xl:gap-7.5">
          <li className="flex-1">
            <Logo className="block mb-6" />
            <p className="max-w-67.5 text-border">
              UrbanBuild provides trusted construction and renovation services,
              turning residential and commercial ideas into lasting results.
            </p>
          </li>
          <li className="flex-1 text-border">
            <h4 className="mb-10 h4 text-white">Contact</h4>
            <ul className="flex flex-col gap-6">
              <li className="flex items-center gap-4">
                <RiMapPin2Fill size={20} className="text-accent" />
                <address className="not-italic">
                  Almstadtstrasse 7, Berlin, Germany
                </address>
              </li>
              <li className="flex items-center gap-4">
                <RiPhoneFill size={20} className="text-accent" />
                <Link
                  href="tel:+491234567890"
                  className="hover:text-white transition-colors duration-300"
                  rel="noreferrer noopener"
                  aria-label="Call to phone"
                >
                  +49 123 456 7890
                </Link>
              </li>
              <li className="flex items-center gap-4">
                <RiMailFill size={20} className="text-accent" />
                <Link
                  href="mailto:info@urban.com"
                  className="hover:text-white transition-colors duration-300"
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label="Send email"
                >
                  info@urban.com
                </Link>
              </li>
            </ul>
          </li>
          <li className="flex-1 text-border">
            <h4 className="mb-10 h4 text-white">Newsletter</h4>
            <p className="mb-9">
              Subscribe to our newsletter for expert building tips, project
              updates, and insights into modern construction solutions.
            </p>
            <div className="relative max-w-92.5">
              <input
                type="text"
                placeholder="Your email address"
                className="w-full h-16 pl-7 flex items-center rounded-none outline-none bg-[#222427]"
              />
              <button
                type="button"
                className="absolute top-2 right-2 bottom-2 size-12 flex items-center justify-center bg-accent text-primary"
              >
                <RiArrowRightLine size={20} />
              </button>
            </div>
          </li>
        </ul>
      </div>
      <div className="container xl:px-0 py-12 flex flex-col xl:flex-row items-center justify-between gap-6 border-t border-border/10">
        <p className="text-border">
          Copyright &copy; 2025 UrbanBuild. All rights reserved
        </p>
        <Socials
          containerStyles="flex items-center gap-6 text-white"
          iconStyles="hover:text-accent transition-colors duration-300"
        />
      </div>
    </motion.footer>
  );
};
