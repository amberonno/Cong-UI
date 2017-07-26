'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  background: ', ';\n  border: none;\n  border-radius: 2px;\n  color: ', ';\n  cursor: pointer;\n  display: inline-block;\n  font-size: 16px;\n  line-height: 40px;\n  font-weight: 200;\n  margin: 8px 0;\n  outline: none;\n  padding: 0 12px;\n  text-transform: uppercase;\n  transition: all 300ms ease;\n  &:hover {\n    background: ', ';\n  }\n'], ['\n  background: ', ';\n  border: none;\n  border-radius: 2px;\n  color: ', ';\n  cursor: pointer;\n  display: inline-block;\n  font-size: 16px;\n  line-height: 40px;\n  font-weight: 200;\n  margin: 8px 0;\n  outline: none;\n  padding: 0 12px;\n  text-transform: uppercase;\n  transition: all 300ms ease;\n  &:hover {\n    background: ', ';\n  }\n']);

exports.default = Button;

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _colors = require('../styles/colors');

var colors = _interopRequireWildcard(_colors);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var SCButton = _styledComponents2.default.button(_templateObject, function (_ref) {
  var bgColor = _ref.bgColor;
  return colors[bgColor];
}, function (_ref2) {
  var fontColor = _ref2.fontColor;
  return colors[fontColor];
}, function (_ref3) {
  var hoverColor = _ref3.hoverColor;
  return colors[hoverColor];
});
/**
 * The only true button.
 */
function Button(props) {
  return _react2.default.createElement(
    SCButton,
    props,
    props.children
  );
}
Button.propTypes = {
  /** Button label */
  children: _propTypes2.default.string.isRequired,
  /** The color for the button */
  bgColor: _propTypes2.default.string,
  fontColor: _propTypes2.default.string,
  hoverColor: _propTypes2.default.string,
  /** The size of the button */
  size: _propTypes2.default.oneOf(['small', 'normal', 'large']),
  /** Gets called when the user clicks on the button */
  onClick: _propTypes2.default.func
};
Button.defaultProps = {
  bgColor: 'blue',
  fontColor: 'white',
  hoverColor: 'darkBlue',
  /* eslint-disable no-console */
  onClick: function onClick(event) {
    console.log('You have clicked me!', event.target);
  }
  /* eslint-enable no-console */
};
Button.sizes = {
  small: '10px',
  normal: '14px',
  large: '18px'
};