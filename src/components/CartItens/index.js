import React from 'react'

import trash from '../../assets/trash.png'
import { useCart } from '../../hooks/CartContext'
import formatCurrency from '../../utils/formatCurrency'
import {
  Container,
  Img,
  Header,
  Content,
  ProductDecription,
  Trash
} from './style'
export function CartItens () {
  const { cartProducts, increseProducts, decreseProducts, deleteProducts } =
    useCart()

  return (
    <Container>
      <Header>
        <p style={{ width: '100px' }}></p>
        <p>Nome</p>
        <p>Preço</p>
        <p>Quantidade</p>
        <p>Total</p>
        <p>Remover</p>
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
                <button onClick={() => decreseProducts(product.id)}>-</button>
                {product.quantity}
                <button onClick={() => increseProducts(product.id)}>+</button>
              </div>
            </ProductDecription>
            <ProductDecription>
              {formatCurrency(product.quantity * product.price)}
            </ProductDecription>

            <Trash onClick={() => deleteProducts(product.id)}>
              <img src={trash} />
            </Trash>
          </Content>
        ))}
    </Container>
  )
}
