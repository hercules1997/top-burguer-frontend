import React from 'react'

import ImgHomeBurguer from '../../assets/ImgHomeBurguer.png' //! mudar a imagem*//
import { CartItens, CartResume } from '../../components'
import { Container, HomeImage, Wrapper } from './style'

export function Cart () {
  return (
    <Container>
      <HomeImage src={ImgHomeBurguer} alt="Logo do carrinho" />
      <Wrapper>
        <CartItens />
        <CartResume />
      </Wrapper>
    </Container>
  )
}
