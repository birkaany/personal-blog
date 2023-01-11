import React from "react";
import { Link, useParams } from "react-router-dom";

export default function HeroSection(props) {
  const url = useParams();
  return (
    <section id="hero-section" className="container mx-auto border-b">
      {
        <div className="hero-text my-16 max-w-3xl">
          <h1 className=" font-bold text-6xl font-mainFont">Things I have learned & experienced</h1>
          <p className=" text-by-gray-400 font-mainFont text-xl py-8">In this blog, I write about the experiences and things I have learned on my journey to become a frontend developer.</p>
        </div>
      }

      <nav>
        <ul className="flex gap-5">
          <li className="navbar-item">
            <Link to="/">Articles</Link>
          </li>
          <li className="navbar-item">
            <Link to="/projects">Projects</Link>
          </li>
          <li className="navbar-item">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </section>
  );
}
