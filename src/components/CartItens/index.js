import React from 'react'

import { useCart } from '../../hooks/CartContex'
import formatCurrency from '../../utils/formatCurrency'
import { Container, Img, Header, Content, ProductDecription } from './style'

export function CartItens () {
  const { cartProducts } = useCart()

  return (
    <Container>
      <Header>
        <p style={{ width: '100px' }}></p>
        <p>Name</p>
        <p>Preço</p>
        <p>Quantidade</p>
        <p>Total</p>
      </Header>

      {cartProducts &&
        cartProducts.map((product) => (
          <Content key={product.id}>
            <Img src={product.url} />
            <ProductDecription>{product.name}</ProductDecription>
            <ProductDecription>
              {formatCurrency(product.price)}
            </ProductDecription>
            <ProductDecription>
              <div className="quantity-container">
                <button>-</button>
                {product.quantity}
                <button>+</button>
              </div>
            </ProductDecription>
            <ProductDecription>
              {formatCurrency(product.quantity * product.price)}
            </ProductDecription>
          </Content>
        ))}
    </Container>
  )
}
