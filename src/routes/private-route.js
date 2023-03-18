import PropTypes from 'prop-types'
import React from 'react'
import { Route, Redirect } from 'react-router-dom'

export function PrivateRoute ({ component, ...rest }) {
  const user = localStorage.getItem('topBurguer:userData')

  if (!user) {
    return <Redirect to="/login" />
  }

  return <Route {...rest} component={component} />
}

PrivateRoute.propTypes = {
  component: PropTypes.oneOfType([PropTypes.func, PropTypes.element])
}
