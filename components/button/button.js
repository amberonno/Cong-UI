import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';
import * as colors from '../styles/colors';

const SCButton = styled.button`
  background: ${({ bgColor }) => colors[bgColor]};
  border: none;
  border-radius: 2px;
  color: ${({ fontColor }) => colors[fontColor]};
  cursor: pointer;
  display: inline-block;
  font-size: 16px;
  line-height: 40px;
  font-weight: 200;
  margin: 8px 0;
  outline: none;
  padding: 0 12px;
  text-transform: uppercase;
  transition: all 300ms ease;
  &:hover {
    background: ${({ hoverColor }) => colors[hoverColor]};
  }
`;
/**
 * The only true button.
 */
export default function Button(props) {
  return (
    <SCButton {...props}>
      {props.children}
    </SCButton>
  );
}
Button.propTypes = {
  /** Button label */
  children: PropTypes.string.isRequired,
  /** The color for the button */
  bgColor: PropTypes.string,
  fontColor: PropTypes.string,
  hoverColor: PropTypes.string,
  /** The size of the button */
  size: PropTypes.oneOf(['small', 'normal', 'large']),
  /** Gets called when the user clicks on the button */
  onClick: PropTypes.func,
};
Button.defaultProps = {
  bgColor: 'blue',
  fontColor: 'white',
  hoverColor: 'darkBlue',
  /* eslint-disable no-console */
  onClick: (event) => {
    console.log('You have clicked me!', event.target);
  },
  /* eslint-enable no-console */
};
Button.sizes = {
  small: '10px',
  normal: '14px',
  large: '18px',
};
