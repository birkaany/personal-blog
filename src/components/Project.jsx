import React from "react";
import LayoutProvider from "../hooks/useLayout";
import { useState, useEffect, useRef } from "react";
import Icon from "./Icon";
import { useParams } from "react-router-dom";
import client from "../data/client";
import Prism from "prismjs";
import "/prismjs/themes/prism-duotone.css";

export default function Project() {
  const [projectData, setProjectData] = useState([]);
  const { projectId } = useParams();
  const codeRef = useRef(null);

  async function fetchData() {
    const { data } = await client.items().type("project").equalsFilter("system.id", projectId).toPromise();
    setProjectData(data.items);
  }

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (codeRef.current) {
      highlightCode();
    }
  }, [projectData]);

  function highlightCode() {
    const codeElements = codeRef.current.querySelectorAll("code");
    codeElements.forEach((code) => {
      const parent = code.parentElement;
      const pre = document.createElement("pre");
      parent.replaceChild(pre, code);
      pre.appendChild(code);
      code.className = "language-javascript";
      Prism.highlightElement(code);
    });
  }

  return (
    <LayoutProvider>
      <article>
        <div className="post">
          <h1 className="text-by-black-800 text-3xl font-bold">{projectData[0]?.elements.project_title.value}</h1>

          <div dangerouslySetInnerHTML={{ __html: projectData[0]?.elements.project_content.value }} ref={codeRef}></div>

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
