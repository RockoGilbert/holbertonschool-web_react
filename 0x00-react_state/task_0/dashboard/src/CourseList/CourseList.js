import React, { Component } from 'react';
import CourseListRow from './CourseListRow';
import PropTypes from 'prop-types';
import CourseShape from './CourseShape';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  table: {
    width: '90%',
    border: '1px solid #e4e4e4',
  },
  thead: {
    border: '1px solid #e4e4e4',
    padding: '10px',
    width: '50%',
  },

});

export default class CourseList extends Component {
  render() {
    return (
      <table className={css(styles.table)}>
        <thead className={css(styles.thead)}>
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
