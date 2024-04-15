import TimelineCard from "./TimelineCard";
import Pan from "../animation/Pan";
const education = [
  {
    title: "FPT University",
    time: "Sep. 2022 - Now",
    des: "Major: Software Engineering-70% Scholarship-GPA: 3.1/4",
  },
];

const activities = [
  {
    title: "Japanese Software Engineers",
    time: "Mar. 2023 - Now",
    des: "Project manager/Leader of a collaborators team in JS Club Recruitment Gen11.-Mentor of a collaborators team in JS Club Recruitment Gen 12.",
  },
  {
    title: "GenZ Làm IT",
    time: "Dec. 2023 - Jan. 2024",
    des: "Content creator, writing articles related to the topic of Information Technology, reaching people who are passionate about Coding throughout Vietnam.",
  },
];

const projects = [
  {
    title: "Japanese Software Engineers",
    time: "Mar. 2023 - Now",
    des: "Project manager/Leader of a collaborators team in JS Club Recruitment Gen11.-Mentor of a collaborators team in JS Club Recruitment Gen 12.",
  },
  {
    title: "GenZ Làm IT",
    time: "Dec. 2023 - Jan. 2024",
    des: "Content creator, writing articles related to the topic of Information Technology, reaching people who are passionate about Coding throughout Vietnam.",
  },
];

const TimelineSection = () => {
  return (
    <Pan className="flex w-full flex-col p-10 md:flex-row md:space-x-10 lg:p-20">
      <div className="grid w-full grid-cols-1 md:w-1/2">
        <TimelineCard data={activities} title="Activities" />
      </div>
      <div className="grid w-full grid-cols-1 md:w-1/2">
        <TimelineCard data={education} title="Education" />
        {/* <TimelineCard data={activities} title="Activities" /> */}
      </div>
    </Pan>
  );
};

export default TimelineSection;
