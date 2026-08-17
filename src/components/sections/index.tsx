import dynamic from "next/dynamic";

const Profilecard = dynamic(() => import("@/components/sections/Profilecard").then(mod => ({ default: mod.Profilecard })), {
  loading: () => <SectionSkeleton />,
  ssr: false,
});

const AboutMe = dynamic(() => import("@/components/sections/AboutMe").then(mod => ({ default: mod.AboutMe })), {
  loading: () => <SectionSkeleton />,
  ssr: false,
});

const Experience = dynamic(() => import("@/components/sections/Experience").then(mod => ({ default: mod.Experience })), {
  loading: () => <SectionSkeleton />,
  ssr: false,
});

const Skills = dynamic(() => import("@/components/sections/Skills").then(mod => ({ default: mod.Skills })), {
  loading: () => <SectionSkeleton />,
  ssr: false,
});

const Friends = dynamic(() => import("@/components/sections/Friends").then(mod => ({ default: mod.Friends })), {
  loading: () => <SectionSkeleton />,
  ssr: false,
});

const Projects = dynamic(() => import("@/components/sections/Projects").then(mod => ({ default: mod.Projects })), {
  loading: () => <SectionSkeleton />,
  ssr: false,
});

const Contact = dynamic(() => import("@/components/sections/Contact").then(mod => ({ default: mod.Contact })), {
  loading: () => <SectionSkeleton />,
  ssr: false,
});

function SectionSkeleton() {
  return (
    <div className="w-full py-20 px-6 md:px-12 max-w-6xl mx-auto">
      <div className="animate-pulse space-y-6">
        <div className="h-10 bg-slate-800/50 rounded-lg w-48 mx-auto" />
        <div className="h-4 bg-slate-800/30 rounded w-full max-w-2xl mx-auto" />
        <div className="h-4 bg-slate-800/30 rounded w-5/6 max-w-2xl mx-auto" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-12">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="h-64 bg-slate-800/30 rounded-xl" />
          ))}
        </div>
      </div>
    </div>
  );
}

export { Profilecard, AboutMe, Experience, Skills, Friends, Projects, Contact };
