import styles from "./Navbar.module.scss";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import Hamburger from "hamburger-react";

import logoImage from "/public/navbar-logo.png";
import locales from "./locales";
import LanguageButton from "../LanguageButton/LanguageButton";
import isRendered from "/public/isRendered";

const Navbar = () => {
  const locale = useRouter().locale;
  const [menuOpen, setMenuOpen] = useState(false);
  const [showMenuButton, setShowMenuButton] = useState(false);

  useEffect(() => {
    if (isRendered) {
      function isButtonRendered() {
        if (window.innerWidth < 960) setShowMenuButton(true);
        else setShowMenuButton(false);
      }
      window.addEventListener("resize", isButtonRendered);
    }

    return () => window.removeEventListener("resize", isButtonRendered);
  }, []);

  return (
    <nav className={styles.nav}>
      <div className={styles.logo_lang}>
        <Image src={logoImage} layout="fixed" />
        <LanguageButton />
      </div>
      {showMenuButton && <Hamburger toggled={menuOpen} toggle={setMenuOpen} />}
      <div className={styles.links}>
        <Link href={"/"}>
          <a>{locales[locale].nav[0]}</a>
        </Link>
        <Link href={"/projects"}>
          <a>{locales[locale].nav[1]}</a>
        </Link>
        <Link href={"/contact"}>
          <a>{locales[locale].nav[2]}</a>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
