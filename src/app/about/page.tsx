import "@/app/styles/animation/fadeout.css"
import type { Metadata } from 'next'
import Button from "../components/Button"
import Writer from "../components/home/Writer"
export const metadata: Metadata = {
    title: 'Hoshikira | About',
    icons: {
        icon: '/favicon.png',
    }
}

const About = () => {
    return (
        <div className=' flex w-full'>
            <div className='relative h-screen w-1/2 overflow-hidden '>
                <img src="/static/about/my-image.jpg" alt="my-image" className='h-full object-cover fade-out' />
                <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-b from-transparent via-transparent to-black/90"></div>
                <div className="absolute bottom-20 left-0 right-0 ">
                    <h1 className="text-5xl text-center font-bold py-10 px-10 text-white">Ready to discuss your project?</h1>
                    <div className="px-10">
                        <Button>Contact</Button>
                    </div>
                </div>
            </div>
            <div className='w-full lg:p-20 md:p-10 p-5'>
                <Writer />
                <div className='py-3 text-5xl font-bold bg-gradient-to-r from-secondary  to-primary text-transparent bg-clip-text'>Frontend Developer <span className='text-gray-400'>&</span> IT Enthusiast</div>
            </div>
        </div>
    )
}

export default About;