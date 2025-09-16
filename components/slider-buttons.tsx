"use client";

import { useSwiper } from "swiper/react";
import { RiArrowLeftLine, RiArrowRightLine } from "react-icons/ri";

export const SliderButtons = () => {
  const swiper = useSwiper();

  return (
    <div className="absolute bottom-2 right-2 z-10 flex gap-1 w-max">
      <button
        type="button"
        onClick={() => swiper.slidePrev()}
        aria-label="Previous slide"
        title="Prev"
        className="size-12 flex items-center justify-center bg-accent hover:bg-accent/80 text-primary transition-colors duration-300 cursor-pointer"
      >
        <RiArrowLeftLine size={22} />
      </button>
      <button
        type="button"
        onClick={() => swiper.slideNext()}
        aria-label="Next slide"
        title="Next"
        className="size-12 flex items-center justify-center bg-accent hover:bg-accent/80 text-primary transition-colors duration-300 cursor-pointer"
      >
        <RiArrowRightLine size={22} />
      </button>
    </div>
  );
};
