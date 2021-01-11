import React from 'react';
import {mount} from '@shopify/react-testing';
import wait from 'waait'
import { act } from 'react-dom/test-utils';
import Posts from '../Posts';
import {MockedProvider} from '@apollo/client/testing'
import POSTS_QUERY from '../PostsQuery'

const mocks = 
    {
      request: {
        query: POSTS_QUERY
      },
      result: {
        data: {
            microposts: [{
              id: "1", content: 'Content', user: {name: 'Al'}
            }],
        },
      },
    };

describe('<Posts/>', () => {
    it('loads a series of posts from graphql endpoint', async ()=>{
    const wrapper = mount(
      <MockedProvider mocks={[mocks]} addTypename={false}>
        <Posts />
      </MockedProvider>
    );
    // This act stuff prevents an error in the test console
    await act(async () => {
      // this wait function executes the loaded state. without this whole block you can test loading state
      await wait(0);
    })

    await wrapper.update()
    console.log(wrapper.debug())
    expect(wrapper.find(Posts)).toBeDefined();

  });
});
