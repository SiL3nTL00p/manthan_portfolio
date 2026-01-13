import React from "react";

interface ProjectCardProps {
  href?: string;
  title: string;
  category: string;
  imageSrc: string;
  imageAlt: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  href,
  title,
  category,
  imageSrc,
  imageAlt,
}) => {
  const Wrapper: React.ElementType = href ? "a" : "div";
  return (
    <Wrapper
      href={href}
      className="group/card block mb-4 break-inside-avoid bg-[#0b0909] transition-all duration-300 opacity-100 group-hover/grid:opacity-50 hover:!opacity-100 hover:scale-[1.02] hover:z-10 relative"
      {...(href ? { target: "_self", rel: "noopener noreferrer" } : {})}
      style={{
        fontFamily:
          '"SF Mono", "Space Mono", "Menlo", "Monaco", "Consolas", "Liberation Mono", "Courier New", monospace',
      }}
    >
      <article>
        <img
          src={imageSrc}
          alt={imageAlt}
          className="w-full h-auto object-contain"
        />
      </article>
      <div className="pt-2 pb-3 px-3">
        <div className="font-semibold text-white text-base">{title}</div>
        <div className="text-zinc-500 text-xs mt-[2px]">{category}</div>
      </div>
    </Wrapper>
  );
};

const ProjectsGrid: React.FC = () => {
  return (

    <div className="min-h-screen w-full bg-[#0b0909] py-10 px-2">

      <div className="columns-1 sm:columns-2 md:columns-3 gap-2 group/grid">
        <ProjectCard
          href=""
          title="RESUME RATER"
          category="AI MODEL"
          imageSrc="/aic.png"
          imageAlt="resume rater"
        />

        <ProjectCard
          href="https://github.com/SiL3nTL00p/WiDS-Neural-Voyage"
          title="WiDS'24"
          category="PRODUCTIVITY"
          imageSrc="/wids.png"
          imageAlt="wids"
        />

        <ProjectCard
          href="https://github.com/SiL3nTL00p/IITB_Projects/tree/main/FinSearch_25"
          title="FinSearch'25"
          category="Mentored Research Project"
          imageSrc="/finsearch.png"
          imageAlt="finsearch"
        />

        <ProjectCard
          href="https://github.com/SiL3nTL00p/IITB_Projects/tree/main/SOS_25"
          title="Generative and Agentic Ai (SOS'25)"
          category="Investigative Study Project"
          imageSrc="/SOS.png"
          imageAlt="sos"
        />

        <ProjectCard
          href="https://github.com/SiL3nTL00p/IITB_Projects/tree/main/SOC_25"
          title="Probabilistic Modelling (SOS'25)"
          category="Model Building"
          imageSrc="/soc.jpeg"
          imageAlt="soc"
        />

        <ProjectCard
          href="https://github.com/SiL3nTL00p/currency_converter"
          title="Currency Converter(Vitta Exchange)"
          category="Consumer Product"
          imageSrc="/cc.png"
          imageAlt="currency converter"
        />

        {/* Add more ProjectCard components as needed */}
      </div>
    </div>
  );
};

export { ProjectsGrid };
