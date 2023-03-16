import React from 'react'

import ImgHomeBurguer from '../../assets/ImgHomeBurguer.png'
import CotegoryCarousel from '../../components/CategoryCarousel'
import OfersCarousel from '../../components/OferCarousel'
import { Container, HomeImage, ContainerItens } from './style'

function Home () {
  return (
    <Container>
      <HomeImage src={ImgHomeBurguer} />

      <ContainerItens>
        <CotegoryCarousel />
        <OfersCarousel />
      </ContainerItens>
    </Container>
  )
}

export default Home
