import React from 'react';
import { shallow } from 'enzyme';
import { StyleSheetTestUtils } from 'aphrodite';
import CourseList from './CourseList';

describe('CourseList component', () => {
  // Tests for CourseList component

  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });
  afterEach(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });

  it('Verifies that CourseList component renders without crashing', () => {
    shallow(<CourseList />);
  });

  it('Verifies that 3 CourseListRows rendered with empty course list passed', () => {
    const wrapper = shallow(<CourseList listCourses={[]} />);
    expect(wrapper.find('CourseListRow').length).toBe(3);
    expect(wrapper.find('CourseListRow').last().props().textFirstCell).toBe(
      'No course available yet',
    );
  });

  it('Verifies that 3 CourseListRows rendered with no course list passed', () => {
    const wrapper = shallow(<CourseList />);
    expect(wrapper.find('CourseListRow').length).toBe(3);
    expect(wrapper.find('CourseListRow').last().props().textFirstCell).toBe(
      'No course available yet',
    );
  });

  it('Verifies that 4 CourseListRows rendered correctly with 2 courses passed', () => {
    const listCourses = [
      { id: '1', name: 'Course 1', credit: 1 },
      { id: '2', name: 'Course 2', credit: 2 },
    ];
    const wrapper = shallow(<CourseList listCourses={listCourses} />);
    expect(wrapper.find('CourseListRow').length).toBe(4);
    expect(wrapper.find('CourseListRow').get(2).props.textFirstCell).toBe(
      'Course 1',
    );
    expect(wrapper.find('CourseListRow').get(3).props.textSecondCell).toBe(2);
  });
});
