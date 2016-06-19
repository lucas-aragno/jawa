import { push } from 'react-router-redux'

import Constants from '../constants'
import superagent from 'superagent'

export const setCurrentUser = (dispatch, user) => {
  dispatch({
    type: Constants.CURRENT_USER,
    currentUser: user
  })
}

const Actions = {
  signIn: (email, password, signInEndpoint) => {
    return dispatch => {
      const data = {
        session: {
          email: email,
          password: password
        }
      }

    superagent
      .post(signInEndpoint)
      .send(data)
      .end((err, res) => {
        if (res) {
          localStorage.setItem('AuthToken', res.jwt)
          setCurrentUser(dispatch, res.user)
          dispatch(push('/'))
        } else if (err) {
          dispatch({
            type: Constants.SESSIONS_ERROR,
            error: new Error()
          })
        }
      })
    }
  },

  signOut: (signOutEndpoint) => {
    return dispatch => {
      superagent
      .del(signOutEndpoint)
      .end((err, res) => {
        if (res) {
          localStorage.removeItem('AuthToken')
          dispatch({type: Constants.USER_SIGNED_OUT})
        } else if (err) {
          console.err(err)
        }
      })
    }
  }
}

export default Actions
