import React from "react";
interface SkillsProps {
  name?: string;
  level?: number;
  className?: string;
  children?: React.ReactNode;
}

const SkillCard = ({ name, level = 0, className, children }: SkillsProps) => {
  return (
    <div className={`${className} flex items-center space-x-2 transition-all`}>
      {children}
      <span className="w-full py-2 text-base font-bold text-gray-300 md:w-28">
        {name}
      </span>
      {/* <div className="flex space-x-1">
        {[...Array(5)].map((_, i) => {
          return (
            <div
              className={`${i + 1 <= level ? "bg-[#275fe2]" : "bg-[#3f3f46]"} h-3.5 w-3.5 `}
              key={i}
            ></div>
          );
        })}
      </div> */}
    </div>
  );
};

export default SkillCard;
