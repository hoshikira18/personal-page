'use client'
import Typewriter from 'typewriter-effect';

const Writer = () => {
    return (
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
    )
}

export default Writer