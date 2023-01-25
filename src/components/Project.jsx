import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import LayoutProvider from "../hooks/useLayout";
import ReactMarkdown from "react-markdown";
import Icon from "./Icon";

export default function Project() {
  let { projectId } = useParams();
  const [projectData, setProjectData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const res = await fetch(`http://localhost:1337/api/projects/${projectId}`);
    const data = await res.json();
    setProjectData(data.data);
  };

  return (
    <LayoutProvider>
      <article>
        <div className="post">
          <h1 className="text-by-black-800 text-3xl font-bold">{projectData?.attributes?.projectName}</h1>
          <time className="text-by-gray-400 font-bold uppercase text-sm tracking-wider">{projectData?.attributes?.publishedAt}</time>

          <ReactMarkdown>{projectData?.attributes?.projectContent}</ReactMarkdown>
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
