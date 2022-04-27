import styles from "./Footer.module.scss";
import locales from "./locales";
import { useRouter } from "next/router";
import Image from "next/image";
import robot_emoji from "../../public/assets/robot_emoji.png";

export default function Footer() {
  const { locale } = useRouter();

  return (
    <div className={styles.Footer}>
      <Image src={robot_emoji} height="25px" width="25px" alt="emoji" />
      <span> {locales[locale].credits}</span>
      <a
        className={styles.name}
        href="https://www.linkedin.com/in/matias-pedelhez-a84b061b4/"
        target="_blank"
        rel="noreferrer"
      >
        Matías Pedelhez
      </a>
      <p>.</p>
    </div>
  );
}
