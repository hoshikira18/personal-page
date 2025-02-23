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
    title: "My story",
    content:
      "The world of computers has always fascinated me.  Even as a child, I was drawn to the logic puzzles and problem-solving aspects of video games.  Taking things apart (much to my parents' chagrin) and figuring out how they worked  was a constant curiosity.  This natural inclination towards untangling complexities naturally led me to programming.",
  },
];

const Intro = () => {
  return (
    <FadeIn className="space-y-5 px-5 md:px-12">
      <div className="space-y-5">
        <p className="text-lg text-gray-300 lg:pr-10">
          Hey, I’m a developer with a passion for coding 👨‍💻 and a flair for writing ✍️. I thrive on building tech solutions that not only work but also tell a story. Whether it’s shaping clean, user-friendly websites or diving into the logic of a tricky problem, I bring a blend of technical skill and creative curiosity to the table. My goal? To craft products that feel human, functional, and just a little bit special. Let’s create something awesome together!
        </p>
      </div>
    </FadeIn>
  );
};

export default Intro;
