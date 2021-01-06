import React from 'react'
import {mount} from '@shopify/react-testing'
import NavContainer from '../'
import {Link} from 'react-router-dom'
import '@shopify/react-testing/matchers';

describe('<NavContainer />', () => {
  it('has 4 menu items', () => {
    const wrapper = mount(<NavContainer />);
    expect(wrapper.find('nav').findAll('li').length).toBe(4);
  });

  it('has 4 Link components', () => {
    const wrapper = mount(<NavContainer />);
    expect(wrapper).toContainReactComponentTimes(Link, 4);
  });

  it('has a link to homepage', () => {
    const wrapper = mount(<NavContainer />);
    expect(wrapper).toContainReactComponent(Link, {
      to:'/',
    });
  });

  it('has a link to the all posts page', () => {
    const wrapper = mount(<NavContainer />);
    expect(wrapper).toContainReactComponent(Link, {
      to:'/posts',
    });
  });
  
  it('has a link to the new post page', () => {
    const wrapper = mount(<NavContainer />);
    expect(wrapper).toContainReactComponent(Link, {
      to:'/new',
    });
  });
  
  it('has a link to the polaris page', () => {
    const wrapper = mount(<NavContainer />);
    expect(wrapper).toContainReactComponent(Link, {
      to:'/polaris',
    });
  });

});
