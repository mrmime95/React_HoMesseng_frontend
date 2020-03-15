import React from 'react'
import PropTypes from 'prop-types'
import { Route, Redirect } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { routes } from './index'

/**
 * A route that requires authentication. Redirects if not authenticated.
 * @param {{redirect: string} & RouteProps} props
 */
function ProtectedRoute({ redirect = routes.authLogin, ...props }) {
  const isAuthenticated = useSelector(s => s.auth.isAuthenticated)

  if (!isAuthenticated) {
    return <Redirect to={redirect} />
  }

  return <Route {...props} />
}

ProtectedRoute.propTypes = {
  redirect: PropTypes.string
}

export default ProtectedRoute
