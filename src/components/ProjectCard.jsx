import React from "react";
import Icon from "./Icon";
import { Link } from "react-router-dom";

export default function ProjectCard({ id, name, content }) {
  return (
    <li className="flex flex-col gap-3 border-b py-6">
      <h2>{name}</h2>
      <p>{content}</p>
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
