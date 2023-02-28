import PropTypes from 'prop-types'
import React from 'react'

import { ComponentButton } from './style'

function Button ({ children, ...rest }) {
  return <ComponentButton {...rest}>{children}</ComponentButton>
}

export default Button

Button.propTypes = {
  children: PropTypes.string
}
