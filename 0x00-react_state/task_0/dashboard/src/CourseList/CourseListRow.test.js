import React from 'react';
import { shallow } from 'enzyme';
import CourseListRow from './CourseListRow';

describe('CourseListRow component', () => {
  // Tests for CourseListRow component in CourseListRow.js

  it('Renders CourseListRow with isHeader true and no textSecondCell', () => {
    const wrapper = shallow(
      <CourseListRow isHeader textFirstCell="First" />,
    );
    expect(wrapper.find('th').length).toBe(1);
    expect(wrapper.find('th').get(0).props.children).toBe('First');
    expect(wrapper.find('th').get(0).props.colSpan).toBe(2);
  });

  it('Renders CourseListRow with isHeader true and both cells', () => {
    const wrapper = shallow(
      <CourseListRow
        isHeader
        textFirstCell="First"
        textSecondCell="Second"
      />,
    );
    expect(wrapper.find('th').length).toBe(2);
    expect(wrapper.find('th').get(0).props.children).toBe('First');
    expect(wrapper.find('th').get(1).props.children).toBe('Second');
  });

  it('Renders 2 <td> elements inside <tr> with isHeader false', () => {
    const wrapper = shallow(
      <CourseListRow
        isHeader={false}
        textFirstCell="First"
        textSecondCell="Second"
      />,
    );
    const trWrapper = wrapper.find('tr');
    expect(trWrapper.find('td').length).toBe(2);
    expect(trWrapper.find('td').first().text()).toBe('First');
    expect(trWrapper.find('td').get(1).props.children).toBe('Second');
  });
});
