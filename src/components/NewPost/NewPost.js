import React, { useState, useCallback } from "react";
import { Card, Form, FormLayout, TextField, Button } from '@shopify/polaris';
import { useMutation, gql } from '@apollo/client';

const ADD_POST = gql`
  mutation CreateMicropost($content: String!, $user: String!) {
    createMicropost(input : {postRequest: {content: $content, user: $user}})
    {
      micropost {
        id,
        content,
        user {
          id,
          name
        }
      }
    }
  }
`;


function NewPost() {
  const [content, setContent] = useState('');
  const [user, setUser] = useState('');

  const [addPost, { loading: mutationLoading, error: mutationError }] = useMutation(ADD_POST);

  const handleSubmit = useCallback((_event) => {
    addPost({ variables: { content: content, user: user } });

    setContent('');
    setUser('');
  }, [content, user, addPost]);

  const handleContentChange = useCallback((value) => setContent(value), []);
  const handleUserChange = useCallback((value) => setUser(value), []);

  return (
    <section style={{margin: '5%'}}>
      <Card title='Add new post' sectioned>
        <Form onSubmit={handleSubmit}>
          <FormLayout>
            <TextField
              value={content}
              onChange={handleContentChange}
              label="Post content"
              type="text"
              multiline
            />
            <TextField
              value={user}
              onChange={handleUserChange}
              label="User name"
              type="text"
            />
            <Button submit>Submit</Button> 
            {mutationLoading && <p>Loading...</p>}
            {mutationError && <p>Error :( Please try again</p>}
          </FormLayout>
        </Form>
      </Card>
    </section>
  );
}

export default NewPost;
