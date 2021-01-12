import React from 'react';
import {mount} from '@shopify/react-testing';
import wait from 'waait'
import { act } from 'react-dom/test-utils';
import Custom from '../Custom';
import {MockedProvider} from '@apollo/client/testing'
import POSTS_QUERY from '../CustomQuery'
import { PolarisTestProvider } from '@shopify/polaris';
import enTranslations from '@shopify/polaris/locales/en.json';

const mocks = 
    {
      request: {
        query: POSTS_QUERY
      },
      result: {
        data: {
            microposts: [{
              id: "1", content: 'Content', createdAt: 'Yesterday', user: {name: 'Al'}
            }],
        },
      },
    };

describe('<Custom />', () => {
    it('loads a series of posts from graphql endpoint', async ()=>{
    const wrapper = mount(
      <PolarisTestProvider i18n={enTranslations}>
        <MockedProvider mocks={[mocks]} addTypename={false}>
          <Custom />
        </MockedProvider>
      </PolarisTestProvider>
    );
    // This act stuff prevents an error in the test console
    await act(async () => {
      // this wait function executes the loaded state. without this whole block you can test loading state
      await wait(0);
    })

    await wrapper.update()
    expect(wrapper.find(Custom)).toBeDefined();

  });

    it('contains the expected data', async ()=>{
    const wrapper = mount(
      <PolarisTestProvider i18n={enTranslations}>
        <MockedProvider mocks={[mocks]} addTypename={false}>
          <Custom />
        </MockedProvider>
      </PolarisTestProvider>
    );
    // This act stuff prevents an error in the test console
    await act(async () => {
      // this wait function executes the loaded state. without this whole block you can test loading state
      await wait(0);
    })

    await wrapper.update()
    expect(wrapper.text()).toContain('Content');

  });
});
