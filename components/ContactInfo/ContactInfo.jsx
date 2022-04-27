import ContactSocials from "../ContactSocials/ContactSocials";
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

        <p>{locales[locale].location}</p>
        <ContactSocials />
      </div>
    </div>
  );
}
