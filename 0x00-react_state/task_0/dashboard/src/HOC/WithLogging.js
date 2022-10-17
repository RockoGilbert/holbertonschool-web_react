import React, { Component } from 'react';

function WithLogging(WrappedComponent) {
  // Find name to print in console messages
  const name = WrappedComponent.name ? WrappedComponent.name : 'Component';

  class InnerWithLogging extends Component {
    componentDidMount() {
      console.log(`Component ${name} is mounted`);
    }

    componentWillUnmount() {
      console.log(`Component ${name} is going to unmount`);
    }

    render() {
      return <WrappedComponent />;
    }
  }

  return InnerWithLogging;
}

export default WithLogging;
