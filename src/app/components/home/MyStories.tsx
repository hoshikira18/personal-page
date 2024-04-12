'use client'
import Pan from '../animation/Pan'
import StoryCard from './StoryCard'
import { useState } from 'react'
const data = [
    {
        id: 1,
        title: "Bảo vệ sản phẩm",
        image: "/static/home/story-1.jpg"
    },
    {
        id: 2,
        title: "Mentor team 2 CTV - BCM",
        image: "/static/home/story-2.jpg"
    },
    {
        id: 3,
        title: "Tổng kết sự kiện bảo vệ Chuyên môn",
        image: "/static/home/story-3.jpg"
    }
]

const MyStories = () => {
    const [show, setShow] = useState(1);



    return (
        <Pan>
            <h1 className='text-2xl font-bold text-gray-300 py-5 w-44'>Hello, there!</h1>

            <div className='flex justify-center space-x-2'>
                {
                    data.map(e => {
                        return (
                            <div className={`${show === e.id ? "w-full" : "w-[200px]"} ease-out duration-300 bg-gray-300 p-1 rounded-sm overflow hover:-translate-y-2`} key={e.id} onMouseOver={() => {
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