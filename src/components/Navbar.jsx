import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <ul className="flex gap-5">
        <li className="navbar-item active">
          <NavLink activeclassname="active" to="/">
            Articles
          </NavLink>
        </li>
        <li className="navbar-item">
          <NavLink to="/projects">Projects</NavLink>
        </li>
        <li className="navbar-item">
          <NavLink to="/contact">Contact</NavLink>
        </li>
      </ul>
    </nav>
  );
}
