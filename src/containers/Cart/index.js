import React from 'react'

import ImgLogoCart from '../../assets/imgLogoCart.png'
import { CartItens, CartResume } from '../../components'
import { Container, HomeImage, Wrapper, WrapperItens, WrapperResume } from './style'

export function Cart () {
  return (
    <Container>
      <HomeImage src={ImgLogoCart} alt="Logo do carrinho" />

      <Wrapper>
        <WrapperItens>
          <CartItens />
        </WrapperItens>
        <WrapperResume>
          <CartResume />
        </WrapperResume>
      </Wrapper>
    </Container>
  )
}
