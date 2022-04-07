import styles from "./QuickViewProjects.module.scss";
import { motion } from "framer-motion";
import Image from "next/image";

import projects from "/public/myProjects";
import { useState } from "react";

const QuickViewProjects = () => {
  const [hoveringProject, setHoveringProject] = useState("");

  const projectsOnView = projects
    .filter((p) => projects.indexOf(p) < 2) //first 2 items
    .map((project) => (
      <motion.div
        key={project.id}
        className={styles.project}
        onHoverStart={() => setHoveringProject(project.id)}
        onHoverEnd={() => setHoveringProject("")}
        whileHover={{
          scale: 1.03,
          zIndex: 10,
        }}
        whileTap={{ scale: 0.95 }}
      >
        <Image src={project.imageUrl} objectFit="cover" layout="fill" />
        <div className={styles.black_top}></div>

        <div
          style={
            hoveringProject === project.id ? { opacity: 1 } : { opacity: 0 }
          }
          className={styles.project_text}
        >
          <p>{project.name}</p>
          <p>{project.shortDesc}</p>
        </div>
      </motion.div>
    ));

  return (
    <motion.div
      initial={{ opacity: 0, x: 200 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className={styles.QuickViewProjects}
    >
      <h1 className={styles.title}>What I do</h1>
      <div className={styles.projects}>{projectsOnView}</div>
    </motion.div>
  );
};

export default QuickViewProjects;
