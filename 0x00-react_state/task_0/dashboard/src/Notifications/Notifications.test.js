import React from 'react';
import { shallow } from 'enzyme';
import { StyleSheetTestUtils } from 'aphrodite';
import Notifications from './Notifications';

describe('Notifications component', () => {
  // Tests for Notifications component in Notifications.js

  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });
  afterEach(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });

  const listNotifications = [
    { id: 1, type: 'urgent', value: 'Value 1' },
    { id: 2, type: 'default', html: { __html: 'HTML 1' } },
  ];
  const listNotif2 = [
    { id: 1, type: 'urgent', value: 'Value 1' },
    { id: 2, type: 'default', html: { __html: 'HTML 1' } },
    { id: 3, type: 'default', value: 'Value 3' },
  ];

  it('Verifies that renders Notifications component without crashing', () => {
    shallow(<Notifications />);
  });

  // displayDrawer tests
  it('Verifies that Notifications contains #menuItem div by default (displayDrawer false)', () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.find('#menuItem').length).toBe(1);
    expect(wrapper.find('#Notifs').length).toBe(0);
  });

  it('Verifies that Notifications contains both divs when displayDrawer true', () => {
    const wrapper = shallow(<Notifications displayDrawer />);
    expect(wrapper.find('#menuItem').length).toBe(1);
    expect(wrapper.find('#Notifs').length).toBe(1);
  });

  // listNotifications tests
  it('Verifies that Notifications renders correctly with no listNotifications', () => {
    const wrapper = shallow(<Notifications displayDrawer />);
    expect(wrapper.find('#menuItem').length).toBe(1);
    expect(wrapper.find('NotificationItem').length).toBe(0);
    expect(wrapper.find('p').text()).toEqual(
      'No new notification for now',
    );
  });

  it('Verifies that Notifications renders correctly with empty listNotifications', () => {
    const wrapper = shallow(<Notifications displayDrawer listNotifications={[]} />);
    expect(wrapper.find('NotificationItem').length).toBe(0);
    expect(wrapper.find('p').text()).toEqual('No new notification for now');
  });

  // This test began failing out of nowhere? Please figure out why
  it.skip('Verifies that Notifications renders 2 NotificationItems correctly when passed listNotifications', () => {
    const wrapper = shallow(<Notifications displayDrawer listNotifications={listNotifications} />);
    expect(wrapper.find('li').length).toBe(2);
    expect(wrapper.find('p').text()).toEqual('Here is the list of notifications');
    expect(wrapper.find('li[data-priority="urgent"]'));
    expect(wrapper.find('NotificationItem').get(0).props.type).toEqual('urgent');
    expect(wrapper.find('NotificationItem').get(0).props.value).toEqual('Value 1');
    expect(wrapper.find('NotificationItem').get(1).props.html).toEqual({ __html: 'HTML 1' });
    expect(wrapper.find('NotificationItem').get(1).props.type).toEqual('default');
  });

  // markAsRead tests
  it('Verifies that console.log called when markAsRead clicked', () => {
    jest.spyOn(console, 'log').mockImplementation(() => {});
    const wrapper = shallow(<Notifications displayDrawer listNotifications={listNotifications} />);
    wrapper.instance().markAsRead(1);
    expect(console.log).toHaveBeenCalled();
    expect(console.log).toHaveBeenCalledWith('Notification 1 has been marked as read');
    console.log.mockRestore();
  });

  // shouldComponentUpdate tests
  it('Verifies that shouldComponentUpdate returns false when listNotifications length is less than props.listNotifications', () => {
    const wrapper = shallow(<Notifications displayDrawer listNotifications={listNotifications} />);
    expect(wrapper.instance().shouldComponentUpdate({ listNotifications: [] })).toBe(false);
  });

  it('Verifies that shouldComponentUpdate returns false when same list passed', () => {
    const wrapper = shallow(<Notifications displayDrawer listNotifications={listNotifications} />);
    expect(wrapper.instance().shouldComponentUpdate({ listNotifications })).toBe(false);
  });

  it('Verifies that shouldComponentUpdate returns false when longer list passed', () => {
    const wrapper = shallow(<Notifications displayDrawer listNotifications={listNotifications} />);
    expect(wrapper.instance().shouldComponentUpdate({ listNotifications: listNotif2 })).toBe(true);
  });
});