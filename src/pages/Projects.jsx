import React from "react";
import { useState, useEffect } from "react";
import LayoutProvider from "../hooks/useLayout";
import ProjectCard from "../components/ProjectCard";

import client from "../data/client";

export default function Projects() {
  const [projectData, setProjectData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const { data } = await client.items().type("project").toPromise();
    setProjectData(data.items);
  }

  return (
    <LayoutProvider>
      <section id="projectList">
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-6">
          {projectData?.map((project) => (
            <ProjectCard project={project} key={project.system.id} />
          ))}
        </ul>
      </section>
    </LayoutProvider>
  );
}
