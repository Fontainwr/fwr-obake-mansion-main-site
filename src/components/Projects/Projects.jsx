import React from "react";
import styles from "./Projects.module.css";
import projects from "../../data/projects.json";
import { ProjectCard } from "./ProjectCard";

export const Projects = () => {
  return (
    <section className={styles.container} id="projects">
      <h2 className={styles.title}>OBAKE’s Mansion Shop</h2>
      <div className={styles.projects}>
        {projects.map((project, id) => {
          // Use public folder path
          const imagePath = "/assets/projects/project.png";
          return <ProjectCard key={id} project={{ ...project, imageSrc: imagePath }} />;
        })}
      </div>
    </section>
  );
};
