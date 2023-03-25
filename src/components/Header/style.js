import styled from 'styled-components'

export const Container = styled.div`
  background: black;
  display: flex;

  height: 52px;
  align-items: center;
  justify-content: space-around;
`
export const ContainerLeft = styled.div`
  display: flex;
  gap: 30px;

  .pageLink {
    color: white;
    font-size: 1.5rem;
    cursor: pointer;
    text-decoration: none;
    justify-content: center;

    align-items: center;
    display: flex;
    flex-direction: row;

    img {
      width: 40px;
    }

    &:hover {
      font-weight: bold;
    }
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
  .pageLink {
    color: white;
    font-size: 1.5rem;
    cursor: pointer;
    text-decoration: none;
    justify-content: center;

    align-items: center;
    display: flex;
    flex-direction: row;

    img {
      width: 40px;
    }

    &:hover {
      font-weight: bold;
    }
  }

  .traco {
    border-right: 0.5px solid gray;
    height: 40px;
    box-shadow: 0px 0px 10px white;
    margin: 0px 30px;
    width: 0px;
    display: flex;
  }
`
export const ContainerText = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 30px;
  p {
    color: white;
    font-size: 1.4rem;
  }
`
