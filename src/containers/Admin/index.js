import React from 'react'

import Orders from './Orders'
import { Container } from './style'

export function Admin () {
  return (
    <Container>
      <h1>Admin</h1>
      <Orders />
    </Container>
  )
}
