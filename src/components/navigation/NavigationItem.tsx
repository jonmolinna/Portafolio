import React from "react";
import { Link } from "react-router";

type Props = {
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  link: string;
};

const NavigationItem: React.FC<Props> = ({ Icon, link }) => {
  return (
    <Link
      to={`${link}`}
      className="flex flex-col items-center justify-center h-14 w-14 rounded-full border border-zinc-800 cursor-pointer hover:bg-zinc-800 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110"
    >
      <Icon className="w-5 h-5 mb-2 text-zinc-400 " />
    </Link>
  );
};

export default NavigationItem;
