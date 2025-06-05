"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Restaurant Reservation Website",
    description: "Description: The website allows users to add events, manage events, book tables and pay with zalo pay,...",
    image: "./search.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/HueVuong12/Restaurant-Project",
    previewUrl: "",
  },
  {
    id: 2,
    title: "Train Ticket Management App",
    description: "Train ticket management application allows staff to manage tickets, book tickets, passengers,...",
    image: "./trainticket.png",
    tag: ["All", "Window"],
    gitUrl: "https://github.com/HueVuong12/TrainTickets",
    previewUrl: "",
  },
  {
    id: 3,
    title: "Cinema Management App",
    description: "Cinema management application allows booking tickets, managing movie schedules, revenue,...",
    image: "./Cinema.png",
    tag: ["All", "Window"],
    gitUrl: "https://github.com/HaManhHung003/Cinema",
    previewUrl: "",
  },

];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
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
        My Projects
      </h2>
      <div className="text-white flex flex-row flex-wrap justify-center items-center gap-2 py-6 ">
      <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Favourite"
          isSelected={tag === "Favourite"}
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
        <ProjectTag
          onClick={handleTagChange}
          name="Window"
          isSelected={tag === "Window"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Rest Api"
          isSelected={tag === "Rest Api"}
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
