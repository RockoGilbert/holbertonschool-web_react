import React from 'react';
import { shallow } from 'enzyme';
import WithLogging from './WithLogging';
import Login from '../Login/Login';

describe('WithLogging HOC component', () => {
  // Tests for WithLogging HOC

  it('Verifies that console.log called on mount/unmount of unnamed component', () => {
    const spy = jest.spyOn(console, 'log');
    const WrappedComponent = WithLogging(() => <p />);
    const wrapper = shallow(<WrappedComponent />);
    wrapper.unmount();
    expect(spy).toHaveBeenCalledTimes(2);
    expect(spy).toHaveBeenNthCalledWith(1, 'Component Component is mounted');
    expect(spy).toHaveBeenNthCalledWith(2, 'Component Component is going to unmount');
    spy.mockRestore();
  });

  it('Verifies that console.log called on mount/unmount of named component', () => {
    const spy = jest.spyOn(console, 'log');
    const WrappedComponent = WithLogging(Login);
    const wrapper = shallow(<WrappedComponent />);
    wrapper.unmount();
    expect(spy).toHaveBeenCalledTimes(2);
    expect(spy).toHaveBeenNthCalledWith(1, 'Component Login is mounted');
    expect(spy).toHaveBeenNthCalledWith(2, 'Component Login is going to unmount');
    spy.mockRestore();
  });
});
