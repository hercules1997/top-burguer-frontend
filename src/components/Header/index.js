import React from 'react'
import { useHistory } from 'react-router-dom'

import iconCart from '../../assets/iconCart.png'
import person from '../../assets/person.png'
import {
  Container,
  ContainerLeft,
  PageLink,
  PageLinkExit,
  ContainerRight,
  ContainerText
} from './style'

export function Header () {
  const {
    push,
    location: { pathname }
  } = useHistory()

  return (
    <Container>
      <ContainerLeft>
        <PageLink
          className="pageLink"
          onClick={() => push('/')}
          isActive={pathname === '/'}
        >
          Home
        </PageLink>
        <PageLink
          onClick={() => push('/produtos')}
          isActive={pathname.includes('/produtos')}
        >
          Ver Produtos
        </PageLink>
      </ContainerLeft>

      <ContainerRight>
        <PageLink onClick={() => push('/carrinho')}>
          <img src={iconCart} alt="Ícone de carrinho" />
        </PageLink>
        <div className="barra"></div>
        <PageLink>
          <img src={person} alt="logo pessoa" />
        </PageLink>

        <ContainerText>
          <p>Olá, Hércules</p>
          <PageLinkExit>Sair</PageLinkExit>
        </ContainerText>
      </ContainerRight>
    </Container>
  )
}
