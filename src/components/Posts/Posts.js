import React from "react";
import { Query } from 'react-apollo';
import gql from 'graphql-tag';
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
  return(
    <Query query={POSTS_QUERY}>
      {({ loading, error, data }) => {
        if (loading) return <div>Fetching..</div>
        if (error) return <div>Error!</div>
        console.log(data);
        return (
          <section >
            {data.microposts.map((post) => {
              return (
                <Post post={post}/>
              );
            })}
          </section>
        )
      }}
    </Query>
  );
}

export default Posts;
