import styles from "./ContactForm.module.scss";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
const validate = require("validate.js");
import constraints from "./validation";
import Image from "next/image";

export default function ContactForm() {
  const { locale } = useRouter();
  const [formContent, setFormContent] = useState({ fields: {} });
  const [formErrors, setFormErrors] = useState({ fields: {} });
  const [sentEmail, setSentEmail] = useState(false);
  let isSafari = undefined;

  useEffect(() => {
    if (window.safari !== undefined) {
      isSafari = true;
    }
  }, []);

  const handleFormContent = (id, event) => {
    const value = event.target.value.length ? event.target.value : undefined;
    setFormContent({
      fields: { ...formContent.fields, [id]: value },
    });
  };

  const handleFormSubmit = () => {
    //pass to useeffect somehow
    const validation = validate(formContent["fields"], constraints);
    setFormErrors({
      fields: validation ? validation : {},
    });

    if (Object.keys(formErrors.fields).length === 0) {
      //send mail
      setSentEmail(true);
      fetch("api/mailHandler", {
        method: "post",
        body: JSON.stringify(formContent),
      });
      console.log("hello");
    }
  };

  const formSection = (params) => {
    const doesError =
      formErrors.fields === undefined ? false : formErrors.fields[params.id];

    const errorStyling = doesError
      ? { margin: "1.5rem 0 0 0" }
      : { margin: "" };
    return (
      <section className={styles.field}>
        <p style={doesError ? { opacity: 1 } : {}} className={styles.error}>
          {doesError ? formErrors.fields[params.id] : ""}
        </p>

        <div className={styles.ContactContainer}>
          <div style={errorStyling} className={styles.test}>
            <Image
              style={isSafari ? errorStyling : ""}
              height="24px"
              className={styles.icon}
              src={require(`/public/assets/form_assets/${params.id}.svg`)}
            />
          </div>

          <input
            type="text"
            placeholder={params.placeholder}
            onChange={(e) => handleFormContent(params.id, e)}
            value={formContent[params.id]}
            className={styles.input}
            style={errorStyling}
          />

          {params.required && (
            <p style={errorStyling} className={styles.required}>
              *
            </p>
          )}
        </div>
      </section>
    );
  };

  return (
    <div className={styles.ContactForm}>
      <div className={styles.title}>
        <h1>Contact me</h1>
        <p>Fill up the form below to send me a message.</p>
      </div>
      {formSection({
        id: "name",
        placeholder: "Full Name",
        required: true,
      })}
      {formSection({
        id: "email",
        placeholder: "Email Address",
        required: true,
      })}
      {formSection({
        id: "phone",
        placeholder: "Phone Number",
        required: false,
      })}
      {formSection({
        id: "message",
        placeholder: "Your message",
        required: true,
      })}
      <button className={styles.submit_button} onClick={handleFormSubmit}>
        Submit
      </button>
      {sentEmail && <p className={styles.submited}>Message submited</p>}
    </div>
  );
}
