import PropTypes from 'prop-types';
import React from 'react';
import './style/index.less';
/**
 * Checkbox组件
 */
export default function Checkbox(props) {
  return (
    <label class="ant-checkbox-wrapper ant-checkbox-wrapper-checked">
      <span class="ant-checkbox ant-checkbox-checked">
        <input type="checkbox" class="ant-checkbox-input" value="on" />
        <i class="ant-checkbox-inner"></i>
      </span>
      <span>Apple</span>
    </label>
  );
}
Checkbox.propTypes = {
};
Checkbox.defaultProps = {
};

