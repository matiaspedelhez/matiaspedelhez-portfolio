import styles from "./Navbar.module.scss";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import Hamburger from "hamburger-react";
import { motion } from "framer-motion";

import logoImage from "/public/assets/navbar-logo.png";
import locales from "./locales";
import LanguageButton from "../LanguageButton/LanguageButton";
import isRendered from "/public/isRendered";

const Navbar = () => {
  const { locale, pathname } = useRouter();

  const [menuOpen, setMenuOpen] = useState(false);
  const [showMenuButton, setShowMenuButton] = useState(false);

  useEffect(() => {
    if (isRendered) {
      function isButtonRendered() {
        if (window.innerWidth < 960) {
          setMenuOpen(false);
          setShowMenuButton(true);
        } else {
          setMenuOpen(true);
          setShowMenuButton(false);
        }
      }
      isButtonRendered();
      window.addEventListener("resize", isButtonRendered);
    }
    return () => window.removeEventListener("resize", isButtonRendered);
  }, []);

  const selectedLinkStyle = {
    color: "#1179F7",
  };

  return (
    <nav className={styles.nav}>
      <div className={styles.navMobile}>
        <div className={styles.logo_lang}>
          <Link href={"/"}>
            <Image
              className={styles.logo_image}
              src={logoImage}
              layout="intrinsic"
            />
          </Link>
          <LanguageButton />
        </div>

        {showMenuButton && (
          <Hamburger toggled={menuOpen} toggle={setMenuOpen} />
        )}
      </div>
      <motion.div
        animate={showMenuButton ? (menuOpen ? { y: "11rem" } : { y: 0 }) : {}}
        className={styles.links}
      >
        <Link href={"/"}>
          <a
            style={pathname === "/" ? selectedLinkStyle : {}}
            className={styles.a_link}
          >
            {locales[locale].nav[0]}
          </a>
        </Link>
        <Link href={"/projects"}>
          <a
            style={pathname === "/projects" ? selectedLinkStyle : {}}
            className={styles.a_link}
          >
            {locales[locale].nav[1]}
          </a>
        </Link>
        <Link href={"/contact"}>
          <a
            style={pathname === "/contact" ? selectedLinkStyle : {}}
            className={styles.a_link}
          >
            {locales[locale].nav[2]}
          </a>
        </Link>
      </motion.div>
    </nav>
  );
};

export default Navbar;
