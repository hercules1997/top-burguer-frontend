import { yupResolver } from '@hookform/resolvers/yup'
import React from 'react'
import { useForm } from 'react-hook-form'
import * as Yup from 'yup'

import ImgBurguer from '../../assets/backgroundBurger.jpg'
import logoBurguer from '../../assets/logoBurger.png'
import api from '../../services/api'
import {
  Container,
  Background,
  ContainerItens,
  Logo,
  Label,
  Input,
  ErrorMessage,
  Button,
  SingLink
} from './style'

function Login () {
  const schema = Yup.object().shape({
    email: Yup.string()
      .email('Por favor digite um e-mail válido')
      .required('Por favor digite um e-mail válido'),
    password: Yup.string()
      .required('Senha obrigatória')
      .min(8, 'Senha deve ter no mínimo 8 digitos')
  })

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({ resolver: yupResolver(schema) })

  const onSubmit = async (clientData) => {
    const response = await api.post('sessions', {
      email: clientData.email,
      password: clientData.password
    })
    console.log(response)
  }

  return (
    <Container>
      <Background>
        <img src={ImgBurguer} />
      </Background>

      <ContainerItens>
        <Logo src={logoBurguer} />

        <form noValidate onSubmit={handleSubmit(onSubmit)}>
          <h1>Login</h1>
          <Label>E-mail</Label>
          <Input
            type="email"
            {...register('email')}
            error={errors.email?.message}
          />
          <ErrorMessage>{errors.email?.message}</ErrorMessage>

          <Label>Senha</Label>
          <Input
            type="password"
            {...register('password')}
            error={errors.password?.message}
          />
          <ErrorMessage>{errors.password?.message}</ErrorMessage>

          <Button type="submit">Entrar</Button>
          <SingLink>
            Não tem cadastro ainda? <a>Cadastre-se agora!</a>
          </SingLink>
        </form>
      </ContainerItens>
    </Container>
  )
}

export default Login
