import React from 'react'

import { Button } from '../../components/Button'
import { Container } from './style'

export function CartResume () {
  return (
    <div>
      <Container>
        <div className="container-top">
          <h2 className="title">Resumo do Pedido</h2>
          <p className="items">Itens</p>
          <p className="items-price">10,00</p>
          <p className="delivery-tax">Taxa de Entrega</p>
          <p className="delivery-tax-price">25,00</p>
          <p></p>
        </div>
        <div className="container-bottom">
          <p>Total</p>
          <p>35,00</p>
        </div>
      </Container>
      <Button
        style={{
          width: '100%',
          marginTop: '1px',
          marginBottom: '35px',
          padding: '10px',
          boxShadow: '0px 0px 8px black'
        }}
      >
        Finalizar Pedido
      </Button>
    </div>
  )
}
