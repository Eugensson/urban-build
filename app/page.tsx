"use client";

import { useEffect, useState } from "react";

import { Faq } from "@/components/faq";
import { Work } from "@/components/work";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Stats } from "@/components/stats";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { TopBar } from "@/components/top-bar";
import { Contact } from "@/components/contact";
import { Services } from "@/components/services";
import { Testimonials } from "@/components/testimonials";

import { cn } from "@/lib/utils";

const Home = () => {
  const [headerActive, setHeaderActive] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;

      if (scrollTop > 200) {
        setHeaderActive(true);
      } else {
        setHeaderActive(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <main className="overflow-hidden">
      <TopBar />
      <div className="relative z-10">
        <Header />
      </div>
      <div
        className={cn(
          "w-full fixed top-0 left-0 z-50 transition-transform duration-500",
          headerActive ? "translate-y-0" : "translate-y-[-100%]"
        )}
      >
        <Header />
      </div>
      <Hero />
      <About />
      <Stats />
      <Services />
      <Work />
      <Testimonials />
      <Faq />
      <Contact />
      <Footer />
    </main>
  );
};

export default Home;
