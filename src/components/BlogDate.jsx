import React from "react";

export const BlogDate = ({ isoDate }) => {
  const date = new Date(isoDate);
  const blogCreatedDate = date.toLocaleDateString("tr-TR", { day: "numeric", month: "long", year: "numeric" });
  return <time className="italic">{blogCreatedDate}</time>;
};
