import React from 'react'

import iconBurguer from '../../../assets/iconburger.png'
import { LoadingSpinnerLoading, Spinner } from './LoadingSpinner.js'
const LoadingSpinner = () => {
  return (
    <LoadingSpinnerLoading>
      <span>
        <img src={iconBurguer} /> <p>Carregando...</p>
      </span>

      <Spinner></Spinner>
    </LoadingSpinnerLoading>
  )
}

export default LoadingSpinner
