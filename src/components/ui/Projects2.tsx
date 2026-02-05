import React from "react";

interface ProjectCardProps {
  href?: string;
  title: string;
  category: string;
  imageSrc: string;
  imageAlt: string;
  mediaType?: "image" | "video";
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  href,
  title,
  category,
  imageSrc,
  imageAlt,
  mediaType = "image",
}) => {
  const Wrapper: React.ElementType = href ? "a" : "div";

  // Determine media type from file extension if not explicitly provided
  const isVideo = mediaType === "video" ||
    imageSrc.endsWith('.mp4') ||
    imageSrc.endsWith('.webm') ||
    imageSrc.endsWith('.ogg') ||
    imageSrc.endsWith('.mov');

  return (
    <Wrapper
      href={href}
      className="group/card block mb-4 break-inside-avoid bg-[#111111] transition-opacity duration-500 ease-in-out opacity-100 hover:opacity-75 relative px-0.5 py-0.5 "
      {...(href ? { target: "_self", rel: "noopener noreferrer" } : {})}
      style={{
        fontFamily:
          '"SF Mono", "Space Mono", "Menlo", "Monaco", "Consolas", "Liberation Mono", "Courier New", monospace',
      }}
    >
      <article>
        {isVideo ? (
          <video
            src={imageSrc}
            className="w-full h-auto object-contain"
            autoPlay
            loop
            muted
            playsInline
          />
        ) : (
          <img
            src={imageSrc}
            alt={imageAlt}
            className="w-full h-auto object-contain"
          />
        )}
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

    <div className="min-h-screen w-full bg-[#111111] py-10 pt-4 px-2">

      <div className="columns-1 sm:columns-2 md:columns-3 gap-2 group/grid">

      <ProjectCard
          href="https://github.com/SiL3nTL00p/Brain_Tumor_Segmentation_BCP"
          title="BTSP"
          category="BIOX-WNCC PROJECT"
          imageSrc="/btsp.png"
          imageAlt="btsp"
        />
        
        <ProjectCard
          href="https://github.com/SiL3nTL00p/IITB_Projects/tree/main/Probabilistic%20graphic%20models"
          title="PROBABILISTIC GRAPHIC MODEL"
          category="CONSUMER PRODUCT"
          imageSrc="/soc.jpeg"
          imageAlt="currency converter"
        />


        <ProjectCard
          href=""
          title="RESUME RATER"
          category="AI MODEL"
          imageSrc="/aic2.png"
          mediaType="image"
          imageAlt="resume rater"
        />

        <ProjectCard
          href="https://github.com/SiL3nTL00p/Kalman-Filtered-Trend-Trader-A-Deep-Reinforcement-Learning-Agent-for-Portfolio-Optimization"
          title="WiDS'25"
          category="TRADING ALGORITHM"
          imageSrc="/dqn2.png"
          imageAlt="wids"
        />

        <ProjectCard
          href="https://github.com/AiCommunityIITB/InstiGPT"
          title="InstiGPT"
          category="AIC NLP PROJECT"
          imageSrc="/instigpt copy.mp4"
          imageAlt="instigpt"
          mediaType="video"
        />



        <ProjectCard
          href="https://github.com/SiL3nTL00p/IITB_Projects/tree/main/SOS_25"
          title="Karyogram"
          category="MEDICAL IMAGING PROJECT"
          imageSrc="/karyo.png"
          imageAlt="karyogram"
        />


        {/* Add more ProjectCard components as needed */}
      </div>
    </div>
  );
};

export { ProjectsGrid };
