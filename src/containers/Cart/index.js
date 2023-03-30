import React from 'react'

import ImgLogoCart from '../../assets/imgLogoCart.png'
import { CartItens, CartResume } from '../../components'
import { Container, HomeImage, Wrapper } from './style'

export function Cart () {
  return (
    <Container>
      <HomeImage src={ImgLogoCart} alt="Logo do carrinho" />

      <Wrapper>
        <CartItens />
        <CartResume />
      </Wrapper>
    </Container>
  )
}
