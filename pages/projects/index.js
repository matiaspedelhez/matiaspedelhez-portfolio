import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";

import styles from "/styles/projects.module.scss";
import Project from "../../components/Project/Project";
import myProjects from "/public/myProjects";
import locales from "/public/project_locales";

export default function Projects() {
  const { locale } = useRouter();
  const [searchBar, setSearchBar] = useState("");
  const [selectedTools, setSelectedTools] = useState([]);
  const [filtered, setFiltered] = useState(myProjects);

  useEffect(() => {
    if (searchBar !== "" || selectedTools.length !== 0) {
      setFiltered(
        myProjects.filter(
          (p) =>
            (p.name[locale].toLowerCase().includes(searchBar.toLowerCase()) ||
              p.tools.includes(searchBar.toLocaleLowerCase())) &&
            selectedTools.every((value) => {
              return p.tools.includes(value);
            })
        )
      );
    } else {
      setFiltered(myProjects);
    }
  }, [searchBar, selectedTools]);

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
        key={name}
      >
        {name}
      </button>
    );
  };

  const commonTools = () => {
    //returns the three less common languages across all projects
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
      return b[1] - a[1];
    });

    return countArr.filter((el) => countArr.indexOf(el) > 3);
  };

  return (
    <div className={styles.index}>
      <Head>
        <title>{locales[locale].title}</title>
      </Head>
      <h1>{locales[locale].title}</h1>
      <input
        placeholder={locales[locale].search}
        className={styles.inputField}
        value={searchBar}
        onChange={(e) => setSearchBar(e.target.value)}
      />
      <div className={styles.tools}>
        <h4>{locales[locale].filters}</h4>
        {commonTools().map((e) => createNewTool(e[0]))}
      </div>
      <div className={styles.projects}>
        {filtered.map((project) => (
          <Project project={project} key={project.id} />
        ))}
      </div>
    </div>
  );
}
