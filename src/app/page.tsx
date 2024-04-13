import SideBar from "./components/layout/SideBar";
import Pan from "./components/animation/Pan";
import type { Metadata } from 'next'
import BlockCode from './components/home/BlockCode';
import Writer from "./components/home/Writer";
import MyStories from "./components/home/MyStories";
import Button from "./components/Button";

export const metadata: Metadata = {
  title: 'Hoshikira | Frontend Developer',
  icons: {
    icon: '/favicon.png',
  }
}

const Home = () => {

  return (
    <div
      className="flex flex-col lg:flex-row w-full">
      <SideBar />
      {/* <div className="w-2 h-full bg-gradient-to-b from-secondary to-primary"></div> */}
      <Pan className="lg:p-20 md:p-10 p-5 flex flex-col space-y-5">

        <MyStories />

        <p className='text-gray-300 text-lg lg:pr-10 text-start'>Hi there, I&apos;m a web developer with experience in coding and frontend development. I&apos;m passionate about creating innovative solutions. With my creativity, technical skills, and attention to detail, I&apos;m confident I can help you find the best solutions for your needs.</p>

        <BlockCode />

        {/* <div className="px-5 py-3">
          <Button href="/contact">Navigate to Contact</Button>
        </div> */}

        <div className="space-y-3 bg-gradient-to-b from-[#212121] to-[#1a1a1d]">
          <div className="w-full h-1 bg-gradient-to-r from-secondary to-primary" ></div >
          <div className="flex p-3 md:space-x-20 space-x-10 items-center">
            <div className="flex flex-col items-end space-y-5">
              <div className="flex items-center space-x-2">
                <span className="md:text-5xl text-3xl font-bold text-gray-300">0</span>
                <span className="text-secondary md:text-lg text-base">Year of experience</span>
              </div>

            </div>
            <div className="flex flex-col items-end space-y-5">
              <div className="flex items-center space-x-2">
                <span className="md:text-5xl text-3xl font-bold text-gray-300">5+</span>
                <span className="text-secondary md:text-lg text-base">Completed projects</span>
              </div>
            </div>

          </div>
          <div className="p-5">
            <Button href="/contact">Contact</Button>
          </div>

        </div>

      </Pan>

    </div >
  );
}

export default Home;