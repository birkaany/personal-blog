import React from "react";
import Navbar from "./Navbar";

export default function HeroSection(props) {
  return (
    <section id="hero-section" className="border-b">
      {
        <div className="hero-text my-16 max-w-3xl">
          <h1 className=" font-bold text-6xl font-mainFont">Things I have learned & experienced</h1>
          <p className=" text-by-gray-400 font-mainFont text-xl py-8">In this blog, I write about the experiences and things I have learned on my journey to become a frontend developer.</p>
        </div>
      }
    </section>
  );
}
