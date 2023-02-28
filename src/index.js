import React from 'react'
import ReactDOM from 'react-dom/client'
import { Flip, ToastContainer } from 'react-toastify'

import Login from './containers/Login'
import Register from './containers/Register'
import GlobalStyles from './styles/globalStyles'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <>
    <Login />

    <ToastContainer
      position="top-center"
      autoClose={3000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      transition={Flip}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="colored"
    />
    <Register />
    <GlobalStyles />
  </>
)
