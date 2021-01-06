import React from "react";
import { useQuery, gql } from '@apollo/client';
import Post from "../Post";

const POSTS_QUERY = gql`
  query {
    microposts {
      id
      content
      user {
        name
      }
    }
  }
`;

function Posts() {
  const { loading, error, data } = useQuery(POSTS_QUERY);
  if (loading) return <h3>Loading...</h3>;
  if (error) {
    console.error(error);
    return <h2>Error...</h2>;
  }

  return(
    <section >
      {console.log(data.microposts[0].content)}
      {data.microposts.map((post, index) => (
          <Post key={`post--${index}`} post={post}/>
      ))}
    </section>
  )
}

export default Posts;
