"use client";
import React from "react";

const BackToTop = () => {
  function scrollToTop() {
    const startPosition = window.pageYOffset;
    const targetPosition = 0;
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
    <button className="fixed bottom-20 text-white" onClick={scrollToTop}>
      BackToTop
    </button>
  );
};

export default BackToTop;
