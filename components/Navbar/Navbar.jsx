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
      if (window.innerWidth < 960) setShowMenuButton(true);

      function isButtonRendered() {
        if (window.innerWidth < 960) {
          setMenuOpen(false);
          setShowMenuButton(true);
        } else {
          setMenuOpen(true);
          setShowMenuButton(false);
        }
      }
      window.addEventListener("resize", isButtonRendered);
    }
    return () => window.removeEventListener("resize", isButtonRendered);
  }, []);

  useEffect(() => {
    if (isRendered) {
      const menu_dropdown = document.querySelector(`.${styles.links}`);
      if (menuOpen) {
        menu_dropdown.style.margin = "0";
      } else {
        menu_dropdown.style.margin = "-12rem 0 0 0";
      }
    }
  }, [menuOpen]);

  return (
    <nav className={styles.nav}>
      <div className={styles.navMobile}>
        <div className={styles.logo_lang}>
          <Image src={logoImage} layout="fixed" />
          <LanguageButton />
        </div>
        {showMenuButton && (
          <Hamburger toggled={menuOpen} toggle={setMenuOpen} />
        )}
      </div>
      <div className={styles.links}>
        <Link href={"/"}>
          <a className={styles.a_link}>{locales[locale].nav[0]}</a>
        </Link>
        <Link href={"/projects"}>
          <a className={styles.a_link}>{locales[locale].nav[1]}</a>
        </Link>
        <Link href={"/contact"}>
          <a className={styles.a_link}>{locales[locale].nav[2]}</a>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
