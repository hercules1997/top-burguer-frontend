import React, { useEffect, useState } from 'react'

import ImgProductsBurguer from '../../assets/ImgProductsBurguer.png'
import CardProduct from '../../components/CardProducts'
import apiTopBurger from '../../services/api'
import formatCurrency from '../../utils/formatCurrency'
import {
  Container,
  HomeImage,
  ContainerMenu,
  Menu,
  ContainerProducts
} from './style'

function Products () {
  const [categories, setCategories] = useState([])
  const [products, setProducts] = useState([])
  const [activeCategory, setActiveCategory] = useState([])

  useEffect(() => {
    async function loadCategories () {
      const { data } = await apiTopBurger.get('categories')

      const newCategory = [{ id: 0, name: 'Todos' }, ...data]

      setCategories(newCategory)
    }
    async function loadProducts () {
      const { data: allProducts } = await apiTopBurger.get('products')

      const newProducts = allProducts.map((product) => {
        return { ...product, formatedPrice: formatCurrency(product.price) }
      })
      setProducts(newProducts)
    }

    loadProducts()
    loadCategories()
  }, [])

  return (
    <Container>
      <HomeImage src={ImgProductsBurguer} />

      <ContainerMenu>
        {categories &&
          categories.map((category) => (
            <Menu
              type="button"
              key={category.id}
              isActiveCategory={activeCategory === category.id}
              onClick={() => {
                setActiveCategory(category.id)
              }}
            >
              {category.name}
            </Menu>
          ))}
      </ContainerMenu>
      <ContainerProducts>
        {products &&
          products.map((product) => (
            <CardProduct key={product.id} product={product} />
          ))}
      </ContainerProducts>
    </Container>
  )
}

export default Products
