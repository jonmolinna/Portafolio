import ProjectCard from "../components/project/ProjectCard";
import { projects } from "../data/project.data";

const Project = () => {
  return (
    <section className="pt-10 pb-30 max-w-5xl mx-auto px-3">
      <h2 className="text-center text-2xl text-gray-100 font-bold">
        Proyectos Destacados
      </h2>
      <aside className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </aside>
    </section>
  );
};

export default Project;
