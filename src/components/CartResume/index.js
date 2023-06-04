import React, { useEffect, useState } from 'react'

import { useCart } from '../../hooks/CartContext'
import formatCurrency from '../../utils/formatCurrency'
import { Container, ButtonFinish } from './style'

export function CartResume () {
  const [finalPrice, setFinalPrice] = useState(0)
  const [deliveryTax] = useState(10)

  const { cartProducts } = useCart()
  useEffect(() => {
    const sumAllItems = cartProducts.reduce((acc, current) => {
      return current.price * current.quantity + acc
    }, 0)

    setFinalPrice(sumAllItems)
  }, [cartProducts, deliveryTax])

  if (cartProducts.length > 0) {
    return (
      <ButtonFinish>
        <Container>
          <div className="container-top">
            <h2 className="title">Resumo do Pedido</h2>
            <p className="items">Itens</p>
            <p className="items-price">{formatCurrency(finalPrice)}</p>
            <p className="delivery-tax">Taxa de Entrega</p>
            <p className="delivery-tax-price">{formatCurrency(deliveryTax)}</p>
            <p></p>
          </div>

          <div className="container-bottom">
            <p>Total</p>
            <p>{formatCurrency(finalPrice + deliveryTax)}</p>
          </div>
        </Container>
      </ButtonFinish>
    )
  } else {
    ;<div></div>
  }
}
