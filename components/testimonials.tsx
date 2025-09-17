"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import { Button } from "@/components/button";
import { Slider } from "@/components/slider";
import { Pretitle } from "@/components/pretitle";

import { fadeIn } from "@/lib/variants";

export const Testimonials = () => {
  return (
    <section className="pt-16 xl:pt-32">
      <div className="container">
        <div className="relative flex flex-col xl:flex-row">
          <motion.div
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.2 }}
            className="flex-1 max-w-121 xl:pt-13.5 mb-12 xl:mb-0"
          >
            <Pretitle text="Testimonials" />
            <h2 className="h2 mb-6 text-primary capitalize">
              Build on trust, proven by results
            </h2>
            <p className="mb-10 max-w-105 xl:text-lg">
              From homes to commercial spaces, our clients share their
              experiences of working with us. See how we&apos;ve helped them
              bring their dreams to life with expert craftsmanship.
            </p>
            <Button text="Work with us" />
          </motion.div>
          <motion.div
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.2 }}
            className="flex-1 flex flex-col xl:flex-row xl:justify-end"
          >
            <div className="relative hidden xl:flex xl:w-142.5 xl:h-145">
              <Image
                src="/assets/img/testimonials/img.jpg"
                alt=""
                fill
                quality={100}
                className="object-cover"
              />
            </div>
            <motion.div
              variants={fadeIn("left", 0.1)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.8 }}
              className="xl:absolute xl:bottom-0 xl:right-40 relative max-w-max"
            >
              <Image
                src="/assets/img/testimonials/quote.svg"
                width={54}
                height={36}
                alt="Quote icon"
                className="absolute z-20 -top-4 left-15"
              />
              <Slider />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
