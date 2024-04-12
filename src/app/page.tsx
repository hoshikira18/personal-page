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
      className=" w-full flex">
      <SideBar />
      {/* <div className="w-2 h-full bg-gradient-to-b from-secondary to-primary"></div> */}
      <Pan className="p-20 flex flex-col space-y-5">

        <MyStories />

        {/* <Writer />
        <div className='py-3 text-5xl font-bold bg-gradient-to-r from-secondary  to-primary text-transparent bg-clip-text'>Frontend Developer <span className='text-gray-400'>&</span> IT Enthusiast</div> */}
        <p className='text-gray-300 text-lg pr-10 text-start'>Hi there, I&apos;m a web developer with experience in coding and frontend development. I&apos;m passionate about creating innovative solutions. With my creativity, technical skills, and attention to detail, I&apos;m confident I can help you find the best solutions for your needs.</p>


        <BlockCode />


        {/* <div className="px-5 py-3">
          <Button href="/contact">Navigate to Contact</Button>
        </div> */}

        <div className="space-y-3 bg-gradient-to-b from-[#212121] to-[#1a1a1d]">
          <div className="w-full h-1 bg-gradient-to-r from-secondary to-primary" ></div >
          <div className="flex p-3 space-x-20 items-center">
            <div className="flex flex-col items-end space-y-5">
              <div className="flex items-center space-x-2">
                <span className="text-5xl font-bold text-gray-300">0</span>
                <span className="text-secondary">Year of experience</span>
              </div>

            </div>
            <div className="flex flex-col items-end space-y-5">
              <div className="flex items-center space-x-2">
                <span className="text-5xl font-bold text-gray-300">5+</span>
                <span className="text-secondary">Completed projects</span>
              </div>
            </div>
            <Button href="/contact">Contact</Button>

          </div>
        </div>

      </Pan>

    </div >
  );
}

export default Home;