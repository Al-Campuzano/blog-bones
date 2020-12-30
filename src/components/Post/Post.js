import React from "react";


function Post({post}) {
    return (
      <article key={post.id}>
        <h3>{post.user.name}</h3>
        <p>{post.content}</p>
      </article>
    );
}

export default Post;
