import React from "react";

type Props = {
  language: string;
};

const ProjectLanguage: React.FC<Props> = ({ language }) => {
  return (
    <span
      className={`text-xs font-medium px-2.5 py-0.5 rounded-full  ${
        language.toLocaleLowerCase() === "react"
          ? "bg-cyan-900 text-cyan-200"
          : language.toLocaleLowerCase() === "mongodb"
          ? "bg-emerald-900 text-emerald-200"
          : language.toLocaleLowerCase() === "nodejs"
          ? "bg-green-900 text-green-200"
          : language.toLocaleLowerCase() === "tailwindcss"
          ? "bg-sky-900 text-sky-200"
          : language.toLocaleLowerCase() === "graphql"
          ? "bg-pink-900 text-pink-200"
          : language.toLocaleLowerCase() === "angular"
          ? "bg-red-900 text-red-200"
          : language.toLocaleLowerCase() === "nestjs"
          ? "bg-rose-900 text-rose-200"
          : language.toLocaleLowerCase() === "vuejs"
          ? " bg-teal-900 text-teal-200"
          : "bg-neutral-700 text-gray-200"
      }`}
    >
      {language}
    </span>
  );
};

export default ProjectLanguage;
