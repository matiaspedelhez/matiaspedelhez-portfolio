import { useEffect, useState } from "react";
import { useRouter } from "next/router";

import styles from "/styles/projects.module.scss";
import Project from "../../components/Project/Project";
import myProjects from "/public/myProjects";
import { number } from "prop-types";

export default function Projects() {
  // !! feature: add dynamic "tool filters" rendering (i.e buttons for react, node, python, etc)
  const { locale } = useRouter();
  const [searchBar, setSearchBar] = useState("");
  const [selectedTools, setSelectedTools] = useState([]);
  const [filtered, setFiltered] = useState(myProjects);
  const three = [];

  useEffect(() => {
    three = commonTools();
    if (searchBar !== "" || selectedTools.length !== 0) {
      setFiltered(
        myProjects.filter(
          (p) =>
            p.name[locale].toLowerCase().includes(searchBar.toLowerCase()) &&
            selectedTools.every((value) => {
              return p.tools.includes(value);
            })
        )
      );
    } else {
      setFiltered(myProjects);
    }
  }, [searchBar, selectedTools]);

  useEffect(() => {
    commonTools();
  }, []);

  const handleSetSelectedTools = (tool) => {
    if (selectedTools.includes(tool)) {
      //remove tool
      setSelectedTools(selectedTools.filter((e) => e !== tool));
    } else {
      //add tool
      setSelectedTools([...selectedTools, tool]);
    }
  };

  const toolStyling = (name) => {
    if (selectedTools.includes(name)) {
      return { backgroundColor: "#1179F7" };
    } else {
      return { backgroundColor: "#202020" };
    }
  };

  const createNewTool = (name) => {
    return (
      <button
        className={styles.tool}
        onClick={() => handleSetSelectedTools(name)}
        style={toolStyling(name)}
      >
        {name}
      </button>
    );
  };

  const commonTools = () => {
    //returns the three most common languages across all projects
    const count = new Object();
    myProjects.forEach((project) => {
      project.tools.forEach((tool) => {
        if (count[tool] === undefined) {
          count[tool] = 0;
        }
        count[tool]++;
      });
    });
    const countArr = Object.entries(count).sort(function (a, b) {
      return a[1] - b[1];
    });

    return countArr.filter((el) => countArr.indexOf(el) > 3);
  };

  return (
    <div className={styles.index}>
      <input
        placeholder={"Search something..."}
        className={styles.inputField}
        value={searchBar}
        onChange={(e) => setSearchBar(e.target.value)}
      />
      <div className={styles.tools}>
        <h4>Filters:</h4>
        {three.forEach((e) => {
          <>hola</>;
        })}
      </div>
      <div className={styles.projects}>
        {filtered.map((project) => (
          <Project project={project} key={project.id} />
        ))}
      </div>
    </div>
  );
}
