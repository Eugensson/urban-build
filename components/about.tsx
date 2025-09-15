import Image from "next/image";

import { Button } from "@/components/button";
import { Pretitle } from "@/components/pretitle";

export const About = () => {
  return (
    <section className="pt-16 xl:pt-32" id="about">
      <div className="container">
        <div className="flex flex-col xl:flex-row xl:items-center gap-12 xl:gap-0">
          <div className="flex-1">
            <div className="max-w-135">
              <Pretitle text="About us" />
              <h2 className="h2 mb-6">Focused on Exellence In Every Project</h2>
              <p className="mb-11 xl:text-lg">
                Our unweavering commitment to exellence drivers every project we
                undertake. From concept to completion, we meticulously craft
                solutions that embody quality, precision and innovation.
              </p>
              <div className="w-max mb-10 flex flex-col text-right">
                <Image
                  width={154}
                  height={38}
                  src="/assets/img/about/signature.svg"
                  alt="Signature of Urban company CEO"
                />
                <p>Company CEO</p>
              </div>
              <Button text="Contact us" />
            </div>
          </div>
          <div className="flex-1 xl:flex xl:justify-center">
            <div className="relative xl:w-111 xl:h-123.25">
              <div className="absolute -top-4 -left-4 -z-10 hidden xl:flex w-111 h-123.25 bg-accent" />
              <Image
                src="/assets/img/about/img.jpg"
                fill
                alt="Construction engineers reviewing blueprints at a building site."
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
