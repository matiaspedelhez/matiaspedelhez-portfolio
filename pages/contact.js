import Head from "next/head";
import { useRouter } from "next/router";
import ContactPage from "../components/ContactPage/ContactPage";

export default function Contact() {
  const { locale } = useRouter();
  return (
    <>
      <Head>
        <title>
          {locale === "en"
            ? "Matias Pedelhez: Contact"
            : "Matias Pedelhez: Contacto"}
        </title>
      </Head>
      <ContactPage />
    </>
  );
}
