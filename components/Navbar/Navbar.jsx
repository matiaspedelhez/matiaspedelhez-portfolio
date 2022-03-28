import styles from "./Navbar.module.scss";
import Image from "next/image";
import logoImage from "/public/navbar-logo.png";

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <div className="styles.logo-lang">
        <Image src={logoImage} layout="fixed" />
      </div>
    </nav>
  );
};

export default Navbar;
