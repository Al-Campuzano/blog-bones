import React from 'react'
import CommentButton from '../../CommentButton/CommentButton';
import DateAndAuthor from '../../DateAndAuthor/DateAndAuthor';
import {mount} from '@shopify/react-testing'
import '@shopify/react-testing/matchers';
import BlurbFooter from '../BlurbFooter';

describe('<BlurbFooter />', () => {
  it('has a CommentButton component', () => {
    const wrapper = mount(<BlurbFooter />);
    expect(wrapper).toContainReactComponentTimes(CommentButton, 1);
  });

  it('has one DateAndAuthor component', () => {
    const wrapper = mount(<BlurbFooter />);
    expect(wrapper).toContainReactComponentTimes(DateAndAuthor, 1);
  });
});
