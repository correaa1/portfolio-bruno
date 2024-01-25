"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Autism Project",
    description: "Projeto para crianças com autismo",
    image: "/images/projects/autismPortfolio.png",
    tag: ["Todos", "Mobile"],
    gitUrl: "https://github.com/correaa1/AutismProject",
    previewUrl: "https://autismlearning.netlify.app/",
  },
  {
    id: 2,
    title: "Ahlib",
    description: "Aplicativo de biblioteca virtual",
    image: "/images/projects/ahlib.png",
    tag: ["Todos", "Mobile"],
    gitUrl: "https://github.com/AhgoraLabs/AhLib-mobile.git",
    previewUrl: "https://github.com/AhgoraLabs/AhLib-mobile.git",
  },
  {
    id: 3,
    title: "Meu Portfolio ",
    description: "Projeto web sobre mim",
    image: "/images/projects/portfolio.png",
    tag: ["Todos", "Web"],
    gitUrl: "https://github.com/correaa1/portfolio-bruno",
    previewUrl: "https://brunocorrea-portifolio.netlify.app",
  },


  {
    id: 4,
    title: "Ong Project",
    description: "sistema fullstack de cadastro para uma ong",
    image: "/images/projects/ong.png",
    tag: ["Todos", "Web"],
    gitUrl: "https://github.com/correaa1/ong-frontend",
    previewUrl: "https://github.com/correaa1/ong-frontend",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("Todos");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        Meus Projetos
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="Todos"
          isSelected={tag === "Todos"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard

              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
