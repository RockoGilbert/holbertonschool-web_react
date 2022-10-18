import Enzyme, { shallow } from 'enzyme';
import React from 'react';
import NotificationItem from './NotificationItem';
import Adapter from 'enzyme-adapter-react-16';
import { StyleSheetTestUtils } from 'aphrodite';

Enzyme.configure({ adapter: new Adapter() });

// shallow render NotificationItem component
describe('<NotificationItem />', () => {

  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });
  afterEach(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });

	it('Tests that NotificationItem renders without crashing', () => {
		const wrapper = shallow(<NotificationItem />);
		expect(wrapper.exists()).toBe(true);
	})

	it('Passes dumby `type` prop and checks for correct html rendering', () => {
		const wrapper = shallow(<NotificationItem type="urgent" />);
		expect(wrapper.html()).toContain('urgent');
	})

	it('Passes dumby `value` prop and checks for correct html rendering', () => {
		const wrapper = shallow(<NotificationItem value="This is a success notification" />);
		expect(wrapper.find('li').text()).toBe('This is a success notification');
	})

	it('Passes dumby `html` prop and checks for correct html rendering', () => {
		const wrapper = shallow(<NotificationItem html={{ __html: 'dangerouslySetInnerHtml' }} />);
		expect(wrapper.html()).toContain('dangerouslySetInnerHtml');
	})
//   Create a test, that will pass a spy as the markAsRead property
// Check that when simulating a click on the component, the spy is called with the right ID argumen

  it('Passes dumby `markAsRead` prop and checks for correct html rendering', () => {
    const markAsRead = jest.fn();
    const wrapper = shallow(<NotificationItem markAsRead={markAsRead} />);
    wrapper.find('li').simulate('click');
    expect(markAsRead).toHaveBeenCalled();
  })
})
