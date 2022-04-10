import styles from "./AppliedTools.module.scss";
import toolImages from "/public/tools";
import Image from "next/image";

const AppliedTools = ({ tools }) => {
  const appliedTools = toolImages.filter((e) => tools.includes(e.id));
  return (
    <div className={styles.AppliedTools}>
      {appliedTools.map((e) => {
        return (
          <div className={styles.item} key={e.id}>
            <Image src={e.image} objectFit="contain" layout="fill" />
            <p className={styles.item_name}>{e.id}</p>
          </div>
        );
      })}
    </div>
  );
};

export default AppliedTools;
