import Navbar from "../../components/Navbar/Navbar";
import projects from "/public/myProjects";
import { useRouter } from "next/router";
import SingleProjectPage from "../../components/SingleProjectPage/SingleProjectPage";

export default function ProjectById() {
  const query = useRouter().query;
  const locale = useRouter().locale;
  const [queryData] = projects.filter((e) => e.id === query.projectId);

  return queryData ? (
    <div>
      <SingleProjectPage queryData={queryData} locale={locale} />
    </div>
  ) : (
    <div>
      <h3>Unfortunately, we couldn't find the requested element.</h3>
    </div>
  );
}
