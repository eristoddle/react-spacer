'use strict';

var React = require('react');

module.exports = function Spacer(props) {
  var style = {
    width: typeof props.width === 'number' ? props.width + 'px' : props.width || '1px',
    height: typeof props.height === 'number' ? props.height + 'px' : props.height || '1px',
    flexGrow: props.grow,
    flexShrink: props.shrink
  };

  return React.createElement('div', { style: style }, props.children);
};
