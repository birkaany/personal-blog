import React from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import PostList from "./components/PostList";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Post from "./components/Post";

export default function App() {
  return (
    <>
      <Header />
      <HeroSection />

      <Routes>
        <Route path="/" element={<PostList />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/post" element={<Post />} />
      </Routes>

      <Footer />
    </>
  );
}
