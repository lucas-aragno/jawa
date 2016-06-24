'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setCurrentUser = undefined;

var _reactRouterRedux = require('react-router-redux');

var _constants = require('../constants');

var _constants2 = _interopRequireDefault(_constants);

var _superagent = require('superagent');

var _superagent2 = _interopRequireDefault(_superagent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var setCurrentUser = exports.setCurrentUser = function setCurrentUser(dispatch, user) {
  dispatch({
    type: _constants2.default.CURRENT_USER,
    currentUser: user
  });
};

var Actions = {
  signIn: function signIn(email, password, signInEndpoint) {
    return function (dispatch) {
      var data = {
        session: {
          email: email,
          password: password
        }
      };

      _superagent2.default.post(signInEndpoint).send(data).end(function (err, res) {
        if (res) {
          localStorage.setItem('AuthToken', res.jwt);
          setCurrentUser(dispatch, res.user);
          dispatch((0, _reactRouterRedux.push)('/'));
        } else if (err) {
          dispatch({
            type: _constants2.default.SESSIONS_ERROR,
            error: new Error()
          });
        }
      });
    };
  },

  signOut: function signOut(signOutEndpoint) {
    return function (dispatch) {
      _superagent2.default.del(signOutEndpoint).end(function (err, res) {
        if (res) {
          localStorage.removeItem('AuthToken');
          dispatch({ type: _constants2.default.USER_SIGNED_OUT });
        } else if (err) {
          console.err(err);
        }
      });
    };
  }
};

exports.default = Actions;