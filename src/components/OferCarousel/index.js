import React, { useEffect, useRef, useState } from 'react'
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
    { width: 1300, itemsToShow: 4 }
  ]

  // MOVIMENTAÇÃO DO CARROUSEL
  const carouselRef = useRef(null)
  const items = 5
  const totalPages = Math.ceil(offers.length / items)
  let resetTimeout
  return (
    <Container>
      <h1>OFERTAS</h1>

      <Carousel
        ref={carouselRef}
        itemsToShow={items}
        breakPoints={brackPoints}
        enableAutoPlay
        autoPlaySpeed={3000}
        easing="cubic-bezier(1,.15,.55,1.54)"
        tiltEasing="cubic-bezier(0.110, 1, 1.000, 0.210)"
        transitionMs={300}
        onNextEnd={({ index }) => {
          clearTimeout(resetTimeout)
          if (index + 0 === totalPages) {
            resetTimeout = setTimeout(() => {
              carouselRef.current.goTo(0)
            }, 1500)
          }
        }}
      >
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
