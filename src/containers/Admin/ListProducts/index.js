import CheckBoxIcon from '@mui/icons-material/CheckBox'
import DisabledByDefaultIcon from '@mui/icons-material/DisabledByDefault'
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import React, { useEffect, useState } from 'react'

import apiTopBurguer from '../../../services/api'
import formatCurrency from '../../../utils/formatCurrency'
import { Container, Img, ModeEditIconStyle } from './style'
function ListProducts () {
  const [products, setProducts] = useState()

  useEffect(() => {
    async function loadOrders () {
      const { data } = await apiTopBurguer.get('products')

      setProducts(data)
    }

    loadOrders()
  }, [])

  function isOffer (offerStatus) {
    if (offerStatus) {
      return <CheckBoxIcon className="checkYes" />
    }
    return <DisabledByDefaultIcon className="checkNo" />
  }

  return (
    <Container>
      <TableContainer component={Paper} className="table-container">
        <Table sx={{ minWidth: 600 }} size="small" aria-label="a dense table">
          <TableHead className="table-head">
            <TableRow>
              <TableCell
                style={{ width: '270px' }}
                className="table-row"
                align="center"
              >
                Produto
              </TableCell>
              <TableCell style={{ width: '120px' }} className="table-row">
                Preço
              </TableCell>
              <TableCell
                style={{ width: '170px' }}
                className="table-row"
                align="center"
              >
                Produtos em oferta
              </TableCell>
              <TableCell
                align="center"
                style={{ width: '200px' }}
                className="table-row"
              >
                Imagem do produto
              </TableCell>
              <TableCell
                style={{ width: '20px' }}
                align="center"
                className="table-row"
              >
                Editar
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products &&
              products.map((prod) => (
                <TableRow
                  key={prod.id}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="prod">
                    {prod.name}
                  </TableCell>
                  <TableCell>{formatCurrency(prod.price)}</TableCell>
                  <TableCell align="center">{isOffer(prod.offer)}</TableCell>
                  <TableCell align="center">
                    <Img src={prod.url} alt="Imagem produto" />
                  </TableCell>
                  <TableCell align="center">
                    <ModeEditIconStyle />
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  )
}
export default ListProducts
