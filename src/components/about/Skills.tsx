import React, { ReactNode } from "react";
import SkillCard from "./SkillCard";
import Pan from "../animation/Pan";

export interface SkillItem {
  title: string,
  icon: ReactNode
}
interface SkillsProps {
  title: string,
  skills: SkillItem[]
}



const Skills = ({ title, skills }: SkillsProps) => {
  return (
    <Pan className="bg-gradient flex w-full flex-col space-y-5 border-t border-gray-300 from-[#18181b] to-[#212121] px-5 py-5 shadow-lg md:px-12">
      <div className="front-medium border-l-2 border-primary px-3 text-lg text-gray-300">
        {title || "Skills"}
      </div>
      <div className="grid grid-cols-auto-fill-280 gap-y-4 [--tw-fluid-col-min:12rem]">
        {
          skills.map(s => (
            <SkillCard key={s.title} name={s.title} level={2}>
              {s.icon}
            </SkillCard>
          ))
        }
      </div>
    </Pan>
  );
};

export default Skills;
