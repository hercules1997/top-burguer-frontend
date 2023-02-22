import React from 'react'

import ImgBurguer from '../../assets/backgroundBurger.jpg'
import logoBurguer from '../../assets/logoBurger.png'
import {
  Container,
  Background,
  ContainerItens,
  Form,
  Logo,
  Label,
  Input,
  Button,
  SingLink
} from './style'

function Login () {
  return (
    <Container>
      <Background>
        <img src={ImgBurguer} />
      </Background>

      <ContainerItens>
        <Logo>
          <img src={logoBurguer} />
        </Logo>

        <Form>
          <h1>Login</h1>
          <Label>E-mail</Label>
          <Input />

          <Label>Senha</Label>
          <Input />

          <Button>Entrar</Button>
          <SingLink>
            Não tem cadastro ainda? <a>Cadastre-se agora!</a>
          </SingLink>
        </Form>
      </ContainerItens>
    </Container>
  )
}

export default Login
