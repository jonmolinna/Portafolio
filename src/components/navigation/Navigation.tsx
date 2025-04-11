import React from "react";
import { FaHome, FaCode, FaGithub, FaBookOpen } from "react-icons/fa";
import NavigationItem from "./NavigationItem";

const items: Array<{
  link: string;
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}> = [
  { link: "/", Icon: FaHome },
  { link: "/projects", Icon: FaCode },
  { link: "/", Icon: FaBookOpen },
  { link: "/", Icon: FaGithub },
];

const Navigation = () => {
  return (
    <div className="fixed flex items-center justify-center bottom-7 left-0 right-0 z-50 px-4 w-fit md:px-0 md:w-full md:max-w-96 mx-auto h-18 bg-zinc-900/50 border border-zinc-800 shadow-md rounded-4xl">
      <div className="flex justify-center items-center space-x-2">
        {items.map(({ Icon, link }, index) => (
          <NavigationItem Icon={Icon} link={link} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Navigation;
