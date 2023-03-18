import PropTypes from 'prop-types'
import React from 'react'

import { Button } from '../../components'
import {
  Container,
  Image,
  ProductName,
  ProductPrice,
  ContainerCard
} from './style'
export function CardProduct ({ product }) {
  return (
    <Container>
      <Image src={product.url} alt="Imagem do produto" />
      <ContainerCard>
        <ProductName>{product.name}</ProductName>
        <ProductPrice>{product.formatedPrice}</ProductPrice>
        <Button style={{ padding: '10px', fontSize: '18px', marginTop: '0' }}>
          Adicionar +
        </Button>
      </ContainerCard>
    </Container>
  )
}

CardProduct.propTypes = {
  product: PropTypes.object
}
