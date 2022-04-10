import Image from "next/image";
import styles from "./DetailedProject.module.scss";
import AppliedTools from "../AppliedTools/AppliedTools";
import locales from "./locales";

const DetailedProject = ({ queryData, locale }) => {
  //sugerencia: añadir barra de projectos relacionados, debajo. (para rellenar un poco el espacio vacío)
  return (
    <div className={styles.DetailedProject}>
      <div className={styles.imageContainer}>
        <Image src={queryData.imageUrl} objectFit="cover" layout="fill" />
      </div>
      <div className={styles.textContainer}>
        <h1>{queryData.name[locale]}</h1>
        <h3>{queryData.longDesc[locale]}</h3>
        <AppliedTools tools={queryData.tools} />
        <a
          target="_blank"
          className={`${styles.deploy} ${styles.button}`}
          href={queryData.deploy}
        >
          {locales[locale].deployment}
        </a>
        <a
          target="_blank"
          className={`${styles.respository} ${styles.button}`}
          href={queryData.repository}
        >
          {locales[locale].repository}
        </a>
      </div>
    </div>
  );
};

export default DetailedProject;