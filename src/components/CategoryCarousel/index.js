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

  return (
    <Container>
      <Carousel itemsToShow={4} style={{ width: '90%' }}>
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
