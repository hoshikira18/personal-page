import React from "react";

interface Props {
  title?: string;
  time?: string;
  des?: string;
}

const TimelineItem = ({ title, time, des }: Props) => {
  return (
    <div className="relative flex w-full flex-col pb-20 pl-5">
      <div className="absolute left-0 top-0 h-full w-1 -translate-x-1/2 bg-white"></div>
      <div className="absolute left-0 top-0 h-10 w-10 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-tr from-primary to-secondary"></div>
      <div className="-translate-y-3 space-y-2 px-3">
        <h5 className="pb-1 text-lg font-bold text-gray-300">{title}</h5>
        <span className="min-w-1/3 rounded-md bg-secondary px-2 py-1 text-center text-sm font-medium text-black">
          {time}
        </span>
        {des?.split("-").map((e) => {
          return (
            <div className="flex w-full items-start space-x-2 pt-2" key={e}>
              <span className="my-1.5 h-3 w-3 min-w-3 rounded-full bg-primary "></span>
              <p className="text-base font-medium text-gray-300">{e}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TimelineItem;
