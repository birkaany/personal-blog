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
      <Link to={`/projects/${id}`}>
        <h2 className="hover:text-yellow-400 transition-all">{name}</h2>
      </Link>
      <div className="line-clamp-4" dangerouslySetInnerHTML={{ __html: content }}></div>
      <div className="project-buttons flex gap-3 my-3"></div>
    </li>
  );
}
