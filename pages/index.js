import Navbar from "../components/Navbar/Navbar";
import Introduction from "../components/Introduction/Introduction";
import QuickViewProjects from "../components/QuickViewProjects/QuickViewProjects";

export default function Home() {
  return (
    <>
      <Navbar />
      <Introduction />
      <QuickViewProjects />
    </>
  );
}
