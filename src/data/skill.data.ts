import { SiNestjs, SiTypescript } from "react-icons/si";
import { FaReact, FaVuejs, FaAngular, FaNodeJs } from "react-icons/fa";
import { GrGraphQl } from "react-icons/gr";
import { RiTailwindCssFill } from "react-icons/ri";

interface SKILL {
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  technology: string;
}

export const skills: Array<SKILL> = [
  {
    technology: "NestJS",
    Icon: SiNestjs,
  },
  {
    technology: "React",
    Icon: FaReact,
  },
  {
    technology: "Vue.js",
    Icon: FaVuejs,
  },
  {
    technology: "Angular",
    Icon: FaAngular,
  },
  {
    technology: "GraphQL",
    Icon: GrGraphQl,
  },
  {
    technology: "TypeScript",
    Icon: SiTypescript,
  },
  {
    technology: "Node.js ",
    Icon: FaNodeJs,
  },
  {
    technology: "Tailwind CSS",
    Icon: RiTailwindCssFill,
  },
];
