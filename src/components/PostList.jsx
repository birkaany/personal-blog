import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import { Link } from "react-router-dom";

export default function PostList({ data }) {
  return (
    <section id="postList">
      <ul className="container mx-auto">
        {data?.data?.map((post) => (
          <li key={post.id} className="post summary">
            <Link to={`/post/${post.id}`}>
              <h2 className=" text-by-black-800 text-3xl font-bold">{post.attributes.title}</h2>
            </Link>
            <time className="text-by-gray-400 font-bold uppercase text-sm tracking-wider">{post.attributes.publishedAt}</time>
            <ReactMarkdown>{post.attributes.content}</ReactMarkdown>
          </li>
        ))}
      </ul>
    </section>
  );
}
