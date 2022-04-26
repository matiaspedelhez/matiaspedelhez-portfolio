import styles from "./RecentProjects.module.scss";
import Link from "next/link";
import locales from "./locales";
import { useRouter } from "next/router";
import Project from "../Project/Project";
import projects from "/public/myProjects";

const RecentProjects = ({ currentProjectId }) => {
  const { locale } = useRouter();

  const arrayOfProjects = () => {
    const arrayOfTwo = [];

    projects
      .filter((p) => p.id !== currentProjectId)
      .some((p) => {
        arrayOfTwo.push(p);
        if (arrayOfTwo.length === 2) return true;
      });

    return arrayOfTwo;
  };

  return (
    <div className={styles.RecentProjects}>
      <h1 className={styles.title}>{locales[locale].title}</h1>
      <div className={styles.projects}>
        {arrayOfProjects().map((project) => (
          <Project project={project} key={project.id} />
        ))}
      </div>
      <Link href="/">
        <span className={styles.more}>{locales[locale].more}</span>
      </Link>
    </div>
  );
};

export default RecentProjects;
