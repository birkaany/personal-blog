import React from "react";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import { PostList, Projects, Contact, Post } from "./components";
import Project from "./components/Project";

export default function App() {
  const [postData, setPostData] = useState([]);

  return (
    <>
      <Routes>
        <Route path="/" element={<PostList data={postData} />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:projectId" element={<Project />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/post/:postId" element={<Post />} />
      </Routes>
    </>
  );
}
