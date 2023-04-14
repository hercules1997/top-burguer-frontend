import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import paths from '../constants/paths'
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

        <PrivateRoute component={Admin} path={paths.Order} isAdmin />
        <PrivateRoute component={Admin} path={paths.Products} isAdmin />
        <PrivateRoute component={Admin} path={paths.NewProducts} isAdmin />
      </Switch>
    </Router>
  )
}

export default AllRoutes
