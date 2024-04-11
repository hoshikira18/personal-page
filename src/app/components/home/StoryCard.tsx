interface CardProps {
    image?: string
    isOpen?: boolean
    title?: string
    className?: string
}

const StoryCard = ({ image, isOpen, title, className }: CardProps) => {
    return (
        <div className={`relative  rounded-md   transition-all`}>
            <div className={`${isOpen ? "opacity-0" : "opacity-40"}  absolute rounded-md bg-black top-0 bottom-0 left-0 right-0  ease-out duration-500 cursor-pointer`}></div>

            <div className={`${className} h-[300px] cursor-pointer`}>
                <img src={image} alt="card" className="rounded-md w-full h-full object-cover shadow-lg" />
            </div>


            <div className="absolute bottom-0 left-0 right-0 p-5 flex items-center text-gray-100 ">
                <h1 className='line-clamp-1 text-base  w-full'>{title}</h1>
            </div>
        </div>
    )
}

export default StoryCard