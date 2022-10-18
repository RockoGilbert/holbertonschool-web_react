import React from 'react';
import { shallow } from 'enzyme';
import BodySection from './BodySection';
import { StyleSheetTestUtils } from 'aphrodite';


describe('BodySection Renders', () => {

  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });
  afterEach(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });

  const BS = shallow(
    <BodySection title="test title">
      <p>test child</p>
    </BodySection>
  );

  it('without crashing', () => {
    expect(BS.length).toBe(1);
  });

  it('with correct children', () => {
    expect(BS.children().length).toBe(1);
    expect(BS.find('h2').length).toBe(1);
    expect(BS.find('h2').text()).toBe('test title');
    expect(BS.find('p').length).toBe(1);
    expect(BS.find('p').text()).toBe('test child');
  });
});
