import projects from "/public/myProjects";
import { useRouter } from "next/router";
import DetailedProject from "../../components/DetailedProject/DetailedProject";

export default function ProjectById() {
  const { query, locale } = useRouter();
  const [queryData] = projects.filter((e) => e.id === query.projectId);

  return queryData ? (
    <div>
      <DetailedProject queryData={queryData} locale={locale} />
    </div>
  ) : (
    <div>
      <h3>Unfortunately, we couldn't find the requested element.</h3>
    </div>
  );
}
