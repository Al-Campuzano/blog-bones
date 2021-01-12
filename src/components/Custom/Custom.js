import React from "react";
import { Card, Subheading, Button, Caption } from "@shopify/polaris"
import { useQuery } from '@apollo/client';
import POSTS_QUERY from './CustomQuery'

// const POSTS_QUERY = gql`
//   query {
//     microposts {
//       id
//       content
//       createdAt
//       user {
//         name
//       }
//     }
//   }
// `;

function Custom() {
  const { loading, error, data } = useQuery(POSTS_QUERY);
  if (loading) return <h3>Loading...</h3>;
  if (error) {
    console.error(error);
    return <h2>Error...</h2>;
  }

  const randIndex = Math.floor(Math.random() * data.microposts.length);
  const post = data.microposts[randIndex];

  return ( 
    <div style={{margin: '5%'}}>
      <Card title="Random micropost using Polaris">
        <Card.Section>
          <Subheading>{post.user.name}</Subheading>
          <p>"{post.content}"</p>
          <Caption>Posted on {post.createdAt}</Caption>       
        </Card.Section>
        ​
        <Card.Section>
          <Button fullWidth url="/polaris">Load another random post</Button>
        </Card.Section>
      </Card>
    </div>
  );
};

export default Custom;
