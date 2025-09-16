"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import { SliderButtons } from "@/components/slider-buttons";

import { testimonialData } from "@/lib/data";

export const Slider = () => {
  return (
    <Swiper className="w-full max-w-157.5 h-50 bg-white shadow-custom">
      {testimonialData.map(({ id, img, name, text }) => (
        <SwiperSlide key={id}>
          <div className="h-full px-12 md:pl-15 flex items-center gap-9">
            <div className="relative hidden xl:flex size-22.5">
              <Image
                src={img}
                fill
                alt={`${name} avatar`}
                className="object-contain"
                quality={75}
              />
            </div>
            <div className="xl:max-w-85 flex-1 flex flex-col gap-2">
              <p>{text}</p>
              <p className="font-primary font-semibold text-primary">{name}</p>
            </div>
          </div>
        </SwiperSlide>
      ))}
      <SliderButtons />
    </Swiper>
  );
};
