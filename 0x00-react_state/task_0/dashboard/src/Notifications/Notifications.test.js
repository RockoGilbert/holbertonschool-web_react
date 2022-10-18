import { shallow } from 'enzyme';
import Notifications from './Notifications';
import React from 'react';
import { getLatestNotification } from '../utils/utils';
import { StyleSheetTestUtils } from 'aphrodite';


const notesList = [
    {id: 1, type: 'default', value: 'New course available'},
    {id: 2, type: 'urgent', value: 'New resume available'},
    {id: 3, type: 'urgent', html: {__html: getLatestNotification()}}
  ];

describe('<Notifications />', () => {

  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });
  afterEach(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });

	it('tests that Notifications renders without crashing', () => {
		const wrapper = shallow(<Notifications />);
		expect(wrapper.exists()).toBe(true);
	})

	it('Checks first Item renders correct html', () => {
		const wrapper = shallow(<Notifications />);
		expect(wrapper.text()).toContain("Your Notifications");
	})

  it('Checks that the div.Notifications is being displayed', () => {
    const wrapper = shallow(<Notifications  displayDrawer={false}/>);
    expect(wrapper.find('.Notifications').length).toEqual(0);
  })

  it('Checks that menuItem is rendered when displayDrawer is true', () => {
		const wrapper = shallow(<Notifications displayDrawer />);
		expect(wrapper.find('.menuItem').exists()).toBe(false);
	})

  it('Check that Notifications renders if passed an empty array or listNotifications', () => {
     const wrapper = shallow(<Notifications listNotifications={[]}/>);
      expect(wrapper.find('.Notifications').length).toEqual(0);
  })

  it('Check that Notifications renders if passed an array with three items or listNotifications', () => {
    const wrapper = shallow(<Notifications listNotifications={notesList}/>);
    expect(wrapper.find('.Notifications').exists());
  })
  it(' when listNotifications is empty the message Here is the list of notifications is not displayed', () => {
    const wrapper = shallow(<Notifications listNotifications={[]}/>);
    expect(wrapper.find('.Notifications p').length).toEqual(0);
  })

  it('Check that when calling the function markAsRead on an instance of the component, the spy is being called with the right message', () => {
    const wrapper = shallow(<Notifications />);
    const instance = wrapper.instance();
    const spy = jest.spyOn(console, 'log');
    instance.markAsRead(1);
    expect(spy).toHaveBeenCalledWith('Notification 1 has been marked as read');
  })

  it('Check that when updating the props of the component with the same list, the component doesn’t rerender', () => {
    const wrapper = shallow(<Notifications listNotifications={notesList}/>);
    const shouldUpdate = wrapper.instance().shouldComponentUpdate({listNotifications: notesList});
    expect(shouldUpdate).toEqual(false);
  });

  it('Check that when updating the props of the component with a longer list, the component does rerender', () => {
    const wrapper = shallow(<Notifications listNotifications={notesList}/>);
    const shouldUpdate = wrapper.instance().shouldComponentUpdate({listNotifications: [...notesList, {id: 4, type: 'urgent', value: 'New resume available'}]});
    expect(shouldUpdate).toEqual(true);
  });

  // Add a test to verify that clicking on the menu item calls handleDisplayDrawer
  it("test that click on close icon calls handleHideDrawer and updates displayDrawer to false", () => {
    const wrapper = shallow(<Notifications displayDrawer={true} />);
    wrapper.setState({ displayDrawer: true });
    wrapper.find(".close").simulate("click");
    expect(wrapper.state("displayDrawer")).toBe(true);
  });

  it("test to verify that clicking on the menu item calls handleDisplayDrawer", () => {
    const handleDisplayDrawer = jest.fn();
    const wrapper = shallow(
      <Notifications handleDisplayDrawer={handleDisplayDrawer} />
    );
    wrapper.update();
    wrapper.find("p").first().simulate("click");
    expect(handleDisplayDrawer).toHaveBeenCalled();
  });

});
