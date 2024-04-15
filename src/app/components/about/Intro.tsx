import React from "react";
import IntroCard from "./IntroCard";
import FadeIn from "../animation/Fadein";
const data = [
  {
    id: "1",
    title: "About me",
    content:
      "Hi there, I'm a web developer with experience in coding and frontend development. I'm passionate about creating innovative solutions. With my creativity, technical skills, and attention to detail, I'm confident I can help you find the best solutions for your needs.",
  },
  {
    id: "2",
    title: "Something",
    content:
      "Hi there, I'm a web developer with experience in coding and frontend development. I'm passionate about creating innovative solutions. With my creativity, technical skills, and attention to detail, I'm confident I can help you find the best solutions for your needs.",
  },
];

const Intro = () => {
  return (
    <FadeIn className="space-y-5 px-5 md:px-12">
      {data.map((e) => {
        return (
          <>
            <IntroCard id={e.id} title={e.title} content={e.content} />
          </>
        );
      })}
    </FadeIn>
  );
};

export default Intro;
