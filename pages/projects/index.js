import { useState } from "react";
import Project from "../../components/Project/Project";
import myProjects from "/public/myProjects";
import { useRouter } from "next/router";

export default function Projects() {
  //bug: in order to prevent async bug on useState, implement useEffect with handleSetFiltered code.
  const { locale } = useRouter();
  const [searchBar, setSearchBar] = useState("");
  const [selectedTools, setSelectedTools] = useState([]);
  const [filtered, setFiltered] = useState(myProjects);

  const handleSetFiltered = () => {
    if (searchBar !== "" /* false */ || selectedTools.length > 0) {
      console.log("entered AAAAAAAA");
      setFiltered(
        filtered.filter(
          (project) =>
            project.name[locale]
              .toLowerCase()
              .includes(searchBar.toLowerCase()) &&
            selectedTools.some((tool) => project.tools.includes(tool))
        )
      );
    } else {
      console.log("entré al else!");
      setFiltered(myProjects);
    }
  };

  const handleSetSelectedTools = (tool) => {
    if (selectedTools.includes(tool)) {
      //remove tool
      setSelectedTools(selectedTools.filter((e) => e !== tool));
    } else {
      //add tool
      setSelectedTools([...selectedTools, tool]);
    }
    handleSetFiltered();
  };

  const createNewTool = (name) => {
    return <button onClick={() => handleSetSelectedTools(name)}>{name}</button>;
  };

  console.log("tools:", selectedTools);
  console.log("searchbar:", searchBar);

  return (
    <div>
      <input
        value={searchBar}
        type="text"
        onChange={(e) => setSearchBar(e.target.value)}
      ></input>
      {filtered.map((project) => (
        <Project project={project} key={project.id} />
      ))}
      <button onClick={handleSetFiltered}>search</button>
      {createNewTool("react")}
      {createNewTool("python")}
    </div>
  );
}
