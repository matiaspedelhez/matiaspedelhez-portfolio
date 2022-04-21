import styles from "./ContactInfo.module.scss";
import locales from "./locales";
import { useRouter } from "next/router";

export default function ContactInfo() {
  const { locale } = useRouter();
  return (
    <div className={styles.ContactInfo}>
      <div className={styles.text_container}>
        <p>
          {locales[locale].subtitle[0]}
          <span>{locales[locale].subtitle[1]}</span>
        </p>

        <h3>{locales[locale].more}</h3>
        <div>
          <p>{locales[locale].location}</p>
          <p>
            {locales[locale].socials_title}{" "}
            <a
              href="https://github.com/matiaspedelhez"
              target="_blank"
              className={styles.social_item}
            >
              GitHub
            </a>{" "}
            <a
              href="https://www.linkedin.com/in/matias-pedelhez-a84b061b4/"
              target="_blank"
              className={styles.social_item}
            >
              LinkedIn
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
