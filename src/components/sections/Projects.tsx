import { ProjectCard } from "@/components/ui/ProjectCard";
import { projects } from "@/lib/constants";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="flex flex-col items-center justify-center py-20 "
    >
      <h1 className="text-[40px] font-semibold text-cream py-20" style={{ fontFamily: "'Alex Brush', cursive" }}>
        My Projects
      </h1>

      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-10">
        {projects.map((project) => (
          <div
            key={project.title}
            className="group bg-cream transition-all duration-300 hover:translate-y-[-4px]"
          >
            <ProjectCard
              src={project.image}
              title={project.title}
              link={project.link}
            />
          </div>
        ))}
      </div>
    </section>
  );
};
