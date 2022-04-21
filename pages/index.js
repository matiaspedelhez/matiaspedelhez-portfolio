import Navbar from "../components/Navbar/Navbar";
import Introduction from "../components/Introduction/Introduction";
import RecentProjects from "../components/RecentProjects/RecentProjects";
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
      <RecentProjects />
    </>
  );
}
