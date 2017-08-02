import PropTypes from 'prop-types';
import React from 'react';
import './style/index.less';
/**
 * Radio组件
 */
export default function Radio(props) {
  return (
    <label class="ant-radio-wrapper ant-radio-wrapper-checked">
      <span class="ant-radio ant-radio-checked">
        <input type="radio" class="ant-radio-input" value="on" />
        <i class="ant-radio-inner"></i>
      </span>
      <span>Apple</span>
    </label>
  );
}
Radio.propTypes = {
};
Radio.defaultProps = {
};

