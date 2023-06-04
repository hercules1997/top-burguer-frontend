import BottomNavigation from '@mui/material/BottomNavigation'
import BottomNavigationAction from '@mui/material/BottomNavigationAction'
import styled from 'styled-components'

export const Container = styled.div`
  background: black;
  display: flex;
  font-size: 1.1rem;
  position: sticky;
  top: 0;
  z-index: 10;
  flex-direction: row;
  padding: 5px;
  /* align-items: center; */
  justify-content: space-between;

  @media screen and (max-width: 993px) {
    display: none;
    width: 100%;
  }
`

export const MenuDevice = styled.div`
  display: none;
  @media screen and (max-width: 993px) {
    display: flex;
    position: fixed;
    bottom: 6px;
    margin: 0;
    padding: 5px;
z-index: 1000;
    /* width: 100%; */
  }
`
export const BottomNavigationActionStyle = styled(BottomNavigationAction)`
  /* background: black !important;
  color: wheat; */
  width: 5px !important;
  .css-imwso6-MuiBottomNavigationAction-label.Mui-selected {
    color: white;
  }
  &:active {
    color: white !important;
  }

  &:active {
    color: white !important;
  }
`
export const BottomNavigationStyle = styled(BottomNavigation)`
  background: black !important;
  padding: 5px;
  margin: 0;
  border-radius: 50px;
  align-items: center;
  display: flex;
  justify-content: center;
  width: 100vw !important;
`
export const ContainerLeft = styled.div`
  display: flex;

  gap: 30px;
  margin-left: 3%;
`

export const PageLink = styled.button`
  display: flex;

  color: ${(props) => (props.isActive ? '#FA9600' : 'white')};
  background: transparent;
  cursor: pointer;
  text-decoration: none;

  border: none;
  font-weight: ${(props) => (props.isActive ? 'bold' : 'normal')};
  align-items: center;

  font-size: 1.2rem;

  flex-direction: row;

      @media screen and (max-width: 993px) {
    display: flex;
    z-index: 2000;

  }

  img {
    width: 40px;
    padding: 3px;
  }

  &:hover {
    font-weight: bold;
  }

  .notficationCart {
    color: black;
    width: 25px;
    background: #fa9600;
    border-radius: 50%;
    font-size: 1rem;
    padding: 2px;
    text-align: center;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    position: absolute;
    display: flex;
    margin-left: 27px;
    margin-bottom: 30px;

    @media screen and (max-width: 993px) {
    display: unset;
    z-index: 2000;

  }



  }
`
export const PageLinkAdmin = styled.button`
  display: flex;
  color: white;
  display: ${(props) => (props.isAdmin ? 'active' : 'none')};
  background: transparent;
  cursor: pointer;
  text-decoration: none;
  border: none;
  font-weight: ${(props) => (props.isActive ? 'bold' : 'normal')};
  align-items: center;

  font-size: 1.2rem;

  flex-direction: row;
`
export const PageLinkExit = styled.button`
  color: #fa9600;
  cursor: pointer;
  background: transparent;
  font-size: 1.2rem;
  border: none;
  &:hover {
    font-weight: 1000;
  }
`

export const ContainerRight = styled.div`
  display: flex;
  margin-right: 3%;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  .barra {
    border-right: 0.5px solid gray;
    height: 40px;
    box-shadow: 0px 0px 10px white;
    margin: 5px 30px;
  }
`
export const ContainerText = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
  align-items: flex-start;
  p {
    color: white;
    font-size: 1.3rem;
    @media screen and (max-width: 993px) {
      display: none;
    }
  }
`
