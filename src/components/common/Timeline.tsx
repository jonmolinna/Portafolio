import React from "react";

type Props = {
  data: Array<{
    time: string;
    title: string;
    description: string;
  }>;
};

const Timeline: React.FC<Props> = ({ data }) => {
  return (
    <ol className="relative border-s border-gray-500">
      {data.map(({ time, title, description }, index) => (
        <li key={index} className="mb-10 ms-4">
          <div className="absolute w-3 h-3 bg-zinc-700 rounded-full mt-1.5 -start-1.5 border border-zinc-500"></div>
          <time className="mb-1 text-sm font-normal leading-none text-zinc-300">
            {time}
          </time>
          <h3 className="text-lg font-semibold text-white">{title}</h3>
          <p className="text-base font-normal text-zinc-100">{description}</p>
        </li>
      ))}
    </ol>
  );
};

export default Timeline;
