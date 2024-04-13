import "@/app/styles/animation/fadeout.css"
import type { Metadata } from 'next'
import Button from "../components/Button"
import Writer from "../components/home/Writer"
import Skills from "../components/about/Skills"
import Intro from "../components/about/Intro"
export const metadata: Metadata = {
    title: 'Hoshikira | About',
    icons: {
        icon: '/favicon.png',
    }
}

const About = () => {
    return (
        <div className='flex flex-col md:flex-row w-full'>
            <div className='relative h-screen md:w-1/2 w-full overflow-hidden '>
                <img src="/static/about/my-image.jpg" alt="my-image" className='h-full object-cover fade-out' />
                <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-b from-transparent via-transparent to-black/90"></div>
                <div className="absolute bottom-20 left-0 right-0 ">
                    <h1 className="md:text-5xl text-3xl text-center font-bold py-10 px-10 text-white">Ready to discuss your project?</h1>
                    <div className="md:px-10 px-20">
                        <Button>Contact</Button>
                    </div>
                </div>
            </div>
            <div className='w-full lg:py-20 md:py-10 py-5 flex flex-col space-y-10'>
                <div className="md:px-12 px-5">
                    <div className='py-3 text-4xl text-gray-300 font-bold '>I&apos;m Specialized in</div>
                    <Writer />
                </div>
                <Skills />
                <Intro />
            </div>
        </div >
    )
}

export default About;