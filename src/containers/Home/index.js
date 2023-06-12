import React, { useEffect, useState } from 'react'

import ImgHomeBurguer from '../../assets/ImgHomeBurguer.png'
import { CategoryCarousel, OffersCarousel } from '../../components'
import { Container, ContainerItens, Loading } from './style'

export function Home () {
  const [isLoading, setIsLoading] = useState(true)

  // Simulando um atraso de 2 segundos para a demonstração
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 2000)
  }, [])

  return (
    <>
      {isLoading
        ? (
        <Loading>
          <span>Buscando produtos...</span>
        </Loading>
          )
        : (
        <></>
          )}
      <Container>
        <img src={ImgHomeBurguer} />

        <ContainerItens>
          <OffersCarousel />
          <CategoryCarousel />
        </ContainerItens>
      </Container>
    </>
  )
}
