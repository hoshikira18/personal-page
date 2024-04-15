interface CardProps {
  image?: string;
  isOpen?: boolean;
  title?: string;
  className?: string;
}

const StoryCard = ({ image, isOpen, title, className }: CardProps) => {
  return (
    <div className={`relative  rounded-md transition-all`}>
      <div
        className={`${isOpen ? "opacity-20" : "opacity-40"}  absolute bottom-0 left-0 right-0 top-0 cursor-pointer rounded-sm  bg-black duration-500 ease-out`}
      ></div>

      <div className={`${className} h-[400px] cursor-pointer`}>
        <img
          src={image}
          alt="card"
          className="h-full w-full rounded-sm object-cover shadow-lg"
        />
      </div>

      <div className="absolute bottom-0 left-0 right-0 flex items-center p-5 text-white ">
        <h1 className="line-clamp-2 w-full text-base  md:line-clamp-1">
          {title}
        </h1>
      </div>
    </div>
  );
};

export default StoryCard;
