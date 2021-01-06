import React from 'react'
import {mount} from '@shopify/react-testing'
import NavContainer from '../'

describe('<NavContainer />', () => {
  it('testing tests', () => {
    const wrapper = mount(<NavContainer />);
    expect(wrapper.text()).toContain('Blog');
  });
});
