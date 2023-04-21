import Box from '@mui/material/Box'
import Collapse from '@mui/material/Collapse'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Typography from '@mui/material/Typography'
import ReactSelect from 'react-select'
import styled from 'styled-components'
export const Container = styled.div`
  min-height: 100vh;

  justify-content: center;
  color: white;

  .css-11xur9t-MuiPaper-root-MuiTableContainer-root {
    border-radius: 6px;
    color: whitesmoke !important;
    box-shadow: 0 0px 10px #292929;
  }
`
export const ProductsImg = styled.img`
  height: 80px;
  border-radius: 6px;
`

export const Menu = styled.div`
  display: flex;
  width: 100%;
  gap: 40px;
  justify-content: center;
  align-items: center;
  justify-content: center;
  text-align: center;
  background-color: black;
  height: 60px;
  padding: 10px;
  border-top-right-radius: 18px;
  border-top-left-radius: 18px;
  box-shadow: 0 0px 4px #292929;
`

export const LinkMenu = styled.a`
  color: whitesmoke;
  cursor: pointer;
  text-decoration: none;
  align-items: center;
  font-size: 14px;
  font-weight: ${(props) => (props.isActiveStatus ? 'bold' : 'normal')};
  color: ${(props) => (props.isActiveStatus ? '#fa9600' : 'whitesmoke')};
  border-bottom: ${(props) =>
    props.isActiveStatus ? '#fa9600 solid 2px' : 'none'};
  padding-bottom: 5px;
`

export const ReactSelectStyle = styled(ReactSelect)`
  color: black;
  background: black !important;

  .css-10wo9uf-option {
    background: black !important;
    outline: none;

    color: white;
  }

  .css-13cymwt-control {
    background: black;
  }

  /* .react-select-container {
    background: green !important;
  }
  .react-select__value-container {
    background: green !important;
  }

  .react-select__menu {
    background: green !important;
  }
  .react-select__menu-list {
    background: green !important;
  }

  .react-select__control {
    background: green !important;
  }
  .react-select__option {
    background: green !important;
  }

  .react-select__indicators {
  } */
`
//* TAGS PARA ESTYLIZAÇÃO DA TAEBELA SIMPLES
export const TableRowStyle = styled(TableRow)`
  font-weight: bold;
  height: 50px;
  color: whitesmoke !important;
  background-color: black;
`
export const TableCellStyle = styled(TableCell)`
  color: whitesmoke !important;
  font-size: 1.2rem !important;
  background: gray !important;
`
export const TableHeadStyle = styled(TableHead)`
  width: 100% !important;
  color: whitesmoke !important;
  background: blue !important;
`
export const TableContainerStyle = styled(TableContainer)`
  background-color: black !important;
  color: whitesmoke !important;
  width: 100% !important;
  background: orange !important;
`
export const TableBodyStyle = styled(TableBody)`
  color: whitesmoke !important;
  width: 100% !important;
  background: pink !important;
`
export const TableStyle = styled(Table)`
  color: whitesmoke !important;
  width: 100% !important;
  background: green !important;
`
export const TypographyStyle = styled(Typography)`
  color: whitesmoke !important;
  background: red !important;
  width: 100% !important;
`
export const BoxStyle = styled(Box)`
  background: yellow !important;
`
export const CollapseStyle = styled(Collapse)`
  color: whitesmoke !important;
  width: 100% !important;
  background: green !important;
`
