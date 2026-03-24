import { useState } from "react";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  year: string;
  tall?: boolean;
}

const ProjectCard = ({ title, description, image, tags, year, tall }: ProjectCardProps) => {
  const [hovered, setHovered] = useState(false);

  return (
    <article
      className="group relative overflow-hidden border border-border cursor-pointer"
      style={{ borderRadius: "var(--radius)" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className={`relative overflow-hidden ${tall ? "aspect-[3/4]" : "aspect-[4/3]"}`}>
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-all duration-700"
          style={{
            transform: hovered ? "scale(1.05)" : "scale(1)",
            filter: hovered ? "grayscale(0%)" : "grayscale(100%)",
            transitionTimingFunction: "var(--ease-out-quint)",
          }}
        />
        {/* Overlay on hover */}
        <div
          className="absolute inset-0 bg-foreground/60 flex flex-col justify-end p-6 transition-opacity duration-500"
          style={{
            opacity: hovered ? 1 : 0,
            transitionTimingFunction: "var(--ease-out-quint)",
          }}
        >
          <div
            className="transition-transform duration-500"
            style={{
              transform: hovered ? "translateY(0)" : "translateY(20px)",
              transitionTimingFunction: "var(--ease-out-quint)",
            }}
          >
            <p className="font-mono text-xs text-primary-foreground/60 uppercase tracking-widest mb-2">{year}</p>
            <h3 className="text-xl font-sans font-medium text-primary-foreground mb-2">{title}</h3>
            <p className="text-sm text-primary-foreground/80 leading-relaxed mb-4">{description}</p>
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="font-mono text-[10px] uppercase tracking-widest text-primary-foreground/60 border border-primary-foreground/20 px-2 py-1"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
