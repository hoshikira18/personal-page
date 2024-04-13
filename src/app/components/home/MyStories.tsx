'use client'
import Pan from '../animation/Pan'
import StoryCard from './StoryCard'
import { useState } from 'react'
const data = [
    {
        id: 1,
        title: "Bảo vệ sản phẩm",
        image: "/static/home/story-1.webp"
    },
    {
        id: 2,
        title: "Mentor team 2 CTV - BCM",
        image: "/static/home/story-2.webp"
    },
    {
        id: 3,
        title: "Tổng kết sự kiện bảo vệ Chuyên môn",
        image: "/static/home/story-3.webp"
    }
]

const MyStories = () => {
    const [show, setShow] = useState(1);

    return (
        <Pan>
            <div className='flex items-center space-x-5'>
                <div className='w-10 flex flex-col space-y-2'>
                    <span className='h-1 w-full bg-primary'></span>
                    <span className='h-1 w-4/5 bg-primary'></span>
                    <span className='h-1 w-3/5 bg-primary'></span>
                </div>
                <h1 className='text-2xl font-bold text-gray-300 py-5 w-44'>Hello, there!</h1>
            </div>

            <div className='flex justify-center space-x-2'>
                {
                    data.map(e => {
                        return (
                            <div className={`${show === e.id ? "w-full" : "w-[100px]"} ease-out duration-300 bg-gradient-to-tr from-primary to-secondary rounded-sm overflow hover:-translate-y-2`} key={e.id} onMouseOver={() => {
                                setShow(e.id)
                            }}>
                                <StoryCard image={e.image} title={e.title} isOpen={e.id == show ? true : false} />
                            </div>
                        )
                    })
                }
            </div>
        </Pan>
    )
}

export default MyStories