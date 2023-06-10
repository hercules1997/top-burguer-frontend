import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import paths from '../constants/paths'
import { Home, Login, Products, Register, Cart, Admin, User } from '../containers'
import { PrivateRoute } from './private-route'

function AllRoutes () {
  return (
    <Router>
      <Switch>
        <Route component={Login} path={paths.Login} />
        <Route component={Register} path={paths.Register} />
        <PrivateRoute exact component={Home} path={paths.HomeInit} />
        <PrivateRoute component={Products} path={paths.Products} />
        <PrivateRoute component={Cart} path={paths.Cart} />
        <PrivateRoute component={User} path={paths.User} />

        <PrivateRoute component={Admin} path={paths.ListProducts} isAdmin />
        <PrivateRoute component={Admin} path={paths.Order} isAdmin />
        <PrivateRoute component={Admin} path={paths.NewProducts} isAdmin />
        <PrivateRoute component={Admin} path={paths.EditProducts} isAdmin />
        <PrivateRoute component={Admin} path={paths.HomeInit} isAdmin />
        <PrivateRoute component={Admin} path={paths.NewCategory} isAdmin />
      </Switch>
    </Router>
  )
}

export default AllRoutes
