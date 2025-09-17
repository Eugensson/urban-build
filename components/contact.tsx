"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { RiChat1Line, RiMapPin2Line, RiSmartphoneLine } from "react-icons/ri";

import { Socials } from "@/components/socials";
import { ContactForm } from "@/components/contact-form";

import { fadeIn } from "@/lib/variants";

export const Contact = () => {
  return (
    <section className="pt-16 xl:pt-32" id="contact">
      <motion.div
        className="container"
        variants={fadeIn("up", 0.1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.2 }}
      >
        <div className="p-4 xl:px-22.5 xl:py-9 w-full xl:h-182.5 shadow-custom border-t-4 border-accent">
          <div className="h-full flex flex-col xl:flex-row gap-10 xl:gap-22.5">
            <div className="w-full h-160 xl:max-w-100 xl:pr-17.5 xl:border-r xl:border-border/40">
              <h3 className="mb-6 text-[26px] font-primary font-bold text-primary capitalize">
                Contuct us
              </h3>
              <p className="mb-9">
                Have questions about our construction services? Our team
                provides tailored solutions for residential and commercial
                projects.
              </p>
              <ul className="mb-16 flex flex-col gap-10">
                <li className="flex items-start gap-5">
                  <RiChat1Line size={28} className="text-accent" />
                  <div>
                    <h4 className="mb-2 text-[22px] font-semibold font-primary text-primary leading-none">
                      Chat with us
                    </h4>
                    <p className="mb-2">Our friendly team is here to help.</p>
                    <Link
                      href="mailto:info@urban.com"
                      className="font-semibold text-primary hover:text-primary/70 transition-colors duration-300"
                      target="_blank"
                      rel="noreferrer noopener"
                      aria-label="Send email"
                    >
                      info@urban.com
                    </Link>
                  </div>
                </li>
                <li className="flex items-start gap-5">
                  <RiMapPin2Line size={28} className="text-accent" />
                  <div>
                    <h4 className="mb-2 text-[22px] font-semibold font-primary text-primary leading-none">
                      Office
                    </h4>
                    <p className="mb-2">Come and say hello at our office.</p>
                    <address className="not-italic font-semibold text-primary">
                      <p>Almstadtstrasse 7, 10119,</p>
                      <p>Berlin, Germany</p>
                    </address>
                  </div>
                </li>
                <li className="flex items-start gap-5">
                  <RiSmartphoneLine size={28} className="text-accent" />
                  <div>
                    <h4 className="mb-2 text-[22px] font-semibold font-primary text-primary leading-none">
                      Phone
                    </h4>
                    <p className="mb-2">Mon-Sat: from 9:00 am to 7:00 pm.</p>
                    <Link
                      href="tel:+491234567890"
                      className="font-semibold text-primary hover:text-primary/70 transition-colors duration-300"
                      rel="noreferrer noopener"
                      aria-label="Call to phone"
                    >
                      +49 123 456 7890
                    </Link>
                  </div>
                </li>
              </ul>
              <Socials
                containerStyles="flex items-center justify-center gap-10"
                iconStyles="text-primary"
              />
            </div>
            <div className="flex-1">
              <h2 className="h2 mb-3 text-primary capitalize">
                Request a quote
              </h2>
              <p className="mb-9 xl:text-lg">
                Get a customized quote for your construction project. Whether
                it&apos;s a residential renovation or a commercial build, we
                provide expert planning, transparent pricing, and high-quality
                results.
              </p>
              <ContactForm />
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
