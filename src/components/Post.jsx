import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import LayoutProvider from "../hooks/useLayout";
import client from "../data/client";

export default function Post() {
  let { postId } = useParams();
  const [postData, setPostData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const { data } = await client.items().type("post").equalsFilter("system.id", postId).toPromise();
    setPostData(data.items);
  };

  return (
    <LayoutProvider>
      <article>
        <div className="post">
          <h1 className="text-by-black-800 text-3xl font-bold">{postData[0]?.elements.post_title.value}</h1>

          <div dangerouslySetInnerHTML={{ __html: postData[0]?.elements.post_content.value }}></div>
        </div>
      </article>
    </LayoutProvider>
  );
}
