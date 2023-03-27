import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'

import { Button } from '../../components/Button'
import { useCart } from '../../hooks/CartContext'
import api from '../../services/api'
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

  const submitOrder = async () => {
    if (cartProducts.length > 0) {
      const order = cartProducts.map((product) => {
        return { id: product.id, quantity: product.quantity }
      })

      await toast.promise(api.post('orders', { products: order }), {
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

        <Button
          onClick={submitOrder}
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
      </ButtonFinish>
    )
  } else {
    ;<div></div>
  }
}
