import PropTypes from 'prop-types';
import React from 'react';
import './style/index.less';
/**
 * Pagination组件
 */
export default function Pagination(props) {
  return (
    <button className='disabled eg-btn' {...props}>
      {props.children}
    </button>
  );
}
Pagination.propTypes = {
};
Pagination.defaultProps = {
};

