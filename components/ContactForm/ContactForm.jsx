import styles from "./ContactForm.module.scss";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
const validate = require("validate.js");
import constraints from "./validation";
import Image from "next/image";
import locales from "./locales";

export default function ContactForm() {
  //use locales
  const { locale } = useRouter();
  const [formContent, setFormContent] = useState({ fields: {} });
  const [formErrors, setFormErrors] = useState({ fields: {} });
  const [showErrors, setShowErrors] = useState(false);
  const [sentEmail, setSentEmail] = useState(false);
  let isSafari = undefined;

  useEffect(() => {
    if (window.safari !== undefined) {
      isSafari = true;
    }
  }, []);

  useEffect(() => {
    const validation = validate(formContent["fields"], constraints);

    setFormErrors({
      fields: validation ? validation : {},
    });
  }, [formContent.fields]);

  const handleFormContent = (id, event) => {
    const value = event.target.value.length ? event.target.value : undefined;
    setFormContent({
      fields: { ...formContent.fields, [id]: value },
    });
  };

  const handleFormSubmit = () => {
    setShowErrors(true);

    if (Object.keys(formErrors.fields).length === 0 && !sentEmail) {
      //send mail
      fetch("api/mailHandler", {
        method: "post",
        body: JSON.stringify(formContent),
      });
      setSentEmail(true);
    }
  };

  const formSection = (params) => {
    const doesError = () => {
      if (showErrors) {
        return formErrors.fields === undefined
          ? false
          : formErrors.fields[params.id];
      } else {
        return false;
      }
    };

    const errorStyling = doesError()
      ? { margin: "1.5rem 0 0 0" }
      : { margin: "0" };

    return (
      <section className={styles.field}>
        <p style={doesError() ? { opacity: 1 } : {}} className={styles.error}>
          {doesError() ? formErrors.fields[params.id] : ""}
        </p>

        <div className={styles.ContactContainer}>
          <div style={errorStyling} className={styles.field_icon}>
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
        <h1>{locales[locale].title}</h1>
        <p>{locales[locale].subtitle}</p>
      </div>
      {formSection({
        id: "name",
        placeholder: locales[locale].name,
        required: true,
      })}
      {formSection({
        id: "email",
        placeholder: locales[locale].email,
        required: true,
      })}
      {formSection({
        id: "phone",
        placeholder: locales[locale].phone,
        required: false,
      })}
      {formSection({
        id: "message",
        placeholder: locales[locale].message,
        required: true,
      })}
      <button className={styles.submit_button} onClick={handleFormSubmit}>
        {locales[locale].submit}
      </button>
      {
        <p
          className={styles.submited}
          style={sentEmail ? { opacity: 1 } : { opacity: 0 }}
        >
          {locales[locale].success}
        </p>
      }
    </div>
  );
}
