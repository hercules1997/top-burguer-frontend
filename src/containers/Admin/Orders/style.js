import ReactSelect from 'react-select'
import styled from 'styled-components'
export const Container = styled.div`
  min-height: 100vh;

  justify-content: center;
  color: black;

  .css-11xur9t-MuiPaper-root-MuiTableContainer-root {
    border-radius: 6px;
    box-shadow: 0 0px 10px 7px #292929;
  }
`
export const ProductsImg = styled.img`
  height: 80px;
  border-radius: 6px;
`

export const ReactSelectStyle = styled(ReactSelect)`
  width: 250px;

  outline: none;
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
  box-shadow: 0 0px 10px 7px #292929;
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
