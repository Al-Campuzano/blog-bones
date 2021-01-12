import React from 'react';
import {mount} from '@shopify/react-testing';
import wait from 'waait'
import { act } from 'react-dom/test-utils';
import NewPost from '../NewPost';
import {MockedProvider} from '@apollo/client/testing'
import ADD_POST from '../NewPostQuery.js'
import { PolarisTestProvider } from '@shopify/polaris';
import enTranslations from '@shopify/polaris/locales/en.json';

const mocks = 
    {
      request: {
        query: ADD_POST
      },
      result: {
        data: {
            microposts: [{
              id: '1', content: 'Content', user: {id: '1', name: 'Al'}
            }],
        },
      },
    };

describe('<NewPost />', () => {
  it('loads a post from graphql endpoint', async () => {
    const wrapper = mount(
      <PolarisTestProvider i18n={enTranslations}>
        <MockedProvider mocks={[mocks]} addTypename={false}>
          <NewPost />
        </MockedProvider>
      </PolarisTestProvider>
    );

    await act(async () => {
      await wait(0);
    });

    await wrapper.update();
    expect(wrapper.find(NewPost)).toBeDefined();
  });

});
