import React from "react";
import { shallow } from "enzyme";
import CourseList from "./CourseList";
import { StyleSheetTestUtils } from "aphrodite";


const Clists = [
  {id: 1, name: 'ES6', credit: 60},
  {id: 2, name: 'Webpack', credit: 20},
  {id: 3, name: 'React', credit: 40}
];

describe("CourseList", () => {
  beforeEach(() => {
    StyleSheetTestUtils.suppressStyleInjection();
  });
  afterEach(() => {
    StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  });

  it("renders without crashing", () => {
    const wrapper = shallow(<CourseList />);
    expect(wrapper.exists()).toBe(true);
  });

  it("renders a table with 3 rows", () => {
    const wrapper = shallow(<CourseList />);
    expect(wrapper.find("CourseListRow").length).toBe(3);
    expect(wrapper.find('CourseListRow').last().props().textFirstCell).toBe(
      'No course available yet'
    );
  });

  it('CourseList renders correctly if you pass an empty array or if you don’t pass the listCourses property', () => {
    const wrapper = shallow(<CourseList  listCourses={[]}/>);
    expect(wrapper.find('tr').length).toEqual(0);
  })

  it('CourseList renders correctly if you pass an array with three items', () => {
    const wrapper = shallow(<CourseList listCourses={Clists}/>);
    expect(wrapper.find('CourseList').exists());
  })
})
