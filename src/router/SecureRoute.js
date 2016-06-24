import React, { PropTypes } from 'react'
import { Route } from 'react-router'

export const SecureRoute = ({
  secureWith,
  path,
  children
}) => (
  <Route
    path={path}
    onEnter={secureWith} >
    {children}
  </Route>
)

SecureRoute.propTypes = {
  path: PropTypes.string.isRequired,
  secureWith: PropTypes.func.isRequired,
  children: PropTypes.any.isRequired
}

export default SecureRoute
