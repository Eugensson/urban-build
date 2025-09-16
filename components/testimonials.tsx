import Image from "next/image";

import { Button } from "@/components/button";
import { Slider } from "@/components/slider";
import { Pretitle } from "@/components/pretitle";

export const Testimonials = () => {
  return (
    <section className="pt-16 xl:pt-32">
      <div className="container">
        <div className="relative flex flex-col xl:flex-row">
          <div className="flex-1 max-w-121 xl:pt-13.5 mb-12 xl:mb-0">
            <Pretitle text="Testimonials" />
            <h2 className="h2 mb-6 capitalize">
              Build on trust, proven by results
            </h2>
            <p className="mb-10 max-w-105 xl:text-lg">
              From homes to commercial spaces, our clients share their
              experiences of working with us. See how we&apos;ve helped them
              bring their dreams to life with expert craftsmanship.
            </p>
            <Button text="Work with us" />
          </div>
          <div className="flex-1 flex flex-col xl:flex-row xl:justify-end">
            <div className="relative hidden xl:flex xl:w-142.5 xl:h-145">
              <Image
                src="/assets/img/testimonials/img.jpg"
                alt=""
                fill
                quality={100}
                className="object-cover"
              />
            </div>
            <div className="xl:absolute xl:bottom-0 xl:right-40 relative max-w-max">
              <Image
                src="/assets/img/testimonials/quote.svg"
                width={54}
                height={36}
                alt="Quote icon"
                className="absolute z-20 -top-4 left-15"
              />
              <Slider />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
