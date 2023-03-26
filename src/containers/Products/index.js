import React, { useEffect, useState } from 'react'

import ImgProductsBurguer from '../../assets/ImgProductsBurguer.png'
import { CardProduct, Header } from '../../components'
import apiTopBurger from '../../services/api'
import formatCurrency from '../../utils/formatCurrency'
import {
  Container,
  HomeImage,
  ContainerMenu,
  Menu,
  ContainerProducts
} from './style'

export function Products () {
  const [categories, setCategories] = useState([])
  const [products, setProducts] = useState([])
  const [filterProducts, setFilterProducts] = useState([])
  const [activeCategory, setActiveCategory] = useState(0)

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

  useEffect(() => {
    if (activeCategory === 0) {
      setFilterProducts(products)
    } else {
      const newFilterProductCategory = products.filter(
        (product) => product.category_id === activeCategory
      )
      setFilterProducts(newFilterProductCategory)
    }
  }, [activeCategory, products])

  return (
    <Container>
      <Header />
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
        {filterProducts &&
          filterProducts.map((product) => (
            <CardProduct key={product.id} product={product} />
          ))}
      </ContainerProducts>
    </Container>
  )
}
