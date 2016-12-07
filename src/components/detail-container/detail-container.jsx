import React from 'react';
export default React.createClass({
  getInitialState() {
    return {
      name: 'tom'
    };
  },
  render() {
    return require('detail-container/detail-container.jsx.html')(this);
  }
});
