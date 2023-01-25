import ReactMarkdown from "react-markdown";
import { Link } from "react-router-dom";

import LayoutProvider from "../hooks/useLayout";

export default function PostList({ data }) {
  return (
    <LayoutProvider hasHero>
      <section id="postList">
        <ul className="container mx-auto">
          {data?.data?.map((post) => (
            <li key={post.id} className="post summary">
              <Link to={`/post/${post.id}`}>
                <h2>{post.attributes.title}</h2>
              </Link>
              <time className="text-by-gray-400 font-bold uppercase text-sm tracking-wider">{post.attributes.publishedAt}</time>
              <ReactMarkdown className=" line-clamp-4">{post.attributes.content}</ReactMarkdown>
            </li>
          ))}
        </ul>
      </section>
    </LayoutProvider>
  );
}
