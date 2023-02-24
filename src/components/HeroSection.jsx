import React from "react";
import Navbar from "./Navbar";

export default function HeroSection(props) {
  return (
    <section id="hero-section" className="border-b">
      {
        <div className="hero-text my-16 max-w-3xl">
          <h1 className="text-4xl font-bold md:text-6xl font-mainFont">Öğrendiğim & Deneyimlediğim her şey</h1>
          <p className=" text-by-gray-400 font-mainFont text-xl py-8">Bu blogta frontend developer olma yolculuğumda öğrendiğim ve deneyimlediğim şeyleri yazıyorum.</p>
        </div>
      }
    </section>
  );
}
