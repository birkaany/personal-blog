import React from "react";
import LayoutProvider from "../hooks/useLayout";
import { useState, useEffect } from "react";
import Icon from "./Icon";
import { useParams } from "react-router-dom";
import client from "../data/client";

export default function Project() {
  const [projectData, setProjectData] = useState([]);
  const { projectId } = useParams();

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const { data } = await client.items().type("project").equalsFilter("system.id", projectId).toPromise();
    setProjectData(data.items);
  }

  return (
    <LayoutProvider>
      <article>
        <div className="post">
          <h1 className="text-by-black-800 text-3xl font-bold">{projectData[0]?.elements.project_title.value}</h1>
          <div dangerouslySetInnerHTML={{ __html: projectData[0]?.elements.project_content.value }}></div>
          <button className="project-button">
            Details
            <span>
              <Icon icon="arrow-right" size={15} />
            </span>
          </button>
        </div>
      </article>
    </LayoutProvider>
  );
}
