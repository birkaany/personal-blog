import React from "react";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import { HeroSection, PostList, Projects, Contact, Post } from "./components";
import Layout from "./components/Layout/Layout";
import Navbar from "./components/Navbar";

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
      <Routes>
        <Route path="/" element={<PostList data={postData} />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/post/:postId" element={<Post />} />
      </Routes>
    </>
  );
}
