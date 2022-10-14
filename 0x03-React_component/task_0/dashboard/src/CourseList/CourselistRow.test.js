import React from 'react';
import CourseListRow from './CourseListRow';
import { shallow } from '../../config/setupTests';

const Clists = [
  {id: 1, name: 'ES6', credit: 60},
  {id: 2, name: 'Webpack', credit: 20},
  {id: 3, name: 'React', credit: 40}
];

describe('CourseListRow', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<CourseListRow textFirstCell='Fisrt cell'/>);
    expect(wrapper.exists()).toBe(true);
  })
  it('renders one cell when isHeader is true and textSecondCell is not passed', () => {
    const wrapper = shallow(<CourseListRow isHeader={true} textFirstCell="First cell" />);
    expect(wrapper.find('th').length).toBe(1);
  })
  it('isHeader has tr within a td tag', () => {
    const wrapper = shallow(<CourseListRow isHeader={false} textFirstCell="First cell" textSecondCell="2nd cell" />);
    const tr = wrapper.find('tr');
    expect(tr.find('td').length).toEqual(2);
  })
  it('renders two cells when isHeader is false and textSecondCell is passed', () => {
    const wrapper = shallow(<CourseListRow isHeader={false} textFirstCell="First cell" textSecondCell="2nd cell" />);
    expect(wrapper.find('td').length).toBe(2);
  })
});
