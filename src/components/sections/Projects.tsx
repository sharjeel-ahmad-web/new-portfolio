import { ProjectCard } from "@/components/ui/ProjectCard";
import { projects } from "@/lib/constants";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="flex flex-col items-center justify-center py-20"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      
      {/* 
        1. Changed flex to grid
        2. Added responsive columns (1 on mobile, 2 on tablet, 3 on desktop)
        3. Added max-w-7xl and mx-auto to keep it centered on ultrawide screens
      */}
      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-10">
        {projects.map((project) => (
          /* 
            Wrapper div added to handle the hover animations safely 
            without needing to modify your underlying ProjectCard component 
          */
          <div
            key={project.title}
            className="group transform transition-all duration-300 hover:scale-105 hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-500/25 rounded-xl cursor-pointer"
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
