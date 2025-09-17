"use client";

import { motion } from "framer-motion";

import { FaqItem } from "@/components/faq-item";
import { Pretitle } from "@/components/pretitle";

import { fadeIn } from "@/lib/variants";
import { faqItemsData } from "@/lib/data";

export const faqItemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: index * 0.1, duration: 0.3 },
  }),
};

export const Faq = () => {
  return (
    <section className="pt-16 xl:pt-32">
      <div className="container">
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.2 }}
          className="text-center max-w-135 mx-auto xl:mb-20"
        >
          <Pretitle text="F.A.Q." centered />
          <h2 className="h2 mb-3 text-primary capitalize">
            Got questions? We&apos;ve got the answers.
          </h2>
          <p className="mb-11 max-w-120 mx-auto xl:text-lg">
            From project planning to the finishing touches, we&apos;ve compiled
            the most common questions to help you make smart and confident
            decisions about your construction project.
          </p>
        </motion.div>
        <ul className="w-full flex flex-col">
          {faqItemsData.map((item, index) => (
            <motion.li
              key={index}
              variants={faqItemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.8 }}
              custom={index}
            >
              <FaqItem question={item.question} answer={item.answer} />
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
};
