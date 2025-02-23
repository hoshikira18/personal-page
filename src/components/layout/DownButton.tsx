"use client";
import React from "react";

interface DownButtonProps {
  targetRef: React.RefObject<HTMLElement>;
}

const DownButton: React.FC<DownButtonProps> = ({ targetRef }) => {
  function scrollToTarget() {
    if (!targetRef.current) return;

    const elementPosition =
      targetRef.current.getBoundingClientRect().top + window.scrollY;

    const startPosition = window.pageYOffset;
    const distance = elementPosition - startPosition;
    const duration = 150; // Adjust the duration as needed
    const easing = (t: number) =>
      t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t; // Easing function

    let startTime: number | null = null;

    function animation(currentTime: number) {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const run = easing(timeElapsed / duration);
      window.scrollTo(0, startPosition + distance * run);
      if (timeElapsed < duration) {
        requestAnimationFrame(animation);
      }
    }

    requestAnimationFrame(animation);
  }

  return (
    <div
      onClick={scrollToTarget}
      className="mx-auto hidden animate-bounce md:block"
    >
      <svg
        className="h-6 w-6 cursor-pointer text-gray-800 dark:text-white"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="none"
        viewBox="0 0 24 24"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="m19 9-7 7-7-7"
        />
      </svg>
    </div>
  );
};

export default DownButton;
