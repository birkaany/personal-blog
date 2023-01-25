import React from "react";
import { useState, useEffect } from "react";
import LayoutProvider from "../hooks/useLayout";
import ProjectCard from "../components/ProjectCard";

export default function Projects() {
  const [projectData, setProjectData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const res = await fetch("http://localhost:1337/api/projects?sort[0]=id:desc");
    const data = await res.json();
    setProjectData(data.data);
  };

  return (
    <LayoutProvider>
      <section id="projectList">
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-6">
          {projectData?.map((project) => {
            {
              return (
                <ProjectCard
                  key={project.id}
                  name={project.attributes.projectName}
                  content={project.attributes.projectContent}
                  github={project.attributes.githubLink}
                  demo={project.attributes.demoLink}
                />
              );
            }
          })}
        </ul>
      </section>
    </LayoutProvider>
  );
}
