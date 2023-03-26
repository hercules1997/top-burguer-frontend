import styled from 'styled-components'

export const Container = styled.div`
  background: black;
  display: flex;
  font-size: 1.1rem;
  height: 45px;
  padding: 25px;
  align-items: center;
  justify-content: space-between;
`
export const ContainerLeft = styled.div`
  display: flex;
  gap: 30px;
  margin-left: 3%;
  .pageLink {
  }
`

export const PageLink = styled.button`
  color: white;
  background: transparent;
  cursor: pointer;
  text-decoration: none;
  justify-content: center;
  border: none;

  align-items: center;
  display: flex;
  flex-direction: row;
  img {
    width: 40px;
    padding: 5px;
  }

  &:hover {
    font-weight: bold;
  }
`
export const PageLinkExit = styled.a`
  color: yellow;
  cursor: pointer;

  &:hover {
    font-weight: bold;
  }
`

export const ContainerRight = styled.div`
  display: flex;
  margin-right: 3%;

  padding: 20px;

  .barra {
    border-right: 0.5px solid gray;
    height: 40px;
    box-shadow: 0px 0px 10px white;
    margin: 5px 30px;
    width: 0px;
  }
`
export const ContainerText = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 30px;

  p {
    color: white;
    font-size: 1.3rem;
  }
`
