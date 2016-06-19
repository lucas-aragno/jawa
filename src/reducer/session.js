import Constants from '../constants'

const initialState = {
  currentUser: null,
  error: null
}

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case Constants.CURRENT_USER:
      return {...state, currentUser: action.currentUser, error: null}
    case Constants.USER_SIGNED_OUT:
      return initialState
    case Constants.SESSIONS_ERROR:
      return {...state, error: action.error}
    default:
      return state
  }
}
