import React from "react";
import { Helmet } from "react-helmet";
import { PostCard } from "../../components";

const Blog = () => {
  return (
    <div>
      <Helmet>
        <title>Koding Handle | Blog</title>
      </Helmet>

      <PostCard />
    </div>
  );
};

export default Blog;
