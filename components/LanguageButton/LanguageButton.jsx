import { useEffect } from "react";
import styles from "./LanguageButton.module.scss";
import Image from "next/image";
import flag_us from "/public/lang_us.svg";
import flag_es from "/public/lang_es.svg";
import arrow_down from "/public/arrow_down.svg";

// !! add state (*mark)

const LanguageButton = () => {
  const languageMenu = document.querySelector(`.${styles.sub_menu}`);
  function openLanguageMenu() {
    if (languageMenu.style.display == "flex") {
      languageMenu.style.display = "none";
    } else {
      languageMenu.style.display = "flex";
    }
  }

  function closeLanguageMenu() {
    languageMenu.style.display = "none";
  }

  return (
    <div id={styles.LanguageButton} onClick={openLanguageMenu}>
      <Image
        src={flag_us}
        width="22px"
        height="22px"
        className="styles.flag_img"
        // {*mark}
      />
      <Image src={arrow_down} width="12px" height="12px" />
      <div className={styles.sub_menu} onMouseLeave={closeLanguageMenu}>
        <div className={styles.lang_item}>
          <Image
            src={flag_us}
            width="22px"
            height="22px"
            className="styles.flag_img"
          />
          <p>English</p>
        </div>
        <div className={styles.lang_item}>
          <Image
            src={flag_es}
            width="22px"
            height="22px"
            className="styles.flag_img"
          />
          <p>Spanish</p>
        </div>
      </div>
    </div>
  );
};

export default LanguageButton;
