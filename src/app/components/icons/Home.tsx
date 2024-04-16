import React from "react";

const Home = ({
  color,
  className = "",
  strokeWidth = "0",
}: {
  color?: string;
  className?: string;
  strokeWidth?: string;
}) => {
  return (
    <svg
      className={className}
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="currentColor"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      viewBox="0 0 24 24"
    >
      <path
        stroke={`${color}`}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.2"
        d="m4 12 8-8 8 8M6 10.5V19a1 1 0 0 0 1 1h3v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3h3a1 1 0 0 0 1-1v-8.5"
      />
    </svg>
  );
};

export default Home;
