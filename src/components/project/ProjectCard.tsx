import React from "react";
import { projectInterface } from "../../interface/project.interface";
import { FaCheck } from "react-icons/fa";
import { FaImage } from "react-icons/fa";
import ProjectLanguage from "./ProjectLanguage";
import ProyectLink from "./ProyectLink";

type Props = {
  project: projectInterface;
};

const ProjectCard: React.FC<Props> = ({ project }) => {
  return (
    <div className="border border-zinc-700 bg-zinc-800 shadow-sm rounded-lg p-6">
      <aside>
        <div className="flex items-center gap-3">
          <FaCheck className="text-cyan-500" />
          <h4 className="text-zinc-100 text-xl font-medium">{project.name}</h4>
        </div>
        <p className="text-zinc-200 text-sm font-normal">
          {project.description}
        </p>
      </aside>
      <aside className="mt-3 flex flex-wrap gap-3">
        {project.languages.map((name, index) => (
          <ProjectLanguage key={index} language={name} />
        ))}
      </aside>
      <aside className="mt-7 grid grid-cols-2 gap-5 sm:grid-cols-3 md:grid-cols-4">
        <button className="flex items-center justify-center gap-2 text-zinc-400 py-1 px-2 border border-zinc-600 rounded-lg bg-zinc-800  hover:text-white hover:bg-zinc-700 cursor-pointer">
          <FaImage />
          <span className="text-sm font-medium">Galería</span>
        </button>
        {project.links.map((link, index) => (
          <ProyectLink key={index} link={link} />
        ))}
      </aside>
    </div>
  );
};

export default ProjectCard;
