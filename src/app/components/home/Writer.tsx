"use client";
import Typewriter from "typewriter-effect";

const Writer = () => {
  return (
    <div className="flex items-center space-x-2 bg-gradient-to-r from-secondary to-primary bg-clip-text text-3xl font-bold text-transparent">
      <span className="text-gray-500">&gt;</span>
      <Typewriter
        onInit={(typewriter) => {
          typewriter.typeString("Front-End Development").start();
        }}
        options={{
          cursor: "_",
          cursorClassName: "text-gray-300",
          loop: true,
        }}
      />
    </div>
  );
};

export default Writer;
