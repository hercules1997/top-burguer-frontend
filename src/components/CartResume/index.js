import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'

import { useCart } from '../../hooks/CartContext'
import apiTopBurger from '../../services/api'
import formatCurrency from '../../utils/formatCurrency'
import { ButtonStyle } from '../CartItens/style'
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

  const submitOrder = async () => {
    if (cartProducts.length > 0) {
      const order = cartProducts.map((product) => {
        return { id: product.id, quantity: product.quantity }
      })

      await toast.promise(apiTopBurger.post('orders', { products: order }), {
        pending: 'realizando seu pedido ...',
        success: 'Pedido realizado!',
        error: 'Falha ao realizar o pedido, tente novamente!'
      })
    } else {
      alert('Carrinho vazio')
    }
  }

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
        <ButtonStyle onClick={submitOrder}>Finalizar Pedido</ButtonStyle>
      </ButtonFinish>
    )
  } else {
    ;<div></div>
  }
}
