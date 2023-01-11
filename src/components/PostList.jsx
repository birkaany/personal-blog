import React from "react";
import { Link } from "react-router-dom";

export default function PostList() {
  return (
    <section id="postList">
      <ul className="container mx-auto">
        <li className="post summary">
          <Link to="/post">
            <h2 className=" text-by-black-800 text-3xl font-bold">Post Title</h2>
          </Link>

          <time className="text-by-gray-400 font-bold uppercase text-sm tracking-wider">February 19, 2023</time>
          <p className="text-by-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias vero molestiae explicabo quo odit unde assumenda asperiores veniam libero animi.</p>
        </li>
        <li className="post summary">
          <h2 className=" text-by-black-800 text-3xl font-bold">Post Title</h2>
          <time className="text-by-gray-400 font-bold uppercase text-sm tracking-wider">February 19, 2023</time>
          <p className="text-by-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias vero molestiae explicabo quo odit unde assumenda asperiores veniam libero animi.</p>
        </li>
      </ul>
    </section>
  );
}
