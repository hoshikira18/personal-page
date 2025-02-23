"use client";
import React from "react";

const DownButton = () => {
  function scrollToTop() {
    const startPosition = window.pageYOffset;
    const targetPosition = window.innerHeight;
    const distance = targetPosition - startPosition;
    const duration = 450; // Adjust the duration as needed
    const easing = function (t: any) {
      return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
    }; // Easing function

    let startTime: any = null;

    function animation(currentTime: any) {
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

  // Easing function for smooth animation
  function easeInOut(t: any, b: any, c: any, d: any) {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t + b;
    t--;
    return (-c / 2) * (t * (t - 2) - 1) + b;
  }
  return (
    <div
      onClick={scrollToTop}
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
