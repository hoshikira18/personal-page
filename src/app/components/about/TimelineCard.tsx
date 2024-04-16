import React from "react";
import TimelineItem from "./TimelineItem";

interface ItemProps {
  title?: string;
  time?: string;
  des?: string;
}

interface Props {
  data?: ItemProps[];
  title?: string;
}

const TimelineCard = ({ data, title }: Props) => {
  return (
    <div className="flex flex-col lg:px-10 ">
      <div className="py-10">
        <h2 className="border-b-4 border-primary py-2 text-2xl font-bold text-gray-300">
          {title}
        </h2>
      </div>
      {data?.map((e) => {
        return (
          <TimelineItem
            key={e.title}
            title={e.title}
            time={e.time}
            des={e.des}
          ></TimelineItem>
        );
      })}
    </div>
  );
};

export default TimelineCard;
