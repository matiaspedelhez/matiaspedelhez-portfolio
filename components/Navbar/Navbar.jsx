import styles from "./Navbar.module.scss";
import Image from "next/image";
import logoImage from "/public/navbar-logo.png";
import LanguageButton from "../LanguageButton/LanguageButton";
import { Router, useRouter } from "next/router";
import locales from "./locales";

const Navbar = () => {
  const locale = useRouter().locale;

  return (
    <nav className={styles.nav}>
      <div className={styles.logo_lang}>
        <Image src={logoImage} layout="fixed" />
        <LanguageButton />
      </div>
      <div className={styles.links}>
        {locales[locale].nav.map((string) => {
          return <p>{string}</p>;
        })}
      </div>
    </nav>
  );
};

export default Navbar;
