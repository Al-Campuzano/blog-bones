import React from 'react'
import {mount} from '@shopify/react-testing'
import '@shopify/react-testing/matchers';
import DateAndAuthor from '../DateAndAuthor';

describe('<DateAndAuthor />', () => {
  it('date prop is displayed when present', () => {
    const someDate = new Date(Date.UTC(2012,11,20,3,0,0));
    const wrapper = mount(<DateAndAuthor date={someDate.toLocaleDateString()}/>);
    expect(wrapper.find('span').text()).toContain('2012');
  });

  it('author prop is displayed when present', () => {
    const wrapper = mount(<DateAndAuthor author="Testing" />);
    expect(wrapper.find('a').text()).toBe('Testing');
  });
});
