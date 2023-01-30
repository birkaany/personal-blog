import React from "react";
import Icon from "./Icon";
import { Link } from "react-router-dom";

export default function ProjectCard({ project }) {
  const {
    elements: {
      project_title: { value: name },
      project_content: { value: content },
      project_github_link: { value: project_github },
      project_live_demo_link: { value: livedemo },
    },
    system: { id },
  } = project;

  return (
    <li className="flex flex-col gap-3 border-b py-6">
      <h2>{name}</h2>
      <div className="line-clamp-4" dangerouslySetInnerHTML={{ __html: content }}></div>
      <div className="project-buttons flex gap-3 my-3">
        <Link to={`/projects/${id}`} className="project-button">
          Details
          <span>
            <Icon icon="arrow-right" size={15} />
          </span>
        </Link>
      </div>
    </li>
  );
}
