import styles from "./RecentProjects.module.scss";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import locales from "./locales";
import { useRouter } from "next/router";

import projects from "/public/myProjects";
import { useState } from "react";

const RecentProjects = () => {
  const [hoveringProject, setHoveringProject] = useState("");
  const { locale } = useRouter();

  const projectsOnView = projects
    .filter((p) => projects.indexOf(p) < 2) //first 2 items
    .map((project) => (
      <Link href={`/projects/${project.id}`}>
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
          <div className={styles.black_top} />
          <div
            style={
              hoveringProject === project.id ? { opacity: 1 } : { opacity: 0 }
            }
            className={styles.project_text}
          >
            <p className={styles.project_title_text}>{project.name[locale]}</p>
            <p className={styles.project_description_text}>
              {project.shortDesc[locale]}
            </p>
          </div>
        </motion.div>
      </Link>
    ));

  return (
    <motion.div
      initial={{ opacity: 0, x: 200 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className={styles.RecentProjects}
    >
      <h1 className={styles.title}>{locales[locale].title}</h1>
      <div className={styles.projects}>{projectsOnView}</div>
      <Link href="/projects">
        <a className={styles.more}>{locales[locale].more}</a>
      </Link>
    </motion.div>
  );
};

export default RecentProjects;
