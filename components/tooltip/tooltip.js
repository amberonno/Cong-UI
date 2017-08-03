import PropTypes from 'prop-types';
import React, { cloneElement, Component } from 'react';
import ReactDOM, { findDOMNode } from 'react-dom';
import './style/index.less';
/**
 * Tooltip组件
 */
export default class Tooltip extends Component {
  componentDidMount() {
    let { target }= this;
    if(target){
    }
  }
  render() {
    const children = typeof this.props.children === 'object'
          ? React.cloneElement(this.props.children, { ref: (n) => this.target = n })
          : null;
    return (
      children
    );
  }
}
