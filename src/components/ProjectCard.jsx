import React from "react";
import { Link } from "react-router-dom";

export default function ProjectCard({ project }) {
  const {
    elements: {
      project_title: { value: name },
      project_content: { value: content },
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
