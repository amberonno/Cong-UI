'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  background: #1FB6FF;\n  border: none;\n  border-radius: 2px;\n  color: #FFFFFF;\n  cursor: pointer;\n  display: inline-block;\n  font-size: 16px;\n  line-height: 40px;\n  font-weight: 200;\n  margin: 8px 0;\n  outline: none;\n  padding: 0 12px;\n  text-transform: uppercase;\n  transition: all 300ms ease;\n  &:hover {\n    background: #009EEB;\n  }\n'], ['\n  background: #1FB6FF;\n  border: none;\n  border-radius: 2px;\n  color: #FFFFFF;\n  cursor: pointer;\n  display: inline-block;\n  font-size: 16px;\n  line-height: 40px;\n  font-weight: 200;\n  margin: 8px 0;\n  outline: none;\n  padding: 0 12px;\n  text-transform: uppercase;\n  transition: all 300ms ease;\n  &:hover {\n    background: #009EEB;\n  }\n']);

exports.default = Button;

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Cutton = _styledComponents2.default.button(_templateObject);

/**
 * The only true button.
 */
function Button(_ref) {
	var color = _ref.color,
	    size = _ref.size,
	    onClick = _ref.onClick,
	    children = _ref.children;

	var styles = {
		color: color,
		fontSize: Button.sizes[size]
	};

	return React.createElement(
		Cutton,
		{ style: styles, onClick: onClick },
		children
	);
}
Button.propTypes = {
	/** Button label */
	children: _propTypes2.default.string.isRequired,
	/** The color for the button */
	color: _propTypes2.default.string,
	/** The size of the button */
	size: _propTypes2.default.oneOf(['small', 'normal', 'large']),
	/** Gets called when the user clicks on the button */
	onClick: _propTypes2.default.func
};
Button.defaultProps = {
	color: '#333',
	size: 'normal',
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