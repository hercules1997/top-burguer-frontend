import React from 'react'

import ImgHomeBurguer from '../../assets/ImgHomeBurguer.png'
import CotegoryCarousel from '../../components/CategoryCarousel'
import { Container, HomeImage, ContainerItens } from './style'

function Home () {
  return (
    <Container>
      <HomeImage src={ImgHomeBurguer} />

      <ContainerItens>
        <h1>CARTEGORIAS</h1>
        <CotegoryCarousel />
      </ContainerItens>
    </Container>
  )
}

export default Home
