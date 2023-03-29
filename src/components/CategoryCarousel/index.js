import React, { useEffect, useState } from 'react'
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

  return (
    <Container>
      <h1>CARTEGORIAS</h1>

      <Carousel itemsToShow={4} breakPoints={brackPoints}>
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
