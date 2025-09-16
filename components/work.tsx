import Link from "next/link";
import Image from "next/image";
import { RiArrowRightUpLine, RiCheckboxCircleFill } from "react-icons/ri";

import { Pretitle } from "@/components/pretitle";

import { workData } from "@/lib/data";

export const Work = () => {
  return (
    <section className="pt-16 xl:pt-32" id="projects">
      <div className="container">
        <div className="max-w-135 mx-auto xl:mb-20 text-center">
          <Pretitle text="Our Work" centered />
          <h2 className="h2 mb-3 capitalize">Discover our projects</h2>
          <p className="mb-11 max-w-120 mx-auto xl:text-lg">
            Providing expert services designed to deliver quality and innovation
            in every project we undertake.
          </p>
        </div>
      </div>
      <ul className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
        {workData.map(({ id, img, name, description, href }) => (
          <li
            key={id}
            className="relative w-full h-123 flex-1 flex justify-center overflow-hidden group"
          >
            <Image
              src={img}
              alt={name}
              fill
              className="object-cover"
              quality={75}
            />
            <div className="absolute bottom-4 w-[90%] h-21 flex items-center justify-between bg-primary text-white md:translate-y-27 md:group-hover:translate-y-0 transition-transform duration-500">
              <div className="pl-8">
                <h3 className="text-white font-primary font-semibold tracking-[1px] uppercase">
                  {name}
                </h3>
                <div className="flex items-center gap-1">
                  <RiCheckboxCircleFill size={20} className="text-accent" />
                  <p>{description}</p>
                </div>
              </div>
              <Link
                href={href}
                className="absolute right-3 size-11 xl:size-15 flex items-center justify-center bg-accent text-primary"
              >
                <RiArrowRightUpLine size={24} />
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};
