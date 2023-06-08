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
  Content,
  ProductDecription,
  Trash,
  EmpyCart,
  ContainerButtom,
  ButtonStyleTwo,
  TrashAt,
  ButtonStyleThree,
  ContainerContent,
  Remove,
  Add,
  Bag,
  ContainerMaster,
  ContainerEmpyCart,
  Decription
} from './style'
export function CartItens () {
  const { push } = useHistory()
  const { cartProducts, increseProducts, decreseProducts, deleteProducts } =
    useCart()

  const submitOrder = async () => {
    if (cartProducts.length > 0) {
      const order = cartProducts.map((product) => {
        return {
          id: product.id,
          quantity: product.quantity
        }
      })

      await toast.promise(
        api.post('orders', {
          products: order
        }),
        {
          pending: 'realizando seu pedido ...',
          success: 'Pedido realizado!',
          error: 'Falha ao realizar o pedido, tente novamente!'
        }
      )
    } else {
      alert('Carrinho vazio')
    }
  }

  return (
    <ContainerMaster>
      <Container>
        {cartProducts && cartProducts.length > 0
          ? (
              cartProducts.map((product) => (
            <>
              <ContainerContent>
                <Trash onClick={() => deleteProducts(product.id)}>
                  <TrashAt />
                </Trash>
                <Content key={product.id}>
                  <Img src={product.url} />
                  <Decription>
                    <div className="decriptAling">
                      <ProductDecription> {product.name} </ProductDecription>
                      <ProductDecription>
                        {formatCurrency(product.quantity * product.price)}
                      </ProductDecription>
                    </div>
                    <div className="quanty">
                      <ProductDecription>
                        <div className="quantity-container">
                          <Remove
                            onClick={() => decreseProducts(product.id)}
                          ></Remove>
                          <p> {product.quantity} </p>
                          <Add
                            onClick={() => increseProducts(product.id)}
                          ></Add>
                        </div>
                      </ProductDecription>
                    </div>
                  </Decription>
                </Content>
              </ContainerContent>
            </>
              ))
            )
          : (
          <ContainerEmpyCart>
            <EmpyCart>
              <Bag src={cart} />
              Sacola vazia
            </EmpyCart>
          </ContainerEmpyCart>
            )}
      </Container>
      <ContainerButtom>
        <ButtonStyleThree onClick={() => push(paths.Products)}>
          Adicionar itens
        </ButtonStyleThree>
        <ButtonStyleTwo onClick={submitOrder}>Finalizar Pedido</ButtonStyleTwo>
      </ContainerButtom>
    </ContainerMaster>
  )
}
