import React from 'react'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'

import paths from '../../constants/paths'
import { Container, ContainerItems, PageLink } from './style'

export function HeaderPublic () {
  const history = useHistory()

  return (
    <>
      <Container>
        <ContainerItems>
          <PageLink onClick={() => history.push(paths.Login)}>Entrar</PageLink>
          <PageLink onClick={() => history.push(paths.Register)}>
            Cadastra-se
          </PageLink>
        </ContainerItems>
      </Container>
    </>
  )
}
