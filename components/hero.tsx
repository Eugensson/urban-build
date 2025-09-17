"use client";

import { motion } from "framer-motion";

import { Button } from "@/components/button";

import { fadeIn } from "@/lib/variants";

export const Hero = () => {
  return (
    <section className="relative h-[70vh] bg-hero bg-no-repeat bg-cover bg-center">
      <div className="absolute inset-0 z-10 bg-gradient-to-l from-black/0 via-black/50 to-black/70" />
      <div className="container h-full flex items-center">
        <div className="z-20 max-w-152 mx-auto xl:mx-0 flex flex-col items-center xl:items-start text-center xl:text-left text-white">
          <motion.h1
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.8 }}
            className="h1 mb-4"
          >
            <span className="text-accent">Building</span> robust lasting
            solutions
          </motion.h1>
          <motion.p
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.8 }}
            className="mb-9 xl:text-lg"
          >
            From the first sketch to the final build, we craft solutions
            designed to deliver lasting strength, unmatched quality, and the
            confidence your projects deserve.
          </motion.p>
          <motion.div
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.8 }}
          >
            <Button text="See our work" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
