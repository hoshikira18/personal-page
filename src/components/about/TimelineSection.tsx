"use client";
import TimelineCard from "./TimelineCard";
const education = [
  {
    title: "FPT University",
    time: "Sep. 2022 - Now",
    des: "Major: Software Engineering-70% Scholarship",
  },
];

const activities = [
  {
    title: "Japanese Software Engineers",
    time: "Mar. 2023 - Now",
    des: "Project manager/Leader of a collaborators team in JS Club Recruitment Gen11.-Mentor of a collaborators team in JS Club Recruitment Gen 12.",
  },
];

const projects = [
  {
    title: "DMB Company Website",
    time: "Aug. 2024 - Oct. 2024",
    des: "A responsive web application showcasing DMB Company’s profile, products, and services.-Developed an intuitive and user friendly interface to display company information and product offerings.-Optimized performance and responsiveness to enhance user experience across devices.-Integrated backend services to manage dynamic content updates efficiently.-Live site: dmb.com.vn",
  },
  {
    title: "Personal Portfolio Website",
    time: "Apr. 2024",
    des: "A modern and responsive portfolio website to showcase my projects, blog posts, and achievements.-Live site: khuyentv.tech",
  },
];

const TimelineSection = () => {
  return (
    <div className="flex w-full flex-col p-10 md:flex-row md:space-x-10 lg:p-20">
      <div className="grid w-full grid-cols-1 md:w-1/2">
        <TimelineCard data={projects} title="Projects" />
      </div>
      <div className="grid w-full grid-cols-1 md:w-1/2">
        <TimelineCard data={education} title="Education" />
        <TimelineCard data={activities} title="Activities" />
      </div>
    </div>
  );
};

export default TimelineSection;
