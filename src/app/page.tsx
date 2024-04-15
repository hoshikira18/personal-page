import SideBar from "./components/layout/SideBar";
import Pan from "./components/animation/Pan";
import type { Metadata } from "next";
import BlockCode from "./components/home/BlockCode";
import MyStories from "./components/home/MyStories";
import Button from "./components/Button";

export const metadata: Metadata = {
  title: "Hoshikira | Frontend Developer",
  icons: {
    icon: "/favicon.png",
  },
};

const Home = () => {
  return (
    <div className={`flex w-full flex-col lg:flex-row`}>
      <SideBar />
      <Pan className="flex flex-col space-y-5 p-5 transition-all duration-700 md:p-10 lg:px-20 lg:py-10">
        <MyStories />
        <p className="text-start text-lg text-gray-300 lg:pr-10">
          Hi there, I&apos;m a web developer with experience in coding and
          frontend development. I&apos;m passionate about creating innovative
          solutions. With my creativity, technical skills, and attention to
          detail, I&apos;m confident I can help you find the best solutions for
          your needs.
        </p>
        <BlockCode />
        <div className="space-y-3 bg-gradient-to-b from-[#212121] to-[#1a1a1d]">
          <div className="h-1 w-full bg-gradient-to-r from-secondary to-primary"></div>
          <div className="flex items-center space-x-10 p-3 md:space-x-20">
            <div className="flex flex-col items-end space-y-5">
              <div className="flex items-center space-x-2">
                <span className="text-3xl font-bold text-gray-300 md:text-5xl">
                  0
                </span>
                <span className="text-base text-secondary md:text-lg">
                  Year of experience
                </span>
              </div>
            </div>
            <div className="flex flex-col items-end space-y-5">
              <div className="flex items-center space-x-2">
                <span className="text-3xl font-bold text-gray-300 md:text-5xl">
                  5+
                </span>
                <span className="text-base text-secondary md:text-lg">
                  Completed projects
                </span>
              </div>
            </div>
          </div>
          <div className="p-5">
            <Button href="/contact">Contact</Button>
          </div>
        </div>
      </Pan>
    </div>
  );
};

export default Home;
