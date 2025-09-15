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

const Home = () => {
  return (
    <>
      <TopBar />
      <Header />
      <Hero />
      <About />
      <Stats />
      <Services />
      <Work />
      <Testimonials />
      <Faq />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
