import React from "react";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import { PostList, Projects, Contact, Post } from "./components";

export default function App() {
  const [postData, setPostData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const res = await fetch("http://localhost:1337/api/posts?sort[0]=id:desc");
    const data = await res.json();
    setPostData(data);
  };
  return (
    <>
      <div></div>
      <Routes>
        <Route path="/" element={<PostList data={postData} />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/post/:postId" element={<Post />} />
      </Routes>
    </>
  );
}
