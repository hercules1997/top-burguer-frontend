import React from 'react'
import { useHistory } from 'react-router-dom'

import paths from '../../constants/paths'
import { useUser } from '../../hooks/UserContext'
import {
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
  const { push } = useHistory()

  return (
    <Container>
      <ContainerItems>
        <ButtonClose onClick={() => push(paths.Products)}/>
        <ContainerUser>
          <Header>Olá, {userData.name}</Header>
          <ContainerLinks>
            <Links>Editar nome do usuario</Links>
            <Links>Editar senha</Links>
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
