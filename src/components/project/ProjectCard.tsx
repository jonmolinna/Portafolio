import React from "react";
import { projectInterface } from "../../interface/project.interface";
import { HiLink } from "react-icons/hi";
import { FaGithub } from "react-icons/fa";

type Props = {
  project: projectInterface;
};

const ProjectCard: React.FC<Props> = ({ project }) => {
  return (
    <div className="flex flex-col bg-zinc-800 border border-zinc-700 rounded-lg shadow-md overflow-hidden hover:scale-[1.02] transition">
      <img
        src={project.url}
        alt=""
        className="w-full h-56 object-cover object-center"
      />
      <div className="my-4 px-4">
        <h4 className="text-zinc-200 text-xl font-medium">{project.name}</h4>
        <p className="text-zinc-300 text-sm font-normal">
          {project.description}
        </p>
        <div className="mt-3 flex flex-wrap gap-2">
          {project.languages.map((language, index) => (
            <span
              key={index}
              className={`bg-blue-900 text-white text-sm font-medium px-2.5 py-0.5 rounded-sm ${
                language.toLocaleLowerCase() === "react"
                  ? "bg-cyan-700"
                  : language.toLocaleLowerCase() === "nodejs"
                  ? "bg-emerald-700"
                  : language.toLocaleLowerCase() === "mongodb"
                  ? "bg-green-700"
                  : language.toLocaleLowerCase() === "tailwindcss"
                  ? "bg-sky-700"
                  : "bg-gray-700"
              }`}
            >
              {language}
            </span>
          ))}
        </div>
        <div className="mt-5 flex flex-wrap gap-2">
          <button className="flex items-center gap-1 border border-blue-500 text-blue-500 hover:text-white hover:bg-blue-500 rounded-lg px-5 py-2.5">
            <HiLink className="h-5 w-5" />
            <span className="font-medium text-sm ">Demo</span>
          </button>
          <button className="flex items-center gap-1 border border-gray-600 text-gray-400 hover:text-white hover:bg-gray-600 rounded-lg px-5 py-2.5">
            <FaGithub className="h-5 w-5" />
            <span className="font-medium text-sm">Client</span>
          </button>
          <button className="flex items-center gap-1 border border-gray-600 text-gray-400 hover:text-white hover:bg-gray-600 rounded-lg px-5 py-2.5">
            <FaGithub className="h-5 w-5" />
            <span className="font-medium text-sm">Server</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
