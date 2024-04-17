import "@/app/styles/animation/fadeout.css";
import type { Metadata } from "next";
import Button from "../components/Button";
import Writer from "../components/home/Writer";
import Skills from "../components/about/Skills";
import Intro from "../components/about/Intro";
import TimelineSection from "../components/about/TimelineSection";
import DownButton from "../components/layout/DownButton";
export const metadata: Metadata = {
  title: "Hoshikira | About",
  icons: {
    icon: "/favicon.png",
  },
};

const About = () => {
  return (
    <div className="">
      <div className="flex w-full flex-col md:flex-row">
        <div className="relative h-screen w-full overflow-hidden transition-all duration-700 md:w-1/2">
          <img
            src="/static/about/my-image.webp"
            alt="my-image"
            className="fade-out h-full object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 top-0 bg-gradient-to-b from-transparent via-transparent to-black/90"></div>
          <div className="absolute bottom-20 left-0 right-0 ">
            <h1 className="px-10 py-10 text-center text-3xl font-bold text-white md:text-5xl">
              Ready to discuss your project?
            </h1>
            <div className="px-20 md:px-10">
              <Button href="/contact">Get in touch</Button>
            </div>
          </div>
        </div>
        <div className="flex w-full flex-col space-y-10 py-5 transition-all duration-700 md:py-10 lg:py-20">
          <div className="px-5 md:px-12">
            <div className="py-3 text-4xl font-bold text-gray-300 ">
              I&apos;m Specialized in
            </div>
            <Writer />
          </div>
          <Skills />
          <Intro />
          <DownButton />
        </div>
      </div>
      <div className="h-[2000px] min-h-screen w-full transition-all  duration-700 ">
        <div className="h-1 w-full bg-gradient-to-r from-secondary to-primary"></div>
        <TimelineSection />
      </div>
    </div>
  );
};

export default About;
