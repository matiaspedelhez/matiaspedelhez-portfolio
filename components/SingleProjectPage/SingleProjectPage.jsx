import Image from "next/image";
import styles from "./SingleProjectPage.module.scss";
import AppliedTools from "../AppliedTools/AppliedTools";
import locales from "./locales";

const SingleProjectPage = ({ queryData, locale }) => {
  return (
    <div className={styles.SingleProjectPage}>
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

export default SingleProjectPage;
