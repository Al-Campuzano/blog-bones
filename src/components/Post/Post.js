import React from "react";


function Post({post}, {key}) {
    return (
      <article key={key}>
        <h3>{post.user.name}</h3>
        <p>{post.content}</p>
      </article>
    );
}

export default Post;
