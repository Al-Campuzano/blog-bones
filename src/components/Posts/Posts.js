import React from "react";
import { useQuery } from '@apollo/client';
import Post from "../Post";
import POSTS_QUERY from './PostsQuery'

// const POSTS_QUERY = gql`
//   query {
//     microposts {
//       id
//       content
//       user {
//         name
//       }
//     }
//   }
// `;

function Posts() {
  const { loading, error, data } = useQuery(POSTS_QUERY);
  if (loading) return <h3>Loading...</h3>;
  if (error) {
    console.error(error);
    return <h2>Error...</h2>;
  }

  return(
    <section >
      {data.microposts.map((post) => (
          <Post key={`post--${post.id}`} post={post}/>
      ))}
    </section>
  )
}

export default Posts;
