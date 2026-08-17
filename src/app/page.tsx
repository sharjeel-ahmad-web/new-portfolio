import { Hero } from "@/components/sections/Hero";
import {
  Profilecard,
  AboutMe,
  Experience,
  Skills,
  Friends,
  Projects,
  Contact,
} from "@/components/sections";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20">
        <section id="hero">
          <Hero />
        </section>

        <section id="profile">
          <Profilecard />
        </section>

        <section id="about">
          <AboutMe />
        </section>

        <section id="experience">
          <Experience />
        </section>

        <section id="skills">
          <Skills />
        </section>

        <section id="friends">
          <Friends />
        </section>

        <section id="projects">
          <Projects />
        </section>

        <section id="contact">
          <Contact />
        </section>
      </div>
    </main>
  );
}
