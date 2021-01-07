import React from 'react'
import {mount} from '@shopify/react-testing'
import Post from '../Post'

describe('<Post />', () => {
  const mockProps = {
    "content": "Mock content",
    "user": { "name": "Fake Name" }
  };

  it('displays name when present in prop', () => {
    const wrapper = mount(<Post post={mockProps} />);
    expect(wrapper.find('article').find('h3').text()).toBe('Fake Name');
  });

  it('displays content when present in prop', () => {
    const wrapper = mount(<Post post={mockProps} />);
    expect(wrapper.find('article').find('p').text()).toBe('Mock content');
  });
});
