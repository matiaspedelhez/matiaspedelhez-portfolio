import styles from "./RecentProjects.module.scss";
import { motion } from "framer-motion";
import Link from "next/link";
import locales from "./locales";
import { useRouter } from "next/router";
import Project from "../Project/Project";
import projects from "/public/myProjects";

const RecentProjects = () => {
  const { locale } = useRouter();

  const projectsOnView = projects
    .filter((p) => projects.indexOf(p) < 2) //first 2 items
    .map((project) => <Project project={project} key={project.id} />);

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
        <span href="/projects" className={styles.more}>
          {locales[locale].more}
        </span>
      </Link>
    </motion.div>
  );
};

export default RecentProjects;
