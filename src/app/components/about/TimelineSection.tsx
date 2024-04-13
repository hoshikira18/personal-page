import TimelineCard from "./TimelineCard"
import Pan from "../animation/Pan"
const education = [
    {
        title: "FPT University",
        time: "Sep. 2022 - Now",
        des: "Major: Software Engineering-70% Scholarship-GPA: 3.1/4"
    }
]

const activities = [
    {
        title: "Japanese Software Engineers",
        time: "Mar. 2023 - Now",
        des: "Project manager/Leader of a collaborators team in JS Club Recruitment Gen11.-Mentor of a collaborators team in JS Club Recruitment Gen 12."
    },
    {
        title: "GenZ Làm IT",
        time: "Dec. 2023 - Jan. 2024",
        des: "Content creator, writing articles related to the topic of Information Technology, reaching people who are passionate about Coding throughout Vietnam."
    },
]

const projects = [
    {
        title: "Japanese Software Engineers",
        time: "Mar. 2023 - Now",
        des: "Project manager/Leader of a collaborators team in JS Club Recruitment Gen11.-Mentor of a collaborators team in JS Club Recruitment Gen 12."
    },
    {
        title: "GenZ Làm IT",
        time: "Dec. 2023 - Jan. 2024",
        des: "Content creator, writing articles related to the topic of Information Technology, reaching people who are passionate about Coding throughout Vietnam."
    },
]

const TimelineSection = () => {
    return (
        <Pan className="w-full p-20 flex md:flex-row flex-col md:space-x-10">
            <div className="md:w-1/2 w-full grid grid-cols-1">
                <TimelineCard data={education} title="Education" />
                <TimelineCard data={activities} title="Activities" />
            </div>
            <div className="md:w-1/2 w-full grid grid-cols-1">
                <TimelineCard data={projects} title="Education" />
            </div>
        </Pan>
    )
}

export default TimelineSection