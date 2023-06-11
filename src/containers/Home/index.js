import React from 'react'

import ImgHomeBurguer from '../../assets/ImgHomeBurguer.png'
import { CategoryCarousel, OffersCarousel } from '../../components'
import { Container, ContainerItens } from './style'

export function Home () {
  return (
    <Container>
      <img src={ImgHomeBurguer} />

      <ContainerItens>
        <OffersCarousel />
        <CategoryCarousel />
      </ContainerItens>
    </Container>
  )
}
