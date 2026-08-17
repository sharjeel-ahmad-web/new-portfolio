import Image from "next/image";
import Link from "next/link";

type ProjectCard = {
  src: string;
  title: string;
  link: string;
};

export const ProjectCard = ({
  src,
  title,
  link,
}: ProjectCard) => {
  return (
    <Link
      href={link}
      target="_blank"
      rel="noreferrer noopener"
      className="w-full relative overflow-hidden border border-brand/20 transition-all duration-300 hover:border-brand"
    >
      <Image
        src={src}
        alt={title}
        width={800}
        height={350}
        className="w-full object-contain"
      />

      <div className="relative p-4">
        <h1 className="text-2xl font-semibold text-charcoal" style={{ fontFamily: "'Times New Roman', serif" }}>
          {title}
        </h1>
      </div>
    </Link>
  );
};
