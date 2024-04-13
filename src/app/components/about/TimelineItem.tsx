import React from 'react'

interface Props {
    title?: string,
    time?: string,
    des?: string
}

const TimelineItem = ({ title, time, des }: Props) => {
    return (
        <div className='relative w-full  flex flex-col px-5 pb-20'>
            <div className='absolute top-0 left-0 -translate-x-1/2 w-1 h-full bg-white'></div>
            <div className='absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-gradient-to-tr from-primary to-secondary'></div>
            <div className='px-3 -translate-y-3 space-y-2'>
                <h5 className='text-gray-300 text-lg font-bold pb-1'>{title}</h5>
                <span className='px-2 py-1 bg-secondary text-base text-black min-w-1/3 rounded-md text-center font-medium'>{time}</span>
                {
                    des?.split("-").map((e) => {
                        return (
                            <div className='w-full pt-2 flex items-start space-x-2' key={e}>
                                <span className='w-3 min-w-3 my-1.5 h-3 rounded-full bg-primary '></span>
                                <p className='text-base font-medium text-gray-300'>{e}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default TimelineItem