import styles from "./LanguageButton.module.scss";
import Image from "next/image";
import isRendered from "/public/isRendered";
import { useRouter } from "next/router";
import locales from "./locales";

import flag_us from "/public/assets/lang_us.svg";
import flag_es from "/public/assets/lang_es.svg";
import arrow_down from "/public/assets/arrow_down.svg";

const LanguageButton = () => {
  const languageMenu = undefined;
  if (isRendered())
    languageMenu = document.querySelector(`.${styles.sub_menu}`);

  const router = useRouter();
  const { pathname, asPath, query } = router;
  const locale = router.locale;

  const flags = {
    en: flag_us,
    es: flag_es,
  };

  function openLanguageMenu() {
    if (languageMenu != undefined) {
      if (languageMenu.style.display == "flex") {
        languageMenu.style.display = "none";
      } else {
        languageMenu.style.display = "flex";
      }
    }
  }

  function closeLanguageMenu() {
    if (languageMenu != undefined) {
      languageMenu.style.display = "none";
    }
  }

  return (
    <div id={styles.LanguageButton} onClick={openLanguageMenu}>
      <Image
        src={flags[locale]}
        width="22px"
        height="22px"
        className="styles.flag_img"
      />
      <Image src={arrow_down} width="12px" height="12px" />
      <div className={styles.sub_menu} onMouseLeave={closeLanguageMenu}>
        <div
          className={styles.lang_item}
          onClick={() =>
            router.push({ pathname, query }, asPath, { locale: "en" })
          }
        >
          <Image
            src={flag_us}
            width="22px"
            height="22px"
            className="styles.flag_img"
          />
          <p>{locales[locale].lang_item[0]}</p>
        </div>
        <div
          className={styles.lang_item}
          onClick={() =>
            router.push({ pathname, query }, asPath, { locale: "es" })
          }
        >
          <Image
            src={flag_es}
            width="22px"
            height="22px"
            className="styles.flag_img"
          />
          <p>{locales[locale].lang_item[1]}</p>
        </div>
      </div>
    </div>
  );
};

export default LanguageButton;
