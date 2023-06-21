import React from 'react'

// import { CartItens, CartResume } from '../../components'
import IsloadingSpinner from '../../components/IsloadingSpinner'
// import { useCart } from '../../hooks/CartContext'
import {
  Container

  // Wrapper,
  // WrapperItens,
  // WrapperResume
} from './style'

export function StatusOrders () {
  // const { cartProducts } = useCart()

  return (
    <Container>
      <IsloadingSpinner />

      <div>
        <h1 style={{ color: 'white' }}>Tela de status do pedidos</h1>{' '}
      </div>
    </Container>
  )
}
