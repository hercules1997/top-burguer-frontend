import React from 'react'

import ImgHomeBurguer from '../../assets/ImgHomeBurguer.png' //! mudar a imagem*//
import { CartItens } from '../../components/CartItens'
import { Container, HomeImage } from './style'

export function Cart () {
  return (
    <Container>
      <HomeImage src={ImgHomeBurguer} alt="Logo do carrinho" />
      <CartItens/>
    </Container>
  )
}
