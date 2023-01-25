import React from "react";
import Icon from "./Icon";

export default function ProjectCard({ name, content }) {
  return (
    <li className="flex flex-col gap-3 border-b py-6">
      <h2>{name}</h2>
      <p>{content}</p>
      <div className="project-buttons flex gap-3 my-3">
        <button className="project-button">
          Details
          <span>
            <Icon icon="arrow-right" size={15} />
          </span>
        </button>
      </div>
    </li>
  );
}
