import React from 'react'

import ImgHomeBurguer from '../../assets/ImgHomeBurguer.png'
import { CategoryCarousel, OffersCarousel, Header } from '../../components'
import { Container, HomeImage, ContainerItens } from './style'

export function Home () {
  return (
    <Container>
      <Header/>
      <HomeImage src={ImgHomeBurguer} />

      <ContainerItens>
        <OffersCarousel />
        <CategoryCarousel />
      </ContainerItens>
    </Container>
  )
}
