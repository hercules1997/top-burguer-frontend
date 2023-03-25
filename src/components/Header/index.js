import React from 'react'
import { Link } from 'react-router-dom'

import iconCart from '../../assets/iconCart.png'
import person from '../../assets/person.png'
import {
  Container,
  ContainerLeft,
  PageLinkExit,
  ContainerRight,
  ContainerText
} from './style'

export function Header () {
  return (
    <Container>
      <ContainerLeft>
        <Link className="pageLink" to="/">
          Home
        </Link>
        <Link className="pageLink" to="/produtos">
          Ver Produtos
        </Link>
      </ContainerLeft>

      <ContainerRight>
        <Link className="pageLink" to="/carrinho">
          <img src={iconCart} alt="Ícone de carrinho" />
        </Link>
        <div className="traco"></div>
        <Link className="pageLink">
          <img src={person} alt="logo pessoa" />
        </Link>

        <ContainerText>
          <p>Olá, Hércules</p>
          <PageLinkExit>Sair</PageLinkExit>
        </ContainerText>
      </ContainerRight>
    </Container>
  )
}
