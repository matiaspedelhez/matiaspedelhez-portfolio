import styles from "./Navbar.module.scss";
import Image from "next/image";
import logoImage from "/public/navbar-logo.png";
import LanguageButton from "../LanguageButton/LanguageButton";

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.logo_lang}>
        <Image src={logoImage} layout="fixed" />
        <LanguageButton />
      </div>
    </nav>
  );
};

export default Navbar;
