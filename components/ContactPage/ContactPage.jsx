import ContactForm from "../ContactForm/ContactForm";
import ContactInfo from "../ContactInfo/ContactInfo";
import styles from "./ContactPage.module.scss";

export default function ContactPage() {
  return (
    <div className={styles.ContactPage}>
      <ContactInfo />
      <ContactForm />
    </div>
  );
}
