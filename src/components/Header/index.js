import React from 'react'

import iconCart from '../../assets/iconCart.png'
import person from '../../assets/person.png'
import { Container } from './style'

export function Header () {
  return (
    <Container>
      <img src={iconCart} alt='Ícone de carrinho'/>
      <img src={person} alt='ícone de person' />
    </Container>
  )
}
