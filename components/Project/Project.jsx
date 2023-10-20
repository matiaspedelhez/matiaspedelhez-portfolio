import styles from "./Project.module.scss";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";

const Project = ({ project }) => {
  const [hoveringProject, setHoveringProject] = useState(false);
  const { locale } = useRouter();

  return (
    <Link href={`/projects/${project.id}`}>
      <div
        className={styles.project}
        onMouseOver={() => setHoveringProject(true)}
        onMouseLeave={() => setHoveringProject(false)}
      >
        <Image src={project.imageUrl} objectFit="cover" layout="fill" />
        <div className={styles.black_top} />
        <div
          style={hoveringProject ? { opacity: 1 } : { opacity: 0 }}
          className={styles.project_text}
        >
          <p className={styles.project_title_text}>{project.name[locale]}</p>
          <p className={styles.project_description_text}>
            {project.shortDesc[locale]}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default Project;
