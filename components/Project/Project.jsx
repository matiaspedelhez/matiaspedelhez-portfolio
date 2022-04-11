import styles from "./Project.module.scss";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/router";

const Project = ({ project }) => {
  const [hoveringProject, setHoveringProject] = useState("");
  const { locale } = useRouter();

  return (
    <Link href={`/projects/${project.id}`}>
      <motion.div
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
  );
};

export default Project;
