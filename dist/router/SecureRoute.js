'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SecureRoute = undefined;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SecureRoute = exports.SecureRoute = function SecureRoute(_ref) {
  var secureWith = _ref.secureWith;
  var path = _ref.path;
  var children = _ref.children;
  return _react2.default.createElement(
    _reactRouter.Route,
    {
      path: path,
      onEnter: secureWith },
    children
  );
};

SecureRoute.propTypes = {
  path: _react.PropTypes.string.isRequired,
  secureWith: _react.PropTypes.func.isRequired,
  children: _react.PropTypes.any.isRequired
};

exports.default = SecureRoute;