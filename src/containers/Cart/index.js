import React from 'react'

import ImgHomeBurguer from '../../assets/ImgHomeBurguer.png' //! mudar a imagem*//
import { CartItens, CartResume, Header } from '../../components'
import { Container, HomeImage, Wrapper } from './style'

export function Cart () {
  return (
    <Container>
      <Header />
      <HomeImage src={ImgHomeBurguer} alt="Logo do carrinho" />
      <Wrapper>
        <CartItens />
        <CartResume />
      </Wrapper>
    </Container>
  )
}
