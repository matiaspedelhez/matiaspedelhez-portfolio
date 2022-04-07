import locales from "./locales";
import styles from "./Introduction.module.scss";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import ar_flag from "/public/assets/ar_flag.svg";
import { motion } from "framer-motion";

function Introduction() {
  const locale = useRouter().locale;
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
          return ind % 2 === 0 ? (
            <span key={str}>{str}</span>
          ) : (
            <span className={styles.blue_accent} key={str}>
              {str}
            </span>
          );
        })}
      </h1>
      <p className={styles.subtitle}>
        {[
          locales[locale].subtitle[0],
          <Image src={ar_flag} width="28px" height={"28px"} />,
          locales[locale].subtitle[1],
        ]}
      </p>
      <Link href="/contact">
        <a className={styles.more}>{locales[locale].more}</a>
      </Link>
    </motion.div>
  );
}

export default Introduction;
