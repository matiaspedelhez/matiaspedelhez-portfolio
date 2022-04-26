import projects from "/public/myProjects";
import { useRouter } from "next/router";
import DetailedProject from "../../components/DetailedProject/DetailedProject";
import RecentProjects from "../../components/RecentProjects/RecentProjects";
import Head from "next/head";

export default function ProjectById() {
  const { query, locale } = useRouter();
  const [queryData] = projects.filter((e) => e.id === query.projectId);

  return queryData ? (
    <div>
      <Head>
        <title>{queryData.name[locale]}</title>
      </Head>
      <DetailedProject queryData={queryData} locale={locale} />
      <RecentProjects currentProjectId={queryData.id} />
    </div>
  ) : (
    <div>
      <h3>{`Unfortunately, we couldn\'t find the requested element.`}</h3>
    </div>
  );
}
