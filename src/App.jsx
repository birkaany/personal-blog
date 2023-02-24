import React from "react";
import { Routes, Route } from "react-router-dom";

import { PostList, Projects, Contact, Post } from "./components";
import Project from "./components/Project";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<PostList />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:projectId" element={<Project />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/post/:postId" element={<Post />} />
      </Routes>
    </>
  );
}
