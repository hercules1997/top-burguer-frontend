import React, { useEffect, useState } from 'react'
import Carousel from 'react-elastic-carousel'
import { useHistory } from 'react-router-dom'

import { useCart } from '../../hooks/CartContext'
import apiTopBurger from '../../services/api'
import formatCurrency from '../../utils/formatCurrency'
import {
  Container,
  ContainerItens,
  ImgCategory,
  OfferName,
  OfferPrice,
  Button
} from './style'

export function OffersCarousel () {
  const [offers, setOffers] = useState([])
  const { putProductInCart } = useCart()
  const { push } = useHistory()

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
    { width: 600, itemsToShow: 2 },
    { width: 900, itemsToShow: 3 },
    { width: 1300, itemsToShow: 3 }
  ]

  return (
    <Container>
      <h1>OFERTAS</h1>

      <Carousel itemsToShow={5} breakPoints={brackPoints}>
        {offers &&
          offers.map((product) => (
            <ContainerItens key={product.id}>
              <ImgCategory src={product.url} alt="Fotos da categorias" />
              <OfferName>{product.name}</OfferName>
              <OfferPrice>{product.formatedPrice}</OfferPrice>
              <Button
                onClick={() => {
                  putProductInCart(product)
                  push('/carrinho')
                }}
              >
                Peça Agora!
              </Button>
            </ContainerItens>
          ))}
      </Carousel>
    </Container>
  )
}
