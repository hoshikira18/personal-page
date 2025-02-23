import React from "react";

interface CardProps {
  id?: string;
  title?: string;
  content?: string;
}

const IntroCard = ({ id, title, content }: CardProps) => {
  return (
    <div className="space-y-5">
      <h5 className="space-x-2 text-2xl font-bold">
        <span className="text-gray-500">{id}.</span>
        <span className="text-gray-300">{title}</span>
      </h5>
      <p className="text-lg text-gray-300 lg:pr-10">{content}</p>
    </div>
  );
};

export default IntroCard;
