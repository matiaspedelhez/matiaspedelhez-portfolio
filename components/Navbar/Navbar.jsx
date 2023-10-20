import styles from "./Navbar.module.scss";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import {
  AiOutlineGithub,
  AiOutlinePaperClip,
  AiFillLinkedin,
} from "react-icons/ai";

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
        <div className={styles.links_social}>
          <a
            href={"https://www.linkedin.com/in/matias-pedelhez/"}
            target="_blank"
            rel="noreferrer"
          >
            <AiFillLinkedin size={28} />
          </a>

          <a
            href={"https://github.com/matiaspedelhez"}
            target="_blank"
            rel="noreferrer"
          >
            <AiOutlineGithub size={28} />
          </a>
          <a
            href="/matias-pedelhez-resume.pdf"
            alt="Download resume"
            target="_blank"
            rel="noreferrer"
            locale={false}
          >
            <AiOutlinePaperClip size={28} />
          </a>
        </div>
      </div>
      <div className={styles.links} onClick={() => setMenuOpen(false)}></div>
    </nav>
  );
};

export default Navbar;
