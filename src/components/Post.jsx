import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import LayoutProvider from "../hooks/useLayout";

export default function Post() {
  let { postId } = useParams();
  const [postData, setPostData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const res = await fetch(`http://localhost:1337/api/posts/${postId}`);
    const data = await res.json();
    setPostData(data.data);
  };

  return (
    <LayoutProvider>
      <article>
        <div className="post container mx-auto">
          <h1 className="text-by-black-800 text-3xl font-bold">{postData?.attributes?.title}</h1>
          <time className="text-by-gray-400 font-bold uppercase text-sm tracking-wider">{postData?.attributes?.publishedAt}</time>

          <ReactMarkdown>{postData?.attributes?.content}</ReactMarkdown>
        </div>
      </article>
    </LayoutProvider>
  );
}
