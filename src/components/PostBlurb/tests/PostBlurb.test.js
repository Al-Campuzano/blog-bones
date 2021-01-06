import React from 'react'
import {mount} from '@shopify/react-testing'
import PostBlurb from '../'
import BlurbFooter from '../../BlurbFooter'
import '@shopify/react-testing/matchers';

describe('<PostBlurb />', () => {
  it('has one BlurbFooter component', () => {
    const wrapper = mount(<PostBlurb />);
    expect(wrapper).toContainReactComponentTimes(BlurbFooter, 1);
  });

  it('displays title prop in h3 heading', () => {
    const wrapper = mount(<PostBlurb title='Title'/>);
    expect(wrapper.find('h3').text()).toBe('Title');
  });
});
