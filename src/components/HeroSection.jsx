import React from "react";
export default function HeroSection() {
  return (
    <section id="hero-section" className="container mx-auto border-b">
      <div className="hero-text my-16 max-w-3xl">
        <h1 className=" font-bold text-6xl font-mainFont">Things I have learned & experienced</h1>
        <p className=" text-by-gray-400 font-mainFont text-xl py-8">In this blog, I write about the experiences and things I have learned on my journey to become a frontend developer.</p>
      </div>
      <nav>
        <ul className="flex gap-5">
          <li className="navbar-item">Articles</li>
          <li className="navbar-item">Projects</li>
        </ul>
      </nav>
    </section>
  );
}
