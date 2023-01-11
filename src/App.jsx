import React from "react";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import PostList from "./components/PostList";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Post from "./components/Post";

export default function App() {
  const [postData, setPostData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const res = await fetch("http://localhost:1337/api/posts");
    const data = await res.json();
    setPostData(data);
  };
  return (
    <>
      <Header />
      <HeroSection />

      <Routes>
        <Route path="/" element={<PostList data={postData} />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/post/:postId" element={<Post data={postData} />} />
      </Routes>

      <Footer />
    </>
  );
}
