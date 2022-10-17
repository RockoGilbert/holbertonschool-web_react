import React from 'react';
import { shallow } from 'enzyme';
import { StyleSheetTestUtils } from 'aphrodite';
import Header from './Header';

describe('Header component', () => {
  // Tests for Header component

  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });
  afterEach(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });

  it('Verifies that Header component renders without crashing', () => {
    shallow(<Header />);
  });

  it('Verifies that img tag rendered', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find('img').length).toEqual(1);
  });

  it('Verifies that h1 tag rendered', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find('h1').length).toEqual(1);
  });
});