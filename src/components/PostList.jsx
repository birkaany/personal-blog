import { Link } from "react-router-dom";
import LayoutProvider from "../hooks/useLayout";
import client from "../data/client";
import { useState, useEffect } from "react";
import { BlogDate } from "./BlogDate";

export default function PostList() {
  const [postData, setpostData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const { data } = await client.items().type("post").toPromise();
    setpostData(data.items);
  }

  return (
    <LayoutProvider hasHero>
      <section id="postList">
        <ul className="container mx-auto">
          {postData?.map((post) => (
            <li key={post.system.id} className="post summary">
              <Link to={`/post/${post.system.id}`}>
                <h2 className="hover:text-yellow-400 transition-all">{post?.elements.post_title.value}</h2>
              </Link>
              <BlogDate isoDate={post.system.lastModified} />
              <div className="line-clamp-4" dangerouslySetInnerHTML={{ __html: post?.elements.post_content.value }}></div>
            </li>
          ))}
        </ul>
      </section>
    </LayoutProvider>
  );
}
