import { yupResolver } from '@hookform/resolvers/yup'
import React from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import * as Yup from 'yup'

import ImgBurguer from '../../assets/backgroundBurger.jpg'
import logoBurguer from '../../assets/logoBurger.png'
import Button from '../../components/Button/index'
import apiTopBurger from '../../services/api'
import {
  Container,
  Background,
  ContainerItens,
  Logo,
  Label,
  Input,
  ErrorMessage,
  SingLink
} from './style'

function Login () {
  const schema = Yup.object().shape({
    email: Yup.string()
      .email('Por favor digite um e-mail válido')
      .required('E-mail é obrigatório'),
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
    await toast.promise(
      apiTopBurger.post('sessions', {
        email: clientData.email,
        password: clientData.password
      }),
      {
        pending: 'Verificando dados...',
        success: 'Seja bem-vindo(a)!',
        error: 'Verifique os dados digitados'
      }
    )
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
