import React, { useEffect, useState } from 'react'
import Carousel from 'react-elastic-carousel'

import apiTopBurger from '../../services/api'
import formatCurrency from '../../utils/formatCurrency'
import {
  Container,
  ContainerItens,
  ImgCategory,
  Info,
  Info2,
  Button
} from './style'

function OfersCarousel () {
  const [offers, setOffers] = useState([])

  useEffect(() => {
    async function loadOffers () {
      const { data } = await apiTopBurger.get('products')

      const onlyOffers = data
        .filter((product) => product.offer)
        .map((product) => {
          return { ...product, formatedPrice: formatCurrency(product.price) }
        })

      setOffers(onlyOffers)
    }
    loadOffers()
  }, [])

  const brackPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 400, itemsToShow: 2 },
    { width: 600, itemsToShow: 3 },
    { width: 900, itemsToShow: 4 },
    { width: 1300, itemsToShow: 5 }
  ]

  return (
    <Container>
      <h1>OFERTAS</h1>

      <Carousel itemsToShow={5} breakPoints={brackPoints}>
        {offers &&
          offers.map((product) => (
            <ContainerItens key={product.id}>
              <ImgCategory src={product.url} alt="Fotos da categorias" />
              <Info>{product.name}</Info>
              <Info2>{product.formatedPrice}</Info2>
              <Button>Peça Agora!</Button>
            </ContainerItens>
          ))}
      </Carousel>
    </Container>
  )
}

export default OfersCarousel
