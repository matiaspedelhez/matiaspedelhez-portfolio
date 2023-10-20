import Experience from "../components/Experience/Experience";
import Introduction from "../components/Introduction/Introduction";
import ProjectsSection from "../components/ProjectsSection/ProjectsSection";

import Head from "next/head";
import { useRouter } from "next/router";

export default function Home() {
  const { locale } = useRouter();
  return (
    <>
      <Head>
        <title>
          {locale === "en"
            ? "Matias Pedelhez: Home"
            : "Matias Pedelhez: Inicio"}
        </title>
      </Head>
      <Introduction />
      {/* <Experience /> */}
      <ProjectsSection />
    </>
  );
}
