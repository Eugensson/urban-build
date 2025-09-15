import { Button } from "@/components/button";

export const Hero = () => {
  return (
    <section className="relative h-[70vh] bg-hero bg-no-repeat bg-cover bg-center">
      <div className="absolute inset-0 z-10 bg-gradient-to-l from-black/0 via-black/50 to-black/70" />
      <div className="container h-full flex items-center">
        <div className="z-20 max-w-152 mx-auto xl:mx-0 flex flex-col items-center xl:items-start text-center xl:text-left text-white">
          <h1 className="h1 mb-4">
            <span className="text-accent">Building</span> robust lasting
            solutions
          </h1>
          <p className="mb-9 xl:text-lg">
            From the first sketch to the final build, we craft solutions
            designed to deliver lasting strength, unmatched quality, and the
            confidence your projects deserve.
          </p>
          <div>
            <Button text="See our work" />
          </div>
        </div>
      </div>
    </section>
  );
};
