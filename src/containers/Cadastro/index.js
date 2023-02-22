import { yupResolver } from '@hookform/resolvers/yup'
import React from 'react'
import { useForm } from 'react-hook-form'
import * as Yup from 'yup'

import ImgBurguer from '../../assets/backgroundCadastro.jpg'
import logoBurguer from '../../assets/logoBurger.png'
import {
  Container,
  Background,
  ContainerItens,
  Logo,
  Label,
  Input,
  Button,
  SingLink
} from './style'

function Cadastro () {
  const schema = Yup.object().shape({
    email: Yup.string().email().required(),
    password: Yup.string().required()
  })

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({ resolver: yupResolver(schema) })

  const onSubmit = (data) => console.log(data)

  return (
    <Container>
      <Background>
        <img src={ImgBurguer} alt />
      </Background>

      <ContainerItens>
        <Logo src={logoBurguer} />

        <form onSubmit={handleSubmit(onSubmit)}>
          <h1>Cadastro</h1>
          <Label>Nome</Label>
          <Input type="text" {...register('name')} />
          <Label>E-mail</Label>
          <Input type="email" {...register('email')} />

          <p>{errors.email?.message}</p>
          <Label>Senha</Label>
          <Input type="password" {...register('password')} />

          <p>{errors.password?.message}</p>
          <Label>Comfirmar Senha</Label>
          <Input type="password" {...register('password')} />

          <p>{errors.password?.message}</p>
          <Button type="submit">Cadastrar</Button>
          <SingLink>
            Já possui conta? <a>Acesse!</a>
          </SingLink>
        </form>
      </ContainerItens>
    </Container>
  )
}

export default Cadastro
