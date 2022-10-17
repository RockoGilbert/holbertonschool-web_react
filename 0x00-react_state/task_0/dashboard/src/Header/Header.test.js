import React from 'react';
import { shallow, mount } from 'enzyme';
import { StyleSheetTestUtils } from 'aphrodite';
import { AppContext } from '../App/AppContext';
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

  // Logged in vs not logged in
  it('Verifies that renders correctly when mounted with default context', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find('#logoutSection').length).toEqual(0);
  });

  it('Verifies that renders correctly when mounted with not logged in context', () => {
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    const context = {
      user: {
        email: '',
        password: '',
        isLoggedIn: false,
      },
      logOut: jest.fn(),
    };
    const wrapper = mount(
      <AppContext.Provider value={context}>
        <Header />
      </AppContext.Provider>,
    );
    expect(wrapper.find('#logoutSection').length).toEqual(0);
  });

  it('Verifies that renders correctly when mounted with logged in context', () => {
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    const context = {
      user: {
        email: 'email@email.com',
        password: 'password',
        isLoggedIn: true,
      },
      logOut: jest.fn(),
    };
    const wrapper = mount(
      <AppContext.Provider value={context}>
        <Header />
      </AppContext.Provider>,
    );
    expect(wrapper.find('#logoutSection').length).toEqual(1);
    expect(wrapper.find('#logoutSection').text()).toEqual('Welcome email@email.com (logout)');
  });

  it('Verifies that logs out when button is clicked', () => {
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    const context = {
      user: {
        email: 'email@email.com',
        password: 'password',
        isLoggedIn: true,
      },
      logOut: jest.fn(),
    };
    const wrapper = mount(
      <AppContext.Provider value={context}>
        <Header />
      </AppContext.Provider>,
    );
    wrapper.find('button').simulate('click');
    expect(context.logOut).toHaveBeenCalled();
  });
});