import { SkillDataProvider } from "@/providers/skill-data-provider";
import { SkillText } from "@/components/ui/SkillText";

import {
  ai_automation_skills,
  ecommerce_skills,
  backend_skills,
  frontend_skills,
  skills,
} from "@/lib/constants";

const skillCategories = [
  { title: "AI Automation", data: ai_automation_skills, folder: "skills/automation tools" },
  { title: "E-Commerce", data: ecommerce_skills, folder: "skills/ecommerance" },
  { title: "Core Skills", data: skills, folder: "skills" },
  { title: "Frontend", data: frontend_skills, folder: "skills" },
  { title: "Backend", data: backend_skills, folder: "skills" },
];

export const Skills = () => {
  return (
    <section
      id="skills"
      className="relative flex flex-col items-center justify-center gap-16 py-20 px-4 sm:px-6 lg:px-10 "
    >
      {/* Heading */}
      <SkillText />

      {/* Skills Grid by Category */}
      <div className="flex flex-col w-full max-w-6xl gap-12">
        {skillCategories.map(({ title, data, folder }) => (
          <div key={title} className="flex flex-col gap-6">
            <h3 className="text-xl font-bold text-center text-cream md:text-2xl" style={{ fontFamily: "'Alex Brush', cursive" }}>
              {title}
            </h3>
            <div className="flex flex-wrap justify-center gap-6">
              {data.map((skill, i) => (
                <SkillDataProvider
                  key={skill.skill_name}
                  src={skill.image}
                  name={skill.skill_name}
                  width={skill.width}
                  height={skill.height}
                  index={i}
                  folder={folder}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
