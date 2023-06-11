import React from 'react'
import { useHistory } from 'react-router-dom'

import { useUser } from '../../hooks/UserContext'
import {
  AccountCircle,
  ButtonClose,
  Container,
  ContainerItems,
  ContainerLinks,
  ContainerText,
  ContainerUser,
  Header,
  Links,
  PageLinkExit
} from './style'

export function User () {
  const { logout, userData } = useUser()
  const { push, goBack } = useHistory()

  return (
    <Container>
      <ContainerItems>
        <ButtonClose onClick={goBack} />
        <ContainerUser>
          <Header>Olá, {userData.name}</Header>
          <AccountCircle style={{ color: 'white', fontSize: '35px' }} />
          <p>{userData.email}</p>
          <ContainerLinks>
            <Links>Editar nome do usuario</Links>
            <Links>Trocar senha</Links>
          </ContainerLinks>
        </ContainerUser>
      </ContainerItems>

      <ContainerText>
        <PageLinkExit
          onClick={() => {
            logout()
            push('/login')
          }}
        >
          Sair
        </PageLinkExit>
      </ContainerText>
    </Container>
  )
}
