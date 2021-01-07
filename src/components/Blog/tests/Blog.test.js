import React from 'react'
import {mount} from '@shopify/react-testing'
import Blog from '../'
import PostBlurb from "../../PostBlurb/PostBlurb"
import '@shopify/react-testing/matchers';

describe('<Blog />', () => {
  it('has 3 PostBlurb components', () => {
    const wrapper = mount(<Blog />);
    expect(wrapper).toContainReactComponentTimes(PostBlurb, 3);
  });

});
