import 'gfs-icons/iconfont.less';
import PropTypes from 'prop-types';
import React from 'react';
import omit from 'omit.js';
import classNames from 'classnames';

/**
 * Icon组件
 */
export default function Icon(props) {
  const { type, className = '', spin } = props;
  const classString = classNames({
    'gfs-icon-spin': spin || type === 'loading',
    [`icon-${type}`]: true,
    'gfs-icon': true,
  }, className);
  return (
    <i {...omit(props, ['type', 'spin'])} className={classString}/>
  );
}
Icon.propTypes = {
  /** 图标类型 */
  type: PropTypes.string.isRequired,
  /** 是否有旋转动画 */
  spin: PropTypes.bool,
  /** 设置图标的样式 */
  style: PropTypes.string,
};
Icon.defaultProps = {
  spin: false,
};

