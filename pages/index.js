import Navbar from "../components/Navbar/Navbar";
import Introduction from "../components/Introduction/Introduction";
import RecentProjects from "../components/RecentProjects/RecentProjects";

export default function Home() {
  return (
    <>
      <Navbar />
      <Introduction />
      <RecentProjects />
    </>
  );
}
