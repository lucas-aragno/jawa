import React, { PropTypes } from 'react'
import { Route } from 'react-router'

export const SecureRoute = ({
  secureWith,
  path
}) => (
  <Route
    path={path}
    onEnter={secureWith} />
)

SecureRoute.propTypes = {
  path: PropTypes.string.isRequired,
  secureWith: PropTypes.func.isRequired
}

export default SecureRoute
