import Image from "next/image";
import styles from "./ContactSocials.module.scss";

import linkedin_logo from "../../public/assets/linkedin_logo.svg";
import github_logo from "../../public/assets/github_logo.svg";

export default function ContactSocials() {
  return (
    <div className={styles.ContactSocials}>
      <a
        href="https://www.linkedin.com/in/matias-pedelhez-a84b061b4/"
        target="_blank"
        rel="noopener noreferrer"
      >
        {" "}
        <Image alt="linkedin" src={linkedin_logo} height="32px" />
      </a>
      <a
        href="https://github.com/matiaspedelhez"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image alt="github" src={github_logo} height="32px" />
      </a>
    </div>
  );
}
