import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import React, { useEffect, useState } from 'react'

import apiTopBurger from '../../../services/api'
import formatDate from '../../../utils/formatDate'
import status from './order-startus'
import Row from './row'
import { Container, Menu, LinkMenu } from './style'

function Orders () {
  const [orders, setOrders] = useState([])
  const [filteredOrders, setFilteredOrders] = useState([])
  const [activeStatus, setActiveStatus] = useState(0)
  const [rows, setRows] = useState([])

  useEffect(() => {
    async function loadOrders () {
      const { data } = await apiTopBurger.get('orders')

      setOrders(data)
      setFilteredOrders(data)
    }

    loadOrders()
  }, [])

  function createData (order) {
    return {
      name: order.user.name,
      orderId: order._id,
      date: formatDate(order.createdAt),
      status: order.status,
      products: order.products
    }
  }

  useEffect(() => {
    const newRows = filteredOrders.map((ord) => createData(ord))
    setRows(newRows)
  }, [filteredOrders])

  useEffect(() => {
    if (activeStatus === 0) {
      setFilteredOrders(orders)
    } else {
      const statusIndex = status.findIndex((sts) => sts.id === activeStatus)
      const newFilterOrders = orders.filter(
        (ord) => ord.status === status[statusIndex].value
      )
      setFilteredOrders(newFilterOrders)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [orders])

  function headleStatus (status) {
    if (status.id === 0) {
      setFilteredOrders(orders)
    } else {
      const newOrder = orders.filter((ord) => ord.status === status.value)
      setFilteredOrders(newOrder)
    }
    setActiveStatus(status.id)
  }

  return (
    <Container>
      <Menu>
        {status &&
          status.map((status) => (
            <LinkMenu
              key={status.id}
              onClick={() => headleStatus(status)}
              isActiveStatus={activeStatus === status.id}
            >
              {status.label}
            </LinkMenu>
          ))}
      </Menu>
      <TableContainer component={Paper}>
        <Table aria-label="collapsible table">
          <TableHead>
            <TableRow>
              <TableCell />
              <TableCell>Pedido</TableCell>
              <TableCell>Cliente</TableCell>
              <TableCell>Data do pedido</TableCell>
              <TableCell>Status do Pedido</TableCell>
            </TableRow>
          </TableHead>
          <TableBody className="tbory">
            {rows.map((row) => (
              <Row
                key={row.orderId}
                row={row}
                setOrders={setOrders}
                orders={orders}
              />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  )
}
export default Orders
