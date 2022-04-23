import { motion, AnimatePresence } from "framer-motion";
import styles from "./ProjectDetailedView.module.scss";

const ProjectDetailedView = ({ project, emptyItem }) => {
  return (
    <>
      {project && (
        <motion.div
          layoutId={project.id}
          className={styles.ProjectDetailedView}
        ></motion.div>
      )}
    </>
  );
};

export default ProjectDetailedView;
