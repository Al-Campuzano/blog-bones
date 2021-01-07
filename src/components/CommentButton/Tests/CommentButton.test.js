import React from 'react'
import {mount} from '@shopify/react-testing'
import CommentButton from '../CommentButton';

describe('<CommentButton />', () => {
  it('has a button with Leave A Comment text on first load', () => {
    const wrapper = mount(<CommentButton />);
    expect(wrapper.find('button').text()).toBe('Leave a comment');
  });
  
  it('button text changes when clicked', () => {
    const wrapper = mount(<CommentButton />);
    wrapper.find('button').trigger('onClick');
    expect(wrapper.find('button').text()).not.toBe('Leave a comment');
  });
  
  it('button text keeps counts up when clicked', () => {
    const wrapper = mount(<CommentButton />);
    const button = wrapper.find('button');
    button.trigger('onClick');
    // console.log(button.text());
    // console.log("Middle");
    expect(button.text()).toBe('1 comments');
    button.trigger('onClick');
    // console.log(button.text());
    // button.trigger('onClick');
    // expect(button.text()).toBe('2 comments');
  });
  
  // it('test act method', () => {
  //   const wrapper = mount(<CommentButton />);
  //   const button = wrapper.find('button');
  //   wrapper.act(() => {
  //     button.trigger('onClick');
  //     button.trigger('onClick');
  //   });
  //   expect(wrapper.find('button').text()).toBe('2 comments');
  // });
});
