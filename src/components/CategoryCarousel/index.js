import React, { useEffect, useRef, useState } from 'react'
import Carousel from 'react-elastic-carousel'

import apiTopBurger from '../../services/api'
import { Container, ContainerItens, ImgCategory, Button } from './style'

export function CategoryCarousel () {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    async function loadCategories () {
      const { data } = await apiTopBurger.get('categories')

      setCategories(data)
    }
    loadCategories()
  }, [])

  const brackPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 400, itemsToShow: 2 },
    { width: 600, itemsToShow: 2 },
    { width: 900, itemsToShow: 3 },
    { width: 1300, itemsToShow: 4 }
  ]
  const carouselRef = useRef(null)
  const items = 5
  const totalPages = Math.ceil(categories.length / items)
  let resetTimeout

  return (
    <Container>
      <h1>CARTEGORIAS</h1>

      <Carousel
        ref={carouselRef}
        itemsToShow={items}
        breakPoints={brackPoints}
        enableAutoPlay
        autoPlaySpeed={6000}
        easing="cubic-bezier(1,.15,.55,1.54)"
        tiltEasing="cubic-bezier(0.110, 1, 1.000, 0.210)"
        transitionMs={400}
        onNextEnd={({ index }) => {
          clearTimeout(resetTimeout)
          if (index + 0 === totalPages) {
            resetTimeout = setTimeout(() => {
              carouselRef.current.goTo(0)
            }, 700)
          }
        }}
      >
        {categories &&
          categories.map((category) => (
            <ContainerItens key={category.id}>
              <ImgCategory src={category.url} alt="Fotos da categorias" />
              <Button
                to={{
                  pathname: '/produtos',
                  state: { categoryId: category.id }
                }}
              >
                {category.name}
              </Button>
            </ContainerItens>
          ))}
      </Carousel>
    </Container>
  )
}
