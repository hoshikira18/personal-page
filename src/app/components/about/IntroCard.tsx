import React from 'react'

interface CardProps {
    id?: string,
    title?: string,
    content?: string
}

const IntroCard = ({ id, title, content }: CardProps) => {
    return (
        <div className='space-y-5'>
            <h5 className='text-2xl font-bold space-x-2'>
                <span className='text-gray-500'>{id}.</span><span className='text-gray-300'>{title}</span>
            </h5>
            <p className='lg:pr-10 text-lg text-gray-300'>
                {content}
            </p>
        </div>
    )
}

export default IntroCard