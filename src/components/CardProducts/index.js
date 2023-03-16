import PropTypes from 'prop-types'
import React from 'react'

import Buttom from '../Button'
import {
  Container,
  Image,
  ProductName,
  ProductPrice,
  ContainerCard
} from './style'
function CardProduct ({ product }) {
  return (
    <Container>
      <Image src={product.url} alt="Imagem do produto" />
      <ContainerCard>
        <ProductName>{product.name}</ProductName>
        <ProductPrice>{product.formatedPrice}</ProductPrice>
        <Buttom style={{ padding: '10px' }}>Adicionar</Buttom>
      </ContainerCard>
    </Container>
  )
}

export default CardProduct

CardProduct.propTypes = {
  product: PropTypes.object
}
