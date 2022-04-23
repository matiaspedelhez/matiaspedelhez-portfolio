import locales from "./locales";
import styles from "./Introduction.module.scss";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import ar_flag from "/public/assets/ar_flag.svg";
import { motion } from "framer-motion";

function Introduction() {
  const { locale } = useRouter();

  return (
    <motion.div
      initial={{ opacity: 0, x: 200 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className={styles.Introduction}
    >
      <p className={styles.name}>{locales[locale].name}</p>
      <h1 className={styles.title}>
        {locales[locale].title.map((str, ind) => {
          return (
            <span key={str} className={ind % 2 === 0 ? "" : styles.blue_accent}>
              {str}
            </span>
          );
        })}
      </h1>
      <p className={styles.subtitle}>
        {[
          <text key={"subtitle_0"}>{locales[locale].subtitle[0]}</text>,
          <Image key={"image"} src={ar_flag} width="28px" height={"28px"} />,
          <text key={"subtitle_1"}>{locales[locale].subtitle[1]}</text>,
        ]}
      </p>
      <Link href="/contact">
        <a className={styles.more}>{locales[locale].more}</a>
      </Link>
    </motion.div>
  );
}

export default Introduction;
