import PropTypes from 'prop-types';
import React from 'react';
import './style/index.less';
/**
 * Button组件
 */
export default function Button(props) {
  return (
    <button className='disabled eg-btn' {...props}>
      {props.children}
    </button>
  );
}
Button.propTypes = {
  /** 设置按钮类型，可选值为 primary danger success */
  type: PropTypes.oneOf(['primary', 'danger', 'success']).isRequired,
  /** 设置 button 原生的 type 值 */
  htmlType: PropTypes.string,
  /** 设置按钮的图标类型 */
  icon: PropTypes.string,
  /** 设置按钮大小 */
  size: PropTypes.oneOf(['small', 'normal', 'large']),
  /** 是否为圆形按钮 */
  circle: PropTypes.bool,
  /** 是否处于不可用状态 */  
  disabled: PropTypes.bool,
  /** button的展示形式是否设置为透明背景，只描边框 */
  outline: PropTypes.bool,
  /** click事件回调 */
  onClick: PropTypes.func,
};
Button.defaultProps = {
  type: 'primary',
  htmlType: 'button',
  size: 'normal',
  circle: false,
  disabled: false,
  outline: false,
  prefixCls: 'eg-btn',
};

