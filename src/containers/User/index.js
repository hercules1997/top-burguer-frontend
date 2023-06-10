import React from 'react'
import { useHistory } from 'react-router-dom'

import { ContainerText, PageLinkExit } from '../../components/Header/style'
import { useUser } from '../../hooks/UserContext'
import { Container } from './style'

export function User () {
  const { logout, userData } = useUser()
  const {
    push
  } = useHistory()

  return (
    <Container>
      <div>
        <span>Ola</span>
      </div>
      ;
      <ContainerText>
        <p>Olá, {userData.name}</p>
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
