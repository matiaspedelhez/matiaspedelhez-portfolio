import Image from "next/image";
import styles from "./DetailedProject.module.scss";
import AppliedTools from "../AppliedTools/AppliedTools";
import locales from "./locales";

import arrow_right from "/public/assets/arrow-right.svg";
import new_tab from "/public/assets/new-tab.svg";

const DetailedProject = ({ queryData, locale }) => {
  return (
    <div className={styles.parent_detailedproject}>
      <div className={styles.DetailedProject}>
        <div className={styles.imageContainer}>
          <Image
            src={queryData.imageUrl}
            objectFit="cover"
            layout="fill"
            alt={queryData.id}
          />
        </div>
        <div className={styles.textContainer}>
          <h1>{queryData.name[locale]}</h1>
          <h3>{queryData.longDesc[locale]}</h3>
          <AppliedTools tools={queryData.tools} />
          <a
            target="_blank"
            rel="noreferrer"
            className={`${styles.deploy} ${styles.button}`}
            href={queryData.deploy}
          >
            <span>{locales[locale].deployment}</span>
            <Image src={new_tab} alt="new-tab" height="24px" />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            className={`${styles.respository} ${styles.button}`}
            href={queryData.repository}
          >
            <span>{locales[locale].repository}</span>{" "}
            <Image src={arrow_right} alt="arrow_right" height="32px" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default DetailedProject;
