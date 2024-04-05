"use client"
import { motion } from "framer-motion"
import Typewriter from 'typewriter-effect';
import { CodeBlock } from 'react-code-block';
import { themes } from 'prism-react-renderer';
import SideBar from "./components/layout/SideBar";
import Button from "./components/Button";

const Home = () => {

  const code = `
console.log("Hello");

const services = [
  'Frontend Web',
]

if(have_a_project) navigate ('/contact');
    `

  return (
    <div
      className="h-[1000px] w-full flex">
      <SideBar />
      {/* <div className="w-2 h-full bg-gradient-to-b from-secondary to-primary"></div> */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{
          duration: 0.8,
          delay: 0,
          ease: [0, 0.71, 0.2, 1.01]
        }}
        className="p-20 flex flex-col space-y-5">
        <div className='flex items-center space-x-2 text-5xl text-gray-300 font-bold'>
          <span className='text-gray-500'>&gt;</span>
          <Typewriter
            onInit={(typewriter) => {
              typewriter.typeString('Hoshikira')
                .start();
            }}
            options={{
              cursor: "_"
            }}
          />
        </div>
        <div className='py-3 text-5xl font-bold bg-gradient-to-r from-primary via-green-300 to-secondary text-transparent bg-clip-text'>Frontend Developer <span className='text-gray-400'>&</span> IT Enthusiast</div>
        <p className='text-gray-300 text-lg pr-10 text-start'>Hi there, I&apos;m a frontend web developer with more one year experience in coding and frontend development. I&apos;m passionate about creating innovative solutions. With my creativity, technical skills, and attention to detail, I&apos;m confident I can help you find the best solutions for your needs.</p>
        <CodeBlock code={code} language={"javascript"} theme={themes.nightOwl}>
          <CodeBlock.Code className="bg-gray-900 p-6 rounded-xl shadow-lg">
            <CodeBlock.LineContent>
              <CodeBlock.Token />
            </CodeBlock.LineContent>
          </CodeBlock.Code>
        </CodeBlock>
        <div className="px-5 py-3">
          <Button href="/contact">Get in touch</Button>
        </div>

        <div className="w-full h-1 bg-gradient-to-r from-secondary to-primary" ></div >
        <div className="flex p-3 space-x-20">
          <div className="flex flex-col items-end space-y-5">
            <div className="flex items-center space-x-2">
              <span className="text-5xl font-bold text-gray-300">1+</span>
              <span className="text-secondary">Year of experience</span>
            </div>

          </div>
          <div className="flex flex-col items-end space-y-5">
            <div className="flex items-center space-x-2">
              <span className="text-5xl font-bold text-gray-300">10+</span>
              <span className="text-secondary">Completed projects</span>
            </div>
          </div>
        </div>
        <div className="w-full h-1 bg-gradient-to-r from-secondary to-primary"></div>

      </motion.div >

    </div >
  );
}

export default Home;