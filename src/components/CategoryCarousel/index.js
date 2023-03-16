import React, { useEffect, useState } from 'react'
import Carousel from 'react-elastic-carousel'

import apiTopBurger from '../../services/api'
import { Container, ContainerItens, ImgCategory, Button } from './style'

function CategoryCarousel () {
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
    { width: 600, itemsToShow: 3 },
    { width: 900, itemsToShow: 4 },
    { width: 1300, itemsToShow: 5 }
  ]

  return (
    <Container>
      <h1>CARTEGORIAS</h1>

      <Carousel
        itemsToShow={5}
        breakPoints={brackPoints}
      >
        {categories &&
          categories.map((category) => (
            <ContainerItens key={category.id}>
              <ImgCategory src={category.url} alt="Fotos da categorias" />
              <Button>{category.name}</Button>
            </ContainerItens>
          ))}
      </Carousel>
    </Container>
  )
}

export default CategoryCarousel
