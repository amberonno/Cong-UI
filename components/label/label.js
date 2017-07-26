import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import { darken } from 'polished';
import * as colors from '../styles/colors';

const SCLabel = styled.label`
  color: ${({ color }) => colors[color]};
  display: inline-block;
  font-size: 14px;
  font-weight: ${({ fontWeight }) => fontWeight};
  margin: 8px 0;
  text-transform: ${({ textTransform }) => textTransform};
  transition: all 300ms ease;
`;
/**
 * Button组件
 */
export default function Label(props) {
  return (
    <SCLabel {...props}>
      {props.children}
    </SCLabel>
  );
}
Label.propTypes = {
  /** Button label */
  textTransform: PropTypes.string,
  /** The color for the button */
  color: PropTypes.string,
  fontWeight: PropTypes.number,
  /** Gets called when the user clicks on the button */
  onClick: PropTypes.func,
};
Label.defaultProps = {
  color: 'silver',
  fontWeight: 400,
  textTransform: 'uppercase',
};
Label.sizes = {
  small: '10px',
  normal: '14px',
  large: '18px',
};
