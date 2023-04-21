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
  }
`
