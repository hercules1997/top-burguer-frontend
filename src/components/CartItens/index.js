import React from 'react'
import { useHistory } from 'react-router-dom'
import { toast } from 'react-toastify'

import cart from '../../assets/cart.png'
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
  TrashAt,
  ButtonStyleThree,
  ContainerContent,
  Remove,
  Add
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
            <ContainerContent>
              <Trash onClick={() => deleteProducts(product.id)}>
                <TrashAt />
              </Trash>
              <Content key={product.id}>
                <div className="img">
                  <Img src={product.url} />
                </div>
                <div className="decription">
                  <div className="decriptAling">
                    <ProductDecription>{product.name}</ProductDecription>

                    <ProductDecription style={{ marginTop: '10px' }}>
                      {formatCurrency(product.quantity * product.price)}
                    </ProductDecription>
                  </div>
                  <div className="quanty">
                    <ProductDecription>
                      <div className="quantity-container">
                        <Remove onClick={() => decreseProducts(product.id)}>
                          -
                        </Remove>
                        <p>{product.quantity}</p>
                        <Add onClick={() => increseProducts(product.id)}>
                          +
                        </Add>
                      </div>
                    </ProductDecription>
                  </div>
                </div>
              </Content>
            </ContainerContent>
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
        <ButtonStyleThree onClick={() => push(paths.Products)}>
          Ir para área de produtos
        </ButtonStyleThree>
        <ButtonStyleTwo onClick={submitOrder}>Finalizar Pedido</ButtonStyleTwo>
      </ContainerButtom>
    </Container>
  )
}
