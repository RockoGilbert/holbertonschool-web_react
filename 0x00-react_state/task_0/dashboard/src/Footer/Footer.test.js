import React from 'react';
import { shallow } from 'enzyme';
import Footer from './Footer';

describe('Footer component', () => {
  // Tests for Footer component

  it('Verifies that Footer component renders without crashing', () => {
    shallow(<Footer />);
  });

  it('Verifies that contains/matches Copyright (regex)', () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.text()).toMatch(/Copyright/);
  });
});
