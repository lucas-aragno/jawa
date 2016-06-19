import reducer from './reducers/session'
import actions from './actions/sessions'
import SecureRouteComponent from './router/SecureRoute'

export const sessionActions = actions
export const SecureRoute = SecureRouteComponent
export const sessionReducer = reducer
