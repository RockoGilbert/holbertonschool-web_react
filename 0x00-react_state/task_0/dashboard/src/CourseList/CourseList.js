import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';
import CourseListRow from './CourseListRow';
import CourseShape from './CourseShape';

// Definition of styles
const styles = StyleSheet.create({
  table: {
    marginLeft: '2rem',
    marginTop: '3rem',
    border: '1px solid lightgrey',
    textAlign: 'left',
  },
  thead: {
    fontWeight: 'bold',
    ':nth-child(1n) > :first-child': {
      textAlign: 'center',
    },
    ':nth-child(1n) th, :nth-child(1n) td': {
      padding: '0.5rem',
      width: '20rem',
    },
  },
});

const CourseList = function CourseList({ listCourses }) {
  return (
    <table className={css(styles.table)}>
      <thead className={css(styles.thead)}>
        <CourseListRow isHeader textFirstCell="Available courses" />
        <CourseListRow
          isHeader
          textFirstCell="Course name"
          textSecondCell="Credit"
        />
      </thead>
      <tbody>
        {listCourses.length ? (
          listCourses.map((course) => (
            <CourseListRow
              key={course.id}
              textFirstCell={course.name}
              textSecondCell={course.credit}
            />
          ))
        ) : (
          <CourseListRow textFirstCell="No course available yet" />
        )}
      </tbody>
    </table>
  );
};

CourseList.propTypes = {
  listCourses: PropTypes.arrayOf(CourseShape),
};

CourseList.defaultProps = {
  listCourses: [],
};

export default CourseList;
