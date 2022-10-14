import React, { Component } from 'react';
import './Footer.css';
import { getFullYear, getFooterCopy } from '../utils/utils';

class Footer extends React.Component {
  render() {
    return (
      <React.Fragment>
        <p>Copyright © {getFullYear()} - {getFooterCopy(true)}</p>
      </React.Fragment>
    );
  }
};

export default Footer;
