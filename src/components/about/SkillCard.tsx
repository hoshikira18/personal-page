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
    </div>
  );
};

export default SkillCard;
