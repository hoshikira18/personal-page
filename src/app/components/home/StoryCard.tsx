interface CardProps {
    image?: string
    isOpen?: boolean
    title?: string
    className?: string
}

const StoryCard = ({ image, isOpen, title, className }: CardProps) => {
    return (
        <div className={`relative  rounded-md transition-all`}>
            <div className={`${isOpen ? "opacity-20" : "opacity-40"}  absolute rounded-sm bg-black top-0 bottom-0 left-0 right-0  ease-out duration-500 cursor-pointer`}></div>

            <div className={`${className} h-[400px] cursor-pointer`}>
                <img src={image} alt="card" className="rounded-sm w-full h-full object-cover shadow-lg" />
            </div>


            <div className="absolute bottom-0 left-0 right-0 p-5 flex items-center text-white ">
                <h1 className='md:line-clamp-1 line-clamp-2 text-base  w-full'>{title}</h1>
            </div>
        </div>
    )
}

export default StoryCard