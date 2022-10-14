import React, { Component } from 'react';
import './CourseList.css';
import CourseListRow from './CourseListRow';
import PropTypes from 'prop-types';
import CourseShape from './CourseShape';


export default class CourseList extends Component {
  render() {
    return (
      <table id="CourseList">
        <thead>
          <CourseListRow textFirstCell="Available courses" isHeader={true} />
          <CourseListRow textFirstCell="Course name" textSecondCell="Credit" isHeader={true} />
        </thead>
        <tbody>
          {
             this.props.listCourses.length ? this.props.listCourses.map((course) =>
              <CourseListRow textFirstCell={course.name} textSecondCell={course.credit} key={course.id} />
             )
             : <CourseListRow textFirstCell="No course available yet" isHeader={true} />
          }
        </tbody>
      </table>
    );
  }
}

CourseList.propTypes = {
  listCourses: PropTypes.arrayOf(CourseShape),
};

CourseList.defaultProps = {
  listCourses: []
}