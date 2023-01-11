import React from "react";
import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
export default function Post({ data }) {
  let { postId } = useParams();
  const currentPost = data.data?.find((item) => item.id == postId);

  return (
    <article>
      <div className="post container mx-auto">
        <h1 className="text-by-black-800 text-3xl font-bold">{currentPost.attributes.title}</h1>
        <time className="text-by-gray-400 font-bold uppercase text-sm tracking-wider">{currentPost.attributes.publishedAt}</time>
        <ReactMarkdown>{currentPost.attributes.content}</ReactMarkdown>
      </div>
    </article>
  );
}
