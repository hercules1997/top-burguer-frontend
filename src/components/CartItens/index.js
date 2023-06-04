import React from 'react'
import { useHistory } from 'react-router-dom'
import { toast } from 'react-toastify'

import cart from '../../assets/cart.png'
import close from '../../assets/trash-close.png'
import paths from '../../constants/paths'
import { useCart } from '../../hooks/CartContext'
import api from '../../services/api'
import formatCurrency from '../../utils/formatCurrency'
import {
  Container,
  Img,
  Header,
  Content,
  ProductDecription,
  Trash,
  EmpyCart,
  ButtonStyle,
  ContainerButtom,
  ButtonStyleTwo,
  ButtonStyleThree
} from './style'
export function CartItens () {
  const { push } = useHistory()
  const { cartProducts, increseProducts, decreseProducts, deleteProducts } =
    useCart()

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

  return (
    <Container>
      <Header>
        <p style={{ width: '100px' }}></p>
        <p>Itens</p>
        <p>Preço</p>
        <p>Qto</p>
        <p>Total</p>
        <p></p>
      </Header>

      {cartProducts && cartProducts.length > 0
        ? (
            cartProducts.map((product) => (
          <>
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
                <img src={close} />
              </Trash>
            </Content>
            <ButtonStyle onClick={submitOrder}>Finalizar Pedido</ButtonStyle>
          </>
            ))
          )
        : (
        <>
          <EmpyCart>
            <img src={cart} />
            Carrinho vazio
          </EmpyCart>
        </>
          )}
      <ContainerButtom>
        <ButtonStyleTwo onClick={submitOrder}>Finalizar Pedido</ButtonStyleTwo>
        <ButtonStyleThree onClick={() => push(paths.Products)}>
          Ir para área de produtos
        </ButtonStyleThree>
      </ContainerButtom>
    </Container>
  )
}
