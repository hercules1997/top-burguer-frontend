import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { Home, Login, Products, Register, Cart, Admin } from '../containers'
import { PrivateRoute } from './private-route'

function AllRoutes () {
  return (
    <Router>
      <Switch>
        <Route component={Login} path="/login" />
        <Route component={Register} path="/cadastro" />
        <PrivateRoute exact component={Home} path="/" />
        <PrivateRoute component={Products} path="/produtos" />
        <PrivateRoute component={Cart} path="/carrinho" />

        <PrivateRoute component={Admin} path="/pedidos" isAdmin />
      </Switch>
    </Router>
  )
}

export default AllRoutes
