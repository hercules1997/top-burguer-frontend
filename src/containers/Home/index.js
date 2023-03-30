import React from 'react'

import ImgHomeBurguer from '../../assets/ImgHomeBurguer.png'
import { CategoryCarousel, OffersCarousel } from '../../components'
import { Container, HomeImage, ContainerItens } from './style'

export function Home () {
  return (
    <Container>
      <HomeImage src={ImgHomeBurguer} />

      <ContainerItens>
        <OffersCarousel />
        <CategoryCarousel />
      </ContainerItens>
    </Container>
  )
}
