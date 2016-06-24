'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _constants = require('../constants');

var _constants2 = _interopRequireDefault(_constants);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initialState = {
  currentUser: null,
  error: null
};

exports.default = function () {
  var state = arguments.length <= 0 || arguments[0] === undefined ? initialState : arguments[0];
  var action = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

  switch (action.type) {
    case _constants2.default.CURRENT_USER:
      return _extends({}, state, { currentUser: action.currentUser, error: null });
    case _constants2.default.USER_SIGNED_OUT:
      return initialState;
    case _constants2.default.SESSIONS_ERROR:
      return _extends({}, state, { error: action.error });
    default:
      return state;
  }
};