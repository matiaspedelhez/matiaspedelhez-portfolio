import Introduction from "../components/Introduction/Introduction";
import ProjectsSection from "../components/ProjectsSection/ProjectsSection";

import Head from "next/head";
import { useRouter } from "next/router";

export default function Home() {
  const { locale } = useRouter();
  return (
    <>
      <Head>
        <title>{locale === "en" ? "Home" : "Inicio"}</title>
      </Head>
      <Introduction />
      <ProjectsSection />
    </>
  );
}
