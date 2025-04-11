import React from "react";
import { linkInterface } from "../../interface/project.interface";

type Props = {
  link: linkInterface;
};

const ProyectLink: React.FC<Props> = ({ link: { Icon, name, url } }) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-center gap-2 text-zinc-400 py-1 px-2 border border-zinc-600 rounded-lg bg-zinc-800  hover:text-white hover:bg-zinc-700 cursor-pointer"
    >
      <Icon />
      <span className="text-sm font-medium">{name}</span>
    </a>
  );
};

export default ProyectLink;
