import Navbar from "../../components/Navbar/Navbar";
import projects from "/public/myProjects";
import { useRouter } from "next/router";

export default function ProjectById() {
  const query = useRouter().query;
  const locale = useRouter().locale;
  const [queriedElement] = projects.filter((e) => e.id === query.projectId);

  return queriedElement ? (
    <div>
      <Navbar />
      <h1>{queriedElement.name[locale]}</h1>
      <h1>{queriedElement.shortDesc[locale]}</h1>
    </div>
  ) : (
    <div>
      <Navbar />
      <h3>unfortunately, we didn't find the requested element.</h3>
    </div>
  );
}
