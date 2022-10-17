import React from 'react';
import { shallow } from 'enzyme';
import { StyleSheetTestUtils } from 'aphrodite';
import BodySection from './BodySection';

describe('BodySection component', () => {
  // Tests for BodySection component

  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });
  afterEach(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });

  it('Verifies that test BodySection rendered with correct h2', () => {
    const body = <BodySection title="test title"><p>test children node</p></BodySection>;
    const wrapper = shallow(body);
    expect(wrapper.find('h2').length).toBe(1);
    expect(wrapper.find('h2').text()).toBe('test title');
  });

  it('Verifies that test BodySection rendered with correct p', () => {
    const body = <BodySection title="test title"><p>test children node</p></BodySection>;
    const wrapper = shallow(body);
    expect(wrapper.find('p').length).toBe(1);
    expect(wrapper.find('p').text()).toBe('test children node');
  });
});
