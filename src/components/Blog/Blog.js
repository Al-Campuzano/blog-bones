import React from "react";
import PostBlurb from "../PostBlurb/PostBlurb"

const Blog = () => {
  return (
    <div>
      <h2>Blog Page</h2>
      <PostBlurb title="First Post!" />
      <PostBlurb title="Second Post" />
      <PostBlurb title="Last Post" />
    </div>
  );
};

export default Blog;
