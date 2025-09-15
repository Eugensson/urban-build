"use client";

import { useRef } from "react";
import CountUp from "react-countup";
import { useInView } from "framer-motion";

import { statList } from "@/lib/data";

interface StatItemProps {
  endCountNum: number;
  endCountText: string;
  text: string;
  index: number;
  inView: boolean;
}

const StatItem = ({
  endCountNum,
  endCountText,
  text,
  index,
  inView,
}: StatItemProps) => {
  return (
    <li className="w-full">
      <div className="text-4xl sm:text-5xl font-semibold">
        <strong aria-label={`${endCountNum}${endCountText}`}>
          {inView && (
            <CountUp
              start={0}
              end={endCountNum}
              delay={0.3 * index}
              duration={3}
            />
          )}
        </strong>
        <span>{endCountText}</span>
      </div>
      <p className="mt-2 text-sm sm:text-base opacity-90">{text}</p>
    </li>
  );
};

export const Stats = () => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: false });

  return (
    <section ref={ref} className="mt-16 xl:mt-32 py-10 w-full bg-primary">
      <div className="container h-full">
        <ul className="h-full flex flex-col xl:flex-row items-center justify-between gap-12 text-center xl:text-left text-white">
          {statList.map((stat, index) => (
            <StatItem key={index} {...stat} index={index} inView={inView} />
          ))}
        </ul>
      </div>
    </section>
  );
};
