import React from 'react';
import { shallow } from 'enzyme';
import { StyleSheetTestUtils } from 'aphrodite';
import App from './App';

describe('App component', () => {
  // Tests for App component in App.js

  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });
  afterEach(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });

  // Components mount by default
  it('Verifies that App component renders without crashing', () => {
    shallow(<App />);
  });

  test('Notifications component exists', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('Notifications')).toHaveLength(1);
  });

  test('Header component exists', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('Header')).toHaveLength(1);
  });

  test('Footer component exists', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('Footer')).toHaveLength(1);
  });

  // Login vs CourseList components load (props)
  it('Verifies login component exists by default (when isLoggedIn is false)', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('Login')).toHaveLength(1);
    expect(wrapper.find('CourseList')).toHaveLength(0);
  });

  it('Verifies CourseList component exists when isLoggedIn is true', () => {
    const wrapper = shallow(<App isLoggedIn />);
    expect(wrapper.exists('CourseList')).toBe(true);
    expect(wrapper.exists('Login')).toBe(false);
  });

  // If Jest has mocked something, remove it so doesn't affect other tests
  // I haven't noticed this making a difference, but just in case
  beforeEach(() => {
    jest.clearAllMocks();
  });

  // ctrl-h KeyDown event handlers on componentDidMount
  it('Verifies alert called when ctrl-h pressed', () => {
    jest.spyOn(window, 'alert').mockImplementation(() => {});
    const wrapper = shallow(<App isLoggedIn />);
    const event = {
      ctrlKey: true,
      key: 'h',
    };
    wrapper.instance().handleKeyDown(event);
    expect(window.alert).toHaveBeenCalled();
    expect(window.alert).toHaveBeenCalledWith('Logging you out');
  });

  it('Verifies logOut called when ctrl-h pressed', () => {
    const logOut = jest.fn();
    const wrapper = shallow(<App isLoggedIn logOut={logOut} />);
    const event = {
      ctrlKey: true,
      key: 'h',
    };
    wrapper.instance().handleKeyDown(event);
    expect(logOut).toHaveBeenCalled();
  });
});
