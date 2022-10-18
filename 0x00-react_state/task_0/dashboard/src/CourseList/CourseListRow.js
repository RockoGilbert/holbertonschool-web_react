import React, { Component } from 'react';
import PropTypes, { string } from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  tblHdr: {
    borderBottom: '1px solid lightgrey',
  },
  colHdr: {
    textAlign: 'left',
    borderBottom: '1px solid lightgrey',
    padding: '10px',
  },
  colHdr2: {
    textAlign: 'left',
    borderBottom: '1px solid black',
    padding: '10px',
  },
  hdrStyle: {
    backgroundColor: '#deb5b545',
  },
  bdyStyle: {
    backgroundColor: '#d7e7d7',
  },
});

class CourseListRow extends Component {
  render() {
    const { isHeader, textFirstCell, textSecondCell } = this.props;
    if (isHeader) {
      if (textSecondCell) {
        return (

            <tr className={css(styles.tblHdr)}>
          <th className={css(styles.colHdr)}>{textFirstCell}</th>
          <th className={css(styles.colHdr)}>Credit</th>
        </tr>
        );
      }
      return (
           <tr className={css(styles.tblHdr)}>
            <th className={css(styles.colHdr2)} colSpan="2">
              {textFirstCell}
            </th>
          </tr>
      );
    }
    return (
      <tr className={css(styles.bdyStyle)}>
        <td >{textFirstCell}</td>
        <td>{textSecondCell}</td>
      </tr>
    );
  }
}

CourseListRow.defaultProps = {
  isHeader: false,
  textSecondCell: null,
};

CourseListRow.propTypes = {
  isHeader: PropTypes.bool,
  textFirstCell: PropTypes.string.isRequired,
  textSecondCell: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
};

export default CourseListRow;
