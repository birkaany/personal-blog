import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <ul className="flex gap-5">
        <li className="navbar-item active">
          <NavLink activeclassname="active" to="/">
            Yazılarım
          </NavLink>
        </li>
        <li className="navbar-item">
          <NavLink to="/projects">Projelerim</NavLink>
        </li>
      </ul>
    </nav>
  );
}
